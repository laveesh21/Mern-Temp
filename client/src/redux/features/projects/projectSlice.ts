import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { ProjectData } from '../../../types/Project.types'; // Assuming you have this type defined

// Async action to fetch project data
export const fetchProjects = createAsyncThunk<ProjectData[], void, { rejectValue: string }>(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
      const response = await axios.get(`${domain}/project/`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch project data');
    }
  }
);

// Define the initial state type
export interface ProjectState {
  projects: ProjectData[]; // All projects
  filteredProjects: ProjectData[]; // Filtered projects
  searchTerm: string;
  selectedCategory: string;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  filteredProjects: [],
  searchTerm: '',
  selectedCategory: '',
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    resetCategory: (state) => {
      state.selectedCategory = '';
    },
    filterProjects: (state) => {
      const { projects, searchTerm, selectedCategory } = state;

      state.filteredProjects = projects.filter((project) => {
        const matchSearch =
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );

        const matchCategory =
          !selectedCategory ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(selectedCategory.toLowerCase())
          );

        return matchSearch && matchCategory;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<ProjectData[]>) => {
        state.loading = false;
        state.projects = action.payload;
        state.filteredProjects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const {
  setSearchTerm,
  setSelectedCategory,
  resetCategory,
  filterProjects,
} = projectSlice.actions;

export const selectProjects = (state: RootState) => state.projects;

export default projectSlice.reducer;

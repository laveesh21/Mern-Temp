import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './features/projects/projectSlice';
import type { ProjectState } from './features/projects/projectSlice'; // Explicit import for clarity

export const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

// Export types for RootState and AppDispatch
export type RootState = {
  projects: ProjectState; // Use the explicitly imported ProjectState type
};
export type AppDispatch = typeof store.dispatch;

export default store;

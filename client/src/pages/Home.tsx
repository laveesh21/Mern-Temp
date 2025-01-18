import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/Project/ProjectCard";
import { useEffect } from "react";
import NotFound from "../components/NotFound";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import {
  fetchProjects,
  setSearchTerm,
  setSelectedCategory,
  resetCategory,
  filterProjects,
} from "../redux/features/projects/projectSlice";
import Loading from "../components/Loading";

function Home() {
  const dispatch = useAppDispatch();
  const {
    filteredProjects,
    loading,
    searchTerm,
    selectedCategory,
  } = useAppSelector((state) => state.projects);

  // Fetch projects on component mount
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // Trigger filtering when searchTerm or selectedCategory changes
  useEffect(() => {
    dispatch(filterProjects());
  }, [dispatch, searchTerm, selectedCategory]);

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term));
  };

  const handleCategorySelect = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  const handleCategoryReset = () => {
    dispatch(resetCategory());
  };

  return (
    <div className="flex h-auto min-h-screen">
      {/* Left Side: Search Bar */}
      <div className="w-1/4 pt-10">
        <div className="flex flex-col justify-center items-center">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          <div className="flex flex-col mt-10">
            <h2 className="my-6 font-semibold text-xl">Categories:</h2>
            <Categories
              onSelectCategory={handleCategorySelect}
              onResetCategory={handleCategoryReset}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>

      {/* Right Side: Project Cards */}
      <div className="w-3/4 pt-10 border-l border-l-gray-700 flex justify-center bg-zinc-950">
        {/* Conditional Rendering */}
        {loading ? (
          <Loading /> // Show Loading while data is being fetched
        ) : (
          <div className="flex w-11/12 flex-wrap justify-evenly items-center gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((data) => (
                <Link to={`/project/${data._id}`} key={data._id}>
                  <ProjectCard data={data} />
                </Link>
              ))
            ) : (
              <NotFound /> // Show NotFound if no projects are found
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

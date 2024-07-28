import SearchBar from "../components/SearchBar";
import { dataSet, ProjectData } from "./tempData";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import NotFound from "../components/NotFound";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";

function Home() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleCategoryReset = () => {
    setSelectedCategory("");
  };

  const filterdDataSet: ProjectData[] = dataSet.filter((project) => {
    const matchSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchCategory = project.tags.some((tag) => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
    return matchSearch && matchCategory
  })

  return (
    <div className="flex h-auto min-h-screen">
      {/* Left Side: Search Bar */}
      <div className="w-1/4 pt-10">
        <div className="flex flex-col justify-center items-center">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          <div className="flex flex-col mt-10">
            <h2 className="my-6 font-semibold text-xl">Categories:</h2>
            <Categories onSelectCategory={handleCategorySelect} onResetCategory={handleCategoryReset} selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>

      {/* Right Side: Project Cards */}
      <div className="w-3/4 pt-10 border-l border-l-gray-700 flex justify-center bg-zinc-950">
        <div className="flex w-11/12 flex-wrap justify-evenly items-center gap-8">

          {filterdDataSet.length != 0 ?
            filterdDataSet.map((data, index) => (
              <Link to={`/project/${data.id}`} key={index} >
                <ProjectCard data={data} />
              </Link>
            ))
            : <div className=""><NotFound /></div>}

        </div>
      </div>
    </div >
  );
}

export default Home;


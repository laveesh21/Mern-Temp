import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/Project//ProjectCard";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProjectData } from "../types/Project.types";
import Loading from "../components/Loading";



function Home() {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [projectData, setProjectData] = useState<any[]>([])
  const [loading, setLoading] = useState<Boolean>(false)
  const [filteredData, setFilteredData] = useState<ProjectData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${domain}/project/`)
        setProjectData(response.data)
        setLoading(false)
      } catch (error) {
        console.log("ERROR WHILE FETCHING PROJECT DATA")
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleCategoryReset = () => {
    setSelectedCategory("");
  };

  useEffect(() => {
    function filterFunction() {
      var filterdDataSet: ProjectData[] = projectData.filter((project) => {
        const matchSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        const matchCategory = project.tags.some((tag: string) => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
        return matchSearch && matchCategory
      })
      setFilteredData(filterdDataSet)
    }
    filterFunction()
  }, [projectData, searchTerm, selectedCategory])


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
        {/* Conditional Rendering */}
        {loading ? (
          <Loading />  // Show Loading while data is being fetched
        ) : (
          <div className="flex w-11/12 flex-wrap justify-evenly items-center gap-8">
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <Link to={`/project/${data._id}`} key={index}>
                  <ProjectCard data={data} />
                </Link>
              ))
            ) : (
              <NotFound />  // Show NotFound if no projects are found
            )}
          </div>
        )}
      </div>

    </div >
  );
}

export default Home;


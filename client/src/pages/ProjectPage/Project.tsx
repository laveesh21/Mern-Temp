import React, { useEffect, useState } from "react";
import ImageCarousel from "../../components/Project/ImageCarousel";
import { ProjectData } from "../../types/Project.types";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


const Project: React.FC = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
  const [project, setProject] = useState<ProjectData | null>(null);
  const { projectId } = useParams<{ projectId: string }>();
  const date = new Date(project?.createdAt)
  const formattedDate = date.toLocaleDateString();


  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`${domain}/project/${projectId}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [projectId]);


  if (!project) {
    return <div>Project not found</div>;
  }

  const rating = 70;
  return (
    <div className="mb-96 flex flex-col items-center justify-center bg-zinc-950">
      <div className="mt-16 w-auto h-auto">

        {/* PROJECT CONTAINER */}
        <div className="h-auto w-auto">
          <h1 className="p-2 w-full h-auto mb-2 text-3xl">{project.title}</h1>

          <div className="w-auto h-auto flex">


            {/* Left: Image Carousel */}
            <div className="w-176 h-auto">
              <ImageCarousel images={project.imageList}></ImageCarousel>
            </div>


            {/* Right: Project Details */}
            <div className="px-4 w-80 flex-grow bg-gray-900   ">
              <img
                src={project.thumbnail || project.imageList[0]}
                className="mb-4"
                alt={project.title}
              ></img>

              <p className="text-sm text-gray-200 mb-2">{project.about}</p>

              <div className="w-full h-auto py-2 text-sm text-gray-400 gap-1">
                <div className="flex gap-2">
                  <p>Title: </p>
                  <p className="">{project.title}</p>
                </div>
                <div className="flex gap-2 mb-1 ">
                  <p>Status: </p>
                  <p className="">{project.status}</p>
                </div>
                <div className="flex gap-2">
                  <p>Developer: </p>
                  <p className="">{project.developer.username}</p>
                </div>
                <div className="flex gap-2">
                  <p>Release Date: </p>
                  <p className="">{formattedDate}</p>
                </div>
              </div>

              {/* Rating Bar */}
              <div className="relative mt-4">
                <div className="flex gap-2">
                  <p>Rating:</p>
                  <p className="text-gray-400"> (5)</p>
                </div>
                <div className="relative w-10/12 bg-zinc-700 h-4 my-2">
                  <div
                    className="absolute bg-green-400 h-4 no-right-border"
                    style={{ width: `${rating}%` }}
                  ></div>
                  <span className="absolute right-0 top-0 transform translate-x-full px-2 text-sm text-white">{`${rating}%`}</span>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* MIDDLE BAR CONTAINER */}
        <div className="my-5 px-5 w-auto h-14 bg-gray-900 flex justify-end items-center gap-4">
          <p></p>
          <Link to={`/project/${projectId}/edit`}>
            <button className="hover:bg-green-600 hover:text-white bg-gray-600 border-gray-200 hover:border-none text-lg font-semibold h-2/3 px-4 rounded-sm text-gray-300">
              Edit Project
            </button>
          </Link>


          <button className="hover:bg-green-600 hover:text-white bg-gray-600 hover:border-none text-lg font-semibold h-2/3 px-4 rounded-sm text-gray-300">
            Follow
          </button>
          <button className="hover:bg-green-600 hover:text-white bg-gray-600 border-gray-200 hover:border-none text-lg font-semibold h-2/3 px-4 rounded-sm text-gray-300">
            Bookmark
          </button>

        </div>







        {/* PROJECT DETAILS CONTAINER */}
        <div className="w-full h-96 flex gap-2">

          {/* Project Desc Container */}
          <div className="w-176 flex flex-col gap-2">
            <h1 className="text-2xl bg-gray-900  font-semibold p-3">
              {project.title}
            </h1>
            <p className="p-3 bg-gray-900 ">{project.about}</p>
          </div>

          {/* Right Miscellaneous Bar */}
          <div className="flex-grow space-y-4 ">
            <div className="p-3 bg-gray-900 flex flex-col items-start">
              <h2 className="p-1">Tech Stack</h2>
              <div className="p-2 flex flex-wrap gap-3 max-w-80 items-center">
                {project.tags.map((tech, index) => (
                  <button
                    key={index}
                    className="border border-green-600 text-green-500 text-sm px-2 py-1"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>


            {/* External links for project avilability */}
            <div className="p-3 bg-gray-900 flex flex-col">
              <h2 className="p-1 ">Avilability</h2>

              <div className="p-2 flex flex-wrap gap-3 max-w-80 items-center">
                <a href="google.com" className="w-full">
                  <div className="w-full h-full text-center bg-green-600 font-semibold flex items-center justify-center text-white">
                    Source Code
                  </div>
                </a>
              </div>

              <div className="p-2 flex flex-wrap gap-3 max-w-80 items-center">
                <a href="google.com" className="w-full">
                  <div className="w-full h-full text-center bg-blue-600 font-semibold flex items-center justify-center text-white">
                    Go Live
                  </div>
                </a>
              </div>

              <div className="p-2 flex flex-wrap gap-3 max-w-80 items-center">
                <a href="google.com" className="w-full">
                  <div className="w-full h-full text-center bg-red-600 font-semibold flex items-center justify-center text-white">
                    Tutorial
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Project;

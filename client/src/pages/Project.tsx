import React from "react";
import { useParams } from "react-router-dom";
import { dataSet } from "./tempData";
import ImageCarousel from "../components/ImageCarousel";

const Project: React.FC = () => {
  const { id } = useParams();
  const project = dataSet.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const rating = 70;
  return (
    <div className="mb-96 flex flex-col items-center justify-center bg-zinc-950">
      <div className="mt-16 w-auto h-auto">
        {/* PROJECT CONTAINER */}
        <div className="h-auto w-auto">
          <h1 className="p-2 w-full h-auto mb-2 text-3xl">{project.name}</h1>
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
                alt={project.name}
              ></img>

              <p className="text-sm text-gray-200 mb-2">{project.about}</p>

              <div className="w-full h-auto py-2 text-sm text-gray-400 gap-1">
                <div className="flex gap-2">
                  <p>Title: </p>
                  <p className="">{project.name}</p>
                </div>
                <div className="flex mb-2 ">
                  <p>Status: </p>
                  <p className="">{project.status}</p>
                </div>
                <div className="flex gap-2">
                  <p>Developer: </p>
                  <p className="">{project.dev}</p>
                </div>
                <div className="flex gap-2">
                  <p>Release Date: </p>
                  <p className="">{project.releaseDate}</p>
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
              {project.name}
            </h1>
            <p className="p-3 bg-gray-900 ">{project.desc}</p>
          </div>

          {/* Right Miscellaneous Bar */}
          <div className="flex-grow space-y-4 ">
            <div className="p-3 bg-gray-900 flex flex-col items-start">
              <h2 className="p-1">Tech Stack</h2>
              <div className="p-2 flex flex-wrap gap-3 max-w-80 items-center">
                {project.techStack.map((tech, index) => (
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
    </div>
  );
};

export default Project;

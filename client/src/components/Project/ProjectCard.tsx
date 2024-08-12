import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ProjectData } from "../../types/Project.types";


interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
  const listRef = useRef<HTMLUListElement | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [developerName, setdeveloperName] = useState<string>("");

  useEffect(() => {
    async function fetchDev() {
      const response = await axios.get(`${domain}/profile/${data.developer}`)
      setdeveloperName(response.data.username)
    }
    fetchDev()
  }, [])

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 100; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 100; // Adjust scroll distance as needed
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev); // Toggle bookmark state
  };

  return (
    <div className="border border-gray-400 w-96 relative rounded-sm bg-zinc-950">
      {/* DEVELOPER */}
      <div className="p-2 px-4 flex justify-between items-center">
        <p className="font-extrabold text-gray-200">{developerName}</p>
        <div className="focus:outline-none" onClick={toggleBookmark}>
          {isBookmarked ? (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADLSURBVEhLY2SgMWCksfkMWC1QOZzg8I/pfzwDw38HYhzwn/H/g/+MzIkPLBc8QFeP1QKlo/HzgYYnEGM4TA3QkgP3rRY7EmlB3H9SDIepvWe9CMPBOHwwagEigEeDCCWxjaYignlvNIhoH0SgEpPxPxOwSMZe0lIUB0z/mBzv2C44APKG8tHYhP8MjPVApgKyt8iyAFc5r3A8QYHp33+gJQjfkGwBsqtxRQCyb4i2QPFY7H5stRMuS2C+uWe9MJGoGo1gciFBAc1bFQCNe4AZF5C7aAAAAABJRU5ErkJggg==" />
          ) : (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADYSURBVEhL7VXBDcIwDKw36ShlEzoJYhK6Cd0ENgl3lR0Fmsq4qA+kWIoSKc5dzk3P0h0ccjB+tyJIKQ0gvWBwjsSM5KuIcM5RI3hgt48gF7kzCE4eQWICEkPlg/LquZqCRvBWlVai/CLbK3J/7P8oEW55Uyk0tWcp6ycFOHwGmIEb7ogFzW0h2kWg1k1gc1ez4kFZskWHCXg7DAPiLUfz+g3iJffThTetoqgvgafaM9LSsTmZwhDBBGDW2Q39+FTQf6PgjsRV6/NYrNW6Hc0Diu6H2mIUnPkvuzu0GW7lQdcAAAAASUVORK5CYII=" />
          )}
        </div>
      </div>

      {/* IMAGE */}
      <img src={data.imageList[0]} alt="Project Logo" className="bg-zinc-500 w-full h-60" />

      {/* PROJECT DETAILS */}
      <div className="p-2">
        <p className="text-emerald-50">{data.title}</p> {/* NAME */}
        <div className="line-clamp-3">
          <p className="text-sm h-16 text-gray-400">{data.about}</p> {/* ABOUT */}
        </div>

        <div className="h-px mt-1 bg-gray-700" />

        {/* TAG LIST */}
        <div className="mt-2 relative flex items-center">
          <button
            className="absolute left-0 top-0 bottom-0 bg-gray-200 opacity-0 w-6"
            onClick={scrollLeft}
          ></button>
          <ul ref={listRef} className="flex gap-2 overflow-hidden">
            {data.tags.map((tag, index) => (
              <li key={index} className="text-xs px-1 text-green-600 border border-green-600">
                {tag}
              </li>
            ))}
          </ul>
          <button
            className="absolute right-0 top-0 bottom-0 bg-gray-200 opacity-0 w-6"
            onClick={scrollRight}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


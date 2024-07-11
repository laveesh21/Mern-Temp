import React, { useRef, useState } from "react";
import BookmarkHollow from "../assets/bx-bookmark.svg";
import BookmarkFill from "../assets/bxs-bookmark.svg";

const data = {
  name: "Project Management Website",
  dev: "SuperKnox",
  about:
    "Lorem ipsum dolor sit amet consectetur ad, atque ex!  dolor sit amet consectetur ad, atque  Ducimus.",
  image: "logo",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "Solid",
    "React",
    "Kotlin",
    "Next.js",
    "Solid",
    "React",
    "Kotlin",
  ],
  date: "23 Nov 2025",
  likes: "12",
  dislikes: "3",
};

function ProjectCard() {
  const listRef = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

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
    <>
      <div className="border border-gray-700 w-96 relative rounded-sm m-2">
        {/* DEVELOPER */}
        <div className="p-2 \ flex justify-between">
          <p className="font-bold text-sm text-blue-600 ">{data.dev}</p>
          <div className="focus:outline-none" onClick={toggleBookmark}>
            {isBookmarked ? (
              <img src={BookmarkFill} alt="" className="h-5 w-5 " />
            ) : (
              <img src={BookmarkHollow} alt="" className="h-5 w-5" />
            )}
          </div>
        </div>

        {/* IMAGE */}
        <img src="" alt="" className="bg-zinc-500 w-full h-60" />

        {/* PROJECT DETAILS */}
        <div className="p-2">
          <p className="text-emerald-50 mb-">{data.name}</p>
          <div className=" line-clamp-3">
            <p className="text-sm text-gray-400">{data.about}</p>
          </div>

          <div className="h-px mt-1 bg-gray-700" />

          {/* TAG LIST */}
          <div className="mt-2 relative flex items-center">
            <button className="absolute left-0 top-0 bottom-0 bg-gray-200 opacity-0 w-6" onClick={scrollLeft}></button>
            <ul ref={listRef} className="flex gap-2 overflow-hidden">
              {data.tags.map((tag, index) => (
                <li key={index} className="text-xs px-1 text-green-500 border border-green-500">{tag}</li>
              ))}
            </ul>
            <button className="absolute right-0 top-0 bottom-0 bg-gray-200 opacity-0 w-6" onClick={scrollRight}></button>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default ProjectCard;

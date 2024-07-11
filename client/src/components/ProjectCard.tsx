import React, { useRef } from 'react';

const data = {
  name: "Project Management Website",
  dev: "superapex",
  about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odio? Tenetur veniam eius neque itaque facilis natus sapiente cum facere temporibus nemo. Fugiat ab dolorum ea voluptatum magni. Dolores, atque ex! Ducimus.",
  image: "logo",
  tags: ['HTML', 'CSS', 'JavaScript', 'Next.js', "Solid", 'React', 'Kotlin', 'Next.js', "Solid", 'React', 'Kotlin'],
  date: "23 Nov 2025",
  likes: "12",
  dislikes: "3",
};

function ProjectCard() {
  const listRef = useRef(null);

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

  return (
    <div>
      <div className='border border-gray-700 w-96 h-96 relative'>
        <img src="" alt="" className='bg-red-50 w-full h-60'/>
        <div className='p-2'>
          <p className='text-emerald-50 mb-'>{data.name}</p>
          <div className='h-16 line-clamp-3'>
            <p className='text-sm text-gray-400'>{data.about}</p>
          </div>
          <div className='h-px bg-gray-700'/>
          <div className='mt-3 relative flex items-center'>
            <button className='absolute left-0 top-0 bottom-0 bg-gray-200 opacity-0 w-6' onClick={scrollLeft}></button>
            <ul ref={listRef} className='flex gap-2 overflow-hidden'>
              {data.tags.map((tag, index) => (
                <li key={index} className='text-xs px-1 text-green-500 border border-green-500 rounded-sm'>
                  {tag}
                </li>
              ))}
            </ul>
            <button className='absolute right-0 top-0 bottom-0 bg-gray-200 opacity-0 w-6' onClick={scrollRight}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

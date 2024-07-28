import React from 'react';
import { useParams } from 'react-router-dom';
import { dataSet } from './tempData';
import ImageCarousel from '../components/ImageCarousel';

const Project: React.FC = () => {
  const { id } = useParams();
  const project = dataSet.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-auto bg-gray-950 '>
      {/* MINI NAV BAR */}
      <div className='my-4 w-1/2 h-9 bg-gray-900'></div>

      {/* PROJECT CONTAINER */}
      <div className='h-auto w-1/2 flex flex-col'>
        <h1 className='p-2 w-full h-auto mb-2 text-3xl'>{project.name}</h1>
        <div className='w-176 h-auto '>
          <ImageCarousel images={project.imageList}></ImageCarousel>
        </div>
      </div>
    </div>
  );
}

export default Project;


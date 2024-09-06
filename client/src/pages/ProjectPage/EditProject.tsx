import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ProjectData } from '../../types/Project.types';
import { useNavigate, useParams } from 'react-router-dom';
import CloudinaryImageUpload from '../../components/CloudinaryImageUpload';

const EditProject: React.FC = () => {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<ProjectData>({} as ProjectData);
  const [imageList, setImageList] = useState<string[]>(project.imageList || []); // Store uploaded image URLs
  const [techInput, setTechInput] = useState<string>("")
  const [showUploader, setShowUploader] = useState(false); // To toggle uploader visibility
  const navigate = useNavigate();

  // TO GET PROJECT DETAILS
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${domain}/project/${projectId}`);
        setProject(response.data);
        setImageList(response.data.imageList || []); // Populate imageList
      } catch (error) {
        console.error('ERROR: ', error);
      }
    };
    fetchProject();
  }, [projectId]);

  // HANDLE CHANGE FUNCTION FOR INPUT 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProject((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const updatedProject = {
        ...project,
        imageList,
      };

      const response = await axios.patch(`${domain}/project/${projectId}`, updatedProject, {
        headers: { 'authorization': `Bearer ${token}` },
      });
      if (response) {
        navigate('/');
      } else {
        console.log('Project was not updated');
      }
    } catch (error) {
      console.error('ERROR WHILE UPDATING PROJECT');
    }
  };

  const handleImageUpload = (url: string) => {
    setImageList((prevImages) => [...prevImages, url]);
    setShowUploader(false); // Close uploader after successful upload
  };
  const handleImageDelete = (index: number) => {
    setImageList((prevImages) => prevImages.filter((_, i) => i !== index));
  };


  const handleTechInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechInput(e.target.value);
  };
  const handleAddTech = () => {
    if (techInput.trim() !== "") {
      setProject({
        ...project,
        tags: [...project.tags, techInput.trim()],
      });
      setTechInput("");
    }
  };
  const handleRemoveTech = (index: number) => {
    const updatedTechUsed = [...project.tags];
    updatedTechUsed.splice(index, 1);
    setProject({ ...project, tags: updatedTechUsed });
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     const form = e.currentTarget.form;
  //     if (form) {
  //       const elements = Array.from(form.elements) as HTMLInputElement[];
  //       const index = elements.indexOf(e.currentTarget);
  //       const nextElement = elements[index + 1] as HTMLInputElement;
  //       if (nextElement) {
  //         nextElement.focus();
  //       }
  //     }
  //   }
  // }

  return (
    <>
      <div className='w-full h-full flex justify-center items-center p-10'>
        <form onSubmit={handleSubmit} className='w-11/12 lg:w-6/12'>

          <label htmlFor='title' className='text-gray-300 block mb-1 uppercase text-sm'>Title</label>
          <input
            className='bg-zinc-800 mb-8 p-2 px-4 w-full'
            type='text'
            id='title'
            name='title'
            value={project.title || ''}
            onChange={handleChange}
            required
          />

          <label htmlFor='about' className=' text-gray-300 mb-1 uppercase text-sm'>About</label>
          <textarea
            className='border border-white mb-8 p-2 px-4 w-full border-none bg-zinc-800'
            name='about'
            value={project.about || ''}
            onChange={handleChange}
            required
          />

          <label htmlFor='status' className='text-gray-300 mb-1 uppercase text-sm'>Status</label>
          <select
            id='status'
            name='status'
            className='mb-8 block bg-transparent border bg-zinc-800 px-4 py-2 w-full border-none'
            value={project.status || 'In-Development'}
            onChange={handleChange}
          >
            <option value='In-Development' className='text-green-600'>In-Development</option>
            <option value='Active' className='text-blue-500'>Active</option>
            <option value='Deprecated' className='text-red-500'>Deprecated</option>
          </select>


          <label htmlFor='status' className='text-gray-300 mb-1 uppercase text-sm'>Images</label>
          <div className='grid grid-cols-3 gap-4 w-full mb-8 bg-zinc-800 p-4'>
            {imageList.map((image, index) => (
              <div key={index} className='relative'>
                <img src={image} alt={`Uploaded ${index}`} className='w-full h-40 object-cover' />
                <button
                  onClick={() => handleImageDelete(index)}
                  className='absolute top-0 right-0 bg-red-500 text-white p-2'
                >
                  x
                </button>
              </div>
            ))}
            {showUploader ? (
              <CloudinaryImageUpload setImageUrl={handleImageUpload} imageUrl={null} />
            ) : (
              <div
                className='w-full h-40 bg-transparent text-white flex justify-center items-center cursor-pointer border-dashed border-2'
                onClick={() => setShowUploader(true)}
              >
                + Add Image
              </div>
            )}
          </div>


          <label htmlFor='githublink' className='text-gray-300 mb-1 uppercase text-sm  '>GITHUB LINK</label>
          <input
            className='bg-zinc-800 mb-8 p-2 px-4 w-full'
            type='url'
            id='githublink'
            name='githubLink'
            value={project.githubLink || ''}
            onChange={handleChange}
          />

          <label htmlFor='liveLink' className='text-gray-300 mb-1 uppercase text-sm'>LIVE WEBSITE LINK</label>
          <input
            className='bg-zinc-800 mb-8 p-2 px-4 w-full'
            type='url'
            id='livelink'
            name='liveWebsiteLink'
            value={project.liveWebsiteLink || ''}
            onChange={handleChange}
          />
          <label htmlFor='tutoriallink' className='text-gray-300 mb-1 uppercase text-sm'>TUTORIAL LINK</label>
          <input
            className='bg-zinc-800 mb-8 p-2 px-4 w-full'
            type='url'
            id='tutoriallink'
            name='youtubeTutorialLink'
            value={project.youtubeTutorialLink || ''}
            onChange={handleChange}
          />


          <div className="tags-container flex flex-wrap gap-2 mb-4">
            {(project.tags || []).map((tech, index) => (
              <div key={index} className="bg-transparent border border-green-600 rounded-sm px-2 flex items-center">
                {tech}
                <button type="button" onClick={() => handleRemoveTech(index)} className="ml-2 text-green-500">×</button>
              </div>
            ))}
            <input
              className="inputClassProject w-full mb-2 p-3 rounded-lg"
              type="text"
              id="technologiesUsed"
              name="technologiesUsed"
              onChange={handleTechInputChange}
              onBlur={handleAddTech}
              // onKeyDown={handleKeyDown}
              placeholder="Add technologies..."
            />
          </div>

          <button type='submit' className='bg-green-600 px-4 py-1 text-lg font-semibold my-10'>Update</button>
        </form>
      </div>
    </>
  );
};

export default EditProject;

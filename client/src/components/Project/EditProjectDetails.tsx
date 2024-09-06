import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ProjectData } from "../../types/Project.types";

const EditProjectDetails: React.FC = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<ProjectData>({} as ProjectData);
  const [techInput, setTechInput] = useState<string>("")
  const navigate = useNavigate();

  // TO GET PROJECT DETAILS
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${domain}/project/${projectId}`);
        setProject(response.data);
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



  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        const elements = Array.from(form.elements) as HTMLInputElement[];
        const index = elements.indexOf(e.currentTarget);
        const nextElement = elements[index + 1] as HTMLInputElement;
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  }



  return (
    <>
      <div className=' h-full flex flex-col justify-center items-center px-5 w-11/12'>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white">Project Info</h2>
          <p className="text-gray-300">
            Add your project basic details. Provide additional information you project like title, a brief description for users to get a basic idea of project,
            you can add links for sourcecode, live working link or even some kind of tutorial link to help other to understand the working.
          </p>

        </div>


        <form onSubmit={handleSubmit} className=''>

          <h2 className="text-sm text-white">BASIC INFO</h2>
          <div className="bg-gray-600 w-full h-[1px] mb-6" />

          <label htmlFor='title' className='text-gray-300 block uppercase text-xs'>Title</label>
          <input
            className='bg-zinc-800 mb-4 p-2 px-4 w-full'
            type='text'
            id='title'
            name='title'
            value={project.title || ''}
            onChange={handleChange}
            required
          />

          <label htmlFor='about' className=' text-gray-300 mb-1 uppercase text-xs'>About</label>
          <textarea
            className='border border-white mb-4 p-2 px-4 w-full border-none bg-zinc-800'
            name='about'
            value={project.about || ''}
            onChange={handleChange}
            required
          />

          <label htmlFor='status' className='text-gray-300 mb-1 uppercase text-xs'>Status</label>
          <select
            id='status'
            name='status'
            className='mb-4 block bg-transparent border bg-zinc-800 px-4 py-2 w-full border-none'
            value={project.status || 'In-Development'}
            onChange={handleChange}
          >
            <option value='In-Development' className='text-green-600'>In-Development</option>
            <option value='Active' className='text-blue-500'>Active</option>
            <option value='Deprecated' className='text-red-500'>Deprecated</option>
          </select>


          <h2 className="text-sm text-white mt-12">TECHONOLOGY TAGS</h2>
          <div className="bg-gray-600 w-full h-[1px] mb-4" />

          <label htmlFor='tags' className='text-gray-300 mb-1 uppercase text-xs'>TECH STACK</label>
          <div className="tags-container flex flex-wrap gap-2 mb-4">
            {(project.tags || []).map((tech, index) => (
              <div key={index} className="bg-transparent border border-green-600 px-2 flex items-center">
                {tech}
                <button type="button" onClick={() => handleRemoveTech(index)} className="ml-2 text-green-500">×</button>
              </div>
            ))}
            <input
              className="w-full mb-2 p-3 bg-zinc-800"
              type="text"
              id="technologiesUsed"
              name="technologiesUsed"
              onChange={handleTechInputChange}
              onBlur={handleAddTech}
              onKeyDown={handleKeyDown}
              placeholder="Add technologies..."
            />
          </div>





          <h2 className="text-sm text-white mt-12">EXTERNAL LINKS</h2>
          <div className="bg-gray-600 w-full h-[1px] mb-4" />

          <label htmlFor='githublink' className='text-gray-300 mb-1 uppercase text-xs '>GITHUB LINK</label>
          <input
            className='bg-zinc-800 mb-4 p-2 px-4 w-full'
            type='url'
            id='githublink'
            name='githubLink'
            value={project.githubLink || ''}
            onChange={handleChange}
          />

          <label htmlFor='liveLink' className='text-gray-300 mb-1 uppercase text-xs'>LIVE WEBSITE LINK</label>
          <input
            className='bg-zinc-800 mb-4 p-2 px-4 w-full'
            type='url'
            id='livelink'
            name='liveWebsiteLink'
            value={project.liveWebsiteLink || ''}
            onChange={handleChange}
          />
          <label htmlFor='tutoriallink' className='text-gray-300 mb-1 uppercase text-xs'>TUTORIAL LINK</label>
          <input
            className='bg-zinc-800 mb-4 p-2 px-4 w-full'
            type='url'
            id='tutoriallink'
            name='youtubeTutorialLink'
            value={project.youtubeTutorialLink || ''}
            onChange={handleChange}
          />






          <button type='submit' className='bg-blue-600 px-4 py-1 text-lg font-semibold my-10'>Save Changes</button>
        </form>
      </div>

    </>
  )
}

export default EditProjectDetails

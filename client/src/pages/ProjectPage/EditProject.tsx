import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProjectData } from '../../types/Project.types'
import { useParams } from "react-router-dom";

const EditProject: React.FC = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN
  const { projectId } = useParams<{ projectId: string }>()
  const [project, setProject] = useState<ProjectData>({} as ProjectData)

  // TO GET PROJECT DETAILS
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${domain}/project/${projectId}`)
        setProject(response.data)
      } catch (error) {
        console.error("ERROR: ", error)
      }
    }
    fetchProject()
  }, [projectId])


  // HANDLE CHANGE FUNTION FOR INPUT 
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setProject((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }



  const handleSubmit = () => {

  }

  const handleKeyDown = () => {

  }




  return (
    <>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title" className="block text-white mb-2">Title</label>
        <input
          className="border border-white mb-4 p-3 w-full rounded-lg"
          type="text"
          id="title"
          name="title"
          value={project.title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required
        />

        <label htmlFor="about" className="block text-white mb-2">About</label>
        <textarea
          className="border border-white mb-4 p-3 w-full rounded-lg"
          name="about"
          value={project.about}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required
        />

        <button type='submit' onClick={handleSubmit} className=''>Update</button>

      </form>
    </>
  )
}

export default EditProject

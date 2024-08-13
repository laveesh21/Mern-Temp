import axios from 'axios'
import React, { useEffect } from 'react'

const EditProject: React.FC = () => {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN
  const projectId = '123'
  const updatedProject: any = 'data updated'

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.patch(`${domain}/project/${projectId}`, updatedProject, { headers: { 'Authorization': `Bearer ${token}` } })
  }, [])

  return (
    <div>EditProject</div>
  )
}

export default EditProject

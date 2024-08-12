import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import SearchBar from '../SearchBar';
import { ProjectData } from '../../types/Project.types';

interface DecodedToken {
  _id: string;
  username: string;
  email: string;
}

const UserProject: React.FC = () => {
  const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
  const [userProjects, setUserProjects] = useState<ProjectData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return console.log("User Not Authentication: Token not found");

    const decodedToken: DecodedToken = jwtDecode(token);
    const userId = decodedToken._id;

    const getUserProjects = async () => {
      try {
        const response = await axios.get(`${domain}/profile/projects/${userId}`);
        setUserProjects(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getUserProjects();
  }, [domain]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Filter projects based on search term
  const filteredProjects = userProjects.filter(project =>
    (project.title ?? '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex'>
      <div className='h-auto bg-zinc-900 p-10 flex gap-6 justify-center flex-wrap w-3/5'>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        {filteredProjects.length > 0 ? (
          filteredProjects.map((userProject) => (
            <div key={userProject._id}>
              <ProjectCard data={userProject} />
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
      {/* <div className='flex-1 h-96 bg-zinc-800 w-2/5 h-screen'> */}
      {/* </div> */}
    </div>
  );
};

export default UserProject;


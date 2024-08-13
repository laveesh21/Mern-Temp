import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { User } from "../../types/User.types";

import ProfileCard from "../../components/Profile/ProfileCard";
import UserProject from "../../components/Project/UserProject";
import axios from 'axios'


const Profile: React.FC = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
  const [activeLink, setActiveLink] = useState<string>("/profile");
  const [user, setUser] = useState<User>({} as User)

  const location = useLocation();

  React.useEffect(() => {
    setActiveLink(location.pathname);
    const token = localStorage.getItem("token");
    if (token) {
      axios.get(`${domain}/profile/user`, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => setUser(response.data))
        .catch(error => console.error("ERROR AXIOS: ", error))
    }
  }, [location]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="w-[960px] bg-gray-900 flex justify-center mt-5">
        <div className=" text-white text-2xl"></div>
        <Link
          to={`/profile/${user._id}`}
          className={`p-2 px-4 ${activeLink === `/profile/${user._id}` ? 'bg-gray-600' : 'bg-gray-800'} `}
          onClick={() => setActiveLink("/profile")}
        >
          Profile
        </Link>
        <Link
          to={`/profile/${user._id}/projects`}
          className={`block p-2 px-4 ${activeLink === `/profile/${user._id}/projects` ? 'bg-gray-600' : 'bg-gray-800'} `}
          onClick={() => setActiveLink("/profile/projects")}
        >
          Projects
        </Link>

      </div>

      <div className="w-[960px] h-auto mb-20">
        <Routes>
          <Route path={`/:id`} element={<ProfileCard userData={user} />} />
          <Route path={`/:id/projects`} element={<UserProject />} />
        </Routes>
      </div>
    </div>



  );
};

export default Profile;


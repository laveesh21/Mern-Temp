import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import UserProject from "../components/UserProject";

const Profile: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("/profile");

  const location = useLocation();

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="w-1/2 bg-zinc-900 flex justify-center mt-5">
        <Link
          to="/profile"
          className={`block p-2 px-4 ${activeLink === "/profile" ? 'bg-zinc-600' : 'bg-zinc-800'}`}
          onClick={() => setActiveLink("/profile")}
        >
          Profile
        </Link>
        <Link
          to="/profile/projects"
          className={`block p-2 px-4 ${activeLink === "/profile/projects" ? 'bg-zinc-600' : 'bg-zinc-800'}`}
          onClick={() => setActiveLink("/profile/projects")}
        >
          Projects
        </Link>
      </div>

      <div className="w-1/2 h-96">
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/projects" element={<UserProject />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;


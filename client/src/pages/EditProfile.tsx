import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { User } from "../types/User.types";
import EditGeneral from "../components/EditGeneral";
import axios from "axios";

const EditProfile: React.FC = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
  const [activeLink, setActiveLink] = useState<string>("");
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
    <div className="w-full flex justify-center items-start gap-4 ">


      {/* NAV LINKS FOR EDITING PROFILE */}
      <div className="w-56 bg-gray-900 flex flex-col justify-center">
        <Link
          to={`/profile/${user._id}/edit/general`}
          className={`p-2 px-4 ${activeLink.includes(`/profile/${user._id}/edit/general`) ? 'bg-gray-600' : 'bg-gray-800'}`}
          onClick={() => setActiveLink(`/profile/${user._id}/edit`)}
        >General</Link>

        <Link
          to={`/profile/${user._id}/edit/avatar`}
          className={`p-2 px-4 ${activeLink.includes(`/profile/${user._id}/edit/avatar`) ? 'bg-gray-600' : 'bg-gray-800'}`}
          onClick={() => setActiveLink(`/profile/${user._id}/edit/avatar`)}
        >
          Avatar
        </Link>

        <Link
          to={`/profile/${user._id}/edit/security`}
          className={`p-2 px-4 ${activeLink.includes(`/profile/${user._id}/edit/security`) ? 'bg-gray-600' : 'bg-gray-800'}`}
          onClick={() => setActiveLink(`/profile/${user._id}/edit/security`)}
        >
          Security
        </Link>
      </div>



      <div className="w-1/2 h-96 border">
        <Routes>
          <Route path="/general" element={<EditGeneral />} />
          {/* <Route path="avatar" element={<Avatar />} /> */}
          {/* <Route path="security" element={<Security />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default EditProfile;


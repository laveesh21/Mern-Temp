import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApexLogo from '../../assets/ApexDevsLogo.png'
import axios from 'axios';
import { User } from '../../types/User.types';

const Navbar: React.FC = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN as string;
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get(`${domain}/profile/user`, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => setUser(response.data))
        .catch(error => console.error("ERROR AXIOS: ", error))
    }
  }, []);

  return (
    <div className="w-full h-12 bg-zinc-950 flex justify-between items-center p-4 border-b border-gray-700">

      <Link to="/" className="flex items-center" id="logo">
        <img src={ApexLogo} alt="Logo" className="h-6 w-6 mr-2" />
        <div className="text-2xl text-white font-bold">APEX</div>
        <div className="text-2xl text-green-500 font-bold">DEVS</div>
      </Link>

      <ul className="flex gap-6 text-white">
        <li className="hover:text-green-500 transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-green-500 transition duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-green-500 transition duration-300">
          <Link to="/project/upload">Upload</Link>
        </li>

      </ul>

      <div className="flex gap-3" id="profile">
        <Link to={`/profile/${user._id}`}>
          <div className="text-white hover:text-green-500 transition duration-300">
            Profile
          </div>
        </Link>
        <Link to="/auth/log_in">
          <div className="text-white hover:text-green-500 transition duration-300">
            Login
          </div>
        </Link>
      </div>
      {/* <div className=''> */}
      {/**/}
      {/* </div> */}
    </div >
  );
}

export default Navbar;

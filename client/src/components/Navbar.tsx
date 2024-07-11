import { Link } from 'react-router-dom';
import ApexLogo from '../assets/ApexDevsLogo.png'

function Navbar() {
  return (
    <div className="w-full h-12 bg-zinc-950 flex justify-between items-center p-4 border-b border-gray-700">
      
      <div className="flex items-center space-x-2" id="logo">
        <img src={ApexLogo} alt="Logo" className="h-6 w-6"/>
        <div className="text-2xl text-white font-bold">APEX</div>
        <div className="text-2xl text-green-500 font-bold">DEVS</div>
      </div>
      <div className="" id="navbar">
        <ul className="flex gap-6 text-white">
          <li className="hover:text-green-500 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-500 transition duration-300">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="" id="profile">
        <Link to="/profile">
          <div className="text-white hover:text-green-500 transition duration-300">
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import ApexLogo from '../assets/ApexDevsLogo.png';

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-center bg-zinc-950">
        
        {/* LOGO */}
        <div className="flex justify-center items-center mt-12 w-3/5 h-1/2">
            <img src={ApexLogo} className="h-[8rem] lg:h-[14rem] md:h-[10rem]" alt="Apex Logo" />
          <div className="flex ml-8 md:ml-12 lg:ml-16">
            <div className="text-6xl md:text-7xl lg:text-8xl text-white">APEX</div>
            <div className="text-6xl md:text-7xl lg:text-8xl text-green-500">DEVS</div>
          </div>
        </div>

        {/* SLOGAN */}
        <div className="text-gray-400 text-lg text-center my-4 w-2/5">
          For Developers By Developers
        </div>

        {/* LINE BREAK */}
        <div className="h-px bg-gray-400 w-3/5 my-5"></div>

        {/* ABOUT */}
        <div className="text-gray-400 text-lg text-center my-4 w-3/5 md:w-2/5 lg:w-2/5">
          ApexDevs is a community that makes it easy for developers to reach out to other developers. They can get help from each other by understanding their projects in an easy way by looking at images and with compact descriptions. Developers can test out projects from their repositories, review them, and provide suggestions.
        </div>

        {/* LINE BREAK */}
        <div className="h-px bg-gray-400 w-3/5 my-5"></div>

      </div>
    </div>
  );
}

export default About;

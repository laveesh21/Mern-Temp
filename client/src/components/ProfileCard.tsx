import React from 'react';
import TempImage from '../assets/what.jpeg'; // Update with actual path

const ProfileCard: React.FC = () => {
  return (
    <div className=" flex items-start justify-between gap-8 p-6 px-10 bg-zinc-900 text-white rounded-lg shadow-lg auto">
      {/* Leftmost section with image */}
      <div className="flex-shrink-0 w-60 h-60 bg-gray-800  overflow-hidden">
        <img src={TempImage} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Middle section with name, username, and bio */}
      <div className="flex-1 mx-6">
        <div className="text-2xl font-semibold">Name Here</div>
        <div className="text-gray-400">@username</div>
        <div className="mt-4 text-gray-300">
          <p>
            Brief bio about the developer goes here. This can include information about their skills,
            experience, and interests.
          </p>
        </div>
      </div>

      {/* Rightmost section with popularity and edit button */}
      <div className="flex flex-col items-start gap-4">
        <div className="bg-transparent py-2 flex gap-3">
          <span className="text-xl font-bold ">Popularity</span>
          <div className="text-xl font-bold text-orange-500">1203</div>
        </div>
        <button className="px-4 py-1 bg-gray-700 text-white text-lg font-semibold rounded-sm hover:bg-green-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;


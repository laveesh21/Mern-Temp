import React from 'react';
import NotFoundImage from '../assets/what.jpeg'; // Adjust the path as needed

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-950 text-white text-center p-4">
      {/* Image */}
      <img
        src={NotFoundImage}
        alt="Not Found"
        className="w-1/2 max-w-md mb-4"
      />

      {/* Message */}
      <p className="text-xl font-semibold">
        No projects match the keyword. Please try a different search.
      </p>
    </div>
  );
};

export default NotFound;


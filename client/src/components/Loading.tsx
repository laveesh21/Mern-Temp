import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-901 bg-opacity-50 z-50">
      <p className='mr-4'>LOADING</p>

      <div className="w-96 h-2 bg-gray-600 rounded">
        <div className="h-full bg-red-500 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;


import axios from 'axios';
import React, { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

interface CloudinaryImageProps {
  setImageUrl: (url: string) => void;
}

const CloudinaryImageUpload: React.FC<CloudinaryImageProps> = (props) => {

  const cloudinaryUploadLink = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'waplgf2w'); // Replace with your Cloudinary upload preset

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(cloudinaryUploadLink, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        props.setImageUrl(response.data.secure_url);
      } else {
        throw new Error('Upload failed.');
      }
    } catch (error) {
      setError('Failed to upload image. Please try again.');
      console.error("ERROR while uploading image: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <label htmlFor="file-upload" className="bg-transparent min-h-72 w-full text-white border-2 border-dashed cursor-pointer">
        {loading ? 'Uploading...' : 'Choose File'}
      </label>
      <input
        id="file-upload"
        type="file"
        className='hidden'
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            uploadImage(e.target.files[0]);
          }
        }}
      />

      {loading && (
        <div className='flex items-center justify-center mt-4'>
          <ColorRing
            visible={true}
            height="50"
            width="50"
            ariaLabel="color-ring-loading"
            colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
          />
        </div>
      )}

      {error && <div className='text-red-500 text-center mt-2'>{error}</div>}
    </div>
  );
}

export default CloudinaryImageUpload;

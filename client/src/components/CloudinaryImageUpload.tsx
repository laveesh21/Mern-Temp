import axios from 'axios';
import React, { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

interface CloudinaryImageProps {
  setImageUrl: (url: string) => void;
  imageUrl: string | null;
}

const CloudinaryImageUpload: React.FC<CloudinaryImageProps> = (props) => {

  const cloudinaryUploadLink = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL; // Ensure this environment variable is correctly set
  const cloudinaryDeleteLink = import.meta.env.VITE_CLOUDINARY_DELETE_URL; // Ensure this environment variable is correctly set

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async (file: File) => {
    console.log("Logging", cloudinaryUploadLink)
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

  const deleteImage = async () => {
    if (!props.imageUrl) return;
    console.log("DELETE FIRED")
    const publicId = props.imageUrl.split('/').pop()?.split('.')[0];

    if (!publicId) {
      setError('Invalid image URL.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      console.log("delte axios")
      const response = await axios.post(cloudinaryDeleteLink, {
        public_id: publicId,
        api_key: import.meta.env.VITE_CLOUDINARY_API_KEY, // Ensure this environment variable is correctly set
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.result === 'ok') {
        props.setImageUrl(''); // Set to null if no image URL
        console.log("DELETED")
      } else {
        setError('Failed to delete image.');
      }
    } catch (error) {
      setError('Failed to delete image. Please try again.');
      console.error("ERROR while deleting image: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col'>
      <input
        type="file"
        className='bg-green-600'
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            uploadImage(e.target.files[0]);
          }
        }}
      />

      {
        props.imageUrl ? (
          <div className='relative w-[200px] border flex'>
            <img className='border' src={props.imageUrl} alt="Uploaded image" height="120px" width="200px" />
            <button
              className='absolute top-0 right-0 bg-red-500 text-white px-2 py-px font-bold'
              onClick={deleteImage}
            >
              x
            </button>
            {loading && (
              <div className='absolute h-full w-full flex items-center justify-center z-10'>
                <ColorRing
                  visible={true}
                  height="79"
                  width="79"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
                />
              </div>
            )}
          </div>
        ) : (
          <div className='bg-zinc-900 p-4 h-32 text-center'>Upload Image Here</div>
        )
      }
      {error && <div className='text-red-500 text-center'>{error}</div>}
    </div>
  );
}

export default CloudinaryImageUpload;

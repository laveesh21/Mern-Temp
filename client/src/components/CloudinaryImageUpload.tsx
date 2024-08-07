import React, { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

interface CloudinaryImageProps {
  setImageUrl: (url: string) => void;
  imageUrl: string | null;
}



const CloudinaryImageUpload: React.FC<CloudinaryImageProps> = (props) => {
  const cloudinaryLink = "https://api.cloudinary.com/v1_1/djkjt3zgy/image/upload";
  const cloudinaryDeleteLink = "https://api.cloudinary.com/v1_1/djkjt3zgy/image/destroy";


  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'waplgf2w');

    try {
      const response = await fetch(cloudinaryLink, {
        method: 'POST',
        body: formData,
      });

      setLoading(true);
      setError(null);


      if (!response.ok) throw new Error('Network response was not ok.');


      const data = await response.json();
      props.setImageUrl(data.secure_url);
    } catch (error) {
      setError('Failed to upload image. Please try again.');
      console.log("ERROR while uploading image: " + error)
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async () => {
    if (!props.imageUrl) return;

    const publicId = props.imageUrl.split('/').pop()?.split('.')[0];

    if (!publicId) {
      setError('Invalid image URL.');
      return;
    }

    console.log("Public ID: " + publicId)

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(cloudinaryDeleteLink, {
        method: 'POST',
        body: JSON.stringify({
          public_id: publicId,
          api_key: '595112789444384', // Replace with your Cloudinary API key
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      const data = await response.json();
      if (data.result === 'ok') {
        props.setImageUrl("");
      } else {
        setError('Failed to delete image.');
      }
    } catch (error) {
      setError('Failed to delete image. Please try again.');
      console.log("ERROR while deleting image: " + error);
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
              className='absolute top-0 border font-sm right-0 bg-red-500 text-white px-2 py-px font-bold'
              onClick={deleteImage}
            >x</button>
            {loading && < div className='absolute h-[110px] w-[200px] flex items-center justify-center '> <ColorRing
              visible={true}
              height="79"
              width="79"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
            /></div>
            }

          </div>

        ) : (
          <div className='bg-zinc-900 p-4 h-32 text-center'>Upload Image Here</div>
        )
      }
      {error && <div className='text-red-500 text-center sm'>{error}</div>}

    </div >
  );
}

export default CloudinaryImageUpload;


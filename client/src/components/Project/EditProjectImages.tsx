
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ProjectData } from "../../types/Project.types";
import axios from "axios";
import CloudinaryImageUpload from "../CloudinaryImageUpload";

const EditProjectImages: React.FC = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<ProjectData>({} as ProjectData);
  const [imageList, setImageList] = useState<string[]>(project.imageList || []);
  const [thumbnail, setThumbnail] = useState<string>("")
  const [showUploader, setShowUploader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${domain}/project/${projectId}`);
        setProject(response.data);
        setImageList(response.data.imageList || []);
        console.log("FETCHED URL:", response.data.thumbnail)
        setThumbnail(response.data.thumbnail || "");
      } catch (error) {
        console.error('ERROR: ', error);
      }
    };
    fetchProject();
  }, [projectId]);

  useEffect(() => {
  }, [thumbnail]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("thumb: ", thumbnail)
      const token = localStorage.getItem('token');
      const updatedProject = {
        ...project,
        imageList,
        thumbnail,
      };

      const response = await axios.patch(`${domain}/project/${projectId}`, updatedProject, {
        headers: { 'authorization': `Bearer ${token}` },
      });
      if (response) {
        navigate('/');
      } else {
        console.log('Project was not updated');
      }
    } catch (error) {
      console.error('ERROR WHILE UPDATING PROJECT');
    }
  };


  const handleImageThumbnail = (url: string) => {
    setThumbnail(url);
    setShowUploader(false);
    console.log("new thumbnail url: ", url);
  }

  const handleImageUpload = (url: string) => {
    setImageList((prevImages) => [...prevImages, url]);
    setShowUploader(false);
  };

  const handleImageDelete = (index: number) => {
    setImageList((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>

      <div className='w-full h-full flex flex-col justify-center items-start m-8'>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white">Images</h2>
          <p className="text-gray-300">
            Add images to make your project visually appealing and give insight of the project. You can show the output of working poject images. Images can help user to get visual representation of the project's output
          </p>
        </div>


        <form onSubmit={handleSubmit} className=''>

          <label htmlFor='status' className='text-gray-300 mb-1 uppercase text-sm'>THUMBNAIL</label>
          <div className="w-full mb-12 flex items-center">
            <div className="flex-[2] h-72 bg-cover">
              {thumbnail ? (
                <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
              ) : (
                <p className="text-gray-300">No Thumbnail Available</p>
              )}
            </div>
            <div className="flex-[1] h-72">
              <CloudinaryImageUpload setImageUrl={handleImageThumbnail} imageUrl={null} />
            </div>
          </div>

          <label htmlFor='status' className='text-gray-300 mb-1 uppercase text-sm'>Images</label>
          <div className='grid grid-cols-3 gap-4 w-full mb-8 bg-zinc-800 p-4'>
            {imageList.map((image, index) => (
              <div key={index} className='relative'>
                <img src={image} alt={`Uploaded ${index}`} className='w-full h-40 object-cover' />
                <button
                  onClick={() => handleImageDelete(index)}
                  className='absolute top-0 right-0 bg-red-500 text-white p-2'
                >
                  x
                </button>
              </div>
            ))}
            {showUploader ? (
              <CloudinaryImageUpload setImageUrl={handleImageUpload} imageUrl={null} />
            ) : (
              <div
                className='w-full h-40 bg-transparent text-white flex justify-center items-center cursor-pointer border-dashed border-2'
                onClick={() => setShowUploader(true)}
              >
                + Add Image
              </div>
            )}
          </div>



          <button type='submit' className='bg-green-600 px-4 py-1 text-lg font-semibold my-10'>Update</button>
        </form>
      </div>

    </>
  )
}

export default EditProjectImages

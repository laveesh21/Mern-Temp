import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'
import CloudinaryImageUpload from "../../components/CloudinaryImageUpload";


interface Project {
  title: string;
  about: string;
  developer: string;
  imageList: string[];
  tags: string[];
}
interface DecodedToken {
  _id: string;
}

const ProjectUpload: React.FC = () => {

  const domain = import.meta.env.VITE_REACT_APP_DOMAIN;
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState<string>("");
  const [wordLength, setWordLength] = useState<number>(0);
  const [techInput, setTechInput] = useState<string>("");
  const [project, setProject] = useState<Project>({
    title: "",
    about: "",
    developer: "",
    imageList: [],
    tags: [],
  });


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        setProject((prevProject) => ({
          ...prevProject,
          developer: decodedToken._id, // Add user ID to project
        }));
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "about") {
      const wordList = value.trim().split(/\s+/).filter(word => word !== "");
      setWordLength(wordList.length);
    }
    setProject({ ...project, [name]: value });
  };



  const handleImageUrlChange = (url: string) => {
    setImageUrl(url);
    setProject((prevProject) => ({
      ...prevProject,
      imageList: [url, ...prevProject.imageList], // Add the new URL at the beginning
    }));
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const header = token ? { authorization: `Bearer ${token}` } : {};
    try {
      const response = await axios.post(`${domain}/project/upload`, project, { headers: header });
      console.log("Project added successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error while adding project:", error);
    }
  };



  // Tech Stack Tags
  const handleTechInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechInput(e.target.value);
  };
  const handleAddTech = () => {
    if (techInput.trim() !== "") {
      setProject({
        ...project,
        tags: [...project.tags, techInput.trim()],
      });
      setTechInput("");
    }
  };
  const handleRemoveTech = (index: number) => {
    const updatedTechUsed = [...project.tags];
    updatedTechUsed.splice(index, 1);
    setProject({ ...project, tags: updatedTechUsed });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        const elements = Array.from(form.elements) as HTMLInputElement[];
        const index = elements.indexOf(e.currentTarget);
        const nextElement = elements[index + 1] as HTMLInputElement;
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  }



  return (
    <div className="flex justify-center items-center h-screen bg-zinc-950" >
      < div className="rounded-lg bg-zinc-800 w-1/2 min-w-[500px] p-10" >
        <h1 className="text-2xl font-extrabold text-white text-center">Upload</h1>
        <form onSubmit={handleSubmit}>


          <label htmlFor="title" className="block text-white mb-2">Title</label>
          <input
            className="mb-4 p-3 w-full rounded-lg"
            type="text"
            id="title"
            name="title"
            value={project.title}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />


          <label htmlFor="about" className=" text-white mb-2 flex justify-between gap-4 items-end">
            <p>About</p>
            <div className="flex items-end gap-2">
              <p className={`text-xs ${wordLength < 25 || wordLength > 40 ? 'text-red-600' : 'text-green-600'}`}>{wordLength} / 40</p>
              <p className="text-xs text-gray-400">*25-40 words are required.</p>
            </div>
          </label>
          <textarea
            id="about"
            name="about"
            placeholder="Brief description ..."
            rows={4}
            value={project.about}
            onChange={handleChange}
            required
            className="mb-4 p-3 w-full rounded-lg"
          ></textarea>


          <label htmlFor="imageLink" className="text-white mb-2 flex justify-between items-end"><span className="">Project Images</span><span className="text-xs text-gray-400">*atleast 1 image is required</span></label>
          <CloudinaryImageUpload
            imageUrl={imageUrl}
            setImageUrl={handleImageUrlChange}
          />
          {/* <input */}
          {/*   className="mb-4 p-3 w-full rounded-lg" */}
          {/*   type="text" */}
          {/*   id="imageLink" */}
          {/*   name="imagelink" */}
          {/*   value={project.imagelink} */}
          {/*   onChange={(e) => handleImageUrlChange(e.target.value)} */}
          {/* /> */}

          <label htmlFor="technologiesUsed" className="block text-white mt-4 mb-2">Technologies Used</label>
          <div className="tags-container flex flex-wrap gap-2 mb-4">
            {project.tags.map((tech, index) => (
              <div key={index} className="bg-transparent border border-green-600 rounded-sm px-2 flex items-center">
                {tech}
                <button type="button" onClick={() => handleRemoveTech(index)} className="ml-2 text-green-500">×</button>
              </div>
            ))}
            <input
              className="inputClassProject w-full mb-2 p-3 rounded-lg"
              type="text"
              id="technologiesUsed"
              name="technologiesUsed"
              value={techInput}
              onChange={handleTechInputChange}
              onBlur={handleAddTech}
              onKeyDown={handleKeyDown}
              placeholder="Add technologies..."
            />
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 font-bold text-xl rounded-lg hover:border-none">Submit</button>
        </form>
      </div >
    </div >
  );
};

export default ProjectUpload;


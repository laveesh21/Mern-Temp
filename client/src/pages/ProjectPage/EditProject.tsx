import React, { useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import EditProjectDetails from '../../components/Project/EditProjectDetails';
import EditProjectImages from '../../components/Project/EditProjectImages';

const EditProject: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeLink, setActiveLink] = useState<string>(`/project/${projectId}/edit/details`)




  return (
    <>

      <div className="w-full flex justify-center items-start gap-4 pt-20 h-full ">


        {/* NAV LINKS FOR EDITING PROFILE */}
        <div className="w-56 flex flex-col justify-center">
          <Link
            to={`/project/${projectId}/edit/details`}
            className={`p-2 px-4 ${activeLink.includes(`/project/${projectId}/edit/details`) ? 'bg-gray-700' : 'bg-zinc-950'}`}
            onClick={() => setActiveLink(`/project/${projectId}/edit/details`)}
          >Details</Link>

          <Link
            to={`/project/${projectId}/edit/images`}
            className={`p-2 px-4 ${activeLink.includes(`/project/${projectId}/edit/images`) ? 'bg-gray-700' : 'bg-zinc-950'}`}
            onClick={() => setActiveLink(`/project/${projectId}/edit/images`)}
          >
            Images
          </Link>

          <Link
            to={`/project/${projectId}/edit/about`}
            className={`p-2 px-4 ${activeLink.includes(`/project/${projectId}/edit/about`) ? 'bg-gray-700' : 'bg-zinc-950'}`}
            onClick={() => setActiveLink(`/project/${projectId}/edit/about`)}
          >
            About
          </Link>
        </div>



        <div className=" w-1/2">
          <Routes >
            <Route path="/details" element={<EditProjectDetails />} />
            <Route path="/images" element={<EditProjectImages />} />
          </Routes>
        </div>
      </div>

    </>
  );
};

export default EditProject;

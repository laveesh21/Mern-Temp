import React from "react"
import { Link } from "react-router-dom"
import ProfileCard from "../components/ProfileCard"
import UserProject from "../components/UserProject"
import { Route, Routes } from "react-router-dom"

const Profile: React.FC = () => {
  return (
    <div className="p-16  flex justify-center w-full">
      <div className="w-1/2 h-96 border">
        <Routes>
          <Route path="profileCard" element={<ProfileCard />} />
          <Route path="projects" element={<UserProject />} />
        </Routes>

      </div>
      <div className="w-1/6 h-96 border">
        <Link to="user" className="block p-2 mb-2">Profile</Link>
        <Link to="projects" className="block p-2 mb-2">Projects</Link>
      </div>
    </div>
  )
}

export default Profile

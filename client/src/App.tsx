import './App.css'
import Navbar from './components/Layout/Navbar';
import About from './pages/About';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/ProfilePage/Profile';
import Project from './pages/ProjectPage/Project';
import ProjectUpload from './pages/ProjectPage/ProjectUpload';
import Footer from './components/Layout/Footer';
import LogIn from './pages/Auth/Login';
import SignUp from './pages/Auth/Signup';
import EditProfile from './pages/ProfilePage/EditProfile';
import EditProject from './pages/ProjectPage/EditProject';


function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/profile/:id/edit/*" element={<EditProfile />} />
            <Route path="/project/:projectId" element={<Project />} />
            <Route path="/auth/log_in" element={<LogIn />} />
            <Route path="/auth/sign_up" element={<SignUp />} />
            <Route path="/project/upload" element={<ProjectUpload />} />
            <Route path="/project/:projectId/edit" element={<EditProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

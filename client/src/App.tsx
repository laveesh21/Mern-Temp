import './App.css'   
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Project from './pages/Project';
import ProjectUpload from './pages/ProjectUpload';
import Footer from './components/Footer';
import LogIn from './pages/Login';
import SignUp from './pages/Signup';


function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/auth/log_in" element={<LogIn />} />
            <Route path="/auth/sign_up" element={<SignUp />} />
            <Route path="/project/upload" element={<ProjectUpload />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

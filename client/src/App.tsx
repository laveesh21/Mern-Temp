import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Project from './pages/Project';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />om
        <Route path='about' element={<About />} />
        <Route path='profile' element={<Profile />} />
        <Route path='/project/:id' element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App

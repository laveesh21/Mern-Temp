import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>om
        <Route path='about' element={<About/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App

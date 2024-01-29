import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './components/Home/HomePage'
import NavBar from './components/NavBar/NavBar'
import ApexProfile from './components/ApexProfile/ApexProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Route path="/" exact component={HomePage}/>
        <Route path="/profile" exact component={ApexProfile}/>
      </BrowserRouter>
    </div>
  )
}

export default App

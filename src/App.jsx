import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Questionnaire from './pages/Questionnaire'
import Salaries from './pages/Salaries'
import Careers from './pages/Careers'
import Events from './pages/Events'
import Profile from './pages/Profile'
import Career from './pages/Career'

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/questionnaire' element={<Questionnaire />} />
                <Route path='/salaries' element={<Salaries />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/events' element={<Events />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/careers/:careerId' element={<Career />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App

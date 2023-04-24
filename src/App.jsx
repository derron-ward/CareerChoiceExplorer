import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import FooterMain from './components/footerMain'

import Home from './pages/Home'
import Questionnaire from './pages/Questionnaire'
import Salaries from './pages/Salaries'
import Industries from './pages/Industries'
import Events from './pages/Events'
import Profile from './pages/Profile'

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/questionnaire' element={<Questionnaire />} />
                    <Route path='/salaries' element={<Salaries />} />
                    <Route path='/industries' element={<Industries />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
                <FooterMain />
            </Router>
        </div>
    )
}

export default App

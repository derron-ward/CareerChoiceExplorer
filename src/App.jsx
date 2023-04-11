import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Questionnaire from './pages/Questionnaire'
import Salaries from './pages/Salaries'
import Industries from './pages/Industries'
import Events from './pages/Events'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/questionnaire' element={<Questionnaire />} />
                <Route path='/salaries' element={<Salaries />} />
                <Route path='/industries' element={<Industries />} />
                <Route path='/events' element={<Events />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App

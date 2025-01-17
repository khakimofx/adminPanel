// src/App.jsx
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainSection from './components/MainSection'
import AboutSection from './components/AboutSection'
import DataSection from './components/DataSection'
import SkillsSection from './components/SkillsSection'
import NewsSection from './components/NewsSection'
import Ourteam from './components/OurTeam'
import ContactSection from './components/ContactSection'

import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <Router>
      <div className='flex h-[100vh]'>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px'}}>
          <Routes>
            <Route path='/' element={<MainSection />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/data' element={<DataSection />} />
            <Route path='/skills' element={<SkillsSection />} />
            <Route path='/news' element={<NewsSection />} />
            <Route path='/team' element={<Ourteam />} />
            <Route path='/contact' element={<ContactSection />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

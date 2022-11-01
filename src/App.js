import React from 'react'
import DarckMode from './components/DarckMode/DarckMode.jsx'
import PersonajesApi from './components/PersonajesApi/PersonajesApi.jsx'
import './App.css'
import { ThemeContextProvier } from './components/context/ThemeContext.jsx'

const App = () => {
  return (
    <ThemeContextProvier>
    <div>
      <DarckMode/>
      <PersonajesApi/>
    </div>
    </ThemeContextProvier>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { useThemeContext } from '../context/ThemeContext'

const PersonajesApi = () => {
  const { contextTheme, setContextTheme } = useThemeContext()
  const [personajes, setPersonajes] = useState([])

  const fetchPersonaje = async () => {
    let response = await fetch('https://rickandmortyapi.com/api/character')

    let data = await response.json()
    console.log(contextTheme)
    setPersonajes(data.results)
  }
  useEffect(() => {
    fetchPersonaje()
  }, [])
  return (
    <div id={contextTheme}>
      {personajes.map((personaje) => (
        <div key={personaje.id}>
          <h1>{personaje.name}</h1>
          <img src={personaje.image} />
        </div>
      ))}
    </div>
  )
}

export default PersonajesApi

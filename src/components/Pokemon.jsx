import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [poke,setPoke]=useState({})
    const fetchingPoke = async () => {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/1')

        let data = await response.json()
        console.log(poke)
        setPoke(data)
        console.log(poke)
    }

    useEffect(()=>{
        fetchingPoke()
    }, [])

  return (
    <div>
        <h1>{poke.name}</h1>
        <img src={poke.sprites.front_shiny}/>
    </div>
  )
}

export default Pokemon
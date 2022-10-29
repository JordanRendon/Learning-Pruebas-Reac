import React, { useState } from 'react'

const FormularioEstado = () => {
  const [estrato, setEstrato] = useState('')
  const [nombre, setNombre] = useState('')


  const showAlert = (e) =>{
    e.preventDefault()
    alert(`${nombre} y su estrato es: ${estrato}`)
  }

  return (
    <div>
      <form onSubmit={showAlert}>
        <label>Estrato:</label>
        <select value={estrato} onChange={(e)=> setEstrato(e.target.value)}>
          <option value='uno'>1</option>
          <option value='dos'>2</option>
          <option value='tres'>3</option>
        </select>
        <input type='text' placeholder='Ingrese un nombre' onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
        <input type='submit' value='Enviar'/>      
      </form>
    </div>
  )
}

export default FormularioEstado

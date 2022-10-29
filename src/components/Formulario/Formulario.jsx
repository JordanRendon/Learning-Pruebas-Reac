import React, { useState } from 'react'

const Formulario = () => {
    const [descripcion, setDescripcion] = useState('')

    const showAlert = (e) =>{
        e.preventDefaul()
        alert(descripcion)
    }
  return (
    <div>
      {descripcion === '' ? null : <h1>{descripcion}</h1>}
      <from onSubmit={showAlert}>
        <textarea value={descripcion}
        onChange={(e)=>setDescripcion(e.target.value)}
        ></textarea>
        <input type='submit'/>
      </from>
    </div>
  )
}

export default Formulario

import React, { useState } from 'react'

const FormularioSelect = () => {
  const [estrato, setEstrato] = useState('')

  const showAlert = (e) =>{
    e.preventDefault()
    alert(estrato)
  }

  return (
    <div>
      {estrato === '' ? null : <h1>Estrato: {estrato}</h1>}
      <form onSubmit={showAlert}>
        <label>Estrato:</label>
        <select value={estrato} onChange={(e)=> setEstrato(e.target.value)}>
          <option value='uno'>1</option>
          <option value='dos'>2</option>
          <option value='tres'>3</option>
        </select>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default FormularioSelect

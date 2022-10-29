import React,{useState} from 'react'

const Contador = () => {
    const [numero, setNumero]= useState(0)
  return (
    <div>
      <h1>
        {
          numero
        }
      </h1>
      <button onClick={()=>setNumero(numero+1)}>Aumentar</button>
    </div>
  )
}

export default Contador

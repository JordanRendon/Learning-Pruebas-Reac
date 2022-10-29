import React,{useState} from 'react'

const EjemploConStates = () => {
    const [edad, setEdad] = useState(26)
    const [fruta, setFruta]= useState('Mazana')
    const [tareas, setTareas]= useState([{
        id:1,tarea1:'Aprender React Js'
    },])
  return (
    <div>
        <h3>{edad}</h3>
        <h3>{fruta}</h3>
        <div key={tareas[0].id}>
            <h3>{tareas[0].tarea1}</h3>
        </div>
        <button onClick={()=>setFruta('Fresa')}>Quiero una fresa</button>
    </div>
  )
}

export default EjemploConStates
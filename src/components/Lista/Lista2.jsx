import React from 'react'
import Tarea from '../Tarea/Tarea'

const Lista2 = () => {
  const tareas = ['aprender html', 'aprender css', 'aprender hacer el arroz','aprender a besar']
  return (
  <div>
    {
        tareas.map((tarea,index)=>(
            <Tarea tarea={tarea}/>
        ))
    }
  </div>
  )
}

export default Lista2

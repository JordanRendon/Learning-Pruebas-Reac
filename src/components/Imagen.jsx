import React from 'react'

const Imagen = ({usuario:{name,age,avatar}}) => {
  return (
    <div>
      <h1>
        {
           name
        }
      </h1>
      <samp>
        {
          age
        }
      </samp>
      <img src={avatar} alt='imagen'/>
    </div>
  )
}

export default Imagen

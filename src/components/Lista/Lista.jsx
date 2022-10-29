import React from 'react'

const Lista = () => {
    const nombres = ['yinier','wiston','jordan','isa','sofi']
  return (
    <div>
        <ul>
            {
                nombres.mas((nombre, index)=>(
                    <li key={index}>
                        {nombre}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Lista
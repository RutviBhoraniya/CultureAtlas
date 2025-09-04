import React from 'react'

const Festivals = ({data}) => {
 
  return (
    <div className='Festivals'>
        <h1>Festivals and Traditions</h1>
        {data.map((line)=>{
            return <div>
                <p className='festival-Iteam'>{line.title}:</p>
                <p>{line.description}</p>
            </div>
        })}
    </div>
  )
}

export default Festivals
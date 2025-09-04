import React from 'react'

const Lifestyle = ({data}) => {

  return (
    <div className='Lifestyle'>
        <h1>Lifestyle and Living</h1>
        {data.map((line)=>{
            return <div>
                <p className='festival-Iteam'>{line.title}:</p>
                <p>{line.description}</p>
            </div>
        })}
    </div>
  )
}

export default Lifestyle
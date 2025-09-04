import React from 'react'

const Greetings = ({data}) => {
   
  return (
    <div className='Greetings'>
        <h1>Greetings and Communication</h1>
        <ul>
            {data.map((line)=>{
                return <li style={{"lineHeight": "35px"}}>{line}</li>
            })}
        </ul>
    </div>
  )
}

export default Greetings
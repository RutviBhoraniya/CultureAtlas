import React from 'react'

const DailyLife = ({data}) => {
    
  return (
    <div className='DailyLife'>
        <h1>DailyLife and Social Etiquette</h1>
        <ul>
            {data.map((line)=>{
                return <li style={{"lineHeight": "35px"}}>{line}</li>
            })} 
        </ul>
    </div>
  )
}

export default DailyLife
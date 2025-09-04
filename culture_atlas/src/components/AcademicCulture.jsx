import React from 'react'

const AcademicCulture = ({data}) => {
    
  return (
    <div className='AcademicCulture'>
        <h1>Academic Culture</h1>
        <ul>
            {data.map((line)=>{
                return <li style={{"lineHeight": "35px"}}>{line}</li>
            })} 
        </ul>
    </div>
  )
}

export default AcademicCulture
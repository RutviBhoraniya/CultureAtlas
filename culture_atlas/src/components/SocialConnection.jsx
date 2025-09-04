import React from 'react'

const SocialConnection = ({data}) => {

  return (
    <div className='SocialConnection'>
        <h1>Social Connections</h1>
         <ul>
            {data.map((line)=>{
                return <li style={{"lineHeight": "35px"}}>{line}</li>
            })} 
        </ul>
    </div>
  )
}

export default SocialConnection
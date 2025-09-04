import React from 'react'
import '../assets/css/AboutContry.css'

const AboutContry = ({country,about}) => {
   
    return (
    <div className='AboutContry'>
        <h1>About {country}</h1>
        <p className='description'>{about.description}</p>
        <div>
            <p className='about-item'>Languages:</p>
            <p>{about.Languages}</p>
        </div>
        <div>
            <p className='about-item'>Population:</p>
            <p>{about.Population}</p>
        </div>
        <div>
            <p className='about-item'>Climate:</p>
            <p>{about.Climate}</p>
        </div>
        <div>
            <p className='about-item'>Government:</p>
            <p>{about.Government}</p>
        </div>
        <div>
            <p className='about-item'>Currency:</p>
            <p>{about.Currency}</p>
        </div>
        <div>
            <p className='about-item'>Famous For:</p>
            <p>{about.Famous}</p>
        </div>
    </div>
  )
}

export default AboutContry
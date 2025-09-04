import React from 'react'
import Header from '../components/Header'

const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <Header/>
        <div className='about'>
          <div className='vision'>
              <div className='vision-text'>
                <p className='title'>Our Vision</p>
                <p className='description'>
                  Our vision is to create a world where cultural differences are not just tolerated but celebrated. 
                  We strive to be a trusted resource where users can learn, engage, and be inspired by the stories of people from every corner of the globe.
                </p>
              </div>
              <div className='vision-image'>
                <img className='vision-img' src='/images/vision.png' alt="Vision"/>
              </div>
          </div>
          <div className='mission'>
              <div className='mission-image'>
                <img className='vision-img' src='/images/mission.png' alt="Vision"/>
              </div>
              <div className='mission-text'>
                <p className='title'>Our Mission</p>
                <p className='description'>
                  At Culture Atlas, our mission is to connect people through the power of culture.
                  We aim to build a global platform that celebrates the richness and diversity of human traditions, languages, art, beliefs, and ways of life. By making cultural knowledge accessible to all, we hope to inspire curiosity, promote mutual respect, and encourage meaningful dialogue across borders.
                  Through education, storytelling, and shared experiences, Culture Atlas empowers individuals to see the world through different lenses - fostering understanding, appreciation, and unity in diversity.
                  We believe that when people learn about each other's cultures, they not only gain knowledge - they gain empathy.
                </p>
              </div>
          </div>
          <div className='whoweare'>
              <div className='whoweare-text'>
                <p className='title'>Who We Are?</p>
                <p className='description'>
                  We are a team of enthusiastic undergraduate students with a shared vision: to bridge cultural gaps through technology. As part of our major project, we developed Culture Atlas — an interactive web platform that introduces users to the diverse cultures of the world.
                  Our goal is to provide a user-friendly space where people can explore global traditions, greetings, meals, festivals, languages, and daily customs in an engaging and informative way.
                  With backgrounds in full-stack development and a strong interest in social impact, we combined our technical skills and creativity to build this platform using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                  Culture Atlas is more than a project — it’s our step toward fostering cultural awareness, mutual respect, and global understanding.
                </p>
              </div>
              <div className='whoweare-image'>
                <img className='whoweare-img' src='/images/whoweare.png' alt="whoweare"/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs
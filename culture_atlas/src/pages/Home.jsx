import React, { useEffect } from 'react'
import Header from '../components/Header';
import FilterByInterest from '../components/FilterByInterest';
import HeroSection from '../components/HeroSection';
import DiscoverContry from '../components/DiscoverContry';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/upload')
  }
  return (
    <div className='Home'>
      <HeroSection />
      <Header />
      <FilterByInterest />
      <DiscoverContry />
      {localStorage.getItem('isLoggedIn') ? <div className='round' onClick={handleClick}>
          <p className='plus'>+</p>
        </div> : <div></div>}
    </div>
  )
}

export default Home
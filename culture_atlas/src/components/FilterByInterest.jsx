import React from 'react'
import { useNavigate } from "react-router-dom";

const FilterByInterest = () => {

  const navigate = useNavigate();

  const handleClick = (interest) => {
    navigate(`/posts?category=${encodeURIComponent(interest)}`);
  };

  return (
    <div className='FilterByInterest'>
        <div className='interestContainer'>
            <div className='interest gastronome' onClick={() => handleClick("Gastronome")}>
              Gastronome
            </div>
            <div className='interest changemaker' onClick={() => handleClick("change maker")}>
              change maker
            </div>
            <div className='interest adventure' onClick={() => handleClick("adventure")}>
              adventure
            </div>
            <div className='interest festivalfanatic' onClick={() => handleClick("festival fanatic")}>
              festival fanatic
            </div>
            <div className='exploreByInterest'>
              How you like to Explore?
            </div>
            <div className='interest artsenthusiast' onClick={() => handleClick("arts enthusiast")}>
              arts enthusiast
            </div>
            <div className='interest socialite' onClick={() => handleClick("socialite")}>
              socialite
            </div>
            <div className='interest familyminded' onClick={() => handleClick("family minded")}>
              family minded
            </div>
            <div className='interest naturalist' onClick={() => handleClick("naturalist")}>
              naturalist
            </div>
        </div>
    </div>
  )
}

export default FilterByInterest
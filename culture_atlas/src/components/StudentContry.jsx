import React from 'react'
import { useNavigate } from 'react-router-dom';

const StudentContry = () => {

  const navigate = useNavigate();

    const handleClick = (country) => {
        navigate(`culture?country=${encodeURIComponent(country)}`);
    };


  return (
    <div className='StudentContry'>
        <div className='contry' onClick={()=> handleClick("India")}>
          <img className='flage' src='/images/flage_india.webp'/>
          <p>India</p>
        </div>
        <div className='contry' onClick={()=> handleClick("Japan")}>
          <img className='flage' src='/images/flage_japan.png'/>
          <p>Japan</p>
        </div>
        <div className='contry' onClick={()=> handleClick("France")}>
          <img className='flage' src='/images/flage_france.png'/>
          <p>France</p>
        </div>
        <div className='contry' onClick={()=> handleClick("Brazil")}>
          <img className='flage' src='/images/flage_brazil.png'/>
          <p>Brazil</p>
        </div>
        <div className='contry' onClick={()=> handleClick("Italy")}>
          <img className='flage' src='/images/flage_italy.png'/>
          <p>Italy</p>
        </div>
        <div className='contry' onClick={()=> handleClick("Australia")}>
          <img className='flage' src='/images/flage_Australia.png'/>
          <p>Australia</p>
        </div>
        <div className='contry' onClick={()=> handleClick("Russia")}>
          <img className='flage' src='/images/flage_Russia.png'/>
          <p>Russia</p>
        </div>
        <div className='contry' onClick={()=> handleClick("Canada")}>
          <img className='flage' src='/images/flage_Canada.png'/>
          <p>Canada</p>
        </div>
        <div className='contry' onClick={()=> handleClick("China")}>
          <img className='flage' src='/images/flage_China.png'/>
          <p>China</p>
        </div>
        <div className='contry' onClick={()=> handleClick("Germany")}>
          <img className='flage' src='/images/flage_Germany.png'/>
          <p>Germany</p>
        </div>
        <div className='contry' onClick={()=> handleClick("USA")}>
          <img className='flage' src='/images/flage_USA.png'/>
          <p>USA</p>
        </div>
        <div className='contry' onClick={()=> handleClick("UK")}>
          <img className='flage' src='/images/flage_UK.png'/>
          <p>UK</p>
        </div>
    </div>
  )
}

export default StudentContry
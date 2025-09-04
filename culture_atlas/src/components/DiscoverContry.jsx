import React from 'react'
import { useNavigate } from "react-router-dom";

const DiscoverContry = () => {

    const navigate = useNavigate();

    const handleClick = (contry) => {
        navigate(`/posts?contry=${encodeURIComponent(contry)}`);
    };

  return (
    <div className='DiscoverContry'>
        <div className='discoverWorld'>
            <p>Discover the World and Its Myriad Cultures</p>
        </div>
        <hr/>
        <div className="contryContainer">
            <div className="child" onClick={() => handleClick("India")}>
                <img src="/images/India-Tajmahal.jpg" alt="Taj Mahal" />
                <p>India</p>
            </div>
            <div className="child" onClick={() => handleClick("Japan")}>
                <img src="/images/Japan-CherryBlossoms.jpg" alt="Cherry Blossom" />
                <p>Japan</p>
            </div>
            <div className="child" onClick={() => handleClick("France")}>
                <img src="/images/France-EiffelTower.webp" alt="Eiffel Tower" />
                <p>France</p>
            </div>
            <div className="child" onClick={() => handleClick("Brazil")}>
                <img src="/images/Brazil-Carnivalfestival.webp" alt="Taj Mahal" />
                <p>Brazil</p>
            </div>
            <div className="child" onClick={() => handleClick("Italy")}>
                <img src="/images/Italy-Renaissanceartandarchitecture.webp" alt="Cherry Blossom" />
                <p>Italy</p>
            </div>
            <div className="child" onClick={() => handleClick("Russia")}>
                <img src="/images/Russia-famous.png" alt="famous place" />
                <p>Russia</p>
            </div>
        </div>
    </div>
  )
}

export default DiscoverContry
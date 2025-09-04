import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import CultureList from '../components/CultureList';
import '../assets/css/ContryCulture.css';
import AboutContry from '../components/AboutContry';
import Greetings from '../components/Greetings';
import AcademicCulture from '../components/AcademicCulture';
import DailyLife from '../components/DailyLife';
import Festivals from '../components/Festivals';
import Lifestyle from '../components/Lifestyle';
import SocialConnection from '../components/SocialConnection';
import PracticalInformation from '../components/PracticalInformation';
import DoDonts from '../components/DoDonts';
import contryData from '../ContryData.json';


const ContryCulture = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const country = params.get("country");
  const countrydata = contryData.find((c) => c.name.toLowerCase() === country.toLowerCase());

  console.log(countrydata.about)
  // Map index to component
  const renderContent = (country) => {
    switch (activeIndex) {
      case 0: return <AboutContry country={country} about={countrydata.about}/>;
      case 1: return <Greetings data = {countrydata.greetings}/>;
      case 2: return <AcademicCulture data = {countrydata.academic}/>;
      case 3: return <DailyLife data = {countrydata.dailyLife}/>;
      case 4: return <Festivals data = {countrydata.festival}/>;
      case 5: return <Lifestyle data = {countrydata.lifestyle}/>;
      case 6: return <SocialConnection data = {countrydata.socialConnections}/>;
      case 7: return <PracticalInformation data = {countrydata.practicalInformation}/>;
      case 8: return <DoDonts dos = {countrydata.dos} donts = {countrydata.donts}/>;
      default: return <AboutContry />;
    }
  };

  return (
    <>
      <Header/>
      <div className="ContryCulture">
        {/* Pass activeIndex & setter */}
        <CultureList activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        
        {/* Render dynamic component */}
        <div className="culture-content">
          {renderContent(country)}
        </div>
      </div>
    </>
  );
};

export default ContryCulture;

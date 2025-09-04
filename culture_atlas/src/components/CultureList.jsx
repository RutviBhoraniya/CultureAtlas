import React from 'react';
import '../assets/css/CultureList.css';

const CultureList = ({ activeIndex, setActiveIndex }) => {
  const items = [
    "About",
    "Greetings & Communication",
    "Academic Culture",
    "Daily Life & Social Etiquette",
    "Festivals & Traditions",
    "Lifestyle & Living",
    "Social Connections",
    "Practical Information",
    "Do's & Don'ts"
  ];

  return (
    <div className="culture-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`culture-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CultureList;

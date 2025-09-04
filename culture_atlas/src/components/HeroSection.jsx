import React, { useEffect, useState } from 'react';

const images = [
  "/images/herosection-1.webp",
  "/images/herosection-2.webp",
  "/images/herosection-3.webp",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100/images.length}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="slide-image" />
        ))}
      </div>
    </div>
  );
}

export default HeroSection
// src/components/InfrastructureSlider.js
import React from 'react';
import Slider from 'react-slick';
import '../styles/InfrastructureSlider.css'; // Custom CSS for slider

// Import your images
import infrastructureImage1 from '../assets/images/infrastructure1.jpg';
import infrastructureImage2 from '../assets/images/infrastructure2.jpg';
import infrastructureImage3 from '../assets/images/infrastructure3.jpg';
import infrastructureImage4 from '../assets/images/infrastructure4.jpg';
import infrastructureImage5 from '../assets/images/infrastructure5.jpg';

const InfrastructureSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

  return (
    <div className="infrastructure-slider">
      <Slider {...settings}>
        <div>
          <img src={infrastructureImage1} alt="Infrastructure 1" />
        </div>
        <div>
          <img src={infrastructureImage2} alt="Infrastructure 2" />
        </div>
        <div>
          <img src={infrastructureImage3} alt="Infrastructure 3" />
        </div>
        <div>
          <img src={infrastructureImage4} alt="Infrastructure 4" />
        </div>
        <div>
          <img src={infrastructureImage5} alt="Infrastructure 5" />
        </div>
      </Slider>
    </div>
  );
};

export default InfrastructureSlider;

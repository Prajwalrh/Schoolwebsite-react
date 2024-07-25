import React from 'react';
import '../styles/AboutUs.css'; 
import schoolImage from '../assets/images/background.jpg'; 
import principalImage from '../assets/images/principal.png';
import visionImage from '../assets/images/vision.png';
import missionImage from '../assets/images/mission.png';
import InfrastructureSlider from '../components/InfrastructureSlider'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="image-container">
        <img src={schoolImage} alt="Springdale Public School" />
      </div>
      <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      <div className="image-container">
        <img src={visionImage} alt="Vision" />
      </div>
      <p>Vision: To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      <div className="image-container">
        <img src={missionImage} alt="Mission" />
      </div>
      <p>Mission: To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      <div className="image-container">
        <img src={principalImage} alt="Principal" />
      </div>
      <p>Principal's Message: At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      <h2>Infrastructure and Facilities</h2>
      <InfrastructureSlider />
      <ul>
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
    </div>
  );
};

export default AboutUs;

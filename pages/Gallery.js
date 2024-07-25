import React, { useState } from 'react';
import '../styles/Gallery.css';
import sportsImg from '../assets/images/sports.jpg';
import labImg from '../assets/images/lab.jpg';
import danceImg from '../assets/images/dance.jpg';
import classroomImg from '../assets/images/infrastructure1.jpg';
import libraryImg from '../assets/images/infrastructure2.jpg';
import schoolTourVideo from '../assets/images/new.mp4';
import annualFunctionVideo from '../assets/images/new.mp4';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="gallery-page">
      <h1 className="gallery-header">Gallery</h1>
      <div className="gallery-section">
        <h2>Photos</h2>
        <div className="gallery-grid">
          {[
            { name: 'Sports Day', src: sportsImg },
            { name: 'Science Exhibition', src: labImg },
            { name: 'Cultural Fest', src: danceImg },
            { name: 'Classroom', src: classroomImg },
            { name: 'Library', src: libraryImg }
          ].map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={item.src} alt={item.name} />
              <div className="overlay">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-section">
        <h2>Videos</h2>
        <div className="video-grid">
          <div className="video-item">
            <video controls src={schoolTourVideo} className="video" />
            <div className="overlay">School Tour</div>
          </div>
          <div className="video-item">
            <video controls src={annualFunctionVideo} className="video" />
            <div className="overlay">Annual Function 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

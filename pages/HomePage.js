import React, { useState } from 'react';
import '../styles/HomePage.css';
import sportsImage from '../assets/images/sports.jpg';
import artImage from '../assets/images/art2.jpg';

const events = [
  { id: 1, title: 'Annual Sports Day', description: 'Join us for an exciting day of sports and fun activities!', image: sportsImage },
  { id: 2, title: 'Art Exhibition', description: 'Explore creative artworks by our talented students.', image: artImage },
  
];

const HomePage = () => {
  const [isBurst, setIsBurst] = useState(false);

  const handleClick = () => {
    setIsBurst(true);
    
    setTimeout(() => {
      setIsBurst(false);
      
    }, 5000); 
  };

  return (
    <div className={`home-page ${isBurst ? 'burst' : ''}`}>
      {isBurst && (
        <div className="red-shapes">
          <div className="red-shape"></div>
          <div className="red-shape"></div>
          <div className="red-shape"></div>
          <div className="red-shape"></div>
          <div className="red-shape"></div>
        </div>
      )}
      <div className="content">
        <h1 className='a'>Welcome to Springdale Public School</h1>
        <p className='b'>We nurture young minds for a brighter future.</p>
        <button
          className={`welcome-button ${isBurst ? 'burst-animation' : ''}`}
          onClick={handleClick}
        >
          Click Me!
        </button>
      </div>
      <div className="events-section">
        <h2>Latest Events in School</h2>
        <div className="events-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
        <p className="hover-note">Hover over the events to see images!</p>
      </div>
      
    </div>
  );
}

export default HomePage;

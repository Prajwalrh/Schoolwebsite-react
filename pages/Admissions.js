import React, { useState } from 'react';
import '../styles/Admissions.css'; 

const Admissions = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => {
      window.location.href = '/Appointment Receipt.pdf'; 
    }, 300); 
  };

  return (
    <div className="admissions-page">
      <h1>Admissions</h1>
      <h2>Process</h2>
      <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <h2>Criteria</h2>
      <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h2>Important Dates</h2>
      <ul>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
      <button
        className={`download-button ${isDownloaded ? 'downloaded' : ''}`}
        onClick={handleDownload}
      >
        Download Admission form
      </button>
    </div>
  );
};

export default Admissions;

import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/ContactUs.css'; 

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <h1 className="header">Contact Us</h1>
      <div className="contact-info">
        <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> info@springdale.edu</p>
      </div>
      <ContactForm />
      
        
        
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.938184269361!2d144.95592731553554!3d-37.8172099797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e1a3a5e5%3A0x50217a82a246df0!2sSchool%20of%20Information%20Technology!5e0!3m2!1sen!2sus!4v1611235802018!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

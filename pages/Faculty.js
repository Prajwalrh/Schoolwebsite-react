import React from 'react';
import '../styles/Faculty.css'; 


import s1 from '../assets/images/s1.jpg';
import s2 from '../assets/images/s2.jpg';
import s3 from '../assets/images/s3.jpg';
import s4 from '../assets/images/s4.jpg';
import s5 from '../assets/images/s5.jpg';
import s6 from '../assets/images/s6.jpg';

const facultyMembers = [
  { name: 'John Doe', role: 'Principal', qualification: 'M.Ed', experience: '20 years', img: s1 },
  { name: 'Jane Smith', role: 'Vice Principal', qualification: 'M.Sc. in Physics', experience: '15 years', img: s2 },
  { name: 'Emily Johnson', role: 'English Teacher', qualification: 'M.A. in English', experience: '10 years', img: s3 },
  { name: 'Michael Brown', role: 'Mathematics Teacher', qualification: 'M.Sc. in Mathematics', experience: '8 years', img: s4 },
  { name: 'Sophia Davis', role: 'Science Teacher', qualification: 'M.Sc. in Chemistry', experience: '12 years', img: s5 },
  { name: 'David Wilson', role: 'Computer Science Teacher', qualification: 'B.Tech in Computer Science', experience: '5 years', img: s6 },
];

const Faculty = () => {
  return (
    <div className="faculty-page">
      <h1>Our Faculty</h1>
      <ul>
        {facultyMembers.map(member => (
          <li key={member.name}>
            <img src={member.img} alt={member.name} />
            <div className="info">
              <h2>{member.name}</h2>
              <p><strong>Role:</strong> {member.role}</p>
              <p><strong>Qualification:</strong> {member.qualification}</p>
              <p><strong>Experience:</strong> {member.experience}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;

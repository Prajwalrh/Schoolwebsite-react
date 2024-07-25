import React from 'react';
import '../styles/Academics.css'; 

const Academics = () => {
  return (
    <div className="academics-page">
      <h1>Academics</h1>
      <h2>Curriculum</h2>
      <p>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</p>
      <p>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
      <p>Senior Secondary (Grades 11-12):</p>
      <ul>
        <li className='aa'>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
        <li className='aa'>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
      </ul>
      <h2>Teaching Methodologies</h2>
      <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
      <h2>Educational Resources</h2>
      <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
    </div>
  );
};

export default Academics;

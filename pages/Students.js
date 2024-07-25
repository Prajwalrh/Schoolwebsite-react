import React from 'react';
import '../styles/students.css' 


import studentLifeImg from '../assets/images/main.jpg';
import musicImg from '../assets/images/Music.jpg';
import danceImg from '../assets/images/dance.jpg';
import dramaImg from '../assets/images/drama.jpg';
import artImg from '../assets/images/art.jpg';
import sportsImg from '../assets/images/sports.jpg';
import roboticsImg from '../assets/images/robotic.jpg';
import debateClubImg from '../assets/images/debate.jpg';
import scienceClubImg from '../assets/images/lab.jpg';
import johnSmithImg from '../assets/images/01.jpg';
import sarahLeeImg from '../assets/images/02.jpg';
import techInnovatorsImg from '../assets/images/main.jpg';
import amyParkerImg from '../assets/images/01.jpg';
import rajivMehtaImg from '../assets/images/02.jpg';
import lisaWongImg from '../assets/images/03.jpg';

const Students = () => {
  return (
    <div className="students-page">
      <section className="student-life">
        <img src={studentLifeImg} alt="Student Life" />
        <h1>Student Life</h1>
        <p>At Springdale, students can engage in a variety of extracurricular activities, clubs, and societies to enrich their school experience.</p>
      </section>

      <section className="extracurricular-activities">
        <h2>Extracurricular Activities</h2>
        <div className="activities">
          <div className="activity"><img src={musicImg} alt="Music" /><p>Music</p></div>
          <div className="activity"><img src={danceImg} alt="Dance" /><p>Dance</p></div>
          <div className="activity"><img src={dramaImg} alt="Drama" /><p>Drama</p></div>
          <div className="activity"><img src={artImg} alt="Art" /><p>Art</p></div>
          <div className="activity"><img src={sportsImg} alt="Sports" /><p>Sports</p></div>
          <div className="activity"><img src={roboticsImg} alt="Robotics" /><p>Robotics</p></div>
          <div className="activity"><img src={debateClubImg} alt="Debate Club" /><p>Debate Club</p></div>
          <div className="activity"><img src={scienceClubImg} alt="Science Club" /><p>Science Club</p></div>
        </div>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <div className="achievement">
          <img src={johnSmithImg} alt="John Smith" />
          <p>John Smith: National Level Math Olympiad Winner</p>
        </div>
        <div className="achievement">
          <img src={sarahLeeImg} alt="Sarah Lee" />
          <p> Lee: Gold Medalist in State Swimming Championship</p>
        </div>
        <div className="achievement">
          <img src={techInnovatorsImg} alt="Tech Innovators Club" />
          <p>Tech Innovators Club: Winners of Inter-School Robotics Competition</p>
        </div>
      </section>

      <section className="student-council">
        <h2>Student Council</h2>
        <ul>
          <li><img src={amyParkerImg} alt="Amy Parker" /><p>President:  Parker, Grade 12</p></li>
          <li><img src={rajivMehtaImg} alt="Rajiv Mehta" /><p>Vice President: Rajiv Mehta, Grade 11</p></li>
          <li><img src={lisaWongImg} alt="Lisa Wong" /><p>Secretary: Wong, Grade 10</p></li>
        </ul>
      </section>
    </div>
  );
};

export default Students;

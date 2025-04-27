import React from "react";
import '../components/Home.css';
import '../App.css';
import { FaBookOpen, FaTrophy, FaGraduationCap } from "react-icons/fa";
import { Pie, Bar } from 'react-chartjs-2';
import profilePic from '../assets/profile.png.JPG'; // Your profile picture path
import 'chart.js/auto';

const timetable = [
  {
    day: 'Monday',
    events: [
      '9:10 AM - COA',
      '10:10 AM - P&S',
      '11:15 AM - DBMS',
      '1:00 PM - WT (Theory)',
      '2:00 PM - FLAT (Theory)',
      '3:05 PM - SSP (Theory)'
    ],
  },
  {
    day: 'Tuesday',
    events: [
      '9:10 AM - P&S',
      '10:10 AM - DBMS',
      '11:15 AM - FLAT',
      '1:00 PM & 2:00 PM - WT Lab (B1) / DBMS Lab (B2)'
    ],
  },
  {
    day: 'Wednesday',
    events: [
      '9:10 AM - FLAT',
      '10:10 AM - P&S',
      '11:15 AM - WT',
      '1:00 PM - SSP',
      '2:00 PM - DBMS',
      '3:05 PM - COA'
    ],
  },
  {
    day: 'Thursday',
    events: [
      '9:10 AM - WT',
      '10:10 AM - COA',
      '11:15 AM - SSP',
      '1:00 PM & 2:00 PM - WT Lab (B2) / DBMS Lab (B1)'
    ],
  },
  {
    day: 'Friday',
    events: [
      '9:10 AM - Extra Academic Activities (EEA-4)',
      '1:00 PM - COA',
      '2:00 PM - P&S',
      '3:05 PM - Mentoring'
    ],
  },
  {
    day: 'Saturday',
    events: ['No Classes '],
  },
];

const Home = () => {
  const pieData = {
    labels: ['Attendance', 'Absentees'],
    datasets: [{
      data: [315, 35],
      backgroundColor: ['#36A2EB', '#FF6384'],
    }]
  };

  const barData = {
    labels: ['WT', 'Flat', 'COA', 'PnS', 'DBMS', 'SSP', 'WT LAB', 'DBMS LAB', 'EAA' ,'Mentoring'],
    datasets: [{
      label: 'Attendance (%)',
      backgroundColor: '#36A2EB',
      data: [81.58, 83.78, 84.00, 78.26, 81.82, 88.46, 90.91 ,85.71 ,72.73 ,91.76]
    }]
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Hello Prateek,</h1>
        <div className="profile-card">
          <img src={profilePic} alt="Profile" className="profile-pic"/>
          <h2>Prateek Geedi</h2>
          <p>BE | CSE (C-2)</p>
          <p>Roll No: 160123733103</p>
        </div>
      </header>

      <section className="overview">
        <div className="overview-card"><FaBookOpen /> <p>Courses (Theory): 6</p></div>
        <div className="overview-card"><FaBookOpen /> <p>Courses (Labs): 2</p></div>
        <div className="overview-card"><FaTrophy /> <p>Activity Points: 57</p></div>
        <div className="overview-card"><FaGraduationCap /> <p>Credits Earned: 60.5</p></div>
      </section>

      <section className="charts">
      <div className="chart-card">
        <h3>Overall Attendance</h3>
        <Pie data={pieData} options={{
          responsive: true,
          maintainAspectRatio: false,
        }} height={150} width={150} />
      </div>
        <div className="chart-card">
          <h3>Subject-wise Attendance</h3>
          <Bar data={barData} />
        </div>
      </section>

      <section className="tasks">
        <h2>Tasks</h2>
        <ul>
          <li>WT Assignment 2 Submission – 27/4 before 5 PM</li>
          <li>Flat ST-3 – Monday 2nd hour (28/4)</li>
          <li>COA Sliptest – 3rd hour Monday (28/4)</li>
          <li>PnS Sliptest-3 – Tuesday last hour</li>
          <li>MIDS 2 – 1st, 2nd, 5th May</li>
        </ul>
      </section>

      <section className="upcoming-events">
        <h2>Weekly Timetable</h2>
        <div className="timeline-grid">
          {timetable.map((dayData, index) => (
            <div className="timeline-day" key={index}>
              <div className="day-name">{dayData.day}</div>
              <div className="day-events">
                {dayData.events.map((event, idx) => (
                  <div className="event" key={idx}>
                    <div className="dot"></div>
                    <div className="event-text">{event}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;

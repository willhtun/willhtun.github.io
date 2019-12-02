import React, { Component } from 'react';
import './index.css';
import { width } from 'window-size';
import EmploymentCard from './EmploymentCard'

class Employment extends Component {
  render() {
      return (
        <div className="Card">
          <h1> > WORK EXPERIENCE </h1>
          <br/>
          <EmploymentCard title="Software Developer Intern"
                          company="Vitu"
                          date="June 2019 - August 2019"
                          desc1="Designed and coded a program to streamline internal processes by reducing roughly 30% of manual labor"
                          desc2="Developed in C# .NET framework and Python using OpenCV, Google Tesseract OCR and PostgreSQL"/>
          <EmploymentCard title="Undergraduate Mentor"
                          company="UCLA Engineering School"
                          date="August 2018 - September 2018"
                          desc1="Lead two engineering technical projects (C++ games) for incoming engineering transfer students"
                          desc2="Co-lectured half the course of C++ and Data Structures alongside a Teaching Assistant"/>
          <EmploymentCard title="Student Mentor"
                          company="Mt San Antonio TRiO Upward Bound"
                          date="October 2016 - June 2017"
                          desc1="Tutored and mentored high school students on Math, Physics, and English"
                          desc2="Organized and planned workshops, activities, and meetings to enrich students"/>
          <EmploymentCard title="Front Desk Receptionist"
                          company="Best Western Plus Executive Inn"
                          date="August 2015 - December 2016"
                          desc1="Checked in/out guests, and handled reservations and payments"
                          desc2="Accommodated guests' needs and requests throughout their stay"
                          position="bottom"/>
        </div>
      );
  }
}

export default Employment;

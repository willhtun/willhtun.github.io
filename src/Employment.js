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
          <EmploymentCard title="Software Engineer"
                          company="SAP - Ariba Business Networks"
                          date="July 2020 - Present"
                          desc1="Building a distributed transactional workflow framework that enables applications to route up to 2.5M documents per hour"
                          desc2="Designed a long running workflow management framework for data migration across regions and platforms where each job can exceed 100GBs of data transfer"
                          position="top"/>
          <EmploymentCard title="Software Engineer"
                          company="SAP - S/4HANA Asset & Service Management"
                          date="July 2020 - Present"
                          desc1="Implemented a business rules engine that processes hundreds of messages per second using streaming and event driven architecture"
                          desc2="Implemented near real-time master data and timeseries data ingestion layer using message broker architecture for business intelligence"/>
          <EmploymentCard title="Software Engineer"
                          company="SAP - Ariba Cloud Platform Engineering"
                          date="January 2020 - July 2020"
                          desc1="Implemented health monitors for cloud deployment services using tools such as Datadog"
                          desc2="Configured and built pipelines using infrastructure as code tools such as Terraform and Ansible"/>
          <EmploymentCard title="Software Developer Intern"
                          company="Vitu"
                          date="June 2019 - August 2019"
                          desc1="Designed a computer vision assisted program to streamline internal document flow by reducing roughly 30% of manual processing "
                          desc2="Developed in C# .NET framework and Python using OpenCV, Google Tesseract OCR and PostgreSQL"/>
          <EmploymentCard title="Undergraduate Mentor"
                          company="UCLA Engineering School"
                          date="August 2018 - September 2018"
                          desc1="Lead two technical projects (C++ games) for incoming engineering students"
                          desc2="Lectured a course of C++ and Data Structures, including presentations and creating assignments"/>
        </div>
      );
  }
}

export default Employment;

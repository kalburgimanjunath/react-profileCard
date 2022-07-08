import React from 'react';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function Experience() {
  const experience = [
    {
      company:
        'Quess, Bangalore- Technical Architect at “Honeywell Technology Solutions Lab”  in Tridium Niagara.',
      from: 'Nov 2020',
      to: 'Aug 2021',
      roles: `Front-end development and architect solution using (HTML5, CSS3, MDBootstrap,LESS,JavaScript Libraries React16 Advance level,Redux, ES6.
Performance testing & optimisation.UI testing using Jest, Jasmine and Karma
New components developed and provide Architectural recommendations.
Lead many sprint events and teams in (planning, refinements, retrospectives, demos).
Worked with a multidisciplinary team to fulfill the functional and non-functional requirements.`,
    },
    {
      company:
        'Pure Software, Bangalore- Technical Lead from “Pure software” at Oracle',
      from: 'Nov 2019 ',
      to: ' Aug 2020',
      roles: `
Responsible for Providing the best Clinical trial solution which will be used for COVID-19.
Component updation using Oracle OJET with Angular 6,MaterialUI,integration,writing unit test cases,automation with Selenium using Page Objects,bug fixing.
New components developed using OJET and ReactJs,Redux,ReactStrap.
Lead the scrum teams across ClinicalOne and provide Architectural recommendations.
Design standardization,Code reviews,Interviews & Onboarding resource,POC’s.
Component Performance testing and code refactoring.
Front-end web development using (Bootstrap/ReactStrap,Redux,MaterialUI, HTML5, CSS3, SASS,JavaScript Libraries(React 16,Angular 6,knockoutJS,OJET 7) – Advance level, ES6 experience),NPM/Webpack/Grunt/Gulp,Selenium,High charts.`,
    },
    {
      company: `Honeywell Technology Solutions Lab, Bangalore- Tech Lead in (Integrated cloud-based security management system platform)
      `,
      from: 'OCT 2013 ',
      to: ' SEPT 2019',
      roles: `
Collaborate with the Product Owner and User Experience team to define world class user experience. 
Requirement analysis,Development and code refactoring,code standardization.
Front-end development using (HTML5, CSS3, ,Bootstrap,LESS,JavaScript Libraries(React16,knockout) – Advance level, ES6 experience),NPM/Webpack/Grunt/Gulp,Redux,axios,react-route,HighCharts.
Work-with-cross functional team for the integration,to train individuals and small teams. 
GIT (feature branches & pull requests), JIRA, Confluence.
Transform PSD into W3C standards compliant code,Mentor UI/UX team, Design Standardization,Vendor Management. 
Leading team members on the product, domain and technology so that they contribute effectively and positively. 
Performance testing & optimisation,writing unit test cases using karma,jasmine.
Solid understanding of responsive web development and device limitations.
Tech stack migration from KnockoutJs to Angular 4/6, and new developments in ReactJs.
Owned & Worked end to end across the different Integrated cloud-based security management system product stack - Maxpro Cloud , MPC, RAMS, Eagle, BMS, ISOM web portal.
Deploying in Azure,Integration in C#.NET etc.`,
    },
    {
      company:
        '3M, Bangalore- Junior Programmer ( All 3M India Websites Project) Payroll from EDC',
      from: 'SEP 2011 ',
      to: 'SEPT 2013',
      roles: `
Product management - Manage Website as a B-B & B-C product Globally. 
Lead website for design aspects; make sure of consistent and updated design across all website sections. 
Lead Website development projects – Coordinate with stakeholders, vendors for website development projects. 
Maintaining Site structure, navigation, errors. 
Manage website content updates and make sure of its refreshed business messaging.
Manage website infrastructure along with infra team to make sure of security / infra threats. 
Developing the overall schedule for execution within determined timelines, tracking project progress, reporting periodically to stakeholders and steering the project towards successful timely launch. 
Working with Cross functional teams covering marketing leaders, designers, copywriters, legal, web developers, search team, translators, quality and external agencies to achieve desired results. 
Manage and streamline the processes / workflow for website content, design, development projects. 
Audit website for design, development, features, content errors.
Liaise with Business units for getting website content refreshed & uploading into the websites. 
Liaise with search marketing / social marketing teams to make sure both teams work in sync,Deploy, track and optimize relevant Digital metrics. 
Constantly monitor and report on progress of the project to all stakeholders.`,
    },
    {
      company:
        'Savithru technology,  Bangalore- Software Engineer (Globals Inc Client)',
      from: 'MAR 2011',
      to: 'AUG 2011',
      roles: `
Developed web based internet applications and shopping cards using PHP,MySQL,symfony,wordpress,jquery,ajax`,
    },
    {
      company: 'Globals Inc,  Location - Trainee Software Engineer',
      from: 'AUG 2010',
      to: 'MAR 2011',
      roles: `
Developed web based internet applications using. PHP,MySQL,symfony,wordpress,jquery,smarty,ajax,wikihow,joomla and mediawiki.`,
    },
    {
      company:
        'Software consultancy cell (SCC) at BVB Engineering College - System Analyst',
      from: 'NOV 2006',
      to: 'SEPT 2007',
      roles: ` 
Klesociety 178 college & school websites [php, css, html, javascript][klesociety.org].
Rotary international website [php, smarty, css, html, javascript][bazil3170.org].
Kcc bank website [php, css, html, javascript][kccbank.org].`,
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1 className="header">Experience</h1>
      <button onClick={handleShow}>Edit</button>
      <ul>
        {experience.map((item) => {
          return <li>{item.company}</li>;
        })}
      </ul>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Experiences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {experience.map((item) => {
            return <li>{item.company}</li>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

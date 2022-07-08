import React from 'react';
import './style.css';
import {
  Header,
  Footer,
  Bio,
  Summary,
  Education,
  Experience,
  Hobbies,
  Interests,
  JobPreferences,
  ImportProfile,
  Certifications,
} from './components/index';
export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="container_body">
        <Bio />
        {/* bio-profile */}
        <Summary />
        {/* summary */}
        <Education />
        {/* educations */}
        <Experience />
        {/* experience */}
        <Hobbies />
        {/* hobbies */}
        <Interests />
        {/* interests */}

        {/* certifications */}
        <JobPreferences />
        {/* job preferences */}
        <ImportProfile />
        {/* import profile */}
      </div>
      <Footer />
    </div>
  );
}

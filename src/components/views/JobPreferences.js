import React from 'react';
import Badge from 'react-bootstrap/Badge';
export default function JobPreferences() {
  const jobpreference = [
    'Education',
    'IOT',
    'DevOps',
    'Front End Technologies',
    'Digital Marketing',
    'Engineering Jobs',
    'Leading',
  ];
  return (
    <div>
      <h1 className="header">Job Preferences</h1>
      {jobpreference.map((item) => {
        return (
          <Badge bg="secondary" pill={true}>
            {item}
          </Badge>
        );
      })}
    </div>
  );
}

import React from 'react';
import Badge from 'react-bootstrap/Badge';
export default function Interests() {
  const hobbies = [
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
      <h1 className="header">Interests</h1>
      {hobbies.map((item) => {
        return (
          <Badge bg="secondary" pill={true}>
            {item}
          </Badge>
        );
      })}
    </div>
  );
}

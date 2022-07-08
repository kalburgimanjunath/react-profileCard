import React from 'react';
import Badge from 'react-bootstrap/Badge';
export default function Hobbies() {
  const hobbies = [
    'singing',
    'speaking',
    'dancing',
    'bike riding',
    'idea creation',
    'reading',
    'mentoring',
  ];
  return (
    <div>
      <h1 className="header">Hobbies</h1>
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

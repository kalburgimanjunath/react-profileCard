import React from 'react';
import Avatar from './Avatar';
export default function Bio() {
  const user = {
    id: 1,
    name: 'Manjunath Kalburgi',
    designation: 'Technical Lead',
    address: 'Ravi nagar,Hno - 189,3rd cross,Manjunath Nilaya,Hubli',
    email: 'manjunathkalburgi@gmail.com',
    phone: '9986407307',
    twitter: '@manju',
    linkedin: 'kalburgimanjunath',
    github: 'kalburgimanjunath',
  };
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ justifyContent: 'left' }}>
        <Avatar user={user} />
      </div>
    </div>
  );
}

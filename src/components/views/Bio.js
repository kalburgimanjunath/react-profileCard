import React, { useState } from 'react';
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ justifyContent: 'left' }}>
        <button>Edit</button>
        <Avatar user={user} />
      </div>
    </div>
  );
}

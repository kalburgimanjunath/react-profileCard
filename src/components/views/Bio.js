import React, { useState } from 'react';
import Avatar from './Avatar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
        <button onClick={handleShow}>Edit</button>
        <Avatar user={user} />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
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

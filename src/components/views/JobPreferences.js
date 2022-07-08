import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1 className="header">Job Preferences</h1>
      <button onClick={handleShow}>Edit</button>
      {jobpreference.map((item) => {
        return (
          <Badge bg="secondary" pill={true}>
            {item}
          </Badge>
        );
      })}
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

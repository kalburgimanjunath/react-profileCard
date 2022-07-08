import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1 className="header">Hobbies</h1>
      <button onClick={handleShow}>Edit</button>
      {hobbies.map((item) => {
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
          {hobbies.map((item) => {
            return (
              <Badge bg="secondary" pill={true}>
                {item}
              </Badge>
            );
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

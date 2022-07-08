import React from 'react';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function Education() {
  const education = [
    {
      college: `Smt kamala and Venkama M Agadi College of Engineering and Technology, Laxmeshwar`,
      type: ` Bachelor's degree`,
      major: `Computer Science`,
      fromyear: 'JUL 2007',
      toyear: 'JUL 2010',
    },
    {
      college: 'KLEs polytechnic college Hubli ',
      type: 'Diploma',
      major: 'Computer Science',
      fromyear: 'JUL 2003',
      toyear: 'JUL 2006',
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1 className="header">Education</h1>
      <button onClick={handleShow}>Edit</button>
      <ul>
        {education.map((item) => {
          return (
            <li>
              <div>{item.type}</div>
              <div>in {item.major}</div>
              <div>{item.college}</div>
              <div>From : {item.fromyear.toLocaleLowerCase()}</div>
              <div>To:{item.toyear.toLocaleLowerCase()}</div>
            </li>
          );
        })}
      </ul>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Education Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {education.map((item) => {
              return (
                <li>
                  <div>{item.type}</div>
                  <div>in {item.major}</div>
                  <div>{item.college}</div>
                  <div>From : {item.fromyear.toLocaleLowerCase()}</div>
                  <div>To:{item.toyear.toLocaleLowerCase()}</div>
                </li>
              );
            })}
          </ul>
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

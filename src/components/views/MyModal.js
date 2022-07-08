import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function MyModal({ props }) {
  console.log(props);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const onhide = props && props.handleClose ? props.handleClose : false;
  const onshow = props && props.show ? props.show : false;
  return (
    <Modal show={onshow} onHide={onhide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press escape
        key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onhide}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up for Newsletter
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up for Monty's Newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label className= "form-label"> Email Address: </label>
            <input clasName= "form-control" name="" type = "email" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

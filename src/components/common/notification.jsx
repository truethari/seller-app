import React from "react";
import { Modal, Button } from "react-bootstrap";

const Notification = (props) => {
  const { show, onHide, heading, description } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Yes</Button>
        <Button variant="danger" onClick={onHide}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Notification;

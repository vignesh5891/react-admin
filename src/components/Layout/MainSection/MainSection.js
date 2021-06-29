import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const height = window.innerHeight - 95;
const MainSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="main-content" style={{ minHeight: height }}>
      <section className="section">
        <div className="section-body">
          <div className="section-header">
            <h1>Default Layout</h1>
            <div className="section-header-breadcrumb">
              <Breadcrumb.Item as="div" href="#">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                as="div"
                href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
              >
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item as="div" active>
                Data
              </Breadcrumb.Item>
            </div>
          </div>

          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} animation={false}>
        {/*Attribute animation={false} is because of deprecated usage of findDOMNode in react-bootstrap lib*/}
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MainSection;

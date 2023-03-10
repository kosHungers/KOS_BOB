import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MapContainer from './MapContainer';

function DetailModal({ diningData }) {
  // console.log(diningData);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        더 보기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{diningData['업 소 명']}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{diningData['소재지']}</Modal.Body>
        <Modal.Footer>
          <MapContainer diningData={diningData} />
          <Button variant="secondary" onClick={handleClose}>
            창 닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailModal;

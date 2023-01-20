import React, { useState, useContext } from 'react';
import { DiningListContext } from '../../Context/DiningListContext';
import DetailModal from '../DetailModal/DetailModal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  const { state } = useContext(DiningListContext);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {state.map((state) => {
        return (
          <Card style={{ width: '18rem' }} key={state.연번}>
            <Card.Img
              style={{ height: '12rem' }}
              variant="top"
              src="https://cdn.pixabay.com/photo/2016/04/14/17/01/soup-1329266__340.jpg"
            />
            <Card.Body>
              <Card.Title>{state['업 소 명']}</Card.Title>
              <Card.Text>{state['소재지']}</Card.Text>
              <Button
                variant="dark"
                onClick={() => {
                  console.log(state, setShow, handleShow, handleClose);
                  handleShow();
                  show && (
                    <DetailModal
                      key={state.연번}
                      isShow={setShow}
                      handleShow={handleShow}
                      handleClose={handleClose}
                      diningData={state}
                    />
                  );
                }}
              >
                자세히 보기
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default BasicExample;

import React, { useContext } from 'react';
import { DiningListContext } from '../../Context/DiningListContext';
import DetailModal from '../DetailModal/DetailModal';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  const { state } = useContext(DiningListContext);

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
              <Card.Text>032-{state['전화번호']}</Card.Text>
              <DetailModal diningData={state} />
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default BasicExample;

import React, { useContext } from 'react';
import { DiningListContext } from '../../Context/DiningListContext';
import DetailModal from '../DetailModal/DetailModal';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample({ categoryMenu }) {
  const { state } = useContext(DiningListContext);

  return (
    <>
      <Row>
        {categoryMenu.length !== 0 ?
           state.map((state) => {
              if (categoryMenu.includes(state.업태)) {
                return (
                  <Col sm={4}>
                    <CardGroup>
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
                    </CardGroup>
                  </Col>
                );
              }
            })
          : state.map((state) => {
              return (
                <Col sm={4}>
                  <CardGroup>
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
                  </CardGroup>
                </Col>
              );
            })}
      </Row>
    </>
  );
}

export default BasicExample;

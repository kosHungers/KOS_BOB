import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          style={{ height: '12rem' }}
          variant="top"
          src="https://cdn.pixabay.com/photo/2016/04/14/17/01/soup-1329266__340.jpg"
        />
        <Card.Body>
          <Card.Title>도영 국밥</Card.Title>
          <Card.Text>인천광역시 원인재로 88 104동</Card.Text>
          <Button variant="dark">자세히 보기</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img
          style={{ height: '12rem' }}
          variant="top"
          src="https://cdn.dominos.co.kr/admin/upload/goods/20200311_x8StB1t3.jpg"
        />
        <Card.Body>
          <Card.Title>도영쓰 피자</Card.Title>
          <Card.Text>인천광역시 원인재로 88 104동</Card.Text>
          <Button variant="dark">자세히 보기</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default BasicExample;

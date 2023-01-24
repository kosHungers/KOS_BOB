import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Search() {

  const [searchText, setSearchText] = useState('');
  const onChangeText = (event) => {
      setSearchText(event.target.value);
      console.log('확인',searchText);
  }
  // 
  return (
    <>
      <div className="mt-5 mb-4 d-flex flex-row justify-content-center align-items-center">
        <Form className='w-50'>
          <Form.Group controlId="restaurant-search">
            <Form.Label className="">검색</Form.Label>
            <Form.Control onChange={onChangeText} value={searchText} type="text" placeholder="식당을 검색해주세요" />
          </Form.Group>
        </Form>
        <Button className='h-50 d-flex justify-content-center' variant="primary" type="submit">
          검색
        </Button>
      </div>
    </>
  );
}

export default Search;

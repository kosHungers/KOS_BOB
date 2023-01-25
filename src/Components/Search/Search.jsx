import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { DiningListContext } from '../../Context/DiningListContext';
import GetDataAPI from '../../API/GetDataAPI/GetDataAPI';


function Search() {

  const {state,dispatch} = useContext(DiningListContext);
  const [searchText, setSearchText] = useState('');

  const onChangeText = (event) => {
      setSearchText(event.target.value);
      if(event.target.value === ''){
          GetDataAPI().then((res) => {
            dispatch({ type: 'INITIALIZATION', payload: res.data });
          });
        } 
  }

  // 스테이트 값을 바꿔서 새로운 배열을 만든다.
  const onSubmitRestaurant = (event) => {
    event.preventDefault();
    if(searchText === '') alert('검색어를 입력해주세요')
    let searchResult = state.filter((data) => data['업 소 명'].includes(searchText));
    dispatch({ type: 'SEARCH', payload: searchResult })
  }



  return (
    <>
      <div className="mt-5 mb-4 d-flex flex-row justify-content-center align-items-center">
        <Form onSubmit={onSubmitRestaurant} id='search-form' className='w-50'>
          <Form.Group controlId="restaurant-search">
            <Form.Label className="">검색</Form.Label>
            <Form.Control onChange={onChangeText} value={searchText} type="text" placeholder="식당을 검색해주세요" />
          </Form.Group>
        </Form>
        <Button className='h-50 d-flex justify-content-center' variant="primary" form='search-form' type="submit">
          검색
        </Button>
      </div>
    </>
  );
}

export default Search;
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useState } from 'react';

function Category({categoryMenu,setCategoryMenu}) {

  const restaurant = ['한식', '일식', '중식', '양식'];
  const [value, setValue] = useState([]);
  const handleChange = (val) => setValue(val);

  // 업태 필터 함수
  const onReataurantFilter = (menu) => {
    if(categoryMenu.includes(menu)){
      const copy = [...categoryMenu];
      copy.splice(copy.indexOf(menu),1);
      setCategoryMenu(copy);
    }
    else{
      setCategoryMenu([...categoryMenu,menu])
    }
  };


  return (
    <ToggleButtonGroup
      type="checkbox"
      value={value}
      onChange={handleChange}
      className="d-flex mb-3"
    >
      {restaurant.map((data,index) => {
        return (
          <ToggleButton onClick={()=>{onReataurantFilter(data)}} key={data} id={`tbg-btn-${index+1}`} value={index+1} variant='dark'>
            {data}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}

export default Category;

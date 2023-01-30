import React from 'react';
// import { useContext } from 'react';
// import { DiningListContext } from './Context/DiningListContext';
import { Container } from 'react-bootstrap';
import Search from '../Components/Search/Search';
import Category from '../Components/Category/Category';
import { useState } from 'react';
import BasicExample from './../Components/Card/Card';
import RightNavbar from './RightNavbar';

function Home() {
  const [categoryMenu, setCategoryMenu] = useState([]);
  return (
    <>
      <Container>
        <RightNavbar />
        <Search />
        <Category
          categoryMenu={categoryMenu}
          setCategoryMenu={setCategoryMenu}
        />
        <BasicExample categoryMenu={categoryMenu} />
      </Container>
    </>
  );
}

export default Home;

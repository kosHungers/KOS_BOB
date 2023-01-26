// import { useContext } from 'react';
// import { DiningListContext } from './Context/DiningListContext';
import BasicExample from './Components/Card/Card';
import { Container } from 'react-bootstrap';
import Search from './Components/Search/Search';
import RightNavbar from './Pages/RightNavbar';
import Category from './Components/Category/Category';
import { useState } from 'react';

function App() {
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

export default App;

// import { useContext } from 'react';
// import { DiningListContext } from './Context/DiningListContext';
import BasicExample from './Components/Card/Card';
import { Container } from 'react-bootstrap';
import Search from './Components/Search/Search';

function App() {
  // const { state } = useContext(DiningListContext);

  // console.log(state);
  return (
    <>
      <Container>
        <Search/>
        <BasicExample />
      </Container>
    </>
  );
}

export default App;

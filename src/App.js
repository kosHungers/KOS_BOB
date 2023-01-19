import { useContext } from 'react';
import { DiningListContext } from './Context/DiningListContext';

function App() {
  const { state } = useContext(DiningListContext);

  console.log(state);
  return <div></div>;
}

export default App;

import { useContext } from 'react';
import { DiningListContext } from './Context/DiningListContext';
import BasicExample from './Components/Card/Card';

function App() {
  const { state } = useContext(DiningListContext);

  // console.log(state);
  return (
    <div>
      <BasicExample />
    </div>
  );
}

export default App;

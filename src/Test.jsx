import { useContext } from 'react';
import { DiningListContext } from './Context/DiningListContext';

export default function Test() {
  const data = useContext(DiningListContext).state;

  console.log(data);

  return <div>text</div>;
}

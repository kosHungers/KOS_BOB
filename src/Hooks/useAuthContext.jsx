import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

// context에 AuthContext에서 반환하는 state 값, dispatch 함수 담음
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

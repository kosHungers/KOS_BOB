import { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import GetDataAPI from '../API/GetDataAPI/GetDataAPI';

// 맛집 목록 생성
const DiningListContext = createContext(null);

const DiningListStateReducer = (state, action) => {
  switch (action.type) {
    case 'LISTUP':
      // 리스트 업데이트
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const DiningListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DiningListStateReducer, []);

  useEffect(() => {
    try {
      GetDataAPI().then((res) => {
        dispatch({ type: 'LISTUP', payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DiningListContext.Provider value={{ state, dispatch }}>
      {children}
    </DiningListContext.Provider>
  );
};

export { DiningListContext, DiningListContextProvider };

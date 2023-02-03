// 컨텍스트를 생성하여 user의 로그인 정보를 저장합니다.
import { createContext, useEffect, useReducer } from 'react';
import { appAuth } from './../Firebase/config';

// context 객체 생성
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload };
    case 'logout':
      return { ...state, user: null };
    case 'authIsReady':
      return { ...state, user: action.payload, isAuthReady: true };
    default: // 초기값: null
      return state;
  }
};

// children으로 구독할 컴포넌트를 넣습니다.(index.js)
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    // onAuthStateChanged: 유저의 인증정보 변화를 관찰하는 함수(옵저버)입니다.
    // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다.
    // 새로고침 후 옵저버는 1번만 호출하면 되기 때문에 useEffect 끝에 빈 배열을 넣어줍니다.
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({ type: 'authIsReady', payload: user });
      unsubscribe();
    });
  }, []);

  // state값이 어떻게 변하는지 확인
  console.log('state: ', state);
  return (
    // ...state: 회원의 상태정보
    // dispatch: 회원의 상태를 변경하는 함수
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

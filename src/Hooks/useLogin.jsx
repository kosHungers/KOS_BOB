import { useState } from 'react';
import { appAuth } from '../Firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  // 에러 정보 저장
  const [error, setError] = useState(null);
  // 현재 서버와 통신중인 상태 저장
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // login
        const user = userCredential.user;
        dispatch({ type: 'login', payload: user });
        setError(null);
        setIsPending(false);
        alert('로그인 성공! 메인 페이지로 이동합니다.');
        navigate('/', { replace: true });

        if (!user) {
          throw new Error('로그인에 실패하였습니다.');
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };
  return { error, isPending, login };
};

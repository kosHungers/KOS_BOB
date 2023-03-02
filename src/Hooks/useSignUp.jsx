import { useState } from 'react';
import { appAuth } from '../Firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
  // 에러 정보 저장
  const [error, setError] = useState(null);
  // 현재 서버와 통신중인 상태 저장
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        if (!user) {
          throw new Error('정보가 없습니다.');
        }

        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            dispatch({ type: 'login', payload: user });
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };
  return { error, isPending, signup };
};
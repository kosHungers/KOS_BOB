import React, { useState } from 'react';
import { useSignUp } from '../../Hooks/useSignUp';
import RightNavbar from './../../Pages/RightNavbar';
import Button from 'react-bootstrap/Button';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { error, isPending, signup } = useSignUp();

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'displayName') {
      setDisplayName(e.target.value);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <>
      <RightNavbar />
      <form onSubmit={handleSignup}>
        <fieldset>
          <legend>회원가입</legend>
          <label htmlFor="email">이메일 주소</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <label htmlFor="displayName">닉네임 설정</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />

          {!isPending && <Button type="submit">회원가입</Button>}
          {isPending && <strong>가입이 진행중입니다...</strong>}
          {error && <strong>{error}</strong>}
        </fieldset>
      </form>
    </>
  );
}

export default SignUp;

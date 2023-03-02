import React, { useState } from 'react';
import { useLogin } from './../../Hooks/useLogin';
import RightNavbar from './../../Pages/RightNavbar';
import Button from 'react-bootstrap/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, login } = useLogin();

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <RightNavbar />
      <form onSubmit={handleLogin}>
        <fieldset>
          <legend>로그인</legend>
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

          {!isPending && <Button type="submit">로그인</Button>}
          {isPending && <strong>로그인 진행중입니다...</strong>}
          {error && <strong>{error}</strong>}
        </fieldset>
      </form>
    </>
  );
}

export default Login;

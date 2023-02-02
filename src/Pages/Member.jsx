import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import RightNavbar from './RightNavbar';

function Member() {
  return (
    <>
      <RightNavbar />
      <Button variant="dark">
        <Link to="signup">회원가입</Link>
      </Button>
      <Button variant="dark">
        <Link to="login">로그인</Link>
      </Button>
    </>
  );
}

export default Member;

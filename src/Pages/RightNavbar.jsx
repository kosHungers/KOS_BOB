import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BsFillHouseDoorFill,
  BsSearch,
  BsFillDoorOpenFill,
  BsFillHandThumbsUpFill,
  BsStarFill,
  BsFillPlusSquareFill,
  BsFillHeartFill,
  BsFillArrowUpCircleFill,
  BsGithub,
} from 'react-icons/bs';

function RightNavbar() {
  return (
    <>
      <Navbar className="position-fixed top-0 end-0" bg="dark" variant="dark">
        <Container className="d-flex flex-column vh-100 justify-content-center">
          <Nav className="ml-auto d-flex flex-column">
            <Nav.Link href="#home" autoFocus>
              <BsFillHouseDoorFill />
            </Nav.Link>
            <Nav.Link href="#searchText" autoFocus>
              <BsSearch />
            </Nav.Link>
            <Nav.Link href="#auth" autoFocus>
              <BsFillDoorOpenFill />
            </Nav.Link>
            <Nav.Link href="#review">
              <BsFillHandThumbsUpFill />
            </Nav.Link>
            <Nav.Link href="#star">
              <BsStarFill />
            </Nav.Link>
            <Nav.Link href="#addDining">
              <BsFillPlusSquareFill />
            </Nav.Link>
            <Nav.Link href="#heart">
              <BsFillHeartFill />
            </Nav.Link>
            <Nav.Link href="#root">
              <BsFillArrowUpCircleFill />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/kosHungers/KOS_BOB"
              target="_blank"
            >
              <BsGithub />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default RightNavbar;

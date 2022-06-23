import React from "react";
import "./Header.css";
import Arrow from "./Arrow.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const Main = () => {
  return (
    <div id='home'>
      <div className=' bg-image ' id='intro'>
        <Navbar expand='lg' className='mx-5' id='nav'>
          <Container fluid>
            <Navbar.Brand href='#home' id='logo'>
              SunnySide
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
              <Nav
                className='ms-auto my-2 my-lg-0'
                style={{ maxHeight: "100px" }}
                navbarScroll>
                <Nav.Link href='#about' id='item'>
                  About
                </Nav.Link>
                <Nav.Link href='#service' id='item'>
                  Services
                </Nav.Link>
                <Nav.Link href='#projects' id='item'>
                  Projects
                </Nav.Link>
                <Nav.Link href='#contact' id='con-btn'>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='context'>
          <h3 className='text'> We are creatives</h3>
          <img src={Arrow} alt='arrow' id='img'></img>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">Blago</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

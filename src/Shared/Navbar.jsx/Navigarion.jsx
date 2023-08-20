import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import manicon from "../../assets/manicon.png";
import { AuthContext } from "../../Providers/AuthProviders";
const Navigation = () => {
  const { user, signOut } = useContext(AuthContext);
  console.log(user);
  const userSignOut = () => {
    signOut();
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>

              <Link>About</Link>
              <Link>Career</Link>
            </Nav>
            <Nav>
              {user ? (
                <img className="rounded-circle" src={user?.photoURL} alt="" />
                &&
                <p>{user?.email}</p>
              ) : (
                <img src={manicon} alt="" />
              )}

              <>
                {user ? (
                  <Button onClick={userSignOut} variant="secondary">
                    Sign Out
                  </Button>
                ) : (
                  <Link to="/login" variant="secondary">
                    Login
                  </Link>
                )}
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

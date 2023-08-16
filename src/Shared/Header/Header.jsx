import React from "react";
import logo from "../../assets/logo.png";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Navigation from './../Navbar.jsx/Navigarion';

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="fs-5 fw-bold">{moment().format('LLLL')}</p>
      </div>
      <div className="d-flex">
      <Button variant="danger">Latest</Button>
      <Marquee className="text-danger">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </Marquee>
      </div>
      <Navigation></Navigation>
    </Container>
  );
};

export default Header;

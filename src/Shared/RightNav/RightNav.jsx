import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import './RightNav.css'
import QZone from "../QZone/QZone";
import bg from '../../assets/bg.png'
const RightNav = () => {
  return (
    <Container className="mt-50">
      <div>
        <h4 className="mt-4">Login With</h4>
        <Button variant="outline-primary w-100 mb-1">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-secondary w-100">
          <FaGithub /> Login With Github
        </Button>
      </div>
      <div className="mt-10">
        <h4 className="mt-4">Find Us On</h4>

        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img className="bg" src={bg} alt="" />
        <h2 className="bg-text">Create an Amazing Newspaper</h2>
      </div>
    </Container>
  );
};

export default RightNav;

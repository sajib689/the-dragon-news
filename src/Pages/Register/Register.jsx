import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../Providers/AuthProviders";
const Register = () => {
  const { formSign } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    formSign(email, password);
    form.reset();
  };
  const handleAccept = (e) => {
    setAccept(e.target.checked);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Your Name" />
        <br />
        <input type="text" name="email" placeholder="Enter Your Name" required/>
        <br />
        <input type="text" name="password" placeholder="Enter Your Name" />
        <br />
        <input
          onClick={handleAccept}
          type="checkbox"
          name="accept"
          label={
            <>
              Accept <Link to='/terms'>Terms & Condition</Link>
            </>
          }
        />
        <br />
        <button disabled={!accept}>Register</button>
        <Link to="/login">Are You have an account?</Link>
      </Form>
    </>
  );
};

export default Register;

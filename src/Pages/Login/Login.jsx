import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
const Login = () => {
  const { user,formLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    formLogin(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        setError(error.message);
      });
      form.reset()
  };
  return (
    <div>
      <Form onSubmit={handleLogin}>
        <label htmlFor="">Email</label>
        <input name="email" type="text" placeholder="Enter your Email" />
        <label htmlFor="inputPassword5">Password</label>
        <input name="password" type="text" placeholder="Enter your Password" />

        <button>Login</button>
      </Form>
      <Link to="/register">Register Here?</Link>
      <p>{error}</p>
    </div>
  );
};

export default Login;

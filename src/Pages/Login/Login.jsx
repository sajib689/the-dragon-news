import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
const Login = () => {
  const { user,formLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/category/0'
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    formLogin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, {replace: true})
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

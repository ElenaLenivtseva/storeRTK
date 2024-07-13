import React from "react";
import "./Login.scss";
import Button from "../../../Common/Button/Button";

const Login = () => {
  return (
    <div className="login">
      <div className="login__left">
        <h2 className="login__title">Create your account</h2>
        <p className="login__text">Fashion Elegance With Exclusive Access</p>
        <form className="login__form">
          <input
            className="login__formEmail"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="login__formPassword"
            type="password"
            placeholder="Make up your password"
          />
          <Button>Get started</Button>
        </form>
        <p className="login__variant">
          Already have an account?{" "}
          <a className="login__link" href="#">
            Log in
          </a>
        </p>
      </div>
      <div className="login__right">
        <img
          className="login__img"
          src="https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome image"
        />
      </div>
    </div>
  );
};

export default Login;

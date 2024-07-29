import React, {useState} from "react";
import Button from "../../../Common/Button/Button";
import LinkComp from "../../../Common/LinkComp/LinkComp";
import "./Login.scss";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <section className="login">
      <div className="login__left">
        <h2 className="subtitle login__title">Create your account</h2>
        <p className="login__text">Fashion Elegance With Exclusive Access</p>
        <form className="login__form">
          <input
            className="login__input login__formEmail"
            type="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          <input
            className="login__input login__formPassword"
            type="password"
            placeholder="Make up your password"
            onChange={handleInputChange}
          />
          <Button className="button button_totalBlack">Get started</Button>
        </form>
        <p className="login__variant">
          Already have an account? <LinkComp>Log in</LinkComp>
        </p>
      </div>
      <div className="login__right">
        <img
          className="login__img"
          src="https://images.unsplash.com/photo-1695048980897-6093a651e5cc?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome"
        />
      </div>
    </section>
  );
};

export default Login;

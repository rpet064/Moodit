import React from "react";
import { Button } from "react-bootstrap";

function Form(props: any) {
  return (
    <form className="login-form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered || <input type="password" placeholder="Password" />}
      <Button type="submit">{props.isRegistered ? "Login" : "Register"}</Button>
    </form>
  );
}

export default Form;

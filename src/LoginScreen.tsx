import Title from "./Title";
import Form from "./Form";
import React, {useState} from "react";
import {Button} from "react-bootstrap"

export default function LoginScreen() {
  const [userRegistered, setUserRegistered] = useState(true);
  return 
    <div>
      <Title
        titleText={(userRegistered)?"Login":"Register"}
        subTitleText="Please enter your username and password below"
      />
      <Form isRegistered={userRegistered} />
      {(userRegistered)<p>Not Yet Registered?</p>
      <Button id="registerButton" onClick={() => registerAccount()}>
         Create Account
      </Button>
    </div>
  );
}

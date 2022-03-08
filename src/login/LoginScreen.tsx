import Title from "../Title";
import Form from "./Form";

export default function LoginScreen(props: any) {
  return (
    <div>
      <Title
        titleText="Login"
        subTitleText="Please enter your username and password below"
      />
      <Form isRegistered={props.isRegistered} />
    </div>
  );
}

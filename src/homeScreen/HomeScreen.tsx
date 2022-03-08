import ToDoList from "./ToDoList";
import CheckIn from "./CheckIn";

export default function HomeScreen(props: any) {
  const handleChange = props.buttonClick;
  console.log(props.buttonClick);
  return <div>{handleChange ? <ToDoList /> : <CheckIn />}</div>;
}

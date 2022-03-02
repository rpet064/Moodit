import "../public/styles.css";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import ToDoList from "./ToDoList";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ToDoList />
      <Footer />
    </div>
  );
}

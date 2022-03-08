import "../public/styles.css";
import Footer from "./Footer";
import LoginScreen from "./login/LoginScreen";
import HomeScreen from "./homeScreen/HomeScreen";
import { Navbar, Container, Nav, ButtonGroup, Button } from "react-bootstrap";
import React, { useState } from "react";

// font awesome modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHeart,
  faBrain,
  faNoteSticky,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCalendar, faHeart, faBrain, faNoteSticky, faUser);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [homeScreen, setHomeScreen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);

  function handleClick(value: any) {
    if (value === "ToDoList") {
      setIsLoggedIn(true);
      setHomeScreen(true);
    } else if (value === "Home") {
      setIsLoggedIn(true);
      setHomeScreen(false);
    } else {
      setIsLoggedIn(false);
    }
  }

  return (
    <div className="App">
      <Navbar className="nav" expand="lg">
        <Container>
          <Button id="nav-button" onClick={() => handleClick("Home")}>
            Moodit
          </Button>
          <Nav className="ms-auto">
            <ButtonGroup>
              <Button id="nav-button" onClick={() => handleClick("Home")}>
                <FontAwesomeIcon icon={["fas", "heart"]} />
              </Button>
              <Button id="nav-button" onClick={() => handleClick("ToDoList")}>
                <FontAwesomeIcon icon={["fas", "note-sticky"]} />
              </Button>
              <Button id="nav-button" onClick={() => handleClick("Home")}>
                <FontAwesomeIcon icon={["fas", "calendar"]} />
              </Button>
              <Button id="nav-button" onClick={() => handleClick("logout")}>
                <FontAwesomeIcon icon={["fas", "user"]} />
              </Button>
            </ButtonGroup>
          </Nav>
        </Container>
      </Navbar>
      {isLoggedIn ? (
        <HomeScreen buttonClick={homeScreen} />
      ) : (
        <div>
          <LoginScreen isRegistered={isRegistered} />
        </div>
      )}
      <Footer />
    </div>
  );
}

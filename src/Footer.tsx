import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add();

let year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return React.createElement("h2", {}, "Welcome to Booklist app");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

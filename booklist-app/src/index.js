import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Title />
      <Caption />
    </div>
  );
}

const Title = () => <h2>Welcome to Booklist-app</h2>;
const Caption = () => <p>This is where the caption goes</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

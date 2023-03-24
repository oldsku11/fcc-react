import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h2>Hello world!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
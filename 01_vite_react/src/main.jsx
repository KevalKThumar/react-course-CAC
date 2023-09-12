import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Coustom App</h1>
    </>
  );
}
// ReactDOM.createRoot(document.getElementById("root")).render(MyApp());

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to naviget Google.com",
// };
// It is not work in this without any changes

const anotherElement = <h1>hello anotherElement</h1>;
// ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blanck" },
  ["click", "me"]
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

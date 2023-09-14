import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <Button
              className="text-white rounded-xl"
              variant="primary"
              active
              onClick={(prevColor) => setColor((prevColor = "blue"))}
            >
              Primary
            </Button>{" "}
            <Button
              className="text-white  rounded-xl"
              variant="secondary"
              active
              onClick={(prevColor) => setColor((prevColor = "#6c757d"))}
            >
              Secondary
            </Button>{" "}
            <Button
              className="text-white rounded-xl"
              variant="success"
              active
              onClick={(prevColor) => setColor((prevColor = "green"))}
            >
              Success
            </Button>{" "}
            <Button
              className="text-white rounded-xl"
              variant="warning"
              active
              onClick={(prevColor) => setColor((prevColor = "yellow"))}
            >
              Warning
            </Button>{" "}
            <Button
              className="text-white rounded-xl"
              variant="danger"
              active
              onClick={(prevColor) => setColor((prevColor = "red"))}
            >
              Danger
            </Button>{" "}
            <Button
              className="text-white rounded-xl"
              variant="info"
              active
              onClick={(prevColor) => setColor((prevColor = "#0dcaf0"))}
            >
              Info
            </Button>{" "}
            <Button
              className="text-black rounded-xl"
              variant="light"
              active
              onClick={(prevColor) => setColor((prevColor = "#d3d4d5"))}
            >
              Light
            </Button>{" "}
            <Button
              className="text-white rounded-xl"
              variant="dark"
              active
              onClick={(prevColor) => setColor((prevColor = "#212529"))}
            >
              Dark
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

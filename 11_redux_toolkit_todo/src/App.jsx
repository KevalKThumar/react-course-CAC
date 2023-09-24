import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import AddTODOs from "./Components/AddTODOs";
import TODOS from "./Components/TODOS";

function App() {
  return(
    <>
      <h1>TODOs</h1>
      <AddTODOs />
      <TODOS/>
    </>
  )
}

export default App;

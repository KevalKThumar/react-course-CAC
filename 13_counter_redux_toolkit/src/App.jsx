import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../Features/Counter/counterSlice";

function App() {
  // 5)  get useDispatch and useSelector hooks for dispatching and getting state
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  // 6)  dispatch action using function from counterSlice and useSelector to get state of count
  return (
    <>
      <h1>Vite + React + Redux Toolkit</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>+</button> count is{" "}
        {count}{" "}
        <button onClick={() => count > 0 && dispatch(decrement())}>-</button>
      </div>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

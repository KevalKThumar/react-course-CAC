import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <h1 className="bg-blue-500 text-black p-4 rounded-lg font-sans mb-4">
        TailWind test
      </h1>

      <Cards name={'keval'}/>
      <Cards />
    </>
  );
}

export default App;


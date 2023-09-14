import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [checkNumber, setCheckNumber] = useState(false);
  const [checkChar, setCheckChar] = useState(false);
  const [password, setPassword] = useState("");
  // useRef hook

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (checkNumber) str += "0123456789";
    if (checkChar) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, checkChar, checkNumber, setPassword]);

  // useCallback:- is use for memoization it will store in catch memory when "length, checkChar, checkNumber, setPassword" all change.It is for Optimization not for re-rendering

  useEffect(() => {
    generatePass();
  }, [length, checkNumber, checkChar, generatePass]);

  // It is for re-render when  [length, checkNumber, checkChar, generatePass] change

  return (
    <>
      <div className="">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-600 bg-gray-200">
          <h1 className="text-black text-center mb-2">Password generater</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-blue-700 p-2 text-white shrink-0 active:scale-95 duration-200"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={checkNumber}
                id="numberInput"
                onChange={() => {
                  setCheckNumber((prev) => !prev);
                }}
              />
            </div>
            <label htmlFor="numberInput">Number</label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={checkChar}
                id="characterInput"
                onChange={() => {
                  setCheckNumber((prev) => !prev);
                }}
              />
            </div>
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

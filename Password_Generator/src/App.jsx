import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, numberAllowed] = useState(false);
  const [characters, charAllowed] = useState(false);
  const passwordRef = useRef(null);
  // Function for Password Generation
  const generatedPass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (characters) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let temp = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(temp);
    }
    setPassword(pass);
  }, [length, number, characters]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatedPass();
  }, [length, characters, number]);
  return (
    <>
      <div className=" flex flex-col justify-center items-center  min-h-screen">
        <h1 className="text-center text-7xl text-yellow-50 py-10 font-bold ">
          Password Generator
        </h1>
        <div className=" flex shadow rounded-lg overflow-hidden p-5 bg-zinc-700 mb-4">
          <input
            className="outline-none w-full bg-slate-800 px-1 py-2  text-3xl rounded-l-lg"
            type="text"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-lg"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-2">
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
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => numberAllowed((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characters}
              onChange={() => charAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

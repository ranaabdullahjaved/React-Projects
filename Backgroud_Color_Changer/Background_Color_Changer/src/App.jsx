import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="w-full h-screen duration-200"
      >
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="flex  flex-wrap bg-fuchsia-50 px-3 py-2 gap-3 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="text-white text-3xl py-2 px-3 gap-3 shadow-lg rounded-full bg-red-500 hover:bg-red-700"
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="text-white text-3xl py-2 px-3 shadow-lg rounded-full bg-green-500 hover:bg-green-700"
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="text-white text-3xl py-2 px-3  shadow-lg rounded-full bg-blue-500 hover:bg-blue-700"
            >
              blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="text-white text-3xl py-2 px-3 shadow-lg rounded-full bg-yellow-500 hover:bg-yellow-700"
            >
              yellow
            </button>
            <button
              onClick={() => setColor("#71717A")}
              className="text-white text-3xl py-2 px-3 shadow-lg rounded-full bg-zinc-500 hover:bg-zinc-700"
            >
              zinc
            </button>
            <button
              onClick={() => setColor("orange")}
              className="text-white text-3xl py-2 px-3 shadow-lg rounded-full bg-orange-500 hover:bg-orange-700"
            >
              orange
            </button>
            <button
              onClick={() => setColor("#10B981")}
              className="text-white text-3xl py-2 px-3 shadow-lg rounded-full bg-emerald-500 hover:bg-emerald-700"
            >
              emerald
            </button>
            <button
              onClick={() => setColor("indigo")}
              className="text-white text-3xl py-2 px-3 shadow-lg rounded-full bg-indigo-500 hover:bg-indigo-700"
            >
              indigo
            </button>
            <button
              onClick={() => setColor("pink")}
              className="text-white text-3xl py-2 px-3 shadow-lg rounded-full bg-pink-500 hover:bg-pink-700"
            >
              pink
            </button>
            <button
              onClick={() => setColor("#D946EF")}
              className="text-white text-3xl py-2 px-3 gap-3 shadow-lg rounded-full bg-fuchsia-500 hover:bg-fuchsia-700"
            >
              fuchsia{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            className="className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'"
            onClick={() => setColor("violet")}
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            className="className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'"
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            className="className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'"
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            className="className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'"
            onClick={() => setColor("teal")}
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>
          <button
            className="className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'"
            onClick={() => setColor("lime")}
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// import Counter from "./Counter";
import Info from "./info.js";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [visable, setVisable] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisable(!visable);
        }}
      >
        {visable ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visable && <Info />}
    </div>
  );
};

export default App;

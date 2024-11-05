import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("black");
  const colors = [
    { name: "Light Green", color_code: "lightgreen" },
    { name: "Maroon", color_code: "maroon" },
    { name: "Orange", color_code: "orange" },
    { name: "Red", color_code: "red" },
    { name: "Gray", color_code: "gray" },
    { name: "Purple", color_code: "purple" },
    { name: "Sky Blue", color_code: "skyblue" },
  ];
  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <h1>Background-Color Changer</h1>

        <div
          className="background-container"
        ></div>

        <div className="buttons">
          {colors.map((item_btn) => {
            return (
              <>
                <button
                  className="btn"
                  onClick={() => setColor(item_btn?.color_code)}
                  style={{ backgroundColor: item_btn?.color_code }}
                >
                  {item_btn?.name}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");

  const bone = () => {
    setValue((prev) => prev + "1");
  };
  const btwo = () => {
    setValue((prev) => prev + "2");
  };
  const bthree = () => {
    setValue((prev) => prev + "3");
  };
  const bfour = () => {
    setValue((prev) => prev + "4");
  };
  const bfive = () => {
    setValue((prev) => prev + "5");
  };
  const bsix = () => {
    setValue((prev) => prev + "6");
  };
  const bseven = () => {
    setValue((prev) => prev + "7");
  };
  const beight = () => {
    setValue((prev) => prev + "8");
  };
  const bnine = () => {
    setValue((prev) => prev + "9");
  };
  const bzero = () => {
    setValue((prev) => prev + "0");
  };
  const clear = () => {
    setValue("");
  };
  const bplus = () => {
    setValue((prev) => prev + "+");
  };
  const bminus = () => {
    setValue((prev) => prev + "-");
  };
  const bmultiply = () => {
    setValue((prev) => prev + "*");
  };
  const bdivide = () => {
    setValue((prev) => prev + "/");
  };
  const bequals = () => {
    let ans = eval(value);
    setValue(ans);
  };
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={value} />
      <h2 style={{ color: "gray" }}>{}</h2>
      <div>
        <div>
          <button className="but" onClick={bseven}>
            7
          </button>
          <button className="but" onClick={beight}>
            8
          </button>
          <button className="but" onClick={bnine}>
            9
          </button>
          <button className="but" onClick={bplus}>
            +
          </button>
        </div>

        <div>
          <button className="but" onClick={bfour}>
            4
          </button>
          <button className="but" onClick={bfive}>
            5
          </button>
          <button className="but" onClick={bsix}>
            6
          </button>
          <button className="but" onClick={bminus}>
            -
          </button>
        </div>

        <div>
          <button className="but" onClick={bone}>
            1
          </button>
          <button className="but" onClick={btwo}>
            2
          </button>
          <button className="but" onClick={bthree}>
            3
          </button>
          <button className="but" onClick={bmultiply}>
            *
          </button>
        </div>

        <div>
          <button className="but" onClick={clear}>
            C
          </button>
          <button className="but" onClick={bzero}>
            0
          </button>
          <button className="but" onClick={bequals}>
            =
          </button>
          <button className="but" onClick={bdivide}>
            /
          </button>
        </div>
      </div>
    </div>
  );
}

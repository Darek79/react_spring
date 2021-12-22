import "./styles.css";
import { a, to, useSpring } from "@react-spring/web";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(false);
  const { y } = useSpring({
    config: { mass: 10, tension: 40, clamp: true },
    // opacity: state ? 0 : 1,
    y: state ? "500px" : "0px"
  });

  function click() {
    setState((p) => !p);
  }
  return (
    <a.div
      style={{
        transform: y.to((y) => `translateY(${y})`)
      }}
      className="App"
      onClick={click}
    >
      {console.log(state)}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </a.div>
  );
}

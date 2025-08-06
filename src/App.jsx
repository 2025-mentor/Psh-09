import { useState, useEffect } from "react";
import Input from "./Input";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev+ 1);
  return (
    <div>
      <Input />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
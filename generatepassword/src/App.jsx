import { useCallback, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumerAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "";
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  );
}

export default App;

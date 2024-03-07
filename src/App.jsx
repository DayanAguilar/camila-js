import React, { useState } from "react";
import Greeting from "./components/Greeting";
import Hello from "./components/Hello";


const App = () => {
  const [estado, setEstado] = useState(false);

  const changeState = () => {
    setEstado(!estado);
    console.log(estado);
  };

  return (
    <>
      {estado ?
        <Greeting /> :
        <Hello changeState={changeState} />}
    </>
  );
};

export default App;

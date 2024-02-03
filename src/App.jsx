import React, { useState } from "react";
import Camila from "./camila";

const App = () => {
  const [estado, setEstado] = useState(false);

  const changeState = () => {
    setEstado(!estado);
    console.log(estado);
  };

  return (
    <>
      {estado ? (
        <Camila></Camila>
      ) : (
        <>
          <div className="flex justify-center">
            <img
              src="https://welovecatsandkittens.com/wp-content/uploads/2016/10/kitty-kiss.gif"
              className="mt-7"
            ></img>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-center mt-7 font-sans text-3xl text-green-400">
              Camila amorcito❤ dale al boton
            </h1>
            <button
              className="ml-10 text-center mt-7 font-sans text-3xl bg-green-800 rounded-xl text-white size-50 hover:text-gray-300"
              onClick={() => changeState()}
            >
              Aqui
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default App;

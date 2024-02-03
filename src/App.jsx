import React, { useState } from "react";


const App = () => {
  const [estado, setEstado] = useState(false);

  const changeState = () => {
    setEstado(!estado);
    console.log(estado);
  };

  return (
    <>
      {estado ? (
        <>
          <div className="flex justify-center">
            <img
              src="https://media1.tenor.com/images/9df609f311902f5555d6cf387b207b9a/tenor.gif?itemid=15406031"
              className="mt-7"
            ></img>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center text-green-600">
              Camila Silvente Villaroel cuando escucho ese nombre me siento el
              hombre mas feliz de este mundo🥰 te quiero mucho amor❤ en este
              tiempo tan corto que te conoci te volviste mi persona favorita en
              el mundo mundial🥰❤ muchos besitos y abrazos a distancia🥰❤ eres
              lo mejor para mi❤ eres perfecta para mi no lo olvides🥰❤ ay amor
              me traes muy cursi jiji😪 te amoooooo❤
            </p>
          </div>
        </>
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

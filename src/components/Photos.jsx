import React from "react";
import Dayan from "../assets/images/13.jpg"; // Asegúrate de la ruta de importación correcta
import Asombrado from "../assets/images/10.gif";
import Uno from "../assets/images/15.jpg";
import Dos from "../assets/images/8.jpg";
import Tres from "../assets/images/7.jpg";
import Cuatro from "../assets/images/6.jpg";
import Cinco from "../assets/images/3.jpg";
import Seis from "../assets/images/1.jpg";

const Photos = () => {
  return (
    <div className="flex-col">
      <h1 className="ml-10 text-center mt-7 font-sans text-3xl rounded-xl text hover:text-gray-400">
        Nuestra Aventura
      </h1>{" "}
      <br></br>
      <p className="text-center font-sans text-2xl hover:text-red-300">
        {" "}
        Sigue bajando
      </p>
      <p className="text-center font-sans text-2xl hover:text-red-300">
        El hombre de aquí te ama
      </p>
      <img src={Dayan} alt="Aventura" className="w-100%" />
      <br></br>
      <p className="text-center font-sans text-2xl hover:text-red-300">
        El hombre de aquí quiere vivir todo contigo
        <br></br>pero todo es todo el te ama con todo su corazon<br></br> y
        nunca te hara daño
      </p>
      <p className="text-center font-sans text-2xl hover:text-red-500">
        Aun recuerdo nuestra primera cita como si fuese el dia de ayer cuando te
        vi me nervioso pero tambien me puse asi
      </p>
      <div className="w-100%">
        <img src={Asombrado}></img>
      </div>
      <p className="text-center font-sans text-2xl hover:text-red-500">
        Te amo desde el dia que te vi supe que eras especial y que queria algo
        contigo
      </p>
      <div className="flex-row">
        <img src={Uno}></img>
        <img src={Dos}></img>
        <img src={Tres}></img>
        <img src={Cuatro}></img>
        <img src={Cinco}></img>
      </div>
      <br></br>
      <h2 className="text-center font-sans text-2xl hover:text-red-500">
        No tienes idea de cuanto te amo mujer
      </h2>
      <img src={Seis}></img>
      <h2 className="text-center font-sans text-2xl hover:text-red-500">
        De la forma mas egoista posible solo te quiero para mi ;)
      </h2>
      <br></br>
    </div>
  );
};

export default Photos;

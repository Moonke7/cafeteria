import "../estilos/info.css";
import { useState } from "react";

export function Info({titulo, imagen, descripcion, precio, indice, indicepro, close}) {
  const[cerrar, setCerrar] = useState(0)

  console.log("info" ,{indice}, {indicepro})
  const Cerrar = () =>{
    if(cerrar === 0){
      setCerrar(1)
      close()
    }
    else {
      setCerrar(0)
    }
  }
  return (
    <div className={`info ${indice === indicepro || cerrar === 1 ? "" : "clicked"}`}>
      <img src={imagen} alt="Logo" id="img-info" /> 
      <div className="info__texto">
        <h2>{titulo}</h2>
        <h3>{precio}</h3>
        <p>{descripcion}</p>
      </div>
      <img
        src="https://cdn.hugeicons.com/icons/cancel-01-stroke-rounded.svg"
        alt="cancel-01"
        width="32"
        height="32"
        className="close"
        onClick={close}
      />
      
    </div>
  );
}

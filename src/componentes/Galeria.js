//GALERIA DE FOTOS QUE OCUPEN EL 100% DE WITH ABAJO DEL SLIDER
import "../estilos/galeria.css";
import { useState } from "react";

export default function Galeria() {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);

  const hovered1 = () => {
    img1 === false ? setImg1(true) : setImg1(false);
  };
  const hovered2 = () => {
    img2 === false ? setImg2(true) : setImg2(false);
  };
  const hovered3 = () => {
    img3 === false ? setImg3(true) : setImg3(false);
  };
  const hovered4 = () => {
    img4 === false ? setImg4(true) : setImg4(false);
  };

  return (
    <div className="galeria__container">
      <div
        className="foto_sola"
        onMouseEnter={hovered1}
        onMouseLeave={hovered1}
      >
        <img
          className={`sola ${img1 ? "hovered" : ""}`}
          src="https://www.elboyaldia.cl/sites/elboyaldia.cl/files/imagen_noticia/como_preparar_cafe_helado.jpg"
          alt=""
        ></img>
        <h3>'Prueba nuestras bebidas(link a pagina de postres)'</h3>
      </div>

      <div className="imagenes">
        <ul>
          <li onMouseEnter={hovered2} onMouseLeave={hovered2}>
            <img
              className={`img2 ${img2 ? "hovered" : ""}`}
              src="https://www.tipicochileno.cl/wp-content/uploads/2021/05/kuchen-del-sur-1080-1080.jpg"
              alt=""
            ></img>{" "}
            <h3>visita postres (link)</h3>
          </li>
          <li onMouseEnter={hovered3} onMouseLeave={hovered3}>
            <img
              className={`img3 ${img3 ? "hovered" : ""}`}
              src="https://peopleenespanol.com/thmb/SCRnm1CAdrYh05A7tEb_6CabWo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pastel-basico-2000-08ba28703f33452c99c25ea0b58ff724.jpg"
              alt=""
            ></img>
            <h3>visita reposteria(link)</h3>
          </li>
          <li onMouseEnter={hovered4} onMouseLeave={hovered4} id="ultima">
            <img
              className={`img4 ${img4 ? "hovered" : ""}`}
              src="https://cdn.recetasderechupete.com/wp-content/uploads/2022/05/Best-chocolate-cake-1.jpg"
              alt=""
            ></img>
            <h3>visita tortas(link)</h3>  
          </li>
        </ul>
      </div>
    </div>
  );
}

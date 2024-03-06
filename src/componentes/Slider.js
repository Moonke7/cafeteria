import "../estilos/section.css";
import { useState, useEffect } from "react";

function Slider({ foto1, foto2, foto3, foto4, foto5}) {
    const [c1, setC1] = useState(1);
    const [c2, setC2] = useState(0);
    const [c3, setC3] = useState(0);
    const [c4, setC4] = useState(0);
    const [c5, setC5] = useState(0);
  
    const handleItemClick = (index) => {
      setC1(index === 1 ? 1 : 0);
      setC2(index === 2 ? 1 : 0);
      setC3(index === 3 ? 1 : 0);
      setC4(index === 4 ? 1 : 0);
      setC5(index === 5 ? 1 : 0);
    };
    

    return (
      <div className="slider" >
        <img src={foto1} alt="foto1" style={{ opacity: c1 === 1 ? 1 : 0 }} />
        <img src={foto2} alt="foto2" style={{ opacity: c2 === 1 ? 1 : 0 }} />
        <img src={foto3} alt="foto3" style={{ opacity: c3 === 1 ? 1 : 0 }} />
        <img src={foto4} alt="foto4" style={{ opacity: c4 === 1 ? 1 : 0 }} />
        <img src={foto5} alt="foto5" style={{ opacity: c5 === 1 ? 1 : 0 }} />
        <ul>
          <li
            className={c1 === 1 ? "activo" : "inactivo"}
            onClick={() => handleItemClick(1)}
          ></li>
          <li
            className={c2 === 1 ? "activo" : "inactivo"}
            onClick={() => handleItemClick(2)}
          ></li>
          <li
            className={c3 === 1 ? "activo" : "inactivo"}
            onClick={() => handleItemClick(3)}
          ></li>
          <li
            className={c4 === 1 ? "activo" : "inactivo"}
            onClick={() => handleItemClick(4)}
          ></li>
          <li
            className={c5 === 1 ? "activo" : "inactivo"}
            onClick={() => handleItemClick(5)}
          ></li>
        </ul>
      </div>
    );
  }
  
  export default Slider
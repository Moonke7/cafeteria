import "../estilos/section.css";
import { useState } from "react";



function Producto({ imagen='hola', titulo, precio, indice, VerMas}) {
    const [hovered, setHovered] = useState(false);
    
    console.log('indice info', indice)
    const handleClick = () => {
      VerMas(indice);
    };
    
    const handleMouseEnter = () => {
      setHovered(true);
    };
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    return (
      <div
        className="producto" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{opacity: imagen === 'hola' ? 0: 1}}
      >
        <img className={`img ${hovered ? "hovered" : ""}`}  src={imagen} alt="Logo"  />
        <div className={`producto__texto ${hovered ? "hovered" : ""}`}>
          <h3>{titulo}</h3>
          <h3>{precio}</h3>
          <img
            src="https://cdn.hugeicons.com/icons/eye-stroke-rounded.svg"
            alt="eye"
            width="32"
            height="32"
            onClick={handleClick}
          />
        </div>        
      </div>
    );
  }

  export {Producto};
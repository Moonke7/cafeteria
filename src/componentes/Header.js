import "../estilos/header.css";
import { useEffect, useState } from "react";

function Header({ titulo = "default", logo , close, Ojo}) {
  const [phone, setPhone] = useState(false);
  
  function togglePhone() {
    setPhone(true);
  }
  function falsePhone() {
    setPhone(false);
  }
  useEffect(() => {
    function handleResize() {
      // Verificar el tamaño de la pantalla
      const width = window.innerWidth;

      // Ejecutar lógica basada en el tamaño de la pantalla
      if (width < 780 && width > 480) {
        falsePhone();
      } else if (width < 480) {
        togglePhone();
      } else {
        falsePhone();
      }
    }

    // Agregar un listener para el evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <ul className={`ul ${phone ? 'no': ''}`}>
        <li>Inicio(no links)</li>
        <li>Servicios</li>
        <li>About me</li>
        <li>Contacto</li>
      </ul>
      <div className={`boton ${phone ? '': 'no'}`}>
        <img onClick={close} src="https://cdn.hugeicons.com/icons/menu-03-stroke-rounded.svg" alt="menu-03" width="24" height="24" />
      </div>
      <div className={`responsive ${Ojo === 1 ? "no" : ""}`}>
        <ul>
          <li>Inicio (no links)</li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
          <li>Productos</li>
          <li>Tortas <img src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg" alt="arrow-down-01" width="32" height="32" /></li>
          <li>Pasteles <img src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg" alt="arrow-down-01" width="32" height="32" /></li>
          <li>Postres <img src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg" alt="arrow-down-01" width="32" height="32" /></li>
          <li>Bebestibles <img src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg" alt="arrow-down-01" width="32" height="32" /></li>
        </ul>
        <img onClick={close} id="close" src="https://cdn.hugeicons.com/icons/cancel-01-stroke-rounded.svg" alt="cancel-01" width="32" height="32" />
      </div>
    </div>
  );
}
export { Header };

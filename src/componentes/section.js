import "../estilos/section.css";
import { useEffect, useState } from "react";

function Section({
  /* FUNCIONES */
  handleImageClick,
  contador,
  imagen,
  text,
  /* FUNCIONES */
  titulo,
  torta1,
  info1,
  torta2,
  torta3,
  torta4,
  torta5,
  torta6,
  torta7,
  torta8,
  torta9,
  torta10,
  torta11,
  torta12,
  torta13,
  torta14,
  torta15,
  torta16,
}) {
  const [tablet, setTablet] = useState(false);
  const [phone, setPhone] = useState(false);
  function ToggleTablet() {
    setTablet(true);
  }
  function FalseTablet() {
    setTablet(false);
  }
  function togglePhone() {
    setPhone(true);
  }
  function falsePhone() {
    setPhone(false);
  }
  console.log("telefono", phone);
  console.log("tablet", tablet);

  useEffect(() => {
    function handleResize() {
      // Verificar el tamaño de la pantalla
      const width = window.innerWidth;

      // Ejecutar lógica basada en el tamaño de la pantalla
      if (width < 780 && width > 480) {
        ToggleTablet();
        falsePhone();
      } else if (width < 480) {
        FalseTablet();
        togglePhone();
      } else {
        falsePhone();
        FalseTablet();
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
    <div className="section">
      <div className="titulo">
        <h1>{titulo}</h1>
        <div className="barra_titulo"></div>
      </div>
      {info1}
      <div className="productos__container">
        {torta1}
        {torta2}
        {torta3}
        {torta4}
        {torta5}
        {torta6}
        {phone === true && contador === 1 && (
          <>
            
            {torta7}
            {torta8}
            {torta9}
            {torta10}
            {torta11}
            {torta12}
            {torta13}
            {torta14}
            {torta15}
            {torta16}
          </>
        )}
        {tablet === true && contador === 1 && (
          <>
            {torta7}
            {torta8}
            {torta9}
            {torta10}
            {torta11}
            {torta12}
            {torta13}
            {torta14}
            {torta15}
            {torta16}
          </>
        )}
        {tablet === false && phone === false &&(
          <>
            {torta7}
            {torta8}
          </>
        )}
        {phone === false && tablet === false && contador === 1 && (
          <>
            {torta9}
            {torta10}
            {torta11}
            {torta12}
            {torta13}
            {torta14}
            {torta15}
            {torta16}
          </>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "15px 0",
          cursor: "pointer",
        }}
        onClick={handleImageClick}
      >
        <b>{text}</b>
        <img src={imagen} alt="arrow-down-double" width="32" height="32" />
      </div>
    </div>
  );
}
export { Section };

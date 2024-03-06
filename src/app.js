import React, { useState } from "react";
import Slider from "./componentes/Slider";
import { Header } from "./componentes/Header";
import { Section } from "./componentes/section";
import { Producto } from "./componentes/Producto";
import { Info } from "./componentes/Nformacio";
import Footer from "./componentes/Footer";
import "./App.css";

import producto1 from "./pics/manjar-crema-600x599.png";
import logo from "./pics/logo.jpg";
import foto1 from "./pics/download.jpeg";
import foto2 from "./pics/download (1).jpeg";
import foto3 from "./pics/download (2).jpeg";
import foto4 from "./pics/download (3).jpeg";
import foto5 from "./pics/download (4).jpeg";
import Galeria from "./componentes/Galeria";

function App() {
  const [contador, setContador] = useState(0);
  const [tortaStyle, setTortaStyle] = useState({});
  const [imagen, setImagenSrc] = useState(
    "https://cdn.hugeicons.com/icons/arrow-down-double-stroke-rounded.svg"
  );
  const [text, setText] = useState("Mostrar mas");

  const handleImageClick = () => {
    //PRODUCTOS
    if (contador === 1) {
      setContador(0);
      setTortaStyle({ position: "absolute", opacity: 0 });
      setImagenSrc(
        "https://cdn.hugeicons.com/icons/arrow-down-double-stroke-rounded.svg"
      );
      setText("Mostrar mas");
    } else {
      setContador(1);
      setTortaStyle({ position: "relative", opacity: 1 });
      setImagenSrc(
        "https://cdn.hugeicons.com/icons/arrow-up-double-stroke-rounded.svg"
      );
      setText("Mostrar menos");
    }
  };

  const [Ojo, setOjo] = useState(0);
  const [indicepro, setIndice] = useState(0);

  const VerMas = (equis) => {
    setIndice(equis);
    Ojo === 0 ? setOjo(1) : setOjo(0);
  };
  const Close = () => {
    setIndice(0);
    Ojo === 0 ? setOjo(1) : setOjo(0);
  };

  const [header, setHeader] = useState(0);
  const headerclose = () => {
    header === 1 ? setHeader(0) : setHeader(1);
  };

  return (
    <div className="container">
      <header>
        <Header logo={logo} Ojo={header} close={headerclose} />
      </header>
      <div className="slider__container">
        <Slider
          foto1={foto1}
          foto2={foto2}
          foto3={foto3}
          foto4={foto4}
          foto5={foto5}
        />
        <div className="NombreEmpresa">
          <h1>Nombre de la empresa</h1>
        </div>
      </div>
      <Info
        close={Close}
        indice={1}
        indicepro={indicepro}
        Ojo={Ojo}
        VerMas={VerMas}
        descripcion="descripcion producto 1"
        titulo="titulo producto 1"
        precio="precio: x"
        imagen={'https://tofuu.getjusto.com/orioneat-prod-resized/jDT7ZQKWYAMvZMgr6-1200-1200.webp'}
      />
      <Info
        close={Close}
        indice={2}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://www.hogarmania.com/archivos/202310/postres-recetas-faciles-848x477x80xX.jpg'}
      />
      <Info
        close={Close}
        indice={3}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://s3.ppllstatics.com/diariovasco/www/multimedia/201909/09/media/cortadas/postres-sin-azucar-kPaE-RHqLy3xgNxM4BJcU7OrSbTL-1248x770@Diario%20Vasco-k71C-RHqLy3xgNxM4BJcU7OrSbTL-1248x770@Diario%20Vasco.jpg'}
      />
      <Info
        close={Close}
        indice={4}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://www.recetasnestle.cl/sites/default/files/2023-03/postre-en-vaso-dulce-leche.jpg_3.jpg'}
      />
      <Info
        close={Close}
        indice={5}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://www.restauranterossini.com/wp-content/uploads/2023/09/93-Rossini-e1694076443910.jpg'}
      />
      <Info
        close={Close}
        indice={6}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://comidaschilenas.com/wp-content/uploads/2019/11/Receta-de-caf%C3%A9-helado-chileno.jpg'}
      />
      <Info
        close={Close}
        indice={7}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://www.mozart.cl/wp-content/uploads/2018/04/6_MIF_1714_Torta_Mozart_1080x1080.jpg'}
      />
      <Info
        close={Close}
        indice={8}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://www.mozart.cl/wp-content/uploads/2018/12/86_MIF_2639_Torta_de_Hojarasca_Manjar_Vainilla_Chantilly_Sin_Azucar_Anadida_1080x1080-600x600.jpg'}
      />
      <Info
        close={Close}
        indice={9}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://storage.factorynine.cl/new_website/images/products/1695683778424_trozo-lemon-pie.jpg'}
      />
      <Info
        close={Close}
        indice={10}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://www.pasteleriamariate.com.pe/cdn/shop/files/piedemanzana.png?v=1694375482'}
      />
      <Info
        close={Close}
        indice={11}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://tofuu.getjusto.com/orioneat-prod/ujMprn97bNMvmaQxE-P2055433.jpg'}
      />
      <Info
        close={Close}
        indice={12}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://tofuu.getjusto.com/orioneat-prod/TYwNYTKCPt6o3tETw-Mama%209.jpeg'}
      />
      <Info
        close={Close}
        indice={13}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={'https://thumbs.dreamstime.com/z/una-rebanada-de-pie-holand%C3%A9s-apple-hecho-en-casa-un-trozo-manzana-servido-con-crema-batida-restaurante-del-strabrechtse-heide-197322801.jpg'}
      />
      <Info
        close={Close}
        indice={14}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={producto1}
      />
      <Info
        close={Close}
        indice={15}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={producto1}
      />
      <Info
        close={Close}
        indice={16}
        indicepro={indicepro}
        VerMas={VerMas}
        descripcion="descripcion producto"
        titulo="titulo producto"
        precio="precio: x"
        imagen={producto1}
      />
      <Galeria />
      <div
        className={`fondo ${Ojo === 1 ? "" : "no"} ${
          header === 1 ? "header" : ""
        }`}
      ></div>
      <section>
        <Section
          /* funciones */
          handleImageClick={handleImageClick}
          contador={contador}
          imagen={imagen}
          text={text}
          /* funciones */
          titulo="PRODUCTOS DESTACADOS"
          torta1={
            <Producto
              indice={1}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto"
              imagen={'https://tofuu.getjusto.com/orioneat-prod-resized/jDT7ZQKWYAMvZMgr6-1200-1200.webp'}
              titulo="titulo producto"
              precio="3400"
            />
          }
          torta2={
            <Producto
              indice={2}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={"https://www.hogarmania.com/archivos/202310/postres-recetas-faciles-848x477x80xX.jpg"}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta3={
            <Producto
              indice={3}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://s3.ppllstatics.com/diariovasco/www/multimedia/201909/09/media/cortadas/postres-sin-azucar-kPaE-RHqLy3xgNxM4BJcU7OrSbTL-1248x770@Diario%20Vasco-k71C-RHqLy3xgNxM4BJcU7OrSbTL-1248x770@Diario%20Vasco.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta4={
            <Producto
              indice={4}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://www.recetasnestle.cl/sites/default/files/2023-03/postre-en-vaso-dulce-leche.jpg_3.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta5={
            <Producto
              indice={5}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://www.restauranterossini.com/wp-content/uploads/2023/09/93-Rossini-e1694076443910.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta6={
            <Producto
              indice={6}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://comidaschilenas.com/wp-content/uploads/2019/11/Receta-de-caf%C3%A9-helado-chileno.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta7={
            <Producto
              indice={7}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://www.mozart.cl/wp-content/uploads/2018/04/6_MIF_1714_Torta_Mozart_1080x1080.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta8={
            <Producto
              indice={8}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://www.mozart.cl/wp-content/uploads/2018/12/86_MIF_2639_Torta_de_Hojarasca_Manjar_Vainilla_Chantilly_Sin_Azucar_Anadida_1080x1080-600x600.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta9={
            <Producto
              indice={9}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://storage.factorynine.cl/new_website/images/products/1695683778424_trozo-lemon-pie.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta10={
            <Producto
              indice={10}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://www.pasteleriamariate.com.pe/cdn/shop/files/piedemanzana.png?v=1694375482'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta11={
            <Producto
              indice={11}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://tofuu.getjusto.com/orioneat-prod/ujMprn97bNMvmaQxE-P2055433.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta12={
            <Producto
              indice={12}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://tofuu.getjusto.com/orioneat-prod/TYwNYTKCPt6o3tETw-Mama%209.jpeg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta13={
            <Producto
              indice={13}
              Ojo={Ojo}
              VerMas={VerMas}
              descripcion="Poto2"
              imagen={'https://thumbs.dreamstime.com/z/una-rebanada-de-pie-holand%C3%A9s-apple-hecho-en-casa-un-trozo-manzana-servido-con-crema-batida-restaurante-del-strabrechtse-heide-197322801.jpg'}
              titulo="titulo producto2"
              precio="34002"
            />
          }
          torta14={<Producto />}
          torta15={<Producto />}
          torta16={<Producto />}
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

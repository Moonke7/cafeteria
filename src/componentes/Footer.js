import logo from "../pics/logo.jpg";
import '../estilos/Footer.css'

export default function Footer(){
    return <div className="footer__container">
        < img id='logo' src={logo} alt= 'Logo'/>
        <div className="ubicacion">
            <h3>Ubicacion</h3>
            <p>ubicacion detalles</p>
        </div>
        <div className="Redes">
            <h3>Visita nuestras redes sociales</h3>
            <ul>
                <li> <a href="https://instagram.com"> <img src="https://cdn.hugeicons.com/icons/instagram-stroke-rounded.svg" alt="instagram" width="32" height="32" />  </a>Instagram </li>
                <li> <a href=""> <img src="https://cdn.hugeicons.com/icons/whatsapp-stroke-rounded.svg" alt="whatsapp" width="32" height="32" /> </a> Whatsapp </li>
                <li> <a href="https://facebook.com"> <img src="https://cdn.hugeicons.com/icons/facebook-02-stroke-rounded.svg" alt="facebook-02" width="32" height="32" />  </a>Facebook </li>
            </ul>
        </div>
    </div>
}
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
    

const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <a href="#"><i><FontAwesomeIcon icon={faYoutube} /></i></a>
                <a href="#"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a href="#"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                <a href="#"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
            </div>
            <div className="espacio"></div>
            <div className="informacion">
                <details>
                    <summary>
                        <h4>¿QUIÉNES SOMOS?</h4>
                    </summary>
                    <p>Nuestra empresa</p>
                    <p>Nuestra Historia</p>
                </details>
            </div>
            <div className="ayuda">
                <details>
                    <summary>
                        <h4>¿NECESITAS AYUDA?</h4>
                    </summary>
                    <p>Preguntas Frecuentes</p>
                    <p>Mapa del sitio</p>
                </details>
            </div>
            <div className="otros">
                <details>
                    <summary>
                        <h4>OTROS</h4>
                    </summary>
                    <p>Condiciones de uso</p>
                    <p>Politica de Privacidad</p>
                    <p>Politica de cookies</p>
                </details>
            </div>
            <div className="espacio1"></div>
        </footer>

    );
};
export default Footer;

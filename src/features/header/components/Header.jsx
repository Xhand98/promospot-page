import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
    

const Footer = () => {
    return (
        <header class="main-header">
    <label for="btn-nav" class="btn-nav"><FontAwesomeIcon icon={ faBars }/></label>
    <input type="checkbox" id="btn-nav" />
    <nav class="navigation">
        <ul class="menu">
            <li class="Loterias"><a href="#">Loterias</a>
                <ul class="submenu" >
                    <li class="li Leidsa">Leidsa</li>
                    
                    <li>Lotoreal</li>
                  
                    <li>Loteka</li>
                </ul>
            </li>
            <li class="Farmacias"><a href="#">Farmacias</a>
                <ul class="submenu">
                    <li>Carol</li>
                    <li>Hidalgo</li>
                </ul>
            </li>
            <li class="Supermercados"><a href="#">Supermercados</a>
                <ul class="submenu">
                    <li>Bravo</li>

                    <li>Olé</li>

                    <li>Sirena</li>

                    <li>Nacional</li>
                </ul>
            </li>
        </ul>
    </nav>


    <input type="text" placeholder="¿Que buscas?" class="buscador" />

   
</header>

    );
};
export default Footer;

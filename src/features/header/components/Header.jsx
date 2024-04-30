import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faYoutube,  faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png'
    

const Footer = () => {

    const handleKeyPress = (event) => {
        var barra = document.getElementById('searchbar')

        var barravalue = barra.value

        if (event.key === 'Enter') {
            event.preventDefault();

            console.log(barravalue);
            alert(`No hemos encontrado ${barravalue}`)
        }
    };

    var logo1 = (
        <img 
          //src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
          src={logo}
          alt="Canvas Logo"
          className='logo'
        />
    )
   

    return (
        <header className="main-header">
    <label for="btn-nav" className="btn-nav"><FontAwesomeIcon icon={ faBars }/></label>
    <input type="checkbox" id="btn-nav" />
    { logo1 }
    <h2 className="pageName">PromoSpot</h2>

    <nav className="navigation">
        <ul className="menu">
            <li className="Loterias"><a href="#">Loterias uFUFUFSA</a>
                <ul className="submenu" >
                    <li className="li Leidsa">Leidsa</li>
                    
                    <li>Lotoreal</li>
                  
                    <li>Loteka</li>
                </ul>
            </li>
            <li className="Farmacias"><a href="#">Farmacias</a>
                <ul className="submenu">
                    <li>Carol</li>
                    <li>Hidalgo</li>
                </ul>
            </li>
            <li className="Supermercados"><a href="#">Supermercados</a>
                <ul className="submenu">
                    <li>Bravo</li>

                    <li>Olé</li>

                    <li>Sirena</li>

                    <li>Nacional</li>
                </ul>
            </li>
        </ul>

    </nav>

   

   <div className="searchcont"> 
  <div className='iconcont'>
   <input type="text" placeholder="¿Que buscas?" className="buscador" id='searchbar' onKeyDown={handleKeyPress} />
   <a href=''><i><FontAwesomeIcon icon={ faYoutube }/></i></a>
   <a href=''><i><FontAwesomeIcon icon={ faInstagram }/></i></a>
   <a href=''><i><FontAwesomeIcon icon={ faFacebookF }/></i></a>
   </div>
   </div>
</header>

    );
};
export default Footer;

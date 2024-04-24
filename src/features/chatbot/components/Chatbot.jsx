import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Chatbot = () => {
    const [mensajestot, setMensajesTot] = useState(0);
    const [lock, setLock] = useState(false);
    const [username, setUsername] = useState('');

    const toCapitalize = (texto) => {
        return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
    }

    const holaswitch = [
        'Hola',
        'Holi',
        'Hola, como te va?',
        'Hola, estas bien?',
        'ola',
        'Hola~~'
    ];

    const adiosswitch = [
        'Adios',
        'Bye',
        'Adios, espero y vuelvas',
        'Adios, recuerda volver!',
        'Adios, vuelve pronto'
    ];

    const hruswitch = [
        'Tranqui bro',
        'Bien',
        'Mal',
        'Activando sistema operativo',
        'Sentado',
        'De pie',
        'Volando',
        'Bien, y tu?'
    ];

    const elseswitch = [
        'No tengo respuesta para esta consulta. :(',
        'No he entendido tu pregunta, puedes escribirla de una mejor manera?',
        'Vuelve a escribir tu pregunta, porfavor.',
        'que?',
        'No tengo respuestas para lo que acabas de decir.',
        'No se si sea error mio, pero vuelve a escribir tu mensaje',
        'Escribe un mensaje que pueda interpretar.',
        'A que te refieres?',
        'No entiendo a lo que te refieres.',
        'No entendi a lo que te referias.'
    ];

    const agregarMensaje = (mensaje) => {
        const agregar = document.getElementById('agregar');
        agregar.innerHTML += `<div class="bot-response animation"><span class="bot-name">Robó</span><p class='agregado'>${ <FontAwesomeIcon icon={ faRobot } />}${mensaje}</p></div>`;
    };

    const holareal = (objid) => {
        let textosi = '';

        if (!isNaN(objid)) {
            textosi = document.getElementById(objid).textContent;
            textosi = toCapitalize(textosi);
        }

        setMensajesTot(prev => prev + 1);

        switch (objid) {
            case 1:
                agregarMensaje(holaswitch[Math.floor(Math.random() * holaswitch.length)]);
                break;
            case 2:
                agregarMensaje(adiosswitch[Math.floor(Math.random() * adiosswitch.length)]);
                break;
            case 3:
                agregarMensaje(hruswitch[Math.floor(Math.random() * hruswitch.length)]);
                break;
            case 4:
                if (Math.random() * 10000 === 6969 || Math.random() * 10000 === 34 || Math.random() * 10000 === 6942 || Math.random() * 10000 === 69 || Math.random() * 10000 === 6996 || Math.random() * 10000 === 666 || Math.random() * 10000 === 42 || Math.random() * 10000 === 23 || Math.random() * 10000 === 496 || Math.random() * 10000 === 1) {
                    agregarMensaje('Me gusta follar perros');
                    setLock(true);
                } else {
                    agregarMensaje('Vua chaval, que epico');
                }
                break;
            default:
                if (texto.length === 0) {
                    agregarMensaje(elseswitch[10]);
                } else {
                    agregarMensaje(elseswitch[Math.floor(Math.random() * elseswitch.length)]);
                }
        }
    };

    const si = () => {
        const adt = document.getElementById('insertartexto');
        let texto = adt.value;
        let textosi = texto;
        texto = texto.toUpperCase();

        if (texto.length > 0) {
            switch (true) {
                case texto.includes('HOLA'):
                    holareal(1);
                    break;
                case texto.includes('ADIOS'):
                    holareal(2);
                    break;
                case texto.includes('COMO ESTAS'):
                    holareal(3);
                    break;
                case texto.includes('OSTIA'):
                    holareal(4);
                    break;
                default:
                    holareal();
            }
        }
    };

    const hola = () => {
        let idboton = event.target.id;

        if (isNaN(Number(idboton))) {
            idboton = idboton;
        } else {
            idboton = Number(idboton);
        }

        if (!lock) {
            if (typeof idboton === 'number') {
                holareal(idboton);
            } else {
                si();
            }
        }
    };

    const detectarmensajes = () => {
        if (mensajestot === 101) {
            clearElements();
            setMensajesTot(0);
        }
    };

    const clearElements = () => {
        setMensajesTot(0);
        setLock(false);
        const prueba = document.getElementById('agregar');
        prueba.innerHTML = '';
        const adt = document.getElementById('insertartexto');
        adt.value = '';
    };

    const ponermensaje = () => {
        hola();
        detectarmensajes();
    };


    return (
        <article className="chatbot" id="cuerpo">
        <div className="text">
            <div id="agregar"></div>
        </div>
        <div id="botones">
            <button type="button" id="1" className="botones" onClick={hola}>HOLA</button>
            <button type="button" id="3" className="botones" onClick={hola}>COMO ESTAS</button>
            <button type="button" id="4" className="botones" onClick={hola}>OSTIA</button>
            <button type="button" id="2" className="botones" onClick={hola}>ADIOS</button>
            <button type="button" id="5" onClick={clearElements} className="clear">CLEAR</button>
        </div>
        <div className="send-cont">
            <div className="btn-container">
                <button className="send-button" id="send" onClick={ponermensaje}>
                   
                    <span>Send <FontAwesomeIcon icon={ faPaperPlane } /></span>
                </button>
            </div>
            <input maxLength="50" type="text" id="insertartexto"></input>
        </div>
    </article>
    );    
};
export default Chatbot;



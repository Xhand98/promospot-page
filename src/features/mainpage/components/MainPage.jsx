import React from "react";
import "./MainPage.css";

let user = prompt("Ingrese su usuario:");

function MainPage() {
  return (
    <main>
      <div className="parrafo">
        <h1>
          ¡Bienvenido a nuestro sitio {user} !
        </h1>

        <p>
          ¡Disfruta de todas las ofertas y catálogos que tenemos disponible para ti!
        </p>
        <div className="Img">
          <img
            src="https://dummyimage.com/600x400/000/fff"
            className="carrito"
            alt="Carrito de compras"
          />
          <img
            src="https://dummyimage.com/600x400/000/fff"
            className="precio"
            alt="Etiqueta de precio"
          />
        </div>
      </div>
    </main>
  );
}

export default MainPage;

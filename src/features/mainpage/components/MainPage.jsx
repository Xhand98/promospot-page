import React from "react";
import './MainPage.css';
let user = prompt("Ingrese su usuario:")

function MainPage() {
    return (
    <main>

      <div class="parrafo">
      <p>
          !Bienvenido { user } a nuestro sitio!
        </p>

        <p>
          !Disfruta de todas las ofertas y catálogos que tenemos disponible para
          ti{" "}
        </p>
      <div class="Img">
        <img src="https://dummyimage.com/600x400/000/fff" class="carrito" alt=""/>
        <img src="https://dummyimage.com/600x400/000/fff" class="precio" alt="" />
      </div>
      </div>
    </main>
  );
}

export default MainPage;

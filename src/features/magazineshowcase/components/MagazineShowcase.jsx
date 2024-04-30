import React from "react";
import "./MagazineShowcase.css";

const ShowCase = () => {
  return (
    <div class="container-all">
      <div class="style-text">
        <h1>Apartado para revistas</h1>
        <br />
      </div>
      <div class="img-all">
        <div class="revistas-left">
          <img src="img/revista jumbo.webp" />
          <p>Jumbo</p>
          <br />
          <img src="img/revista la sirena.webp" />
          <p>La Sirena</p>
          <br />
        </div>
        <div class="revistas-center">
          <img src="img/revista bravo.webp" />
          <p>El Bravo</p>
          <br />
          <img src="img/revista dia.jpeg" />
          <p>Dia</p>
          <br />
        </div>
        <div class="revistas-right">
          <img src="img/revista el pola.jpeg" />
          <p>El SuperPola</p>
          <img src="img/revista el nacional.webp" width="70px" heigth="85px" />

          <p>El Nacional</p>
        </div>
      </div>
    </div>
  );
};
export default ShowCase;

import React, { Component } from "react";

import Cards from "./cards/Cards";

import random from "../../utils/random";
class Properties extends Component {
  render() {
    const limit = random(0);

    let nCards = [];
    for (let i = 1; i <= limit; i++) {
      nCards.push(
        <Cards
          index={i}
          diaria={random(i)}
          taxaLimpeza={random(i)}
          hospedes={random(0)}
          quartos={random(0)}
          source={`https://source.unsplash.com/${600 + i}x${600 + i}/?House`}
        />
      );
    }

    return (
      <div className="proprieties-container">
        <div className="title-p-container">
          <h1>
            Todos os imóveis <br /> <spam> {limit} imóveis </spam>
          </h1>

          <div className="ordenation-container">
            <label className="ordenation" htmlFor="ordenation"></label>

            <div className="order-button-container">
              <select className="b-default ordenation" name="ordenation" id="">
                <option selected default disabled value="A-Z">
                  Ordenar
                </option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="maior-preco">Maior preço</option>
                <option value="menor-preco">Menor preço</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card-container">{nCards}</div>
      </div>
    );
  }
}

export default Properties;

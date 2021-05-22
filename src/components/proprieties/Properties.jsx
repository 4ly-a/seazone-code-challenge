import React, { Component } from "react";
import Cards from "./Cards";
class Properties extends Component {
  render() {
    return (
      <div className="proprieties-container">
        <div className="title-p-container">
          <h1>Todos os imóveis</h1>
          <p>200 imóveis</p>

          <div className="ordenation-container">
            <label className="ordenation" htmlFor="ordenation"></label>

            <div className="order-button-container">
              <select className="b-default ordenation" name="ordenation" id="">
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="maior-preco">Maior preço</option>
                <option value="menor-preco">Menor preço</option>
              </select>
            </div>
          </div>
        </div>

        <Cards />
      </div>
    );
  }
}

export default Properties;

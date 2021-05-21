import React, { Component } from "react";
import Counter from "./Counter";
import Location from "./Location";

class Infobar extends Component {
  render() {
    return (
      <div>
        <div className="form-container">
          <form>
            <Location />

            <div className="price-container">
              <label className="price" htmlFor="price">
                Preço
              </label>
              <br />
              <select
                className="b-default select price"
                name="price"
                id="price"
              >
                <option value="300 - 1000">300 - 1000</option>
                <option value="500 - 10.000">500 - 10.000</option>
                <option value="1000 - 100.000">1000 - 100.000</option>
                <option value="2000 - 1.000.000">2000 - 1.000.000</option>
              </select>
            </div>

            <div className="check in container">
              <label className="check in" for="Check-in">
                Check-in
              </label>
              <br />

              <input
                className="b-default check in"
                type="date"
                id="Check-in"
                name="Check-in"
              />
            </div>

            <div className="check out container">
              <label className=" check out" for="Check-out">
                Check-out
              </label>
              <br />

              <input
                className="b-default check out"
                type="date"
                id="Check-out"
                name="Check-out"
              />
            </div>

            <Counter />

            <div className="button-container">
              <div className="b-default button">Buscar</div>
            </div>

            <div className="filter-container">
              <p>+ Mais filtros</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Infobar;

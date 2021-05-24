import React from "react";
import { Link } from "react-router-dom";
import airbnb from "../../../assets/img/pins/airbnb.png";
import house from "../../../assets/img/pins/house.png";

const Cards = (props) => {
  const bail = parseInt(props.diaria / 2);
  const total = props.diaria + props.taxaLimpeza + bail;

  return (
    <div className="card">
      <div className="image-container">
        <Link to="/details">
          <img className="house" alt="house" src={props.source} />
        </Link>

        <div className="circle-container">
          <img className="pin airbnb" alt="airbnb" src={airbnb} />
          <img className="pin airbnb" alt="airbnb" src={house} />
        </div>
      </div>

      <h1 className="card-name">JBM02 | Suíte Top Vista Para O Mar, resort</h1>
      <p className="card-info">
        {" "}
        Jurerê Internacional . {props.hospedes} hóspedes . {props.quartos}{" "}
        quartos
      </p>

      <div className="table-container">
        <table>
          <tr className="1-container">
            <td className="txt title">Valor da diária</td>
            <td className="txt value">R$: {props.diaria},00</td>
          </tr>
          <tr className="2-container">
            <td className="txt title">Total 5 dias</td>
            <td className="txt value">R$: {props.diaria * 5},00</td>
          </tr>
          <tr className="3-container">
            <td className="txt title">Taxa de limpeza</td>
            <td className="txt value">R$: {props.taxaLimpeza},00</td>
          </tr>
          <tr className="4-container">
            <td className="txt title">Caução</td>
            <td className="txt value">R$: {bail},00 </td>
          </tr>
          <tr className="5-container">
            <td className="txt title" id="total">
              Total
            </td>
            <td className="txt value" id="total-value">
              R$: {total},00 |
              <br />
              <spam className="txt" id="a-vista">
                {" "}
                R$: {total - total * 0.1},00 <br /> à vista
              </spam>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cards;

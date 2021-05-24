import React from "react";
import { Link } from "react-router-dom";

import deposit from "../../../assets/img/icons/deposit.svg";
import group from "../../../assets/img/icons/group.svg";
import house from "../../../assets/img/icons/house.svg";
import arrow from "../../../assets/img/icons/arrow.svg";

import yes from "../../../assets/img/detailPin/svg/y-pin.svg";
import no from "../../../assets/img/detailPin/svg/n-pin.svg";
import active from "../../../assets/img/detailPin/svg/active.svg";

const Details = (props) => {
  const [bail, tax] = [50, 20];
  const [cama, sofa] = [2, 4];
  return (
    <div>
      <div className="link-container">
        <Link to="/properties">Propriedades /</Link>
        <Link to="/details"> Detalhe</Link>
      </div>

      <div className="content-container">
        <div className="first-container">
          <div className="first-image-container">
            <img src="https://source.unsplash.com/501x501/?House" alt="house" />
          </div>
          <div className="location-container">
            <h1 className="title-location">Localização</h1>
            <p className="desc-location">Av Buzios 123</p>
            <a target="__blank" href="http://maps.google.com">
              Ver localização
            </a>
          </div>
        </div>

        <div className="sec-container">
          <div className="sec-title-container">
            <h1>ILCC Suite top alto da boa vista</h1>
            <p>ILCC Suite top alto da boa vista</p>
            <div className="subtitle-container">
              <p>8 Quartos 9 banheiros 2 camas </p>
              <img className="active-pin" src={active} alt="active pin" />
            </div>
          </div>

          <div className="sec-info-container">
            <div className="info group">
              <h1>Máx de hospedes</h1>
              <div className="icon">
                <img src={group} /> <p>6</p>
              </div>
            </div>

            <div className="info tax">
              <h1>Taxa de limpeza</h1>
              <div className="icon">
                <img src={house} />
                <p>R$: {tax},00</p>
              </div>
            </div>

            <div className="info deposit">
              <h1>Caução</h1>
              <div className="icon">
                <img src={deposit} />
                <p>R$: {bail},00 </p>
              </div>
            </div>
          </div>

          <div className="camas-container">
            <h1>Camas</h1>
            <div className="camas">
              <ul>
                <li>
                  {cama} Cama de casal <spam>duplo</spam>
                </li>
                <li>
                  {sofa} Sofá cama <spam>sala/área comum</spam>
                </li>
              </ul>
            </div>
          </div>

          <div className="regras-container">
            <h1>Regras</h1>
            <div className="regras">
              <p>
                Aceita crianças (de 0 a 12 anos) <img src={yes} />{" "}
              </p>

              <p>
                Aceita bebês (abaixo de 02 anos) <img src={yes} />{" "}
              </p>

              <p>
                Fornece berços <img src={no} />{" "}
              </p>

              <p>
                Restrição de idade mínima para fazer reserva <img src={no} />{" "}
              </p>

              <p className="more-roule">
                Mais regras <img className="arrow" src={arrow} />{" "}
              </p>
            </div>
          </div>

          <div className="comodidades-container">
            <h1>Comodidades</h1>
            <div className="comodidades">
              <p>
                Estacionamento <img src={yes} />{" "}
              </p>

              <p>
                Elevador <img src={yes} />{" "}
              </p>

              <p>
                Porteiro <img src={yes} />{" "}
              </p>

              <p>
                Piscina privada <img src={no} />{" "}
              </p>

              <p>
                Internet <img src={yes} />{" "}
              </p>

              <p>
                Wifi <img src={yes} />{" "}
              </p>

              <p>
                Ar condicionado <img src={no} />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

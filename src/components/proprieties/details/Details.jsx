import React from "react";

import { Link } from "react-router-dom";

import group from "../../../assets/img/icons/group.svg";
import house from "../../../assets/img/icons/house.svg";

import deposit from "../../../assets/img/icons/deposit.svg";

import no from "../../../assets/img/detailPin/svg/n-pin.svg";
import yes from "../../../assets/img/detailPin/svg/y-pin.svg";
import active from "../../../assets/img/detailPin/svg/active.svg";

const Details = () => {
  const [bail, tax] = [random(1), random(2)];
  const [cama, sofa, hospedes] = [random(0), random(0), random(0)];

  function random(e) {
    if (e === 0) {
      return Math.floor(Math.random() * 20) + 1;
    }
    return Math.floor(Math.random() * e * 500) + 1;
  }

  // const i = window.location.href
  //   .split(":")
  //   .filter((n) => Number(n) || n === 0)
  //   .join("");

  const source = `https://source.unsplash.com/${1280}x${720}/?House`;

  return (
    <div className="details-page-container">
      <div className="details-link-container">
        <Link className="details-link" to="/properties">
          Propriedades{" "}
        </Link>
        <spam id="details-link-arrow"> &gt; </spam>
        <Link className="details-link" to="/details">
          {" "}
          <spam>Detalhe</spam>
        </Link>
      </div>

      <div className="content-container">
        <div className="first-container">
          <div className="first-image-container">
            <img src={source} alt="house" />
          </div>

          <div className="location-container">
            <h1 className="title-location">Localização</h1>
            <p className="desc-location">
              St. Bancário Norte Q 2 Condomínio do Edificio Central Brasília S/n
              - Asa Norte, Brasília - DF, 70040-020
            </p>
            <a target="__blank" href="http://maps.google.com">
              Ver localização
            </a>
          </div>
        </div>

        <div className="sec-container">
          <div className="sec-title-container">
            <h1>ILCC Suite top alto da boa vista</h1>
            <p>Jurere internacional Florianópolis</p>
            <div className="subtitle-container">
              <p>
                {sofa} Quartos {cama} banheiros {cama} camas{" "}
              </p>
              <img className="active-pin" src={active} alt="active pin" />
            </div>
          </div>

          <div className="sec-info-container">
            <div className="info group">
              <h1>Máx de hospedes</h1>
              <div className="icon">
                <img className="group" alt="group icon" src={group} />{" "}
                <p> {hospedes} </p>
              </div>
            </div>

            <div className="info tax">
              <h1>Taxa de limpeza</h1>
              <div className="icon">
                <img alt="house icon" src={house} />
                <p>R$: {tax},00</p>
              </div>
            </div>

            <div className="info deposit">
              <h1>Caução</h1>
              <div className="icon">
                <img alt="deposit icon" src={deposit} />
                <p>R$: {bail},00 </p>
              </div>
            </div>
          </div>

          <div className="beds-container">
            <h1>Camas</h1>
            <div className="beds">
              <ul>
                <li>
                  {cama} Cama de casal: <spam>duplo</spam>
                </li>
                <li>
                  {sofa} Sofá cama: <spam>sala/área comum</spam>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid-container roules-container">
            <h1>Regras</h1>
            <div className="grid roules">
              <p>
                Aceita crianças (de 0 a 12 anos){" "}
                <img alt="accept icon" src={yes} />{" "}
              </p>

              <p>
                Aceita bebês (abaixo de 02 anos){" "}
                <img alt="accept icon" src={yes} />{" "}
              </p>

              <p>
                Fornece berços <img alt="denied icon" src={no} />{" "}
              </p>

              <p>
                Restrição de idade <img alt="denied icon" src={no} />{" "}
              </p>

              <p className="more-roules">
                Mais regras <span className="arrow">&#9660;</span>
              </p>
            </div>
          </div>

          <div className="grid-container convenience-container">
            <h1>Comodidades</h1>
            <div className="grid convenience">
              <p>
                Estacionamento <img alt="accept icon" src={yes} />{" "}
              </p>

              <p>
                Elevador <img alt="accept icon" src={yes} />{" "}
              </p>

              <p>
                Porteiro <img alt="accept icon" src={yes} />{" "}
              </p>

              <p>
                Piscina privada <img alt="denied icon" src={no} />{" "}
              </p>

              <p>
                Internet <img alt="accept icon" src={yes} />{" "}
              </p>

              <p>
                Wifi <img alt="accept icon" src={yes} />{" "}
              </p>

              <p>
                Ar condicionado <img alt="denied icon" src={no} />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

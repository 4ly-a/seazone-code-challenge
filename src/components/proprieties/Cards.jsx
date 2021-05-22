import React from "react";

const Cards = () => {
  const [imoveis, diaria, taxaLimpeza, coucao] = [200, 120, 70, 10];
  const total = imoveis + diaria + taxaLimpeza + coucao;
  return (
    <div className="card-container">
      <div className="card">
        <div className="image-container">
          <img src="https://source.unsplash.com/500x500/?House" />
          <div className="pins"></div>
        </div>

        <h1 className="card-name">
          JBM02 | Suíte Top Vista Para O Mar, resort
        </h1>
        <p className="card-info">{imoveis} imóveis</p>

        <div className="table-container">
          <table>
            <tr className="1-container">
              <td className="txt title">Valor da diária</td>
              <td className="txt value">R$: {diaria},00</td>
            </tr>
            <tr className="2-container">
              <td className="txt title">Total 5 dias</td>
              <td className="txt value">R$: {diaria * 5},00</td>
            </tr>
            <tr className="3-container">
              <td className="txt title">Taxa de limpeza</td>
              <td className="txt value">R$: {taxaLimpeza},00</td>
            </tr>
            <tr className="4-container">
              <td className="txt title">Coução</td>
              <td className="txt value">R$: {coucao},00 </td>
            </tr>
            <tr className="5-container">
              <td className="txt title" id="total">
                Total
              </td>
              <td className="txt value" id="total-value">
                R$: {total},00 |
                <spam className="txt" id="a-vista">
                  {" "}
                  R$: {total - total * 0.1},00 à vista
                </spam>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cards;

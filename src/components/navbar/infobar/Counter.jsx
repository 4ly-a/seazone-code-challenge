import React, { useState, Fragment } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(2);
  const handleclick = (e) => {
    setCounter(e === true && counter >= 2 ? counter + 1 : counter - 1);
    if (counter === 1) {
      setCounter(2);
    }
  };
  return (
    <Fragment>
      <div className="counter counter-container">
        <p className="name">Nº de hospedes</p>
        <div className="display-container b-default">
          <div className="add-button" onClick={() => handleclick(false)}>
            <p>-</p>
          </div>
          <p className="display">{counter}</p>
          <div className="add-button" onClick={() => handleclick(true)}>
            <p>+</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;

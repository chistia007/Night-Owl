/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const StuffCoffee = ({
  className,
  coffeeClassName,
  coffee = "https://c.animaapp.com/f2BJnpFp/img/coffee@2x.png",
}) => {
  return (
    <div className={`stuff-coffee ${className}`}>
      <img className={`coffee ${coffeeClassName}`} alt="Coffee" src={coffee} />
    </div>
  );
};

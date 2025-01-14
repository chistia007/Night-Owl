/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const LampTable = ({
  className,
  layerClassName,
  layer = "https://c.animaapp.com/f2BJnpFp/img/layer-17@2x.png",
}) => {
  return (
    <div className={`lamp-table ${className}`}>
      <img className={`layer-10 ${layerClassName}`} alt="Layer" src={layer} />
    </div>
  );
};

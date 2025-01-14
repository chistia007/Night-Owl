/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const StuffBoxWrapper = ({
  className,
  layerClassName,
  layer = "https://c.animaapp.com/f2BJnpFp/img/layer-47@2x.png",
}) => {
  return (
    <div className={`stuff-box-wrapper ${className}`}>
      <img className={`layer-3 ${layerClassName}`} alt="Layer" src={layer} />
    </div>
  );
};

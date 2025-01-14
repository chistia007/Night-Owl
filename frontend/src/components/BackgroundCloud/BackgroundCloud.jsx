/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const BackgroundCloud = ({
  className,
  cloudClassName,
  layerClassName,
  layer = "https://c.animaapp.com/f2BJnpFp/img/layer-95.png",
}) => {
  return (
    <div className={`background-cloud ${className}`}>
      <div className={`cloud ${cloudClassName}`}>
        <img className={`layer ${layerClassName}`} alt="Layer" src={layer} />
      </div>
    </div>
  );
};

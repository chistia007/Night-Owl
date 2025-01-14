/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UiText = ({
  className,
  textClassName,
  layerClassName,
  layer = "https://c.animaapp.com/f2BJnpFp/img/layer-15@2x.png",
}) => {
  return (
    <div className={`ui-text ${className}`}>
      <div className={`text ${textClassName}`}>
        <img className={`layer-6 ${layerClassName}`} alt="Layer" src={layer} />
      </div>
    </div>
  );
};

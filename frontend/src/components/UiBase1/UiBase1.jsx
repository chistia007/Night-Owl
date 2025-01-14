/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UiBase1 = ({
  className,
  uiClassName,
  layerClassName,
  layer = "https://c.animaapp.com/f2BJnpFp/img/layer-18@2x.png",
}) => {
  return (
    <div className={`ui-base-1 ${className}`}>
      <div className={`img-wrapper ${uiClassName}`}>
        <img className={`layer-9 ${layerClassName}`} alt="Layer" src={layer} />
      </div>
    </div>
  );
};

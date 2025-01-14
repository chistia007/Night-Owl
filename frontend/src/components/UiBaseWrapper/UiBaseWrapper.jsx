/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UiBaseWrapper = ({
  className,
  uiClassName,
  overlapGroupClassName,
  layerCopyClassName,
  layerCopy = "https://c.animaapp.com/f2BJnpFp/img/layer-20-copy@2x.png",
  layerClassName,
  layer = "https://c.animaapp.com/f2BJnpFp/img/layer-22@2x.png",
}) => {
  return (
    <div className={`ui-base-wrapper ${className}`}>
      <div className={`overlap-group-wrapper ${uiClassName}`}>
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <img
            className={`layer-copy ${layerCopyClassName}`}
            alt="Layer copy"
            src={layerCopy}
          />

          <img
            className={`layer-5 ${layerClassName}`}
            alt="Layer"
            src={layer}
          />
        </div>
      </div>
    </div>
  );
};

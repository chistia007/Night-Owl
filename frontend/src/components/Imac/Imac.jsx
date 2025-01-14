/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Imac = ({
  className,
  imacClassName,
  imacClassNameOverride,
  imac = "https://c.animaapp.com/f2BJnpFp/img/imac.png",
}) => {
  return (
    <div className={`imac ${className}`}>
      <div className={`imac-wrapper ${imacClassName}`}>
        <img
          className={`img-4 ${imacClassNameOverride}`}
          alt="Imac"
          src={imac}
        />
      </div>
    </div>
  );
};

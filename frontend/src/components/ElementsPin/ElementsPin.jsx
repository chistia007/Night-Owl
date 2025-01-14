/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ElementsPin = ({
  className,
  pinClassName,
  pinClassNameOverride,
  pin = "https://c.animaapp.com/f2BJnpFp/img/pin-1@2x.png",
}) => {
  return (
    <div className={`elements-pin ${className}`}>
      <div className={`pin ${pinClassName}`}>
        <img className={`pin-2 ${pinClassNameOverride}`} alt="Pin" src={pin} />
      </div>
    </div>
  );
};

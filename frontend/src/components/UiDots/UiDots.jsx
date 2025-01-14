/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UiDots = ({
  className,
  dotsClassName,
  dotsClassNameOverride,
  dots = "https://c.animaapp.com/f2BJnpFp/img/dots@2x.png",
}) => {
  return (
    <div className={`ui-dots ${className}`}>
      <div className={`dots ${dotsClassName}`}>
        <img
          className={`dots-2 ${dotsClassNameOverride}`}
          alt="Dots"
          src={dots}
        />
      </div>
    </div>
  );
};

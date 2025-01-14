/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UiCursor = ({
  className,
  cursorClassName,
  cursorClassNameOverride,
  cursor = "https://c.animaapp.com/f2BJnpFp/img/cursor-1@2x.png",
}) => {
  return (
    <div className={`ui-cursor ${className}`}>
      <div className={`cursor ${cursorClassName}`}>
        <img
          className={`cursor-2 ${cursorClassNameOverride}`}
          alt="Cursor"
          src={cursor}
        />
      </div>
    </div>
  );
};

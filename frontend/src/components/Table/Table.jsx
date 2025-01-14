/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Table = ({
  className,
  tableClassName,
  table = "https://c.animaapp.com/f2BJnpFp/img/table-.png",
}) => {
  return (
    <div className={`table ${className}`}>
      <img className={`img-2 ${tableClassName}`} alt="Table" src={table} />
    </div>
  );
};

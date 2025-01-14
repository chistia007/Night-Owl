/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const TableLocker = ({
  className,
  tableLockerClassName,
  tableLocker = "https://c.animaapp.com/f2BJnpFp/img/table-locker@2x.png",
}) => {
  return (
    <div className={`table-locker ${className}`}>
      <img
        className={`img-3 ${tableLockerClassName}`}
        alt="Table locker"
        src={tableLocker}
      />
    </div>
  );
};

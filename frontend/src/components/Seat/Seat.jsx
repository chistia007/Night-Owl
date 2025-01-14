/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Seat = ({
  className,
  seatClassName,
  seat = "https://c.animaapp.com/f2BJnpFp/img/seat@2x.png",
}) => {
  return (
    <div className={`seat ${className}`}>
      <img className={`img-6 ${seatClassName}`} alt="Seat" src={seat} />
    </div>
  );
};

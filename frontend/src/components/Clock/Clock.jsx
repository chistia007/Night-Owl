import React from "react";
import "./style.css";

export const Clock = ({
  className,
  clockClassName,
  clockClassNameOverride,
  clock = "https://c.animaapp.com/f2BJnpFp/img/clock@2x.png",
}) => {
  return (
    <div className={`clock ${className}`}>
      <div className={`clock-wrapper ${clockClassName}`}>
        <img
          className={`img-5 ${clockClassNameOverride}`}
          alt="Clock"
          src={clock}
        />
      </div>
    </div>
  );
};

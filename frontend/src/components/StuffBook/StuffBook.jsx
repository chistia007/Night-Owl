/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const StuffBook = ({
  className,
  bookClassName,
  overlapGroupClassName,
  bookShadowClassName,
  bookShadow = "https://c.animaapp.com/f2BJnpFp/img/book-shadow@2x.png",
  bookClassNameOverride,
  book = "https://c.animaapp.com/f2BJnpFp/img/book@2x.png",
}) => {
  return (
    <div className={`stuff-book ${className}`}>
      <div className={`book ${bookClassName}`}>
        <div className={`div ${overlapGroupClassName}`}>
          <img
            className={`book-shadow ${bookShadowClassName}`}
            alt="Book shadow"
            src={bookShadow}
          />

          <img
            className={`book-2 ${bookClassNameOverride}`}
            alt="Book"
            src={book}
          />
        </div>
      </div>
    </div>
  );
};

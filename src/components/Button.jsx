import React from "react";

const Button = function ({children, className, onClick}) {
  return (
    <button onClick={onClick} className={className}>{children}</button>
  );
}

export default Button;
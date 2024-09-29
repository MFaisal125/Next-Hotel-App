import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        "text-sm bg-primary/80 text-white rounded-secondary border-primary border-b-[5px] border-solid hover:bg-primary/90 hover:text-black transition-all delay-100" +
        ` ${className}`
      }
    >
      {children}
    </button>
  );
};

export default Button;

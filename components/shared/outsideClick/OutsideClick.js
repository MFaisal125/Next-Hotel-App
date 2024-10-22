import React, { useRef, useEffect } from "react";

const OutsideClick = ({ children, onOutsideClick, className }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <section
      ref={wrapperRef}
      className={"z-50" + (className ? ` ${className}` : "")}
    >
      {children}
    </section>
  );
};

export default OutsideClick;

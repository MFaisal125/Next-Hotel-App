import React from "react";

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-secondary/10 backdrop-blur-sm backdrop-filter bg-opacity-100"
        onClick={onClose}
      ></div>
      <div
        className={
          "z-10 bg-white rounded p-secondary shadow-lg border border-primary mx-4 h-96 overflow-y-auto scrollbar-hide lg:w-1/2 md:w-3/5 w-full" +
          ` ${className}`
        }
      >
        {children}
      </div>
    </section>
  );
};

export default Modal;

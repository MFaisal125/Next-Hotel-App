import React from "react";

const FooterCopyright = () => {
  return (
    <section>
      <p className="text-sm text-center">
        © {new Date().getFullYear()} Hotel-Booking Website bY <b>MERN sTACK</b>
      </p>
    </section>
  );
};

export default FooterCopyright;

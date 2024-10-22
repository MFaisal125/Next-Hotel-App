import React from "react";
import Logo from "../../logo/Logo";
import FooterPayment from "./FooterPayment";

const FooterLogo = () => {
  return (
    <section>
      <article className="flex md:flex-col md:justify-normal md:items-start flex-row justify-between items-center gap-y-4">
        <Logo />
        <p className="text-xs md:block hidden">
          Perfect for all kinds of travel agency. Including tours, hotel
          booking, activity/event, travel experiences, online booking, room,
          rental, holiday rental, resort rental, real estate, flight ticket, and
          more.
        </p>
        <div className="lg:hidden block">
          <FooterPayment />
        </div>
      </article>
    </section>
  );
};

export default FooterLogo;

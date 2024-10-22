import React from "react";
import FooterTop from "./footerTop/FooterTop";
import Container from "../container/Container";
import FooterBottom from "./footerBottom/FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <Container>
        <div className="flex flex-col gap-y-8">
          <FooterTop />
          <hr className="border-primary" />
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

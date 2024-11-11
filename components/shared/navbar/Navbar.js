import React from "react";
import Logo from "../logo/Logo";
import Container from "../container/Container";
import UserMenu from "./userMenu/UserMenu";

const Navbar = () => {
  return (
    <header className="bg-secondary">
      <Container>
        <nav className="py-4">
          <section className="flex flex-row justify-between items-center">
            <Logo />
            <UserMenu />
          </section>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

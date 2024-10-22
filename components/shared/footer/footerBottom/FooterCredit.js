import Link from "next/link";
import React from "react";

const FooterCredit = () => {
  return (
    <section>
      <p className="text-sm lg:text-right md:text-left text-center">
        Team Members{" "}
        <Link
          href="https://www.linkedin.com"
          className="text-primary hover:text-primary/50"
        >
          abc@gmail.com
        </Link>{" "}
        &{" "}
        <Link
          href="https://www.devhasibulislam.vercel.app"
          className="text-primary hover:text-primary/50"
        >
          @Linkedin.com
        </Link>
      </p>
    </section>
  );
};

export default FooterCredit;

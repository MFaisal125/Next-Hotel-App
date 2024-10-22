import Banner from "@/components/tours/Banner";
import Destinations from "@/components/tours/Destinations";
import Main from "@/layouts/Main";
import Head from "next/head";
import React from "react";

const Tours = () => {
  return (
    <main>
      <Head>
        <title>Hotel Booking | Tours</title>
      </Head>
      <Main>
        <Banner />
        <Destinations />
      </Main>
    </main>
  );
};

export default Tours;

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags  */}
        <meta
          name="title"
          content="Hotel Booking - Comprehensive traveling and booking platform for diverse booking needs worldwide"
        />
        <meta
          name="description"
          content="For all kinds of Booking needs. Including tours, hotel booking, travel experiences, online booking,, holiday rental, and resort rental"
        />
        <meta
          name="keywords"
          content="travel, booking, agencies, hotel, resort, rental, holiday, tours,"
        />
        <meta name="robots" content="index, follow" />
        <meta content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Muhammad Faisal" />

        <meta
          name="google-site-verification"
          content="sZPmFgCCG9yDDjVqCsdembcfkOLDihLkjCWdXkxnEVI"
        />
        <meta name="msvalidate.01" content="100EE9C6C0FC17AF45101A46F9363D0C" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content="Hotel Booking - Comprehensive traveling and booking platform for diverse booking needs worldwide"
        />
        <meta
          property="og:site_name"
          content="Hotel Booking - Comprehensive traveling and booking platform for diverse booking needs worldwide"
        />
        <meta property="og:url" content="https://next-hotel-app.vercel.app" />
        <meta
          property="og:description"
          content="Perfect for all kinds of travel agency. Including tours, hotel booking, activity/event, travel experiences, online booking, room bnb, villa rental, holiday rental, resort rental, cruises, car rentals, real estate, flight ticket, and more"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://next-hotel-app.vercel.app"
        />
        <meta
          name="twitter:title"
          content="Hotel Booking - Comprehensive traveling and booking platform for diverse booking needs worldwide"
        />
        <meta
          name="twitter:description"
          content="Perfect for all kinds of travel agency. Including tours, hotel booking, activity/event, travel experiences, online booking, room bnb, villa rental, holiday rental, resort rental, cruises, car rentals, real estate, flight ticket, and more"
        />
        <meta name="twitter:image" content="" />

        <meta name="pinterest-rich-pin" content="true" />
        <meta
          name="pinterest:title"
          content="Hotel Booking - Comprehensive travel agency platform for diverse booking needs worldwide"
        />
        <meta
          name="pinterest:description"
          content="Perfect for all kinds of travel agency. Including tours, hotel booking, activity/event, travel experiences, online booking, room bnb, villa rental, holiday rental, resort rental, cruises, car rentals, real estate, flight ticket, and more"
        />
        <meta name="pinterest:image" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

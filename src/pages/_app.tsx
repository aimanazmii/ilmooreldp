import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// If loading a variable font, you don't need to specify the font weight

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const poppins = Poppins({
//   weight: "400",
//   subsets: ["latin"],
// });
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 800,
    });
  });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Ilmoore</title>
        <link rel="icon" href="/images/icon.png" />
        <meta property="og:url" content="https://ilmoore.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ilmoore" />
        <meta property="og:description" content="Ilmoore" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/staging-ilmoore/image/upload/v1694587485/asser%20landing%20page/Picture1_wq1iby.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ilmoore.vercel.app" />
        <meta property="twitter:url" content="https://ilmoore.vercel.app/" />
        <meta name="twitter:title" content="Ilmoore" />
        <meta name="twitter:description" content="undefined" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/staging-ilmoore/image/upload/v1694587485/asser%20landing%20page/Picture1_wq1iby.jpg"
        />
      </Head>

      <main className={inter.className}>
        <Analytics />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}

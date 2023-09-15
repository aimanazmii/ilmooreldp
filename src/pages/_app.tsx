import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";

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
      </Head>

      {/* <Header /> */}
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

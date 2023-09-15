import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herohome from "@/components/Home/Herohome";
import Sechero from "@/components/Home/Sechero";
import ThirdHero from "@/components/Home/ThirdHero";
import Fourhome from "@/components/Home/Fourhome";
import Fivehome from "@/components/Home/Fivehome";
import Sixhemo from "@/components/Home/Sixhemo";
import Quotehero from "@/components/Home/Quotehero";
import Sevenhero from "@/components/Home/Sevenhero";

function index() {
  return (
    <>
      <Header />
      <Herohome />
      <Sechero />
      <ThirdHero />
      <Fourhome />
      <Fivehome />
      <Quotehero />
      <Sixhemo />
      <Sevenhero />
      <Footer />
    </>
  );
}

export default index;

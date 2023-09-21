import Sevenhero from "@/components/Home/Sevenhero";
import Fivesprout from "@/components/components-sprout/Fivesprout";
import Foursprout from "@/components/components-sprout/Foursprout";
import Header from "@/components/components-sprout/Header";
import Herosprout from "@/components/components-sprout/Herosprout";
import Secsprout from "@/components/components-sprout/Secsprout";
import Sevensprout from "@/components/components-sprout/Sevensprout";
import Sixsprout from "@/components/components-sprout/Sixsprout";
import Thirdsprout from "@/components/components-sprout/Thirdsprout";
import React from "react";

function sprout() {
  return (
    <>
      <Header />
      <Herosprout />
      <Secsprout />
      <Thirdsprout />
      <Foursprout />
      <Fivesprout />
      <Sixsprout />
      <Sevensprout />
    </>
  );
}

export default sprout;

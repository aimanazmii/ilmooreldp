import { CardBody, Typography, Card, Button } from "@material-tailwind/react";
import React from "react";

const Heroteens = () => {
  return (
    <section className="py-10 mt-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12">
          <div className="relative lg:mb-12" data-aos="fade-up">
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://stridels.com/wp-content/uploads/2023/05/Teen-Hero.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="2xl:pl-16" data-aos="fade-up">
            <div className="text-3xl text-blue-900 font-extrabold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
              A brighter approach to modern learning
            </div>

            <p className="text-lg font-sans text-semibold leading-relaxed text-gray-900 mt-9">
              Stride transforms virtual learning into limitless possibility.
            </p>

            <a href="" title="">
              <Button className="rounded-xl bg-orange-500 hover:bg-orange-600 text-light text-white mt-5">
                Why Ilmoore
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroteens;

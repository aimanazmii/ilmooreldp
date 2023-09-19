import { CardBody, Typography, Card, Button } from "@material-tailwind/react";
import React from "react";

const Heroteens = () => {
  return (
    <section className="py-10 mt-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12" data-aos="fade-up">
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://stridels.com/wp-content/uploads/2023/05/Teen-Hero.jpg"
                alt=""
              />
            </div>
            {/* <div className=" absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-teal-500 rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl animate-bounce">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-nunito italic font-bold text-white sm:text-lg">
                        “You made it so simple. My new site is so much faster
                        and easier to work with than my old site.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div> */}
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

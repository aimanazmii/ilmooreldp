import { Button } from "@material-tailwind/react";
import React from "react";

const Fourhome = () => {
  return (
    <section className="py-5 bg-white sm:py-16 lg:py-20" data-aos="fade-left">
      <div className="justify-center mt-5 text-center font-extrabold text-5xl text-blue-900">
        It’s never too early to start <br /> loving learning
      </div>
      <p className="text-center mt-5">
        Get and stay up to speed with dynamic learning solutions that support{" "}
        <br />
        teachers and learners in a fast-changing environment.
      </p>
      <div className="px-4 mx-auto mt-[50px] max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://stridels.com/wp-content/uploads/2022/11/Ready-made.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="2xl:pl-16">
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              On-demand teachers
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Immediate relief for short and longer-term staffing needs.
            </p>
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Proactive, not reactive
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Modern learning is here to stay. We’ll help you evolve.
            </p>
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Training for teachers
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Keep educators in the know with digital-forward teacher training.
            </p>
            <a href="#" title="#">
              <Button className="bg-white border border-orange-500 hover:bg-orange-500 text-gray-600 mt-5">
                test
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourhome;

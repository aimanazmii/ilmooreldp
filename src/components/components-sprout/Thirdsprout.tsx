import { Button } from "@material-tailwind/react";
import React from "react";

const Thirdsprout = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-3xl text-blue-900 font-extrabold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
          Stride Sprout: <br /> Learning starts here
        </div>
        <p className="text-md text-regular leading-relaxed text-gray-900 mt-5">
          The adventure begins with our pre-K program, Embark. Designed to
          prepare children ages 3-5 for kindergarten, it also gives a helpful
          boost to K-2 students and English language learners. 
        </p>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 md:flex-row flex-col md:items-start md:text-left text-center ">
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
            <Button className="bg-white rounded-lg border border-orange-500 hover:bg-orange-500 text-gray-600 mt-5">
              learn
            </Button>
          </a>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://stridels.com/wp-content/uploads/2022/11/Stride-Sprout.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Thirdsprout;

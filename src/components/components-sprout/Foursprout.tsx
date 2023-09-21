import { Button } from "@material-tailwind/react";
import React from "react";

const Foursprout = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-3xl text-blue-900 font-extrabold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
          Stride Kids: <br /> Where education meets enthusiasm
        </div>
        <p className="text-md text-regular leading-relaxed text-gray-900 mt-5">
          Our customized learning approach crafts a strong foundation of
          essential skills for elementary school students in grades K–5,
          nurturing a love of learning and confidence in their capabilities. 
        </p>
      </div>
      {/* gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 md:flex-row flex-col md:items-start md:text-left text-center */}
      <div className="container mx-auto flex  py-8 px-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://stridels.com/wp-content/uploads/2022/11/Stride-Kids.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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
                learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foursprout;

import React from "react";

const EightthKids = () => {
  return (
    <section className="py-5 bg-white sm:py-16 lg:py-20" data-aos="fade-up">
      <div className="justify-center text-center  mb-5 font-extrabold text-5xl text-blue-900">
        Where innovation begins
      </div>
      <p className="text-center">
        Embark Language Arts preschool curriculum builds the reading and writing{" "}
        <br />
        skills students need while opening new doors for children’s
        imaginations. 
      </p>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <div className="pl-12 pr-6 mt-7">
              <img
                className="relative w-full"
                src="https://stridels.com/wp-content/uploads/2022/11/Where-innovation-begins-1.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="2xl:pl-16">
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Power of observation
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Develop their natural curiosity by taking note of the surrounding
              world.
            </p>
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Hands-on science 
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Introduce methodical ways to gather information and investigate a
              question
            </p>
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Collaborative thinking
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Empower all types of learners to design and plan creative
              solutions together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EightthKids;

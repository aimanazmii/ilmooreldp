import React from "react";

const Herosprout = () => {
  return (
    <section className="py-10 mt-10 bg-gray-50 sm:py-16 lg:py-5">
      <div className="mt-5 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-5 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Set K-12 learners up <br />
            for a lifetime
          </h1>
          <p className="max-w-2xl mb-6 font-regular text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Meet every learner where they are, with personalized instruction
            that informs and inspires.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-100 rounded-lg focus:ring-4 focus:ring-gray-100 bg-teal-500 "
          >
            Reach Out
          </a>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://stridels.com/wp-content/uploads/2023/05/curriculum-hero.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosprout;

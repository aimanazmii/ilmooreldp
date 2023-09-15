import React from "react";

const Fivehome = () => {
  return (
    <section
      className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16"
      data-aos="fade-up=right"
    >
      <div className="justify-center text-center mb-5 font-extrabold text-5xl text-blue-900">
        Success stories start here
      </div>
      <p className="text-center mb-10">
        Stride knows that with the right support, teachers and students alike{" "}
        <br />
        can reach their full potential.
      </p>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            {" "}
            <div className="2xl:pl-16">
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                MBrighter futures ahead for learners
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Educate and inspire. With virtual courses that go beyond the
                basics, learners become achievers.. 
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="relative w-auto"
              src="https://stridels.com/wp-content/uploads/2022/11/Brighter-future-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <div className="pl-12 pr-6 mt-7">
              <img
                className="relative w-full"
                src="https://stridels.com/wp-content/uploads/2022/11/Work-Smarter.jpg "
                alt=""
              />
            </div>
          </div>

          <div className="2xl:pl-16">
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              The advantage teachers deserve
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Help teachers work smarter, not harder. Our modern learning
              solutions, training, and support prepare educators to thrive in
              the digital age..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fivehome;

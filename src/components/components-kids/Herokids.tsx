import React from "react";

const Herokids = () => {
  return (
    <div className="bg-white ">
      <section className="py-10 mt-10 sm:py-16 lg:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-10 lg:px-8">
          <div className="grid mt-5 items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div data-aos="fade-right">
              <h1 className="text-4xl font-extrabold text-black sm:text-4xl lg:text-7xl">
                The brightest beginnings for the
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-extrabold text-black sm:text-6xl lg:text-7xl">
                    littlest learners
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Jump-start your youngest learners’ futures with the Embark pre-K
                curriculum for Stride Sprouts.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title=""
                  className="rounded-3xl inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                  role="button"
                >
                  {" "}
                  Start exploring{" "}
                </a>
              </div>
            </div>

            <div data-aos="fade-left">
              <img
                className="w-599 h-720 mb-6"
                src="https://stridels.com/wp-content/uploads/2023/05/hero-sprouts.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herokids;

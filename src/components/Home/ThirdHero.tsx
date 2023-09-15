import React from "react";

const ThirdHero = () => {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <div className="text-3xl text-blue-900 font-extrabold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
              Making a <br /> measurable <br /> impact
            </div>

            <p className="text-md text-semibold leading-relaxed text-gray-900 mt-9">
              Stride Learning Solutions give schools a powerful edge by igniting
              learner curiosity, keeping progress on track, and cultivating
              lifelong success.
            </p>

            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="#"
                title=""
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Twitter
              </a>
            </p>
          </div>

          <div className="relative">
            {/* <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src=""
              alt=""
            /> */}

            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://stridels.com/wp-content/uploads/2022/10/USA-Map-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdHero;

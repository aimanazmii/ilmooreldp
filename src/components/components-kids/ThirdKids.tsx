import React from "react";

const FifthKids = () => {
  return (
    <section className="py-5 bg-white sm:py-16 lg:py-1" data-aos="fade-up">
      <div className="justify-center text-center mb-5 font-extrabold text-5xl text-blue-900">
        Make math magical
      </div>
      <p className="text-center">
        Embark Math shares the joy of numbers through hands-on learning and{" "}
        <br />
        games for fast-paced fun.
      </p>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            {" "}
            <div className="2xl:pl-16">
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                Add it up
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Develop number sense by counting and writing numbers up to
                twenty.
              </p>
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                Puzzle it out 
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Exercise the brain by investigating sets and identifying shapes
              </p>
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                Connect the dots 
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Put it all together by translating pictographs and solving
                simple problems.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="relative w-full "
              src="https://stridels.com/wp-content/uploads/2022/11/Make-math-magical-1.jpg"
              alt="gambar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthKids;

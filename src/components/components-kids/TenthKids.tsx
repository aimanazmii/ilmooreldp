import React from "react";

const TenthKids = () => {
  return (
    <section className="py-5 bg-white sm:py-16 lg:py-20" data-aos="fade-up">
      <div className="justify-center text-center  mb-5 font-extrabold text-5xl text-blue-900">
        Creativity comes alive
      </div>
      <p className="text-center">
        Embark Art unlocks the inner artist within each child, bringing their
        vision to life.
      </p>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <div className="pl-12 pr-6 mt-7">
              <img
                className="relative w-full"
                src="https://stridels.com/wp-content/uploads/2022/11/Creativity-comes-alive-1.jpg "
                alt=""
              />
            </div>
          </div>

          <div className="2xl:pl-16">
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Discover fresh perspectives
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Experience different forms of art to share the observations they
              evoke.
            </p>
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Define artistic vision 
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Think deeper about similarities and differences—what makes
              something art?
            </p>
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Create something new
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Get creative with different techniques to make something original.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenthKids;

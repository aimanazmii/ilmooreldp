import React from "react";

const FifthKids = () => {
  return (
    <section
      className="py-5 bg-white sm:py-10 md:py-1 lg:py-1"
      data-aos="fade-right"
    >
      <div className="justify-center text-center mb-5 font-extrabold text-5xl text-blue-900">
        Explore the globe
      </div>
      <p className="text-center">
        Social Studies shapes a new appreciation and deeper understanding of{" "}
        <br /> other communities and cultures.
      </p>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            {" "}
            <div className="2xl:pl-16">
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                Cultivate empathy
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Discover the diversity of people, places, and wildlife
                everywhere.
              </p>
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                Build spatial skills 
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Find the way in new spaces, from local neighborhoods to the
                world.
              </p>
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                Understand everyday science 
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Connect the dots on how the climate plays into daily life.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="relative w-full "
              src="https://stridels.com/wp-content/uploads/2022/11/Explore-the-globe-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthKids;

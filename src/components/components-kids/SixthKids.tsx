import React from "react";

const SixthKids = () => {
  return (
    <section className="py-5 bg-white sm:py-16 lg:py-20" data-aos="fade-left">
      <div className="justify-center text-center mb-5 font-extrabold text-5xl text-blue-900">
        It’s never too early to start <br /> loving learning
      </div>
      <p className="text-center">
        With Stride Sprouts, students learn from the same preschool curriculum{" "}
        <br />
        standards as the best public schools.
      </p>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://stridels.com/wp-content/uploads/2023/05/Curriculum-Sprouts-box.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="2xl:pl-16">
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Real play, real learning
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Interactive formats alongside vibrant visuals and guided
              activities delight kids of all abilities. .
            </p>
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Sustainable, guided learning 
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Modern learning takes collaboration. Our approach builds in
              caregiver support.
            </p>
            <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
              Build early confidence 
            </div>
            <p className="mt-2  text-base leading-relaxed text-gray-600">
              Awaken excitement by playing with sounds or reading and writing
              letters..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthKids;

import React from "react";

const SecKids = () => {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12" data-aos="fade-up">
              <div className="pl-12 pr-6">
                <img
                  className="relative"
                  src="https://stridels.com/wp-content/uploads/2022/11/Sprouts_Airplane.png"
                  alt=""
                />
              </div>
              <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                  <div className="px-3 py-4 sm:px-5 sm:py-8">
                    <div className="flex items-start">
                      <p className="text-3xl sm:text-4xl">👋</p>
                      <blockquote className="ml-5">
                        <p className="text-sm font-medium text-white sm:text-lg">
                          “You made it so simple. My new site is so much faster
                          and easier to work with than my old site.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:pl-16" data-aos="fade-up">
              <h2 className="text-2xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Pre-K Curriculum that starts an adventure
              </h2>
              <p className="text-lg leading-relaxed text-gray-900 mt-9">
                Created just for children ages 3-5, Embark sets them on a
                lifelong learning journey. Our learning model also closes
                education gaps to bring K-2 students and English language
                learners along for the ride.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecKids;

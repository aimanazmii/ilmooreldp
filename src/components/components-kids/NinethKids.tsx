import React from "react";

const NinethKids = () => {
  return (
    <section
      className="pt-10 overflow-hidden bg-white md:pt-0 sm:pt-16 2xl:pt-16"
      data-aos="fade-up=right"
    >
      <div className="justify-center text-center mb-5 font-extrabold text-5xl text-blue-900">
        Feel the beat 
      </div>
      <p className="text-center mb-10">
        Embark Music invites learners to express themselves creatively and build{" "}
        <br />a strong sense of self.  
      </p>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            {" "}
            <div className="2xl:pl-16">
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                Music 101
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Hands-on activities explore the structures of music, like beat
                and rhythm. 
              </p>
              <div className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl">
                Grow with confidence
              </div>
              <p className="mt-2  text-base leading-relaxed text-gray-600">
                Guided activities in a digital environment let learners
                experiment.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              className="relative w-auto"
              src="https://stridels.com/wp-content/uploads/2022/11/Feel-the-beat.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinethKids;

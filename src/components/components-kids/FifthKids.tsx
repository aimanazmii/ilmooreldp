import { Typography } from "@material-tailwind/react";
import React from "react";

const FifthKids = () => {
  return (
    <section
      className="mt-10 pt-10 overflow-hidden bg-white md:pt-0 sm:pt-16 2xl:pt-16"
      data-aos="fade-right"
    >
      <div className="justify-center text-center mb-5 font-extrabold text-5xl text-blue-900">
        Words of wonder
      </div>
      <p className="text-center mb-10">
        Embark Language Arts preschool curriculum builds the reading and writing{" "}
        <br />
        skills students need while opening new doors for children’s
        imaginations.
      </p>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <div className="2xl:pl-16">
              <Typography
                variant="h2"
                className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl"
              >
                Build early confidence 
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-2  text-base leading-relaxed text-gray-600"
              >
                Awaken excitement by playing with sounds or reading and writing
                letters.
              </Typography>
              <Typography
                variant="h2"
                className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl"
              >
                Connect through conversation
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-2  text-base leading-relaxed text-gray-600"
              >
                Encourage learning through everyday routines, like talking about
                a favorite story.
              </Typography>
              <Typography
                variant="h2"
                className="mt-5 text-xl font-bold  text-gray-600 sm:text-2xl"
              >
                Expand the imagination 
              </Typography>
              <Typography
                variant="paragraph"
                className="mt-2  text-base leading-relaxed text-gray-600"
              >
                Use dramatic play to develop love for the possibilities of
                stories.
              </Typography>
            </div>
          </div>

          <div className="relative">
            <img
              className="relative w-full "
              src="https://stridels.com/wp-content/uploads/2022/11/arctic-fox-stump.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthKids;

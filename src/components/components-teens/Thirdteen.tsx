import { Typography } from "@material-tailwind/react";
import React from "react";

const Thirdteen = () => {
  return (
    <section className="text-gray-600 bg-gray-50 body-font">
      <Typography
        variant="h1"
        className="justify-center text-center p-10 font-extrabold text-5xl text-blue-900"
      >
        Soar with Science
      </Typography>
      <Typography variant="paragraph" className="text-center">
        Guide students at every level with a comprehensive selection—from <br />
        earth sciences to advanced biology and more. 
      </Typography>
      <div className="mx-auto flex px-32 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg sm:px-6 lg:w-full md:w-full w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://stridels.com/wp-content/uploads/2022/11/Soar-with-Science-1.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 lg:text-left md:pl-16 flex flex-col md:items-between md:text-left items-center text-center">
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
              Encourage learning through everyday routines, like talking about a
              favorite story.
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
          <div className="flex lg:flex-row md:flex-col"></div>
        </div>
      </div>
    </section>
  );
};

export default Thirdteen;

import { Typography } from "@material-tailwind/react";
import React from "react";

const Fourteen = () => {
  return (
    <section>
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
      <div className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
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
                  Awaken excitement by playing with sounds or reading and
                  writing letters.
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
                  Encourage learning through everyday routines, like talking
                  about a favorite story.
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

            <div>
              <img
                className="w-full"
                src="https://stridels.com/wp-content/uploads/2022/11/Math-made-accessible-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourteen;

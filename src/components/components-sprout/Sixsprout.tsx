import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const Sixsprout = () => {
  return (
    <section className="text-gray-600 ">
      <div className="gap-8 mt-24 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 md:flex-row flex-col md:items-start md:text-left text-center">
        <div className="2xl:pl-1 mt-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-3xl text-blue-900 font-extrabold leading-tight  sm:text-4xl lg:text-4xl lg:leading-tight">
              Stride Teens: Inspire engaged education
            </div>
            <Typography variant="paragraph" className="mt-5">
              Learning looks different at every age. Be there every step of the
              way, from the formative middle school years to the fulfilling high
              school years and everything the future holds beyond.
            </Typography>

            <Button className="mt-10 text-gray-50 bg-teal-400 text-md ">
              Learn More
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="gambar"
            src="https://stridels.com/wp-content/uploads/2022/11/Stride-Teens.jpg"
          />
        </div>
      </div>
      <section title="section no 2">
        {" "}
        <div className="gap-8 mt-24 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 md:flex-row flex-col md:items-start md:text-left text-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://stridels.com/wp-content/uploads/2022/11/Stride-Future.jpg"
            />
          </div>
          <div className="2xl:pl-1 mt-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="text-3xl text-blue-900 font-extrabold leading-tight  sm:text-4xl lg:text-4xl lg:leading-tight">
                Stride Future: <br /> Winning skills for the real world
              </div>
              <Typography variant="paragraph" className="mt-5">
                {" "}
                Learning looks different at every age. Be there every step of
                the way, from the formative middle school years to the
                fulfilling high school years and everything the future holds
                beyond.
              </Typography>
              <Button className=" mt-10 text-gray-50 bg-teal-400 text-md ">
                get started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Sixsprout;

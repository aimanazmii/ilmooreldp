import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaParagraph } from "react-icons/fa";

const Secteens = () => {
  return (
    <section className="text-gray-600 body-font ">
      <Typography
        variant="h1"
        className="justify-center text-center p-10 font-extrabold text-5xl text-blue-900"
      >
        Foundational tools for <br /> a brighter future
      </Typography>
      <Typography variant="paragraph" className="text-center">
        Guide students at every level with a comprehensive selection—from <br />
        earth sciences to advanced biology and more. 
      </Typography>
      <div className=" mx-auto flex px-32 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Typography
            variant="h2"
            className="text-3xl text-blue-900  font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            Supercharge the imagination
          </Typography>

          <Typography
            variant="paragraph"
            s
            className=" font-regular  mt-5 text-gray-500"
          >
            Our reading and language arts curriculum shapes critical skills
            without losing the joy of literature. There’s something for every
            level, including Advanced Placement® and credit and skills recovery
            courses
          </Typography>
        </div>
        <div className="lg:max-w-lg lg:w-full  md:w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://stridels.com/wp-content/uploads/2022/11/Supercharge-the-imagination.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Secteens;

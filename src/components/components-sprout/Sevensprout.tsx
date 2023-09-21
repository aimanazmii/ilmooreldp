import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Sevensprout = () => {
  return (
    <section className="bg-gray-100">
      <div className="container px-5 py-24 mx-auto ">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-white py-0 px-0 relative mb-4 items-center justify-center rounded-3xl">
            <div className="text-left pl-10 relative z-10 w-full mt-10">
              <div className=" leading-tight flex flex-col-2  sm:text-4xl lg:text-4xl lg:leading-tight">
                <h1 className="text-3xl text-blue-900 font-extrabold">
                  Build a love of literacy
                </h1>
              </div>
              <Typography variant="paragraph" className="mt-5 flex flex-col-2">
                Enhance your balanced reading program and encourage a lifelong
                love of books with our <br /> robust library and literacy tools.
              </Typography>
            </div>
            <img
              alt="gallery"
              className="w-full h-full object-cover mt-5 rounded-3xl"
              src="https://stridels.com/wp-content/uploads/2023/05/Build-a-love-of-literacy-100.jpg"
            />
          </div>

          <div className="mt-5 grid max-w-screen-xl px-4 py-8 mx-auto grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="w-full sm:w-auto">
              <Card
                shadow={true}
                className="relative grid h-auto sm:h-[43rem] w-full max-w-[30rem] items-end justify-center overflow-hidden text-center bg-blue-800 rounded-3xl"
              >
                <div className="leading-tight sm:text-4xl lg:text-4xl lg:leading-tight">
                  <h1 className="text-3xl text-blue-200 font-extrabold relative py-6 md:py-14 px-6 md:px-12">
                    Recover lost ground in leaps and bounds
                  </h1>
                </div>

                <div className="mb-6 sm:mb-24 text-left text-3xl text-blue-200 font-bold relative py-6 md:py-14 px-6 md:px-12">
                  <img
                    src="https://stridels.com/wp-content/uploads/2022/11/Recover-lost-ground-in-leaps-and-bounds.png"
                    className="mb-4"
                    alt="Recovery Image"
                  />
                  <Typography
                    variant="h1"
                    className="text-3xl font-extrabold font-roboto"
                  >
                    With our online or blended credit recovery solutions, you
                    can give every student a chance to get back on the path to
                    graduation. Right where they should be.
                  </Typography>
                </div>
              </Card>
            </div>
            <div className="w-full sm:w-auto">
              <Card
                shadow={false}
                className="relative grid h-auto sm:h-[43rem] w-full max-w-[30rem] items-end justify-center overflow-hidden rounded-3xl text-center"
              >
                <div className="leading-tight sm:text-4xl lg:text-4xl lg:leading-tight">
                  <Typography className="text-2xl text-blue-500 font-extrabold relative py-6 md:py-14 px-5 md:px-12">
                    Learn through play
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="mb-4 px-6 md:px-10 text-left text-lg text-blue-200 font-bold relative"
                  >
                    Make screen time quality time with Stride Learning
                    Solutions’ game-based, modern learning tools and content.
                  </Typography>
                </div>
                <div className="mb-6 sm:mb-24  py-6 md:py-14 px-6 md:px-12">
                  <img
                    src="https://stridels.com/wp-content/uploads/2022/11/Game-based-learning.jpg"
                    alt="Game-based Learning"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* <div className="mt-5 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-5 lg:py-5 lg:grid-cols-2 sm:gap-2 sm:py-5 sm:grid-cols-1">
            <Card
              shadow={true}
              className="relative grid h-[43rem] w-full max-w-[30rem] items-end justify-center overflow-hidden text-center bg-blue-800 rounded-3xl"
            >
              <div className=" leading-tight sm:text-4xl lg:text-4xl lg:leading-tight">
                <h1 className="text-3xl text-blue-200 font-extrabold relative py-14 px-6 md:px-12">
                  Recover lost ground in leaps and bounds
                </h1>
              </div>

              <div className="mb-24 text-left text-3xl text-blue-200 font-bold relative py-14 px-6 md:px-12">
                <img
                  src="https://stridels.com/wp-content/uploads/2022/11/Recover-lost-ground-in-leaps-and-bounds.png"
                  className="mb-5"
                />
                <Typography
                  variant="h1"
                  className="text-3xl font-extrabold font-roboto"
                >
                  {" "}
                  With our online or blended credit recovery solutions, you can
                  give every student a chance to get back on the path to
                  graduation. Right where they should be.
                </Typography>
              </div>
            </Card>
            <div className="">
              <Card
                shadow={false}
                className="relative grid h-[43rem] w-full max-w-[30rem] items-end justify-center overflow-hidden rounded-3xl  text-center"
              >
                <div className=" leading-tight sm:text-4xl lg:text-4xl lg:leading-tight">
                  <Typography className="text-2xl text-blue-500 font-extrabold relative py-14 px-6 md:px-12">
                    {" "}
                    Learn through play
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="paragraph"
                    className="mb-5 px-6 md:px-12 "
                  >
                    Make screen time quality time with Stride Learning
                    Solutions’ game-based, modern learning tools and content.
                  </Typography>
                </div>
                <img src="https://stridels.com/wp-content/uploads/2022/11/Game-based-learning.jpg" />
              </Card>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Sevensprout;

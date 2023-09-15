import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Fourkids = () => {
  return (
    <section
      className="py-10 bg-gray-50 sm:py-16 lg:py-24"
      data-aos="fade-left"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="justify-center text-center mb-5 font-extrabold text-5xl text-blue-900">
          Make way, learning ahead
        </div>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <Card className="mt-6 w-96 bg-blue-300 shadow-lg">
            <CardBody>
              <img
                src="https://stridels.com/wp-content/uploads/2022/11/Game-based-learning.png"
                className="mt-1"
                height={176}
                width={176}
              />

              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-5 font-bold  "
              >
                Kid-friendly framework
              </Typography>
              <Typography className="font-semibold mt-5 text-left">
                Follow a robust roadmap designed to connect with younger
                learners. Each lesson comes with unique resources to guide
                teachers—so kids can learn best.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 bg-blue-300 shadow-lg">
            <CardBody>
              <img
                src="https://stridels.com/wp-content/uploads/2022/11/Skills-starter-pack.png"
                className="mt-1"
                height={176}
                width={176}
              />

              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-5 font-bold  "
              >
                Kid-friendly framework
              </Typography>
              <Typography className="font-semibold mt-5 text-left">
                Follow a robust roadmap designed to connect with younger
                learners. Each lesson comes with unique resources to guide
                teachers—so kids can learn best.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-96 bg-blue-300 shadow-lg">
            <CardBody>
              <img
                src="https://stridels.com/wp-content/uploads/2022/11/Kid-friendly-framework.png"
                className="mt-1"
                height={176}
                width={176}
              />

              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-5 font-bold  "
              >
                Kid-friendly framework
              </Typography>
              <Typography className="font-semibold mt-5 text-left">
                Follow a robust roadmap designed to connect with younger
                learners. Each lesson comes with unique resources to guide
                teachers—so kids can learn best.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Fourkids;

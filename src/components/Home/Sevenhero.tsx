import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import React from "react";

const Sevenhero = () => {
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
          <Card className="mt-6 w-96">
            <CardBody className="mb-20">
              <img src="https://stridels.com/wp-content/uploads/2022/10/icon-on-demand.svg" />

              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-10 text-extrabold"
              >
                Technical Guidance
              </Typography>
              <Typography className="text-left mt-5">
                Our seasoned digital education consultants are here for help
                with everything from program implementation to tailored
                professional development, tracking, data analysis, and review.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0 mb-5">{""}</CardFooter> */}
          </Card>

          <Card className="mt-6 w-96">
            <CardBody className="mb-20">
              <img src="https://stridels.com/wp-content/uploads/2022/10/training-and-development.svg" />

              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-10 text-extrabold"
              >
                Training and development
              </Typography>
              <Typography className="text-left mt-5">
                Our coaches help teachers make the most out of online and
                blended learning technology with relevant, research-backed
                training on subjects like active learning, job-embedded
                collaboration, modeling, coaching, and reflection.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0 mb-5">{""}</CardFooter> */}
          </Card>

          <Card className="mt-6 w-96">
            <CardBody className="mb-20">
              <img src="https://stridels.com/wp-content/uploads/2022/10/dedicated-technical-portal.svg" />

              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-10 text-extrabold"
              >
                Dedicated teacher portal
              </Typography>
              <Typography className="text-left mt-5">
                Get the support you need, without a wait. We’re available 24/7
                via our online Service Station.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0 mb-5">{""}</CardFooter> */}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sevenhero;

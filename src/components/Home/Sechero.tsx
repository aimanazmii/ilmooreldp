import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import React from "react";

const Sechero = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-3xl text-blue-900 font-extrabold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
            Share your toughest challenges.
          </div>
          <p className="text-lg text-semibold leading-relaxed text-gray-900 mt-9">
            Select those that apply to you—and see the plan to solve them
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-4
         lg:mt-20 lg:gap-x-1 place-items-center"
        >
          <Card className="mt-5 w-50 h-50 place-items-center bg-white rounded-xl">
            <img
              src="https://stridels.com/wp-content/uploads/2022/11/LS_Challenge_Icons_Adaptive_60.svg"
              height={90}
              width={90}
              className="mt-10 mb-2"
            />

            <CardBody>
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-1 text-xl"
              >
                Adaptive Learning
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-5 w-50 h-50 place-items-center bg-white">
            <img
              src="https://stridels.com/wp-content/uploads/2022/11/LS_Challenge_Icons_Adaptive_60.svg"
              height={90}
              width={90}
              className="mt-10 mb-2"
            />

            <CardBody>
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-1 text-xl"
              >
                Adaptive Learning
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-5 w-50 h-50 place-items-center bg-white">
            <img
              src="https://stridels.com/wp-content/uploads/2022/11/LS_Challenge_Icons_Adaptive_60.svg"
              height={90}
              width={90}
              className="mt-10 mb-2"
            />

            <CardBody>
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-1 text-xl"
              >
                Adaptive Learning
              </Typography>
            </CardBody>
          </Card>

          <Card className="mt-5 w-50 h-50 place-items-center bg-white">
            <img
              src="https://stridels.com/wp-content/uploads/2022/11/LS_Challenge_Icons_Adaptive_60.svg"
              height={90}
              width={90}
              className="mt-10 mb-2"
            />

            <CardBody>
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-1 text-xl"
              >
                Adaptive Learning
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sechero;

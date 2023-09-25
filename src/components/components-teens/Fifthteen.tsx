import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Fifthteen = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24" data-aos="fade-left">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Typography
          className="justify-center text-left mb-5 font-extrabold text-5xl text-blue-900"
          variant="h1"
        >
          Turn struggles into strengths
        </Typography>
        <Typography variant="paragraph">
          z Stride Learning Solutions online credit recovery courses are
          designed to keep life from getting in the way of success. By giving
          students flexible paths, immersive support, and extra motivation, they
          can earn credits – even without repeating the entire course.{" "}
        </Typography>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-5  lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <Card className="mt-6 w-96 bg-blue-300 shadow-lg">
            <CardBody>
              <img
                src="https://stridels.com/wp-content/uploads/2022/11/Stride-Rapid-Credit-Recovery-.png"
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
                  className="flex items-center gap-2 bg-teal-400 h-10 hover:bg-teal-300"
                >
                  Learn More
                </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="mt-6 w-96 bg-blue-300 shadow-lg">
            <CardBody>
              <img
                src="https://stridels.com/wp-content/uploads/2022/11/Credit-by-Exam.png"
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
                  className="flex items-center gap-2 bg-teal-400 h-10 hover:bg-teal-300"
                >
                  Learn More
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-96 bg-blue-300 shadow-lg">
            <CardBody>
              <img
                src="https://stridels.com/wp-content/uploads/2022/11/Middle-School-Skills-Recovery.png"
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
                  className="flex items-center gap-2 bg-teal-400 h-10 hover:bg-teal-300"
                >
                  Learn More
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Fifthteen;

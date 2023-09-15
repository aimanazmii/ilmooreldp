/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Typography, Card } from "@material-tailwind/react";
import { CardBody } from "@material-tailwind/react";

function Experience() {
  return (
    <>
      <div className="relative grid min-h-auto w-auto p-8">
        <div className="text- text-center mb-5">
          <h2 className="text-xl font-bold font-serif text-black sm:text-4xl lg:text-5xl">
            App Features
          </h2>
        </div>
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div className="md:order-1" data-aos="fade-right">
              <div className="rounded-lg border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent  hover:border-blue-gray-100/60 hover:shadow-gray-100">
                <CardBody>
                  <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mb-5 text-center"
                  >
                    Flashcard d
                  </Typography>
                  <Typography>
                    The place dd is close to Barceloneta Beach and bus stop just
                    2 min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                  </Typography>
                </CardBody>
                <img
                  className="rounded-lg gap-10"
                  src="https://ilmoore-prod.sgp1.cdn.digitaloceanspaces.com/public/courses/F0EHhZsaeCuioO97pQ0SjsxUheSgbSvCn0yykPeK.jpg"
                  height={500}
                  width={500}
                />
              </div>
            </div>

            <div className="md:order-1" data-aos="fade-right">
              <div className="rounded-lg border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent  hover:border-blue-gray-100/60 hover:shadow-gray-100">
                <CardBody>
                  <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mb-5 text-center"
                  >
                    Flashcard d
                  </Typography>
                  <Typography>
                    The place dd is close to Barceloneta Beach and bus stop just
                    2 min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                  </Typography>
                </CardBody>
                <img
                  className="rounded-lg gap-10"
                  src="https://ilmoore-prod.sgp1.cdn.digitaloceanspaces.com/public/courses/F0EHhZsaeCuioO97pQ0SjsxUheSgbSvCn0yykPeK.jpg"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 self-end md:grid-cols-2 lg:grid-cols-4">
          <a data-aos="fade-right">
            {/* (href="#" target="_blank" rel="noreferrer") kalau nak pakai link boleh guna code ni letak dalam a */}
            <Card
              shadow={false}
              className="rounded-lg border border-blue-gray-50 py-5 px-10 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-100 hover:bg-blue-500 hover:shadow-gray-900/5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 flex items-center gap-3"
              >
                <img
                  src="/icons/image 31.png"
                  className="w-auto h-10 items-center mt-0"
                />
                Quizzes
              </Typography>
            </Card>
          </a>
          <a data-aos="fade-right" data-aos-delay="1000">
            <Card
              shadow={false}
              className="rounded-lg border border-blue-gray-50 py-5 px-10 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-100 hover:bg-blue-500 hover:shadow-gray-900/5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 flex items-center gap-3"
              >
                <img
                  src="/icons/image 8.png"
                  className="w-auto h-10 items-center mt-0"
                />
                Practices
              </Typography>
            </Card>
          </a>
          <a data-aos="fade-right" data-aos-delay="1500">
            <Card
              shadow={false}
              className="rounded-lg border border-blue-gray-50 py-5 px-10 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-100 hover:bg-blue-500 hover:shadow-gray-900/5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 flex items-center gap-3"
              >
                <img
                  src="/icons/image 7.png"
                  className="w-auto h-10 items-center mt-0"
                />
                Quick Notes
              </Typography>
            </Card>
          </a>
          <a data-aos="fade-right" data-aos-delay="1500">
            <Card
              shadow={false}
              className="rounded-lg border border-blue-gray-50 py-5 px-10 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-100 hover:bg-blue-500 hover:shadow-gray-900/5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 flex items-center gap-3"
              >
                <img
                  src="/icons/image 11.png"
                  className="w-auto h-10 items-center mt-0"
                />
                Examination
              </Typography>
            </Card>
          </a>
        </div>
      </div>
    </>
  );
}

export default Experience;

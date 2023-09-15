/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Typography, Card } from "@material-tailwind/react";

function Experience() {
  return (
    <>
      <div className="relative grid min-h-auto w-auto p-8">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
              <div
                className="rounded-lg border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent  hover:border-blue-gray-100/60 hover:shadow-gray-100"
                data-aos="zoom-in"
              >
                <img
                  className="rounded-sm gap-10"
                  src="https://ilmoore-prod.sgp1.cdn.digitaloceanspaces.com/public/courses/F0EHhZsaeCuioO97pQ0SjsxUheSgbSvCn0yykPeK.jpg"
                  height={500}
                  width={500}
                />
              </div>
            </div>

            <div className="md:order-1" data-aos="zoom-in">
              <h2 className="text-xl font-bold text-black sm:text-4xl lg:text-5xl">
                Experience the power of Islamic
              </h2>
              <h2 className="text-xl font-bold mt-5 text-cyan-600 sm:texl-3xl lg:text=5xl">
                Education and Content
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Step into the future of education with
              </p>
              <img
                className="mt-5"
                src="/images/tbd.png"
                height={200}
                width={200}
              />
              {/* <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Start exploring{" "}
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 self-end md:grid-cols-2 lg:grid-cols-3">
          <a data-aos="fade-right">
            {/* (href="#" target="_blank" rel="noreferrer") kalau nak pakai link boleh guna code ni letak dalam a */}

            <Card
              shadow={false}
              className="rounded-lg border border-blue-gray-50 py-5 px-10 shadow-xl shadow-transparent  hover:border-blue-gray-100/60 "
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 flex items-center gap-3"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg> */}
                video 1
              </Typography>
              <video
                className="h-full w-full rounded-lg"
                controls
                autoPlay
                muted
              >
                <source
                  src="https://res.cloudinary.com/staging-ilmoore/video/upload/v1694416092/video/Media1_sucejf.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <img
                className="rounded-sm"
                src="https://ilmoore-prod.sgp1.cdn.digitaloceanspaces.com/public/courses/F0EHhZsaeCuioO97pQ0SjsxUheSgbSvCn0yykPeK.jpg"
                height={300}
                width="auto"
              /> */}
            </Card>
          </a>
          <a data-aos="fade-right" data-aos-delay="1000">
            <Card
              shadow={false}
              className="rounded-lg border border-blue-gray-50 py-5 px-10 shadow-xl shadow-transparent transition-allhover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 flex items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
                video 2
              </Typography>
              <video className="h-full w-full rounded-lg" controls>
                <source
                  src="https://res.cloudinary.com/staging-ilmoore/video/upload/v1694416092/video/Media1_sucejf.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <img
                className="rounded-sm"
                src="https://ilmoore-prod.sgp1.cdn.digitaloceanspaces.com/public/courses/F0EHhZsaeCuioO97pQ0SjsxUheSgbSvCn0yykPeK.jpg"
                height={300}
                width="auto"
              /> */}
            </Card>
          </a>
          <a data-aos="fade-right" data-aos-delay="1500">
            <Card
              shadow={false}
              className="rounded-lg border border-blue-gray-50 py-5 px-10 shadow-xl shadow-transparent transition-all hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 flex items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
                video 3
              </Typography>
              <video className="h-full w-full rounded-lg" controls>
                <source
                  src="https://res.cloudinary.com/staging-ilmoore/video/upload/v1694416092/video/Media1_sucejf.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <img
                className="rounded-sm"
                src="https://ilmoore-prod.sgp1.cdn.digitaloceanspaces.com/public/courses/F0EHhZsaeCuioO97pQ0SjsxUheSgbSvCn0yykPeK.jpg"
                height={300}
                width="auto"
              /> */}
            </Card>
          </a>
        </div>
      </div>
    </>
  );
}

export default Experience;

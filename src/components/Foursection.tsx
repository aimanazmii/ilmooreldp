import React from "react";

const Foursection = () => {
  return (
    <section className="bg-gray-200 bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text- text-center mb-10" data-aos="fade-down">
          <h2 className="text-xl font-bold text-black sm:text-4xl lg:text-5xl">
            Success stories start here
          </h2>
          <p className="mt-5">
            Stride knows that with the right support, teachers and students
            alike can reach their full potential.
          </p>
        </div>
        <div
          className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          data-aos="fade-right"
        >
          <div>
            <h2 className=" text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Brighter futures ahead <br />
            </h2>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              for learners.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Educate and inspire. With virtual courses that go beyond the
              basics, learners become achievers.
            </p>

            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-teal-500 rounded-md hover:bg-teal-400 focus:bg-teal-200"
              role="button"
            >
              {" "}
              See what possible{" "}
            </a>
          </div>

          <div>
            <img
              className="w-full rounded-xl shadow-lg"
              src="https://res.cloudinary.com/da8i4lcfi/image/upload/v1694415740/asser%20landing%20page/testing-min_csnxo8.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div
          className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
          data-aos="fade-left"
        >
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <div>
              <img
                className="w-full rounded-lg shadow-md"
                src="https://res.cloudinary.com/staging-ilmoore/image/upload/v1694421680/asser%20landing%20page/AdobeStock_626220505_Preview_uo0lra.jpg"
                alt=""
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                The advantage
              </h2>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                teachers deserve.
              </h2>
              <p className="mt-6 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-teal-500 rounded-md hover:bg-teal-400 focus:bg-teal-200"
                role="button"
              >
                {" "}
                See what possible{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Foursection;

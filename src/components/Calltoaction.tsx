import React from "react";

const Calltoaction = () => {
  return (
    <div>
      <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-auto md:object-left md:scale-100 md:origin-top-left"
            src="https://res.cloudinary.com/staging-ilmoore/image/upload/v1694587485/asser%20landing%20page/Picture1_wq1iby.jpg"
            alt=""
          />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Contact Us
            </h2>
            <p className="mt-4 text-base text-gray-200">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam.
            </p>
            <a
              href="#"
              title="submit form"
              className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-teal-500 rounded-md hover:bg-teal-400 "
              role="button"
            >
              {" "}
              Get In Touch{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calltoaction;

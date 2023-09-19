import React from "react";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";

const JumpeStart = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24" data-aos="fade-up">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Jump-start success
          </h2>
          <p className="mt-4 text-2xl font-medium">
            See how Stride Sprouts prepares young learners for kindergarten and
            beyond.
          </p>

          <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-teal-600 border border-transparent rounded-md sm:w-auto hover:bg-teal-700 "
              role="button"
            >
              {" "}
              Sign up For Free{" "}
            </a>

            <a
              href="#"
              title=""
              className="gap-2 inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              <PhoneArrowUpRightIcon className="w-5 gap-2" />
              Contact Sales
            </a>
          </div>

          <p className="mt-6 text-base text-black">
            Already have an account?{" "}
            <a
              href="#"
              title=""
              className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JumpeStart;

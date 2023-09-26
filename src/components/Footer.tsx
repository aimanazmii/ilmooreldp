import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const currentYear = () => new Date().getFullYear();

function Footer() {
  return (
    <footer className="py-10 bg-cyan-100 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-10"
              src="/images/ilmoore.png"
              alt="Logo Ilmoore"
            />

            <p className="text-base leading-relaxed text-gray-800 mt-7">
              nanti masukkan ayat dalam ni untuk content
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Why Ilmoore
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Student Experience{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Teacher Experience{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Solutions
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Ilmoore Business{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Ilmoore Creator{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Curriculum
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="/sprout"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Ilmoore Pre School{" "}
                </a>
              </li>

              <li>
                <a
                  href="/kids"
                  title="kids page"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Ilmoore Kids{" "}
                </a>
              </li>

              <li>
                <a
                  href="/teens"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Ilmoore Teens{" "}
                </a>
              </li>

              <li>
                <a
                  href="/adult"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Ilmoore Adults{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
              Follow Us
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title="twitter"
                  className="flex items-center justify-center"
                >
                  <FaTwitter size={30} className="text-sky-500" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="facebook"
                  className="flex items-center justify-center"
                >
                  <FaFacebook size={30} color="blue" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="tiktok"
                  className="flex items-center justify-center"
                >
                  <FaTiktok size={30} className="text-gray-800" />
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center justify-center">
                  <FaInstagram size={30} color="red" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm  text-gray-600">
          &copy; {currentYear()} Telaga Biru Digital{" "}
          <a
            className="text-blue-500 hover:underline hover:text-blue-700"
            href="#"
            title="policy company"
          >
            Policy & Privacy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Menu } from "@headlessui/react";

interface News {
  text: string;
  author: string;
  image: string;
}

const news: News[] = [
  {
    author: "Author 1",
    text: "Proident id quis commodo esse voluptate aliqua culpa velit ea. Officia occaecat enim amet consectetur esse et id. Laboris aliqua ad consequat consectetur pariatur magna.",
    image:
      "https://res.cloudinary.com/staging-ilmoore/image/upload/v1694421680/asser%20landing%20page/AdobeStock_626220505_Preview_uo0lra.jpg",
  },
  {
    author: "Author 2",
    text: "Aliqua sint labore laborum excepteur aliqua amet proident elit quis labore magna. Labore officia sunt irure proident tempor sit ad fugiat excepteur adipisicing ex. Esse sunt qui dolor ex ea qui cupidatat Lorem non dolore quis duis. Cillum eiusmod exercitation cillum non incididunt reprehenderit et occaecat consectetur tempor do duis. Eiusmod nulla ea sunt consequat laboris.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },

  // Add more quotes here
];

const QuoteCarousel: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative grid min-h-auto w-auto p-8">
      <div className="text- text-center mb-5">
        <h2 className="text-xl font-bold font-serif text-black sm:text-4xl lg:text-5xl">
          News
        </h2>
      </div>

      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="justify-center items-center md:gap-x-20 gap-y-10">
          <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={news[currentQuoteIndex].image}
                alt="card-image"
                className="h-full w-full object-cover scale-150"
              />
            </CardHeader>
            <CardBody>
              {/* <Typography variant="h6" color="gray" className="mb-4 uppercase">
                startups
              </Typography> */}
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {news[currentQuoteIndex].author}
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                {news[currentQuoteIndex].text}
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
                <div className="mt-5 mb-5 flex justify-between  ">
                  <button onClick={prevQuote} title="button" className="">
                    {" "}
                    <ChevronLeftIcon className="h-6 w-6 text-gray-500 " />
                  </button>
                  <button onClick={nextQuote} title="button">
                    {" "}
                    <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                  </button>
                  <Menu
                    as="div"
                    className="relative inline-block text-left"
                    onClick={prevQuote}
                  >
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        next
                        <ChevronRightIcon
                          className="-mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;

import { ArrowDown, Check } from "lucide-react";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Navbar from "./components/Navbar";

import thanksImg from "../public/thank-you.png";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
import QuoteForm from "./components/QuoteForm";

const GetStartPage = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <div className="pb-2 lg:grid lg:grid-cols-3 sm:pb-2 lg:gap-x-0 xl:gap-x-8 lg:pt-2 lg:pb-2">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Thank you for choosing us!
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                We're excited to hear about your project and explore how we can
                <span className="font-semibold"> help you achieve</span> your
                digital goals. Whether you're looking for a brand-new website, a
                redesign, or ongoing support, we're here to listen and provide
                expert guidance with.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check size={24} color="green" />
                    Direct one to one contact
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check size={24} color="green" />
                    Fast service provider in less than 2 weeks
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check size={24} color="green" />
                    With more high experiance developers
                  </li>
                </div>
              </ul>
              <Link to="." className="mt-6">
                <Button>
                  Start quote
                  <ArrowDown className="ml-1.5 h-5 w-5 float-right" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full justify-center px-8 sm:px-16 md:px-0 mt-0 lg:mx-0 lg:mt-20 h-fit hidden sm:flex">
            <div className="relative md:max-w-xl">
              <div className="relative pointer-events-none z-50 overflow-hidden w-[400px]">
                <img
                  src={thanksImg}
                  alt=""
                  className="pointer-events-none z-50 select-none"
                />
              </div>
            </div>
          </div>
        </div>
        <QuoteForm />
      </MaxWidthWrapper>
    </>
  );
};

export default GetStartPage;

import { motion } from "framer-motion";

import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Navbar from "./components/Navbar";
import Contuct from "./components/Contuct";

import { ArrowRight } from "lucide-react";
import ProductsCard from "./components/ProductsCard";

import { ServiceLists } from "./components/lists/ServicesLists";
import ServicesCard from "./components/ServicesCard";

import user1 from "../public/users/user-1.png";
import user2 from "../public/users/user-2.png";
import user3 from "../public/users/user-3.png";
import user4 from "../public/users/user-4.jpg";
import user5 from "../public/users/user-5.jpg";
import BusinessIdea from "../public/idea.png";

import { Star } from "lucide-react";
import { Check } from "lucide-react";

import letterImg from "../public/letter.png";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
import { ProductList } from "./components/lists/ProjectList";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

function App() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Expert Web Development Solutions for
            <span className="text-green-600"> Growing Businesses</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Offering custom, responsive web development solutions to help your
            business grow and stand out online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button>
              <Link to="/getstart">Get start →</Link>
            </Button>
            <Button className="bg-muted text-foreground hover:text-white">
              Contact us
            </Button>
          </div>
        </div>
        <section className="py-12">
          <div className="md:flex md:items-center md:justify-between mb-4">
            <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Our Projects
              </h1>
            </div>
            <Link
              to="projects"
              className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block"
            >
              see more <ArrowRight className="ml-1.5 h-5 w-5 float-right" />
            </Link>
          </div>
          <div className="relative">
            <div className="mt-6 flex items-center w-full">
              <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                {ProductList.slice(0, 4).map((list, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProductsCard
                      image={list.image}
                      websiteUrl={list.websiteUrl}
                      price={list.price}
                      description={list.description}
                      dateDeliverd={list.dateDeliverd}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="py-12">
          <h1 className="text-2xl text-center py-4 font-bold text-gray-900 sm:text-3xl">
            Services we can help with
          </h1>
          <div className="relative">
            <div className="mt-6 flex items-center w-full">
              <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                {ServiceLists.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <ServicesCard
                      heading={item.name}
                      description={item.paragraph}
                      icon={item.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="md: pb-2 pt-10 lg:grid lg:grid-cols-3 sm:pb-2 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-2">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                What makes us defferent
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                We prioritize personalized solutions, combining creativity and
                technology to deliver
                <span className="font-semibold"> impactful results </span>
                that drive growth and exceed client expectations.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check size={24} color="green" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check size={24} color="green" />
                    Fast service provider in less than 2 weeks
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check size={24} color="green" />
                    Customized strategies for every client’s unique needs.
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    src={user1}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt=""
                  />
                  <img
                    src={user2}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt=""
                  />
                  <img
                    src={user3}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt=""
                  />
                  <img
                    src={user4}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt=""
                  />
                  <img
                    src={user5}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star color="green" size={24} fill="green" />
                    <Star color="green" size={24} fill="green" />
                    <Star color="green" size={24} fill="green" />
                    <Star color="green" size={24} fill="green" />
                    <Star color="green" size={24} fill="green" />
                  </div>
                  <p>
                    <span className="font-semibold">100+</span>
                    happy customers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img
                  src={BusinessIdea}
                  className="absolute w-20 -left-6 -bottom-6 select-none"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-0 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <div className="relative pointer-events-none z-50 overflow-hidden w-[400px]">
                <img
                  src={BusinessIdea}
                  alt=""
                  className="pointer-events-none z-50 select-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="contact">
          <Contuct />
        </div>
        <footer className="mt-20 mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          <div className="border-t border-gray-200">
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <img src={letterImg} alt="" className="size-52" />
              </div>
            </div>
            <div className="relative flex item-center p-6 sm:py-8 lg:mt-0">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div
                  aria-hidden="true"
                  className="absolute bg-zinc-200 inset-0 bg-gradient-to-br bg-opacity-40"
                ></div>
              </div>
              <div className="text-center relative mx-auto max-w-sm">
                <h1 className="font-semibold text-gray-900"></h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  If you'd like to sell high-quality digital products, you can
                  do so in minutes.{" "}
                  <a
                    href=""
                    className="whitespace-nowrap font-medium text-black hover:text-zinc-900"
                  >
                    Get start →
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="py-10 md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 All Rights Reserved
              </p>
            </div>
            <div className="mt-4 flex justify-center items-center md:mt-0">
              <div className="flex space-x-8">
                <a
                  href=""
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Terms
                </a>
                <a
                  href=""
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Privacy Policy
                </a>
                <a
                  href=""
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </MaxWidthWrapper>
    </>
  );
}

export default App;

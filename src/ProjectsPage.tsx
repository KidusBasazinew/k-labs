import Navbar from "./components/Navbar";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import ProductsCard from "./components/ProductsCard";

import { ProductList } from "./components/lists/ProjectList";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <section className="py-12">
          <div className="md:flex md:items-center md:justify-between mb-4">
            <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
              <h1 className="text-2xl text-center font-bold text-gray-900 sm:text-3xl">
                Our Projects
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                We prioritize personalized solutions, combining creativity and
                technology to deliver
                <span className="font-semibold"> impactful results </span>
                that drive growth and exceed client expectations.
              </p>
            </div>
            <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
              <ul className="flex justify-center items-center gap-x-3">
                <li>All</li>
                <li>websites</li>
                <li>logos</li>
                <li>digital markating</li>
                <li>websites</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="mt-6 flex items-center w-full">
              <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                {ProductList.map((list, index) => (
                  <ProductsCard
                    key={index}
                    image={list.image}
                    websiteUrl={list.websiteUrl}
                    price={list.price}
                    description={list.description}
                    dateDeliverd={list.dateDeliverd}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default ProjectsPage;

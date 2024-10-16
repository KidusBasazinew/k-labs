import Navbar from "./components/Navbar";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import ProjectsCard from "./components/ProjectsCard";

import { ProductList } from "./components/lists/ProjectList";
import { Button } from "./components/ui/button";
import { useState } from "react";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = ProductList.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

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
                Welcome to our Projects page, where we proudly present a
                selection of our
                <span className="font-semibold"> recent work. </span>Each
                project represents our commitment to excellence, creativity, and
                innovation in web development and design. Explore our diverse
                portfolio that highlights our expertise across various
                categories,
              </p>
            </div>
            <div className="max-w-2xl px-4 mt-10 lg:max-w-4xl lg:px-0">
              <ul className="w-full grid grid-cols-2 gap-x-1 gap-y-1 sm:gap-x-4 md:grid-cols-3 md:gap-y-2 lg:gap-x-1">
                {[
                  "All",
                  "Website",
                  "Logo",
                  "Digital Marketing",
                  "Motion Graphics",
                ].map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`bg-white text-foreground shadow-none hover:bg-accent hover:text-foreground active:bg-muted-foreground 
                      ${
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : ""
                      }`}
                  >
                    {category}
                  </Button>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-20 lg:10">
            <div className="mt-6 flex items-center w-full">
              <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                {filteredProjects.map((list, index) => (
                  <ProjectsCard
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

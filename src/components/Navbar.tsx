import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-zinc-200">
          <Link to="/" className="flex z-40 text-3xl font-semibold">
            $K-<span className="text-green-600">labs</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <div className="hidden sm:block">
              <Link
                to="/"
                className={buttonVariants({
                  size: "md",
                  variant: "ghost",
                })}
              >
                Services
              </Link>
            </div>

            <Link
              to="../projects"
              className={buttonVariants({
                size: "md",
                variant: "ghost",
              })}
            >
              Projects ✨
            </Link>
            <div className="block sm:block">
              <Link
                to="#contact"
                className={buttonVariants({
                  size: "md",
                  variant: "ghost",
                })}
              >
                Contact
              </Link>
            </div>

            <div className="h-8 w-px bg-zinc-200 block" />

            <Link
              to="../getstart"
              className={buttonVariants({
                size: "sm",
                className: "flex items-center gap-1",
              })}
            >
              Let's talk
              <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

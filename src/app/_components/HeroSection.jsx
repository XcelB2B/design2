import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
// import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      <Image
        src="/images/hero-image.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="filter brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center text-white p-4 sm:p-6 md:p-10 lg:p-20">
        <div className="flex flex-col justify-center items-start w-full md:w-[40%] mb-8 md:mb-0">
          <p className="text-xs sm:text-sm md:text-base font-bold text-yellow-500 mb-2 sm:mb-3 md:mb-4">
            WELCOME TO BUILT
          </p>
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
            Your Perfect Collaborator on any Project.
          </h1>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-7 md:mb-8 max-w-full md:max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            quisquam.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 sm:py-1.5 md:py-2 lg:py-2.5 px-2 sm:px-3 md:px-4 lg:px-5 rounded-full transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center">
            <ArrowRightIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-1.5 md:mr-2 lg:mr-2.5" />
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Start</span>
          </Button>
        </div>
        <div className="flex justify-center items-center w-full md:w-[60%]">
          <Image
            src="/images/jcb.png"
            alt="Hero Image"
            width={400}
            height={400}
            className="rounded-full w-full h-auto max-w-[80%] md:max-w-full"
          />
        </div>
      </div>
      {/* <div className="absolute left-0 -bottom-5 mb-4 w-4/5 bg-yellow-500 p-2 rounded-lg overflow-hidden">
        <div className="flex items-center space-x-4">
          {[...Array(36)].map((_, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              <svg
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;

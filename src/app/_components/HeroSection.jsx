"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const companyNames = [
  "TechCorp",
  "InnovateLabs",
  "FutureSoft",
  "DataDynamics",
  "CloudNine",
  "QuantumTech",
  "CyberSphere",
  "NexusLink",
  "EcoTech",
  "SmartSys",
];

const HeroSection = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start({
        x: [0, -100 * companyNames.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      animationControls.stop();
    }
  }, [isInView, animationControls]);

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
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded-full transition duration-300 text-base flex items-center justify-center">
            <ArrowRightIcon className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden mx-2">Start</span>
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
      <div
        ref={scrollRef}
        className="absolute left-0 right-0 bottom-10 translate-y-1/2 bg-yellow-500 p-4 overflow-hidden w-4/5 mx-auto rounded-md z-10"
      >
        <motion.div
          className="flex items-center justify-start gap-4"
          animate={animationControls}
        >
          {[...Array(2)].map((_, repeatIndex) => (
            <React.Fragment key={repeatIndex}>
              {companyNames.map((name, index) => (
                <motion.div
                  key={`${repeatIndex}-${index}`}
                  className="flex-shrink-0 px-4 py-2 "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className="text-[#2A2A2A] font-bold text-lg sm:text-xl md:text-2xl"
                    style={{
                      fontFamily: "var(--font-sans)",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                    }}
                  >
                    {name}
                  </span>
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

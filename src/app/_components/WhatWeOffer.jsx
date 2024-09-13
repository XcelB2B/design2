"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaTruck, FaTools, FaHeadset } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhatWeOffer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const offerings = [
    {
      icon: <FaTruck className="text-4xl text-yellow-500 mb-4" />,
      title: "Delivery & Pickup",
      description:
        "Convenient transportation of equipment to and from your site.",
    },
    {
      icon: <FaTools className="text-4xl text-yellow-500 mb-4" />,
      title: "Equipment Maintenance & Repair",
      description: "Professional upkeep and fixing of all rented equipment.",
    },
    {
      icon: <FaHeadset className="text-4xl text-yellow-500 mb-4" />,
      title: "On-Site Support",
      description: "Expert assistance available at your location when needed.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white py-16 sm:py-14" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
          What We <span className="text-yellow-500">Offer</span>
        </h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-center text-gray-600 text-lg mb-6 sm:mb-0"
        >
          Experience Efficiency & Reliability with Every Rental
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center p-4 rounded transition-all duration-300 hover:bg-white hover:shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div>{offering.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600">{offering.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="w-full lg:w-1/2"
          >
            <Image
              src="/images/what-we-offer.png"
              width={600}
              height={600}
              alt="Equipment Rental"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

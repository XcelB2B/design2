"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiClipboard, FiTool, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

const steps = [
  {
    icon: FiClipboard,
    title: "Project Planning",
    description:
      "We start by understanding your vision and creating a detailed project plan.",
  },
  {
    icon: FiTool,
    title: "Construction",
    description:
      "Our expert team efficiently executes the project, ensuring quality at every step.",
  },
  {
    icon: FiCheckCircle,
    title: "Project Completion",
    description:
      "We deliver the finished project, meeting all quality standards and your expectations.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-16 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          How It <span className="text-yellow-500">Works</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/2 space-y-12">
            {/* how it works cards */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 "
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* how it works image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Image
                src="/images/how-it-work.jpg"
                width={600}
                height={600}
                alt="How Our Construction Process Works"
                className="rounded-lg object-cover w-full h-auto transition-all duration-300 hover:filter hover:brightness-110"
              />
              <div className="absolute inset-0 border-8 border-yellow-500 rounded-lg transform -rotate-3 transition-all duration-300 group-hover:rotate-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg"></div>
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                Construction Process
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

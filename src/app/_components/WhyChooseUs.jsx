"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiPenTool, FiCode, FiLayout, FiImage } from "react-icons/fi";

const services = [
  {
    icon: FiPenTool,
    title: "Project Design",
    description:
      "We create innovative and functional designs tailored to your specific needs and vision.",
  },
  {
    icon: FiCode,
    title: "Construction Management",
    description:
      "Our expert team ensures efficient project execution, from planning to completion.",
  },
  {
    icon: FiLayout,
    title: "Renovation Services",
    description:
      "We breathe new life into existing structures with our expert renovation services.",
  },
  {
    icon: FiImage,
    title: "Custom Solutions",
    description:
      "We provide tailored construction solutions to meet your unique requirements and challenges.",
  },
];

const countUp = [
  { end: 25, label: "Years Experience" },
  { end: 587, label: "Happy Clients" },
  { end: 350, label: "Completed Projects" },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="relative overflow-hidden bg-yellow-50 py-10 md:py-20"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center md:mb-8 mb-4 text-gray-800">
          Why <span className="text-yellow-500">Choose</span> Us
        </h2>
        <p className="text-center text-gray-600 mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-lg">
          Our construction company brings years of experience, quality
          craftsmanship, and innovative solutions to every project. We&apos;re
          committed to delivering excellence in every aspect of our work.
        </p>

        <div className="flex flex-wrap justify-center items-stretch mb-20 gap-8">
          {/* count up cards */}
          {countUp.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center w-64"
            >
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">
                <CountUp end={item.end} />
                {item.end !== 6 && "+"}
              </h3>
              <p className="text-gray-600 text-lg">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:max-w-screen-xl mx-auto">
          {/* services  cards*/}
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-none"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                // icon hover effect
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360 }}
              >
                <service.icon className="text-yellow-500 text-5xl mb-4" />
              </motion.div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        count: end,
        transition: { duration },
      });
    }
  }, [controls, end, inView, duration]);

  useEffect(() => {
    controls.start({
      count: inView ? end : 0,
      transition: { duration },
    });
  }, [controls, end, inView, duration]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      onUpdate={(latest) => setCount(Math.round(latest.count))}
    >
      {count}
    </motion.span>
  );
};

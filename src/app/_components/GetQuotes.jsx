"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaCheckCircle, FaClock } from "react-icons/fa";

import Form from "./Form";

const Excellence = [
  {
    icon: <FaUserTie className="text-yellow-500 text-3xl mb-4" />,
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience to every project.",
  },
  {
    icon: <FaCheckCircle className="text-yellow-500 text-3xl mb-4" />,
    title: "Quality Assurance",
    description:
      "We maintain the highest standards of quality in all our work.",
  },
  {
    icon: <FaClock className="text-yellow-500 text-3xl mb-4" />,
    title: "Timely Delivery",
    description:
      "We complete projects on schedule without compromising on quality.",
  },
];

const GetQuotes = () => {
  return (
    <div className="bg-neutral-100 py-10 md:py-20">
      <div className="container px-4 relative lg:max-w-screen-xl mx-auto">
        <div className="relative z-10 py-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gray-800">
            Get Your <span className="text-yellow-500">Free Quote</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm md:text-lg">
            Ready to start your project? Fill out the form below, and we&apos;ll
            provide you with a free, no-obligation quote tailored to your needs.
          </p>

          <div className="flex flex-col lg:flex-row items-start space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
              <Form title={"Get Quote"} buttonText="Get Quote" />
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <h3 className="text-2xl font-semibold text-yellow-500">
                Our Commitment to Excellence
              </h3>
              {Excellence.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500"
                >
                  {item.icon}
                  <h4 className="text-xl font-semibold mb-2 text-yellow-600">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotes;

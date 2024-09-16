"use client";

import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqData = [
  {
    question: "What types of construction projects do you handle?",
    answer:
      "We handle a wide range of construction projects, including residential, commercial, and industrial buildings. Our expertise covers new constructions, renovations, and expansions.",
  },
  {
    question: "How long does a typical construction project take?",
    answer:
      "The duration of a project depends on its size and complexity. A small renovation might take a few weeks, while a large commercial building could take several months to a year. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you offer warranties on your construction work?",
    answer:
      "Yes, we offer warranties on our construction work. The specific terms and duration of the warranty depend on the type of project and materials used. We'll provide detailed warranty information in our contract.",
  },
  {
    question: "Can you help with obtaining necessary permits for construction?",
    answer:
      "Absolutely! We have extensive experience in navigating the permit process. Our team will assist you in obtaining all necessary permits and ensure that your project complies with local building codes and regulations.",
  },
  {
    question: "What safety measures do you implement on construction sites?",
    answer:
      "Safety is our top priority. We implement strict safety protocols, provide proper training to our workers, use high-quality safety equipment, and conduct regular safety inspections to ensure a secure working environment.",
  },
  {
    question:
      "How do you handle changes or modifications during the construction process?",
    answer:
      "We understand that changes may be necessary during construction. We have a formal change order process in place to document and approve any modifications. This ensures clear communication and helps manage the project budget and timeline effectively.",
  },
];

const FAQAccordion = ({ count }) => {
  const displayedFAQs = count ? faqData.slice(0, count) : faqData;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900"
        >
          <span className="text-yellow-500">Frequently Asked</span> Questions
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {displayedFAQs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-yellow-500 transition-colors duration-300 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQAccordion;

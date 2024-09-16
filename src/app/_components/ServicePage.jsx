"use client";

import { motion } from "framer-motion";
import { Hammer, Truck, Wrench, Users, HardHat, Building } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Hammer,
      title: "Construction",
      description:
        "From residential to commercial, we handle all types of construction projects with expertise.",
    },
    {
      icon: Truck,
      title: "Equipment Rental",
      description:
        "We offer a wide range of construction equipment for rent to suit your project needs.",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description:
        "Our team provides top-notch maintenance services to keep your equipment in prime condition.",
    },
    {
      icon: Users,
      title: "Consulting",
      description:
        "Expert advice on project planning, management, and execution to ensure your success.",
    },
    {
      icon: HardHat,
      title: "Safety Training",
      description:
        "Comprehensive safety training programs to maintain a secure work environment.",
    },
    {
      icon: Building,
      title: "Project Management",
      description:
        "End-to-end project management services to deliver your projects on time and within budget.",
    },
  ];

  return (
    <div className="container px-5 py-16 sm:py-14 space-y-24 lg:max-w-screen-xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive range of construction and equipment rental
          services to meet all your project needs. Our expertise and commitment
          to quality ensure your success.
        </p>
      </motion.section>

      <motion.section className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg space-y-4 hover:shadow-xl transition-shadow"
          >
            <service.icon className="w-12 h-12 text-yellow-500" />
            <h2 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 p-12 rounded-lg text-center space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Contact us today to discuss how we can help bring your construction
          vision to life.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg"
        >
          Get a Quote
        </motion.button>
      </motion.section>
    </div>
  );
}

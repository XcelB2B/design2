"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHome,
  FaIndustry,
  FaRoad,
  FaWrench,
  FaHardHat,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router = useRouter();
  const services = [
    {
      icon: FaBuilding,
      title: "Commercial Construction",
      description:
        "From office buildings to retail spaces, we bring your commercial visions to life.",
      image: "/images/commercial-construction.jpg",
    },
    {
      icon: FaHome,
      title: "Residential Construction",
      description:
        "Creating dream homes with attention to detail and quality craftsmanship.",
      image: "/images/residential-construction.jpg",
    },
    {
      icon: FaIndustry,
      title: "Industrial Construction",
      description:
        "Building efficient and durable industrial facilities to power your business.",
      image: "/images/industrial-construction.jpg",
    },
    {
      icon: FaRoad,
      title: "Infrastructure Development",
      description:
        "Constructing roads, bridges, and utilities to connect communities.",
      image: "/images/infrastructure-development.jpg",
    },
    {
      icon: FaWrench,
      title: "Renovation & Remodeling",
      description:
        "Transforming existing spaces with our renovation expertise.",
      image: "/images/renovation-remodeling.jpg",
    },
    {
      icon: FaHardHat,
      title: "Project Management",
      description:
        "Overseeing construction projects of all sizes with precision and efficiency.",
      image: "/images/project-management.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <main className="container mx-auto px-4 py-12 space-y-24 ">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer a wide range of construction
            services tailored to your needs. Our expert team ensures quality,
            efficiency, and innovation in every project.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-screen-xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-md p-1 shadow overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md overflow-hidden"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/services/service")}
                  className="bg-yellow-500 text-white px-4 py-2 mt-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-yellow-600 text-white py-16 rounded-lg"
        >
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl font-bold">Why Choose ConstructCo?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Team",
                  description: "Skilled professionals with years of experience",
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous quality control at every stage",
                },
                {
                  title: "Timely Delivery",
                  description: "We respect deadlines and deliver on time",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white text-gray-900 p-6 rounded-lg shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center space-y-8 bg-neutral-200 p-12 rounded-lg lg:max-w-screen-xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today for a free consultation. Let&apos;s bring your
            construction vision to life!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-600 transition-colors"
          >
            Get in Touch
          </motion.button>
        </motion.section>
      </main>
    </div>
  );
}

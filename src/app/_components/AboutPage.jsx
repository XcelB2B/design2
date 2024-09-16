"use client";

import { motion } from "framer-motion";
import { HardHat, Truck, Building2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container px-5 py-16 sm:py-14 space-y-24 lg:max-w-screen-xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center "
      >
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            About Our Construction Excellence
          </h1>
          <p className="text-lg text-gray-600">
            With over two decades of experience, we&apos;ve built a reputation
            for delivering top-notch construction services and providing
            high-quality machinery rentals. Our commitment to excellence and
            innovation sets us apart in the industry.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
          >
            Learn More
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/about-page.jpg"
            alt="Construction site"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </motion.section>

      <section className="grid md:grid-cols-3 gap-12">
        {[
          {
            icon: HardHat,
            title: "Expert Team",
            description:
              "Our skilled professionals bring years of experience and expertise to every project, ensuring top-quality results.",
          },
          {
            icon: Truck,
            title: "Modern Equipment",
            description:
              "We offer a wide range of state-of-the-art machinery for rent, perfect for any construction project.",
          },
          {
            icon: Building2,
            title: "Diverse Projects",
            description:
              "From residential builds to large-scale commercial developments, we have the capability to handle it all.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg space-y-4"
          >
            <item.icon className="w-12 h-12 text-yellow-500" />
            <h2 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 p-12 rounded-lg text-center space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Our Commitment to Excellence
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We strive to exceed expectations on every project, big or small. Our
          dedication to quality, safety, and customer satisfaction is
          unwavering.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg"
        >
          Get in Touch
        </motion.button>
      </motion.section>
    </div>
  );
}

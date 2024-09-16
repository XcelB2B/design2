"use client";

import { motion } from "framer-motion";
import { Truck, Crane, Bulldozer, Drill, Shovel, Hammer } from "lucide-react";
import Image from "next/image";

const equipmentList = [
  {
    name: "Excavator",
    icon: Shovel,
    description: "Powerful excavators for digging and material handling.",
    image: "/images/jcb.png",
  },
  {
    name: "Bulldozer",
    icon: Bulldozer,
    description: "Heavy-duty bulldozers for earthmoving and land clearing.",
    image: "/images/jcb.png",
  },
  {
    name: "Crane",
    icon: Crane,
    description: "Versatile cranes for lifting and moving heavy materials.",
    image: "/images/jcb.png",
  },
  {
    name: "Dump Truck",
    icon: Truck,
    description: "Large capacity dump trucks for efficient material transport.",
    image: "/images/jcb.png",
  },
  {
    name: "Concrete Mixer",
    icon: Drill,
    description: "Reliable concrete mixers for on-site concrete production.",
    image: "/images/jcb.png",
  },
  {
    name: "Jackhammer",
    icon: Hammer,
    description: "Powerful jackhammers for breaking up concrete and rock.",
    image: "/images/jcb.png",
  },
];

export default function EquipmentPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">Our Equipment</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a wide range of high-quality construction equipment for rent.
          From excavators to jackhammers, we have the tools you need to get the
          job done right.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {equipmentList.map((equipment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Image
              src={equipment.image}
              alt={equipment.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <equipment.icon className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {equipment.name}
                </h2>
              </div>
              <p className="text-gray-600">{equipment.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold shadow-md text-sm"
              >
                Rent Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gray-100 p-12 rounded-lg text-center space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Need Custom Equipment?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t see what you&apos;re looking for? We offer a wide range of
          specialized equipment. Contact us to discuss your specific needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg"
        >
          Contact Us
        </motion.button>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Why Rent from Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality Equipment",
              description:
                "We maintain our equipment to the highest standards, ensuring reliability and performance.",
            },
            {
              title: "Flexible Rental Terms",
              description:
                "Choose from daily, weekly, or monthly rentals to suit your project timeline and budget.",
            },
            {
              title: "Expert Support",
              description:
                "Our team is always available to provide guidance on equipment selection and operation.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

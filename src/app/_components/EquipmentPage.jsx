"use client";

import { motion } from "framer-motion";
import {
  FaTruck,
  FaBuilding,
  FaTractor,
  FaTools,
  FaHammer,
  FaCalendarAlt,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const equipmentList = [
  {
    name: "Excavator",
    icon: FaTools,
    description:
      "Powerful excavators for digging and material handling, suitable for various construction projects.",
    image: "/images/excavator.jpg",
    dailyRate: "₹18,500",
    weeklyRate: "₹1,11,000",
  },
  {
    name: "Bulldozer",
    icon: FaTractor,
    description:
      "Heavy-duty bulldozers for earthmoving and land clearing, perfect for large-scale site preparation.",
    image: "/images/bulldozer.jpg",
    dailyRate: "₹22,200",
    weeklyRate: "₹1,33,200",
  },
  {
    name: "Crane",
    icon: FaBuilding,
    description:
      "Versatile cranes for lifting and moving heavy materials, essential for high-rise construction.",
    image: "/images/crane.jpg",
    dailyRate: "₹29,600",
    weeklyRate: "₹1,77,600",
  },
  {
    name: "Dump Truck",
    icon: FaTruck,
    description:
      "Large capacity dump trucks for efficient material transport on and off construction sites.",
    image: "/images/dump-truck.jpg",
    dailyRate: "₹14,800",
    weeklyRate: "₹88,800",
  },
  {
    name: "Concrete Mixer",
    icon: FaTools,
    description:
      "Reliable concrete mixers for on-site concrete production, ensuring consistent quality.",
    image: "/images/concrete-mixer.jpg",
    dailyRate: "₹11,100",
    weeklyRate: "₹66,600",
  },
  {
    name: "Jackhammer",
    icon: FaHammer,
    description:
      "Powerful jackhammers for breaking up concrete and rock, ideal for demolition work.",
    image: "/images/jackhammer.jpg",
    dailyRate: "₹7,400",
    weeklyRate: "₹44,400",
  },
];

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 space-y-24">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2
            initial="hidden"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 mt-7 text-gray-900"
          >
            <span className="text-yellow-500">Equipment</span> Rental
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of high-quality construction equipment for
            rent. From excavators to jackhammers, we have the tools you need to
            get the job done right. Our well-maintained fleet ensures
            reliability and efficiency for your projects.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-screen-xl mx-auto"
        >
          {equipmentList.map((equipment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-md shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-44">
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <equipment.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {equipment.name}
                </h3>
                <p className="text-gray-600">{equipment.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Daily: {equipment.dailyRate}</span>
                  <span>Weekly: {equipment.weeklyRate}</span>
                </div>
                <Link href="/contact" passHref>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold mt-4 hover:bg-yellow-600 transition-colors"
                  >
                    Contact Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-yellow-600 text-white py-16 rounded-lg lg:max-w-screen-xl mx-auto"
        >
          <div className="container mx-auto px-4 md:px-10 text-center space-y-12">
            <h2 className="text-3xl font-bold">Why Rent from ConstructCo?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaTruck,
                  title: "Quality Equipment",
                  description:
                    "Our well-maintained and regularly serviced machinery ensures reliability and peak performance on your job site.",
                },
                {
                  icon: FaCalendarAlt,
                  title: "Flexible Rental Terms",
                  description:
                    "Choose from daily, weekly, or monthly rental options to best suit your project timeline and budget.",
                },
                {
                  icon: FaPhone,
                  title: "Expert Support",
                  description:
                    "Our team provides on-site training, technical assistance, and 24/7 support for all rented equipment.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white text-gray-900 p-6 rounded-lg shadow-xl"
                >
                  <item.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
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
          className="grid md:grid-cols-2 gap-12 items-center lg:max-w-screen-xl mx-auto py-10 md:py-14 px-5"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Rental Process</h2>
            <p className="text-gray-600">
              Renting equipment from ConstructCo is quick and easy. Follow these
              simple steps to get the machinery you need for your project:
            </p>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-gray-600">
                Browse our equipment catalog and select the items you need.
              </li>
              <li className="text-gray-600">
                Choose your rental duration (daily, weekly, or monthly).
              </li>
              <li className="text-gray-600">
                Submit your rental request online or give us a call.
              </li>
              <li className="text-gray-600">
                Our team will confirm availability and provide a quote.
              </li>
              <li className="text-gray-600">
                Complete the rental agreement and make the payment.
              </li>
              <li className="text-gray-600">
                Pick up the equipment or have it delivered to your site.
              </li>
            </ol>
            <p className="text-gray-600">
              Need help selecting the right equipment? Our experts are here to
              assist you in choosing the best machinery for your specific
              project needs.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative h-full rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/equipment-rental-process.jpg"
              alt="Equipment rental process"
              layout="fill"
              objectFit="cover"
              className="object-contain"
            />
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center space-y-8 bg-neutral-200 p-12 rounded-lg lg:max-w-screen-xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Need Custom Equipment?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t see what you&apos;re looking for? We offer a wide range
            of specialized equipment and can source specific machinery for your
            unique project requirements. Contact us to discuss your needs and
            get a customized rental solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-600 transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
            <Link href="/services" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-300 transition-colors"
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

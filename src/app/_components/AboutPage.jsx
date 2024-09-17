"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center my-8 text-gray-900"
      >
        <span className="text-yellow-500">About </span> Us
      </motion.h2>
      <main className="container mx-auto  py-12 space-y-24">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center lg:max-w-screen-xl mx-auto"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Building Dreams Since 1995
            </h2>
            <p className="text-lg text-gray-600">
              ConstructCo has been at the forefront of the construction industry
              for over 25 years. Our journey from a small family business to a
              leading regional construction company is a testament to our
              unwavering commitment to quality, innovation, and customer
              satisfaction.
            </p>
            <ul className="space-y-2  ">
              {[
                "25+ Years of Excellence",
                "500+ Completed Projects",
                "100% Client Satisfaction",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about-page.jpg"
              alt="ConstructCo team"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-12 lg:max-w-screen-xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8 ">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for excellence in every project we undertake.",
              },
              {
                icon: Users,
                title: "Teamwork",
                description:
                  "Collaboration is key to our success and innovation.",
              },
              {
                icon: Clock,
                title: "Timeliness",
                description:
                  "We respect deadlines and deliver on time, every time.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "We embrace new technologies and methods in construction.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-xl space-y-4 hover:shadow-2xl transition-shadow"
              >
                <item.icon className="w-12 h-12 text-yellow-500 mx-auto" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative py-16"
        >
          <div className="absolute inset-0 bg-yellow-600 transform -skew-y-3"></div>
          <div className="relative z-10 text-white text-center space-y-8">
            <h2 className="text-3xl font-bold">Our Achievements</h2>
            <div className="grid md:grid-cols-4 gap-8 lg:max-w-screen-xl mx-auto">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "50+", label: "Awards Won" },
                { number: "1000+", label: "Happy Clients" },
                { number: "25+", label: "Years of Experience" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-4xl font-bold">{item.number}</div>
                  <div className="text-lg">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center space-y-8 lg:max-w-screen-xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ritesh",
                role: "CEO",
                image: "/images/ritesh.jpg",
              },
              {
                name: "Akash Sachan",
                role: "COO",
                image: "/images/akash.jpg",
              },
              {
                name: "Ashish Rawat",
                role: "CTO",
                image: "/images/ashish.jpg",
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-xl space-y-4 hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                />
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

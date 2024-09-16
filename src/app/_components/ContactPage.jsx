"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Form from "./Form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <main className="container mx-auto px-4 py-12 space-y-24 ">
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
            <span className="text-yellow-500">Get </span> in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your project? We&apos;re here to
            help. Reach out to us and let&apos;s bring your construction vision
            to life.
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-12 lg:max-w-screen-xl mx-auto">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91 9871228880", label: "Phone" },
                { icon: Mail, text: "hello@desirediv", label: "Email" },
                {
                  icon: MapPin,
                  text: "Malik Builcon, Commercial Plaza, T-16, Plot no-6, Pocket 5, Sector 12 Dwarka, Dwarka, New Delhi, Delhi 110075",
                  label: "Address",
                },
                {
                  icon: Clock,
                  text: "Monday - Friday: 10:00 AM - 6:00 PM",
                  label: "Working Hours",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Form buttonText={"Send Message"} title={"Send Us a Message"} />
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=" text-black py-10 rounded-lg"
        >
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl font-bold">Visit Our Office</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We&apos;d love to meet you in person. Stop by our office to
              discuss your project or see our equipment firsthand.
            </p>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.234193737461!2d77.04311527495526!3d28.59275028588715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1726478208568!5m2!1sen!2sin"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

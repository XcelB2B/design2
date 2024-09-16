"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Form from "./Form";

export default function ContactPage() {
  return (
    <div className="container px-5 py-16 sm:py-14 space-y-24 lg:max-w-screen-xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or ready to start your project? Get in touch with us
          today. We&apos;re here to help bring your construction vision to life.
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
          <div className="space-y-4">
            {[
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: Mail, text: "info@constructionco.com" },
              {
                icon: MapPin,
                text: "123 Builder Street, Construction City, CC 12345",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <item.icon className="w-6 h-6 text-yellow-500" />
                <span className="text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <Form buttonText={"Send Message"} title={"Send Us a Message"} />
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 p-12 rounded-lg text-center space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900">Visit Our Office</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We&apos;d love to meet you in person. Stop by our office to discuss
          your project or see our equipment firsthand.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.234193737461!2d77.04311527495526!3d28.59275028588715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1726469968684!5m2!1sen!2sin"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}

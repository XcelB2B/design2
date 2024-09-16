"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AppointmentDialog = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !emailRegex.test(value) ? "Invalid email address" : "";
        break;
      case "phone":
        const phoneRegex = /^\d{10}$/;
        error = !phoneRegex.test(value)
          ? "Invalid phone number (10 digits required)"
          : "";
        break;
      case "message":
        error = value.trim() === "" ? "Message is required" : "";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (errors[key]) formErrors[key] = errors[key];
    });

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);

        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-yellow-500 text-gray-200 px-4 py-2 rounded-full hover:bg-yellow-600 text-lg font-semibold">
          Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Book an Appointment
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Fill out the form below to schedule your appointment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="flex items-center text-gray-700 dark:text-gray-200"
            >
              <FaUser className="mr-2" /> Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="flex items-center text-gray-700 dark:text-gray-200"
            >
              <FaEnvelope className="mr-2" /> Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="johndoe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="flex items-center text-gray-700 dark:text-gray-200"
            >
              <FaPhone className="mr-2" /> Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="1234567890"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="flex items-center text-gray-700 dark:text-gray-200"
            >
              <FaCommentAlt className="mr-2" /> Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tell us about your appointment request..."
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <div className="flex space-x-2">
            <Button
              type="submit"
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Cancel
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;

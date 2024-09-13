"use client";

import React, { useState } from "react";
import { FiMail, FiPhone, FiUser, FiMessageSquare } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Form = ({ title, buttonText }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form data:", formData);

      setFormData({ name: "", email: "", phone: "", message: "" });
      alert("Thank you for your message. We'll get back to you soon!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    }
  };

  const inputFields = [
    { name: "name", label: "Name", type: "text", icon: FiUser },
    { name: "email", label: "Email", type: "email", icon: FiMail },
    { name: "phone", label: "Phone", type: "tel", icon: FiPhone },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        {title || ""}
      </h3>
      {inputFields.map((field) => (
        <div key={field.name}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <field.icon className="text-gray-400" />
            </div>
            <Input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="pl-10"
              required
            />
          </div>
        </div>
      ))}
      <div>
        <Label htmlFor="message">Message</Label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <FiMessageSquare className="text-gray-400" />
          </div>
          <Textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="pl-10"
            required
          />
        </div>
      </div>
      <div>
        <Button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          {buttonText || "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default Form;

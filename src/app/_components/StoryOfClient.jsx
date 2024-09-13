import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const testimonials = [
  {
    quote:
      "I am extremely impressed with the construction services provided. The quality of work is exceptional, and they completed our project ahead of schedule. Their attention to detail and commitment to excellence truly sets them apart.",
    name: "Rajesh Patel",
    title: "Homeowner, Mumbai",
    rating: 5,
  },
  {
    quote:
      "The team's expertise in construction is unmatched. They delivered our commercial building project on time and within budget. Their professionalism and communication throughout the process were outstanding.",
    name: "Priya Sharma",
    title: "Business Owner, Delhi",
    rating: 4.5,
  },
  {
    quote:
      "We received great value for our money. The construction work was top-notch, and they were always responsive to our needs. I highly recommend their services for any construction project.",
    name: "Amit Singh",
    title: "Property Developer, Bangalore",
    rating: 5,
  },
  {
    quote:
      "The construction team's efficiency and skill were remarkable. They transformed our outdated office space into a modern, functional environment. Their time management and quality of work exceeded our expectations.",
    name: "Sunita Reddy",
    title: "CEO, Tech Startup, Hyderabad",
    rating: 4.5,
  },
  {
    quote:
      "I was amazed by their innovative approach to our challenging residential project. They provided cost-effective solutions without compromising on quality. Their work has significantly increased the value of our property.",
    name: "Vikram Mehta",
    title: "Real Estate Investor, Pune",
    rating: 5,
  },
];
const StoryOfClient = () => {
  return (
    <div className="bg-neutral-100 py-10 md:py-14">
      <div className="container px-4 relative lg:max-w-screen-xl mx-auto">
        <div className="relative z-10 py-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center  text-gray-800">
            Our <span className="text-yellow-500">Client Story</span>
          </h2>
        </div>
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryOfClient;

import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
      <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
        <a
          href="#"
          className="text-xl sm:text-4xl font-semibold hover:text-yellow-600 transition duration-500 ease-in-out inline-block mb-5"
        >
          Premier Construction Services
        </a>

        <div className="relative mb-5">
          <a href="#">
            <Image
              width={800}
              height={500}
              className="w-full"
              src="/images/service.jpg"
              alt="Construction Site"
            />
          </a>
        </div>

        <p className="text-gray-700 py-5 text-base leading-8">
          At Premier Construction Services, we offer top-notch construction
          solutions tailored to your needs. With over 20 years of experience,
          our team ensures high-quality craftsmanship and exceptional service on
          every project. From residential renovations to commercial builds, we
          handle it all with precision and professionalism. Our commitment to
          excellence and customer satisfaction sets us apart in the construction
          industry.
        </p>

        <div className="py-5 text-sm font-regular text-gray-900 flex">
          <span className="mr-3 flex flex-row items-center">
            <svg
              className="text-yellow-600"
              fill="currentColor"
              height="13px"
              width="13px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
            c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
            c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                  ></path>
                </g>
              </g>
            </svg>
            <span className="ml-1">6 mins ago</span>
          </span>
          <a
            href="#"
            className="flex flex-row items-center hover:text-yellow-600"
          >
            <svg
              className="text-yellow-600"
              fill="currentColor"
              height="16px"
              aria-hidden="true"
              role="img"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              ></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
            <span className="ml-1">Akash Sachan</span>
          </a>
        </div>
        <hr />

        {/* Contact Section */}
        <div className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            Have questions or want to get in touch? Fill out the form below or
            reach us at:
          </p>
          <div className="mb-6">
            <p className="text-gray-900 font-semibold">
              Email:{" "}
              <a
                href="mailto:hello@desirediv.com"
                className="text-yellow-600 hover:underline"
              >
                hello@desirediv.com
              </a>
            </p>
            <p className="text-gray-900 font-semibold">
              Phone:{" "}
              <a
                href="tel:+919871228880"
                className="text-yellow-600 hover:underline"
              >
                +91 9871228880
              </a>
            </p>
          </div>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded p-2 text-gray-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded p-2 text-gray-700"
            />
            <textarea
              placeholder="Message"
              className="border rounded p-2 text-gray-700 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Service;

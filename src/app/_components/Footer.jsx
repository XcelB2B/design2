import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 py-10">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <span className="flex items-center">
                <Image src="/logo.png" alt="logo" width={80} height={80} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap  ml-3">
                  Desire Div
                </span>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <Link href="/">
                    <span className="hover:text-yellow-500">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="hover:text-yellow-500">About</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Follow us
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <Link href="#">
                    <span className="hover:text-yellow-500">Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="hover:text-yellow-500">Instagram</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <Link href="#">
                    <span className="hover:text-yellow-500">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="hover:text-yellow-500">
                      Terms & Conditions
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2024 Desire Div. All Rights Reserved.
          </span>
          <div className="flex mt-4 items-center sm:justify-center sm:mt-0 gap-3">
            <Link href="#">
              <span className="text-gray-500 hover:text-gray-900  mx-2">
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook page</span>
              </span>
            </Link>
            <Link href="#">
              <span className="text-gray-500 hover:text-gray-900  mx-2">
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram page</span>
              </span>
            </Link>
            <Link href="#">
              <span className="text-gray-500 hover:text-gray-900  mx-2">
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn page</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

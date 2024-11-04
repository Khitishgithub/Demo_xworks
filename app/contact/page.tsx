"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CircleDashed } from "lucide-react";
import React from "react";
import Footer from "../components/Footer";

const Page = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="flex items-center justify-center">
          <CircleDashed className="animate-spin text-[#27448D]" size={64} />
        </div>
      </div>
    );
  }
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <Image
                  src="/logoxworks.png"
                  width={150}
                  height={150}
                  alt="logo image"
                  className="mt-10"
                />
              </Link>
            </div>

            <div className="md:flex md:items-center mt-10 md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link className="text-black-700 transition " href="/">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black-700 transition" href="/about">
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-700 transition"
                      href="/workshop"
                    >
                      WORKSHOPS
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    href="/login"
                    className="rounded-md bg-[#27448D] px-5 py-2.5 text-sm font-medium text-white shadow"
                  >
                    Login
                  </Link>
                  <div className="hidden sm:flex">
                    <Link
                      href="/register"
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#27448D]"
                    >
                      Register
                    </Link>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button
                    onClick={toggleMobileMenu}
                    className="rounded  p-2 color-white transition "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      color="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="lg:hidden">
              <ul className="flex flex-col items-center gap-4 mt-4 text-sm">
                <li>
                  <Link className="text-black-700 transition " href="/">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className="text-black-700 transition" href="/about">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link className="text-black-700 transition" href="#">
                    SERVICES
                  </Link>
                </li>

                <li>
                  <Link
                    href="/register"
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#27448D]"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-[#FF6347] mb-16">
          CONTACT US
        </h2>

     
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          {/* Email Contact */}
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#FFA500] rounded-full p-6 w-32 h-32 flex items-center justify-center">
              <Image
                src="/email.png"
                alt="Email"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>
            <Link
              href="mailto:connect@xworks.live"
              className="text-[#4169E1] text-xl font-medium hover:underline"
            >
              connect@xworks.live
            </Link>
          </div>

        
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-gray-800 rounded-full p-6 w-32 h-32 flex items-center justify-center">
              <Image
                src="/phone.png" 
                alt="Phone"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <Link
                href="tel:+917383808881"
                className="text-[#4169E1] text-xl font-medium hover:underline"
              >
                +91 73838-08881
              </Link>
              <div className="text-[#4169E1] text-lg">
                <span>CALL</span>
                <span className="mx-2">|</span>
                <Link
                  href="https://wa.me/917383808881"
                  className="hover:underline"
                >
                  WHATSAPP
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Workshops Info */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#FF6347] text-lg sm:text-xl leading-relaxed">
            We also offer TAILOR MADE and CUSTOMIZED workshops for
            Individuals/Corporates/NGO&apos;s/Govt Organizations, based on your
            requirements. Please call us or email us for more information.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;

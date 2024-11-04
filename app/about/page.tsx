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
                    <Link
                      className="text-black-700 transition"
                      href="/workshop"
                    >
                      WORKSHOPS
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black-700 transition" href="#">
                      CONTACT US
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
                  <Link className="text-black-700 transition" href="#">
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link className="text-black-700 transition" href="/contact">
                    CONTACT US
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

      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-center text-4xl font-bold text-[#FF6347] mb-16">
          ABOUT XWORKS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Logo and Brand */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-full max-w-md">
              <Image
                src="/XWORKS.png"
                alt="XWORKS Logo"
                width={400}
                height={100}
                className="w-full h-auto"
              />
            </div>

           
          </div>

          <div className="space-y-3 text-base">
            {/* Introduction */}
            <p className="text-[#00B8D0]">
              XWORKS is a modern and new-age skilling and training organization,
              with its headquarters in India&apos;s first heritage city,
              Ahmedabad.
            </p>

            {/* Mission Statement */}
            <p className="text-[#00B8D0]">
              We empower individuals with relevant and up-to-date skills for the
              modern-day workforce. We provide quality training in new-age tools
              and knowledge to make people future-ready. We aim to
              skill/re-skill/up-skill people across multiple domains. Our
              custom-built new-age courses are modern and very relevant to the
              industry needs and will help individuals acquire the necessary
              skills to thrive in today&apos;s competitive job market.
            </p>

            {/* Partnership Information */}
            <p className="text-[#00B8D0]">
              XWORKS in partnership with numerous educational institutions and
              Industries plays a vital role in bridging the skills gap by
              providing relevant and up-to-date training programs,
              certifications, and opportunities for continuous learning and
              professional development. By aligning our offerings with industry
              needs and fostering partnerships with businesses, XWORKS will help
              narrow the skill gap and prepare individuals for the demands of
              modern industries
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;

"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { CircleDashed } from "lucide-react";
import "./globals.css";
import { RiContactsBookFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";



import { FingerprintIcon, LockIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GrWorkshop } from "react-icons/gr";
import { IoHome } from "react-icons/io5";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuIconCross, setIsMobileMenuIconCross] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileMenuIconCross(!isMobileMenuIconCross);
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
                    <Link
                      className="text-black-700 transition relative hover:text-[#27448D] pb-1 flex items-center
               after:absolute after:content-[''] after:w-full after:h-1 after:bg-[#27448D] 
               after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300"
                      href="/"
                    >
                      <IoHome className="mr-2" />
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-700 transition relative hover:text-[#27448D] pb-1 flex items-center
               after:absolute after:content-[''] after:w-full after:h-1 after:bg-[#27448D] 
               after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300"
                      href="/about"
                    >
                      <FcAbout className="mr-2 "  />
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-700 transition relative hover:text-[#27448D] pb-1 flex items-center
               after:absolute after:content-[''] after:w-full after:h-1 after:bg-[#27448D] 
               after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300"
                      href="workshop"
                    >
                      <GrWorkshop className="mr-2" />
                      WORKSHOPS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-700 transition relative hover:text-[#27448D] pb-1 flex items-center
               after:absolute after:content-[''] after:w-full after:h-1 after:bg-[#27448D] 
               after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300"
                      href="/contact"
                    >
                      <RiContactsBookFill className="mr-2" />
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
                    className={`rounded p-2 text-black transition ${
                      isMobileMenuIconCross
                        ? 'transform rotate-45 transition-transform duration-300'
                        : ''
                    }`}
                  >
                  <div className={`space-y-2 ${isMobileMenuIconCross ? 'hidden' : 'block'}`}>
                      <div className="w-3 h-0.5 bg-black"></div>
                      <div className="w-5 h-0.5 bg-black"></div>
                      <div className="w-7 h-0.5 bg-black"></div>
                    </div>
                    <div
          className={`w-7 h-0.5 bg-black transform -rotate-45 transition-transform duration-300 ${
            isMobileMenuIconCross ? 'block' : 'hidden'
          }`}
        ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="lg:hidden">
              <ul className="flex flex-col items-center gap-4 mt-14 text-sm ">
              <li>
                    <Link
                      className="text-black-700 transition relative hover:text-[#27448D] pb-1 flex items-center
               after:absolute after:content-[''] after:w-full after:h-1 after:bg-[#27448D] 
               after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300"
                      href="/"
                    >
                      <IoHome className="mr-2" />
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-700 transition relative hover:text-[#27448D] pb-1 flex items-center
               after:absolute after:content-[''] after:w-full after:h-1 after:bg-[#27448D] 
               after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300"
                      href="/about"
                    >
                      <FcAbout className="mr-2 "  />
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-700 transition relative hover:text-[#27448D] pb-1 flex items-center
               after:absolute after:content-[''] after:w-full after:h-1 after:bg-[#27448D] 
               after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300"
                      href="workshop"
                    >
                      <GrWorkshop className="mr-2" />
                      WORKSHOPS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-700 transition relative hover:text-[#27448D] pb-1 flex items-center
               after:absolute after:content-[''] after:w-full after:h-1 after:bg-[#27448D] 
               after:left-0 after:bottom-[-2px] after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300"
                      href="/contact"
                    >
                      <RiContactsBookFill className="mr-2" />
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

      <section className=" mt-20">
        <div className="mx-auto max-w-screen-xl px-4  lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-2xl">
              <strong className="font-extrabold text-[#FF6038] sm:block">
                {" "}
                ITS THE AGE OF SKILLS - NOT DEGREES{" "}
              </strong>
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <Image
              src="/XWORKS.png"
              width={270}
              height={300}
              alt=" Image Description"
              className="w-full h-auto "
            />
          </div>

          {/* Text Container */}
          <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0 text-center lg:text-left">
            <p className="text-xl  text-[#00A8A8] sm:text-xl">
              XWORKS is a new – age Skilling and Training Organization,
              specializing in technology{" "}
              <u className="text-red-600">Workshops</u> and{" "}
              <u className="text-red-600">Programs</u>. XWORKS empowers
              individuals with relevant and up-to-date skills for the modern
              world. We conduct LIVE , HANDS-ON and RELEVANT Workshops and
              Programs Round the year
            </p>
            <p className="mt-4 text-[#00A8A8] text-xl">
              <strong>
                Our in-house scientifically designed, high quality courses
              </strong>
              , cater to various domains, making people future-ready. Through
              partnerships with educational institutions and industries, we
              bridge the skills gap by providing training, certifications, and
              continuous learning opportunities. By aligning with industry
              needs, XWORKS prepares individuals for the demands of modern
              industries.
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-10">
        <div className="mx-auto max-w-screen-xl px-4  lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-2xl">
              <strong className="font-extrabold text-[#FF6038] sm:block">
                {" "}
                OUR BEST SELLERS{" "}
              </strong>
            </h1>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-6 max-w-7xl mx-auto">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image
            src="/genai.png"
            alt="GEN AI"
            width={400}
            height={400}
            className="w-24 h-24 mx-auto mt-6 rounded-full"
          />
          <div className="p-6 text-center">
            <h2 className="text-xl font-bold text-[#524CFF] mb-3">
              <u>GEN AI - MASTERCLASS</u>
            </h2>
            <p className="text-[#00A8A5]">
              AI is transforming industries and reshaping the future of
              technology. Join our GEN AI Masterclass Workshop, which will take
              you through foundational concepts and advanced topics like
              Generative AI, prompt engineering, and deploying AI solutions.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image
            src="/cybersecurity.png"
            alt="Cyber Security"
            width={400}
            height={400}
            className="w-24 h-24 mx-auto mt-6 rounded-full"
          />
          <div className="p-6 text-center">
            <h2 className="text-xl font-bold text-[#524CFF] mb-3">
              <u>Cyber Security for Everyone</u>
            </h2>
            <p className="text-[#00A8A5]">
              Discover the essentials of Cyber Security in this workshop,
              covering topics such as threat prevention, ethical hacking, data
              protection, and how to secure your online presence in an
              increasingly digital world.
            </p>
          </div>
        </div>

        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Image
            src="/neuralnetwork.png"
            alt="Neural Networks"
            width={400}
            height={400}
            className="w-24 h-24 mx-auto mt-6 rounded-full"
          />
          <div className="p-6 text-center">
            <h2 className="text-xl font-bold text-[#524CFF] mb-3">
              <u>Building Neural Networks</u>
            </h2>
            <p className="text-[#00A8A5]">
              Learn how to build and optimize Neural Networks, one of the
              foundational technologies in AI. This workshop will cover network
              architectures, backpropagation, and real-world applications of
              deep learning.
            </p>
          </div>
        </div>
      </div>

      <section className=" mt-10">
        <div className="mx-auto max-w-screen-xl px-4  lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-2xl">
              <strong className="font-extrabold text-[#FF6038] sm:block">
                {" "}
                LEARNING PATHWAYS{" "}
              </strong>
            </h1>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg ">
          <Image
            src="/workshops.png"
            alt="Workshops"
            width={160}
            height={190}
            className="mx-auto mt-6 rounded-full border-2 border-[#524CFF] shadow-md"
          />
          <div className="bg-white p-6 text-center">
            <h2 className="text-xl font-semibold text-[#524CFF] mb-2 underline">
              WORKSHOPS
            </h2>
            <h1 className="text-[#00A8A5] font-extrabold text-lg leading-tight">
              EXTRAORDINARY WORKSHOPS FOR FAST UPSKILLING AND LEARNING NEW-AGE
              SKILLS
            </h1>
            <h1 className="mt-4 text-[#00A8A5] font-bold text-md leading-relaxed">
              Precise, Live, and Scientifically Designed Workshops to teach
              new-age skills and modern subjects rapidly—most within a Single
              Weekend. ELEVATE YOUR CAREER to the next level in just ONE
              WEEKEND!
            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg ">
          <Image
            src="/programs.png"
            alt="Programs"
            width={160}
            height={190}
            className="mx-auto mt-6 rounded-full border-2 border-[#524CFF] shadow-md"
          />
          <div className="bg-white p-6 text-center">
            <h2 className="text-xl font-semibold text-[#524CFF] mb-2 underline">
              PROGRAMS
            </h2>
            <h1 className="text-[#00A8A5] font-extrabold text-lg leading-tight">
              CUTTING-EDGE TECHNOLOGY PROGRAMS TO TRANSFORM YOUR FUTURE
            </h1>
            <h1 className="mt-4 text-[#00A8A5] font-bold text-md leading-relaxed">
              Become a tech industry professional with our meticulously designed
              programs. Start from absolute beginner level and advance to expert
              in just under six months.
            </h1>
          </div>
        </div>
      </div>

      <section className=" mt-10">
        <div className="mx-auto max-w-screen-xl px-4  lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-2xl">
              <strong className="font-extrabold text-[#FF6038] sm:block">
                {" "}
                XWORKS ADVANTAGE{" "}
              </strong>
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto mt-2 p-5 bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] rounded-lg shadow-lg">
        <ul className="list-none ">
          {[
            "All Workshops and Programs are Live Hands-On, Practical Workshop Experiences",
            "Masterfully Curated Content, Designed to Learn Efficiently and Quickly",
            "All Workshops and Programs are conducted by Visionary, Widely Experienced and Forward Thinking Experts",
            "Every Workshop and Program comes with assessment and certification",
            "Industry Relevant and Modern Training Programs, Certifications, and Opportunities for continuous learning and professional development",
          ].map((text, index) => (
            <li
              className="flex items-start transition-transform transform  hover:bg-white hover:shadow-md p-2 rounded-md"
              key={index}
            >
              <svg
                className="w-8 h-8 text-[#00A8A5] font-bold flex-shrink-0 mr-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-[#00A8A5] sm:text-lg md:text-xl font-semibold leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between flex-wrap">
            <div className="w-full md:w-1/4 text-center md:text-left">
              <Image
                src="/XWORKS.png"
                alt="Logo"
                width={400}
                height={300}
                className="mx-auto md:mx-0 mb-4 "
              />

              <p className="text-gray-600 mb-4 tezt-center">
                XWORKS is a futuristic, modern and new age skilling organization
              </p>
              <p className="text-gray-600 text-center mb-4">
                {" "}
                &lt;&lt; Follow us on &gt;&gt;{" "}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                <Link href="https://www.instagram.com/xworks.live/">
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={60}
                    height={60}
                    className=""
                  />
                </Link>
                <Link href="https://www.twitter.com">
                  <Image
                    src="/twitter.png"
                    alt="Twitter"
                    width={60}
                    height={60}
                    className=""
                  />
                </Link>
                <Link href="https://www.youtube.com">
                  <Image
                    src="/youtube.png"
                    alt="Youtube"
                    width={60}
                    height={60}
                    className=""
                  />
                </Link>
              </div>
            </div>

            {/* Learning Pathways */}
            <div className="w-full md:w-1/4 mt-8 md:mt-0">
              <h3 className="text-[#A9AAA9] font-semibold mb-4">
                LEARNING PATHWAYS
              </h3>
              <ul>
                <li className="text-[#CC3366] font-bold mb-2">WORKSHOPS</li>
                <li className="text-gray-600">PROGRAMS</li>
              </ul>
            </div>

            {/* Policies */}
            <div className="w-full md:w-1/4 mt-8 md:mt-0">
              <h3 className="text-[#A9AAA9] font-semibold mb-4">POLICIES</h3>
              <ul>
                <li className="text-[#CC3366] mb-2">Terms and Conditions</li>
                <li className="text-[#CC3366] mb-2">Refund/Cancellation</li>
                <li className="text-[#CC3366]">Privacy</li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="w-full md:w-1/4 mt-8 md:mt-0">
              <h3 className="text-[#A9AAA9] font-semibold mb-4">
                CONTACT DETAILS
              </h3>
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10l1.3 1.5a17 17 0 004 4L10 21h5l1-3 3 3-3 3h-8c-1 0-2-.5-3-2l-1.3-1.3a17 17 0 01-4-4l-2.7-4L3 10"
                  />
                </svg>
                <span className="text-gray-600">+91 73838-08881</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12V8l-4-4H8v4h8zM5 7a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2H7l-1.292 1.293A1 1 0 015 13V7z"
                  />
                </svg>
                <span className="text-gray-600">connect@xworks.live</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

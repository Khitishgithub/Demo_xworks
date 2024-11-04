"use client";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { CircleDashed } from "lucide-react";

// Utility function to convert workshop name to URL-friendly format
const convertToUrlSlug = (name: string): string => {
  return name.replace(/\s+/g, "_"); // Replace one or more spaces with single underscore
};

const Page = () => {
  const [workshops, setWorkshops] = useState<any[]>([]); // State to hold workshop data
  const [loading, setLoading] = useState(true); // Loading state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch("/api/auth/workshops");
        if (!response.ok) {
          throw new Error('Failed to fetch workshops');
        }
        const data = await response.json();
        setWorkshops(data);
      } catch (error) {
        console.error("Error fetching workshops:", error);
        // Optionally, you can set an error state to display to the user
      } finally {
        setLoading(false);
      }
    };
  
    fetchWorkshops();
  }, []);
  

  if (loading) {
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
              <NextLink className="block text-teal-600" href="/">
                <Image
                  src="/logoxworks.png"
                  width={150}
                  height={150}
                  alt="logo image"
                  className="mt-10"
                />
              </NextLink>
            </div>

            <div className="md:flex md:items-center mt-10 md:gap-12">
              <nav aria-label="Global" className="block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <NextLink className="text-black-700 transition" href="/protected">
                      BACK
                    </NextLink>
                    </button>
                  </li>
                </ul>
              </nav>
              </div>
              </div>

              
            
        </div>
      </header>

      <div className="mt-20 p-4">
        <h1 className="text-2xl font-bold text-center text-red-500 mb-4">
          OUR EXTRAORDINARY WORKSHOPS
        </h1>
        <TableContainer component={Paper} className="max-w-6xl mx-auto">
          <Table className="w-full">
            <TableHead>
              <TableRow className="bg-gray-100">
                <TableCell className="font-bold">No</TableCell>
                <TableCell className="font-bold">Workshop</TableCell>
                <TableCell className="font-bold">Topic</TableCell>
                <TableCell className="font-bold">Duration</TableCell>
                <TableCell className="font-bold">
                  Cost(in INR)
                  <br />
                  (excluding 18% GST)
                </TableCell>
                <TableCell className="font-bold">Starting On</TableCell>
                <TableCell className="font-bold">Timing(IST)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workshops.map((workshop, index) => (
                <TableRow key={workshop.id} className="hover:bg-gray-50">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <MuiLink
                      component={NextLink}
                      href={`/protected/workshops/${convertToUrlSlug(
                        workshop.name
                      )}`}
                      color="primary"
                      underline="hover"
                    >
                      {workshop.name}
                    </MuiLink>
                  </TableCell>
                  <TableCell>{workshop.topic}</TableCell>
                  <TableCell>{workshop.duration}</TableCell>
                  <TableCell>{workshop.cost}/-</TableCell>
                  <TableCell>{workshop.startingOn}</TableCell>
                  <TableCell>{workshop.timing}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <footer className="bg-white py-10 ">
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
                <NextLink href="https://www.instagram.com/xworks.live/">
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={60}
                    height={60}
                    className=""
                  />
                </NextLink>
                <NextLink href="https://www.twitter.com">
                  <Image
                    src="/twitter.png"
                    alt="Twitter"
                    width={60}
                    height={60}
                    className=""
                  />
                </NextLink>
                <NextLink href="https://www.youtube.com">
                  <Image
                    src="/youtube.png"
                    alt="Youtube"
                    width={60}
                    height={60}
                    className=""
                  />
                </NextLink>
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
};

export default Page;

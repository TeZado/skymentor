"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SkymentorLogo from "@/app/assets/images/skymentor.png";
const itemArray = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/Services" },
  { title: "About", url: "/About" },
  { title: "Blog", url: "/Blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* desktop */}
      <div className="flex relative z-[100] bg-black text-white md:text-lg flex-row justify-between px-6  sm:px-10 md:px-5 lg:px-20 py-3 items-center  ">
        <div className="text-primary flex items-center flex-col font-extrabold">
          <Image src={SkymentorLogo} className="w-32 lg:w-40   " alt="Skymentor Logo" />
        </div>
        <ul className="hidden md:flex flex-row justify-between items-center gap-20 sm:gap-8 md:gap-10 lg:gap-20 font-semibold ">
          {itemArray.map((x, index) => {
            return (
              <li key={index} className="hover:text-primary duration-200">
                <Link href={x.url}> {x.title}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Link href={`/#contact`}>
          <button
            type="button"
            className="text-white hidden md:flex bg-black border-[1px] border-white hover:bg-[#242424]  focus:ring-4 focus:outline-none  font-medium rounded-lg  px-1 md:px-4 py-2 text-center transition-all ease-in-out"
          >
            Get in touch
          </button>
          </Link>

        </div>
        {
          <button onClick={handleClick} className="md:hidden">
            {isOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        }
      </div>

      {/* Mobile */}
      <div>
        {
          <ul
            className={`flex absolute w-full z-50 bg-black text-white md:hidden flex-col  items-center gap-4 font-bold text-sm duration-700 overflow-hidden transition-all ${
              isOpen ? "h-44  border-b-[1px]" : "h-0"
            } `}
          >
            {itemArray.map((x, index) => {
              return (
                <li key={index} className="hover:text-primary duration-200 py-1 font-bold">
                  <Link href={x.url} onClick={handleClick}>
                    {" "}
                    {x.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        }

      </div>
    </>
  );
};

export default Navbar;

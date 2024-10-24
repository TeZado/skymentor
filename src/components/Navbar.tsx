'use client'
import Link from "next/link";
import { useState } from "react";
import SkymentorLogo from '@/app/assets/images/skymentor.png'
import Image from "next/image";

const Navbar = () => {
  const itemArray = [
    { title: "Home", url: "" },
    { title: "Services", url: "" },
    { title: "About", url: "" },
    { title: "Blog", url: "" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* desktop */}
      <div className="flex  bg-black text-white flex-row justify-between px-20 py-3 items-center  ">
        <div className="text-primary flex items-center flex-col font-extrabold">
      
        <Image src={SkymentorLogo} className="h-10" alt="Skymentor Logo"/>
        </div>
        <ul className="hidden md:flex flex-row justify-between items-center gap-6 font-semibold ">
          {itemArray.map((x, index) => {
            return (
              <li key={index} className="hover:text-primary duration-200">
                <a href={""} className="">
                  {x.title}
                </a>
              </li>
            );
          })}
          
         
        </ul>
        <div>
        <button
              type="button"
              className="text-white hidden md:flex bg-black border-[1px] border-white hover:bg-orange-600 focus:ring-4 focus:outline-none  font-medium rounded-lg  px-4 py-2 text-center"
            >
              Get in touch
            </button>{" "}
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
            className={`flex bg-black text-white sm:hidden flex-col  items-center gap-4 font-semibold text-sm duration-700 overflow-hidden transition-all ${
              isOpen ? "h-40" : "h-0"
            } `}
          >
            {itemArray.map((x, index) => {
              return (
                <li key={index} className="hover:text-primary duration-200">
                  <a href={""} className="">
                    {x.title}
                  </a>
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
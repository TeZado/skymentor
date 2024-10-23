import Image from "next/image"
import SkymentorLogo from "@/app/assets/images/skymentor.png";
import FacebookLogo from "@/app/assets/images/Facebook.png";
import EmailLogo from "@/app/assets/images/Email.png";
import InstaLogo from "@/app/assets/images/Instagram.png";
import LinkLogo from "@/app/assets/images/LinkedIn.png";
import PhoneLogo from "@/app/assets/images/Phone.png";

function Footer() {
  return (
    <>
   <footer className="bg-black text-white mt-14">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                <Image src={SkymentorLogo} className="h-10 me-3" alt="Skymentor Logo"/>
            
              </a>
              <div className="flex flex-col">
              <span className="mt-4 ">
                  Skymentor Technology and Services Pvt.Ltd 
                </span>
                
                <span>Magh Apartment,Floor
                No 3rd,</span>
                
                <span>Padole Square,Nagpur, Maharshtra,440022</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
               
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a
                      href=""
                      className="hover:underline "
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="hover:underline"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6   text-white  ">
                  Cookies
                </h2>
                <ul className="text-white  font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center ">
              © 2024{" "}
              <a href="" className="hover:underline">
                Skymentor™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-white hover:text-orange-400"
              >
                
                <Image src={LinkLogo} alt="Skymentor Logo"/>
                
                <span className="sr-only">LnkedIn page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-400  ms-5"
              >
                <Image src={InstaLogo} alt="Insta"/>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                   <Image src={FacebookLogo} alt="FacebookLogo"/>
                <span className="sr-only">Facebook page</span>
              </a>
             
            </div>
          </div>
        </div>
      </footer>
  </>
  )
}

export default Footer
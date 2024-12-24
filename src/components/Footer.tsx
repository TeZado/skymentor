import Image from "next/image";
import SkymentorLogo from "@/app/assets/images/skymentor.png";
import FacebookLogo from "@/app/assets/images/Facebook.png";
import EmailLogo from "@/app/assets/images/Email.png";
import InstaLogo from "@/app/assets/images/Instagram.png";
import LinkLogo from "@/app/assets/images/LinkedIn.png";
import PhoneLogo from "@/app/assets/images/Phone.png";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white  mt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                <Image
                  src={SkymentorLogo}
                  className="h-10 me-3"
                  alt="Skymentor Logo"
                />
              </a>
              <div className="flex flex-col">
                <span className="mt-4 ">
                  Skymentor Technology and Services Pvt.Ltd
                </span>

                <span>Magh Apartment,Floor No 3rd,</span>

                <span>Padole Square,Nagpur, Maharshtra,440022</span>
                <span className="flex items-center mt-4">
                  <Image className="bg-black w-8 h-8" src={EmailLogo} alt="" />
                  <span className="ml-2">info@skymentor.in</span>{" "}
                </span>
                <span className="flex items-center mt-2">
                  <Image className="w-8 h-8" src={PhoneLogo} alt="" />

                  <span className="ml-2">8806677177</span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <Link className="hover:underline" href={"/"}>
                      {" "}
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href={"/About"}>
                      {" "}
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <Link className="hover:underline" href={"/Services"}>
                      {" "}
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href={"/Blog"}>
                      {" "}
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6   text-white  ">Cookies</h2>
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
                href="https://www.linkedin.com/company/skymentor-technology-services/"
                target="blank"
                className="text-white hover:text-orange-400"
              >
                <Image src={LinkLogo} alt="" />
                <span className="sr-only">LnkedIn page</span>
              </a>
              <a
                href="https://www.instagram.com/skymentor.tech?igsh=cTdtdWY5ZmJ0cXFh"
                target="blank"
                className="text-gray-500 hover:text-orange-400  ms-5"
              >
                <Image src={InstaLogo} alt="" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/skymentor.tech?mibextid=ZbWKwL"
                target="blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <Image src={FacebookLogo} alt="" />
                <span className="sr-only">Facebook page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

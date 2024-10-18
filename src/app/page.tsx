"use client";
import React from "react";
import LottieAnimation from "../components/Lottie";
import LottieFlot from "@/app/assets/lottie/lottie1.json";
import LottieCircle from "@/app/assets/lottie/lottie2.json";
import LottieWeb from "@/app/assets/lottie/lottie3.json";
import LottieContact from "@/app/assets/lottie/contact.json";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import CalibreLogo from "@/app/assets/images/calibre.webp";
import CalibreLogo1 from "@/app/assets/images/1.webp";
import CalibreLogo2 from "@/app/assets/images/2.webp";
import CalibreLogo3 from "@/app/assets/images/3.webp";
import CalibreLogo4 from "@/app/assets/images/4.webp";
import CalibreLogo5 from "@/app/assets/images/5.webp";
import CalibreLogo6 from "@/app/assets/images/6.webp";
import CalibreLogo9 from "@/app/assets/images/9.webp";
import CalibreLogo10 from "@/app/assets/images/10.webp";
import CalibreLogo11 from "@/app/assets/images/11.webp";
import CalibreLogo12 from "@/app/assets/images/12.webp";
import CalibreLogo13 from "@/app/assets/images/13.webp";
import CalibreLogo14 from "@/app/assets/images/14.webp";
import CalibreLogo15 from "@/app/assets/images/15.webp";
import CalibreLogo16 from "@/app/assets/images/16.webp";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import testimonials from "../../testimonials.json";

export default function Home() {
  return (
    <>
      <hr />
      {/* section 1 */}
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center rounded-bl-[180px]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_left,transparent_5%,black)] rounded-bl-[180px]"></div>
        <hr />
        <div className="absolute flex flex-row  text-white justify-center align-middle items-center h-[80%] w-full rounded-bl-[180px]">
          <div className="flex flex-col w-[50%] mb-10">
            <span className="font-bold text-9xl">SKYMENTOR</span>
            <span className="ml-1 text-base">Get The Best Service</span>
            <span className="ml-1 text-xl">
              We are dedicated to providing top-notch services to our community.{" "}
              <br />
              Our mission is to support and guide you towards success.
            </span>
          </div>
          <div className="w-[600px]">
            <LottieAnimation animationData={LottieFlot} />
          </div>
        </div>

        <div></div>
      </div>

      {/* section2 */}
      <div className="my-24 text-2xl ">
        <div className="flex flex-row justify-center align-middle items-center">
          <p className="font-bold w-[60%]">
            At SkyMentor, we specialize in offering a wide array of digital
            services tailored to help your business grow. From website
            development and social media marketing to SEO and data analysis, we
            combine creative solutions with technical expertise to elevate your
            brand.{" "}
          </p>
          <div className="w-72 relative">
            <LottieAnimation animationData={LottieCircle} />
          </div>
        </div>
        <div className="flex justify-end w-[70%] m-auto">
          <p className="text-right">
            We go beyond just providing services; we partner with you to develop
            innovative strategies that work for your unique needs. Whether
            you're aiming to build a high-performance website, boost your online
            visibility, or craft engaging marketing campaigns, SkyMentor is
            committed to being your trusted partner in navigating the complex
            digital landscape.
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-black text-black rounded-tr-[180px] py-20 pb-[150px]">
        <h1 className="text-center font-bold text-6xl py-2 text-white">
          Services
        </h1>
        <div className="my-24 flex justify-center align-middle items-center ">
          <div className="grid grid-cols-3 grid-rows-4 gap-3 w-[70%] h-[600px] ">
            <div className="row-span-3 border-2 rounded-3xl h-[558px] bg-[#fffbeb]">
              <h1 className="text-3xl font-bold pl-4 pt-4 mt-10 ml-5 ">
                Web Development
              </h1>
              <p className="text-2xl pl-10">
                Our team excels in website development, software development,
                and crafting high-converting landing pages.
              </p>
              <div className="w-[400px] m-auto">
                <LottieAnimation animationData={LottieWeb} />
              </div>
            </div>
            <div className="col-span-2 row-span-auto border-2 rounded-3xl h-72 bg-[#fffbeb]">
              <h1 className="text-3xl font-bold pl-10 pt-14">
                Digital Marketing
              </h1>
              <p className="text-2xl pl-10">
                We provide comprehensive digital marketing services, including
                social media, email marketing, graphic design, and video editing
                for brand elevation.
              </p>
            </div>
            <div className="col-start-2 row-start-auto border-2 rounded-3xl h-64 mt-36 bg-[#fffbeb]">
              <h1 className="text-3xl font-bold pl-10 pt-6">Data Analysis</h1>
              <p className="text-2xl pl-10">
                We provide professional data analysis services, transforming
                complex data into actionable insights to optimize strategies,
                enhance performance.
              </p>
            </div>
            <div className="col-start-3 row-start-auto border-2 rounded-3xl h-64 mt-36 bg-[#fffbeb]">
              <h1 className="text-3xl font-bold pl-10 pt-6">Internship</h1>
              <p className="text-2xl pl-10">
                We nurture future tech talent by offering internships, providing
                students hands-on experience in digital services and IT.
              </p>
            </div>
            <div className="col-span-3 row-start-4 border-2 rounded-3xl mt-[108px] h-40 bg-[#fffbeb]">
              <h1 className="text-3xl font-bold pl-10 pt-6">
                Search Engine Optimization
              </h1>
              <p className="text-2xl pl-10">
                SEO services to boost online visibility, drive organic traffic,
                improve rankings, and effectively reach your target audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div>
        <Marquee pauseOnHover speed={80} className="bg-white">
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo1}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo2}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo3}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo4}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo5}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo6}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo9}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-100"
            src={CalibreLogo10}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo11}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo12}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo13}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo14}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo15}
            alt="Company Logo"
          />
          <Image
            className="w-28 mt-4 mx-10  grayscale opacity-50"
            src={CalibreLogo16}
            alt="Company Logo"
          />
        </Marquee>
      </div>
      {/* section5 */}
      <div className="h-[400px] rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden rounded-b-[150px]">
        <h1 className="text-5xl font-bold mb-4">Testimonials</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="bg-white"
        />
      </div>
      {/* section6 */}

      <div className="flex flex-row justify-between w-[70%] m-auto pt-20 mb-4">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-center">Get in touch</h1>
          <div className="w-[400px] ">
            <LottieAnimation animationData={LottieContact} />
          </div>
        </div>

        <form
          action="https://formsubmit.co/vrushabh.skymentor@gmail.com"
          method="POST"
        >
          <div>
            <div className="flex flex-row w-[100%] mt-24">
              <div className="flex flex-col ">
                <h3 className="font-bold py-2">Name</h3>
                <input
                  className="border-2 rounded-lg p-2 px-4 w-80 mr-2"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold py-2">Email</h3>
                <input
                  className="border-2 rounded-lg p-2 px-4 w-80"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col ">
                <h3 className="font-bold py-2 ">Message</h3>
                <textarea
                  className="border-2 rounded-lg p-2 px-4 w-full h-24 mb-4"
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                />
              </div>

              <button
                className="border-2 text-center px-5 py-2 w-24 rounded-lg  font-bold bg-white"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

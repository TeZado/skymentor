"use client";
import React, { useEffect, useRef } from "react";
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
import Growth from "@/app/assets/images/Dynamic.png";
import People from "@/app/assets/images/People.png";
import Test from "@/app/assets/images/TestPassed.png";
import Idea from "@/app/assets/images/Idea.png";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import testimonials from "@/data/testimonials.json";
import { FlipWords } from "@/components/ui/flip-words";
import { Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
import Rotor from "@/app/assets/images/dfgdg.png"

export default function Home() {
  const words = [
    "Empower your business.",
    "Boost your visibility.",
    "Unlock your potential.",
    "Elevate your brand.",
  ];
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const [scroll, setScroll] = React.useState("");
  window.addEventListener("scroll", () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  });
  function getScrollPercent() {
    const html = document.documentElement,
      body = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    const scrollPercent = Math.round(
      ((html[st] || body[st]) / ((html[sh] || body[sh]) - html.clientHeight)) *
        100
    );

    setScroll(isNaN(scrollPercent) ? "" : scrollPercent);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", getScrollPercent);

    return () => {
      window.removeEventListener("scroll", getScrollPercent);
    };
  }, []);
  return (
    <>
      {/* section 1 */}

      <Image className="rotor hidden lg:block" src={Rotor} alt="rotor" />
      <p className="fixed  hidden lg:block right-10 bottom-10  text-amber-500 z-50">{`${scroll}%`}</p>
      <div className="h-[50vh] md:h-[55vh] lg:h-[80vh] 2xl:h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center rounded-bl-[120px]  lg:rounded-bl-[180px]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_left,transparent_5%,black)] rounded-bl-[120px]  lg:rounded-bl-[180px]"></div>
        <hr />
        <div className="absolute flex flex-row  text-white justify-center align-middle items-center h-[80%] w-full rounded-bl-[180px]">
          <div className="flex flex-col w-[80%] lg:w-[55%] 2xl:w-[50%] md:ml-10 mb-10 md:items-start">
            <span className="font-bold text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl">
              SKYMENTOR
            </span>
            {/* <span className="ml-1 text-base">Get The Best Service</span> */}
            <div className="my-2">
              <Highlight className="text-black dark:text-white md:text-xl my-2 py-1 md:py-2 px-3 font-bold">
                Get The Best Service
              </Highlight>
            </div>
            <p className="md:ml-2 md:text-left md:text-xl w-[100%] md:w-[80%]">
              We are dedicated to providing top-notch services to our
              community.Our mission is to support and guide you towards success.
            </p>
            <div className="block md:hidden ">
              <Link href={`/#contact`}>
                <button className="border-[1px] p-2 px-3 mt-3 rounded-md">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:w-[600px] md:block ">
            <LottieAnimation animationData={LottieFlot} />
          </div>
        </div>

        <div></div>
      </div>

      {/* section2 */}

      <div className="flex flex-col-reverse md:flex-row mt-10 mb-12 md:my-36 justify-between items-center w-[90%] lg:w-[80%] 2xl:w-[70%] m-auto gap-5">
        <div ref={ref}>
          <h1 className="hidden md:block font-bold text-center md:text-left  w-[95%] md:w-auto m-auto">
            {" "}
            <FlipWords duration={1000} words={words} /> <br />
          </h1>

          <p
            style={{
              transform: isInView ? "none" : "translateY(80px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}
            className="mt-3 text-lg md:text-xl w-[95%] md:w-[80%] 2xl:w-[60%] m-auto md:ml-3 md:text-left text-justify"
          >
            At SkyMentor, we specialize in offering a wide array of digital
            services tailored to help your business grow. From website
            development and social media marketing to SEO and data analysis, we
            combine creative solutions with technical expertise to elevate your
            brand.{" "}
          </p>
        </div>

        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className="w-xl relative w-[50%] md:w-[140%] lg:w-[120%] 2xl:w-[70%]"
        >
          <LottieAnimation animationData={LottieCircle} />
        </div>

        <h1 className="block md:hidden font-bold text-center md:text-left  w-[95%] md:w-auto m-auto">
          {" "}
          <FlipWords duration={1000} words={words} /> <br />
        </h1>
      </div>
      {/* section 3 */}
      <div className=" bg-black text-black rounded-tr-[120px] lg:rounded-tr-[180px] py-10 2xl:py-20 md:pb-24">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl py-2 text-white">
          Services
        </h1>

        <div
          ref={ref2}
          style={{
            transform: isInView2 ? "none" : "translateY(80px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className="mt-10 2xl:mt-24 flex justify-center align-middle items-center"
        >
          <div className="2xl:grid grid-cols-3 grid-rows-4 gap-3 w-[80%] md:w-[90%] lg:w-[70%] 2xl:h-[700px] md:flex flex-wrap">
            <div className="row-span-3 border-2 rounded-3xl md:w-[49%] 2xl:w-auto md:h-auto 2xl:h-[590px] bg-[#fffbeb] mb-3 md:mb-0">
              <h1 className="text-2xl 2xl:text-3xl font-bold md:pl-4 pt-4 mt-4 md:mt-10 ml-5 md:ml-5  md:text-left">
                Web Development
              </h1>
              <p className="text-lg lg:text-xl 2xl:text-2xl md:pl-10 mt-2 md:text-left mx-5 md:mx-0 md:mr-2">
                Our team excels in website development, software development,
                and crafting high-converting landing pages.
              </p>
              <div className="w-[60%] md:hidden 2xl:block lg:w-[90%] m-auto">
                <LottieAnimation animationData={LottieWeb} />
              </div>
            </div>

            <div className="col-span-2 row-span-auto border-2 md:w-[49%] 2xl:w-auto rounded-3xl pb-10 md:h-72 bg-[#fffbeb] ">
              <h1 className="text-2xl 2xl:text-3xl font-bold  md:pl-4 2xl:pt-4  mt-7 md:mt-10 ml-5 md:text-left md:mr-2">
                Search Engine Optimization
              </h1>
              <p className="text-lg lg:text-xl 2xl:text-2xl md:pl-10 mt-2 text-left mx-5 md:mx-0 md:mr-2">
                SEO services to boost online visibility, drive organic traffic,
                improve rankings, and effectively reach your target audience.
              </p>
            </div>

            <div className="col-start-2 row-start-auto border-2 rounded-3xl lg:h-64  2xl:h-72 2xl:mt-[123px] mt-3 md:mt-0 py-10 md:py-0 md:pb-8 bg-[#fffbeb] lg:w-[49%] 2xl:w-auto">
              <h1 className="text-2xl 2xl:text-3xl font-bold md:ml-10 md:pt-6 ml-5 text-left">
                Data Analysis
              </h1>
              <p className="text-lg lg:text-xl 2xl:text-2xl md:pl-10 mt-2 text-left mx-5 md:mx-0 md:mr-4 lg:mr-0">
                We provide professional data analysis services, transforming
                complex data into actionable insights to optimize strategies,
                enhance performance.
              </p>
            </div>
            <div className="col-start-3 row-start-auto border-2 rounded-3xl lg:h-64 2xl:h-72 mt-3 md:mt-0 2xl:mt-[123px] py-10 md:py-0 bg-[#fffbeb] md:pb-8 lg:w-[49%] 2xl:w-auto">
              <h1 className="text-2xl 2xl:text-3xl font-bold md:ml-10 md:pt-6 ml-5 text-left">
                Digital Marketing{" "}
              </h1>
              <p className="text-lg lg:text-xl 2xl:text-2xl md:pl-10 mt-2 text-left mx-5 md:mx-0 md:mr-4 2xl:mr-2 ">
                We provide comprehensive digital marketing services, including
                social media, graphic design, and video editing for brand
                elevation and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div>
        <Marquee speed={80} className="bg-[#fdfdfd] pb-5">
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
        <hr className="opacity-50" />
      </div>
      {/* section5 */}

      <div className="flex flex-col md:flex-row items-center justify-around w-full pb-14 md:py-20 bg-[#fdfdfd]">
        <div className="w-[280px]">
          {" "}
          <div className="flex justify-center my-10">
            <Image
              className="bg-[#D1FCD6] w-[100px] lg:w-[140px] rounded-full p-5 lg:p-10"
              src={Growth}
              alt="#"
            />
          </div>
          <p className="text-center font-bold text-lg lg:text-xl">
            Accelerate Growth
          </p>
          <p className="text-center"> Strategies to boost your business.</p>
        </div>
        <div className="w-[280px]">
          {" "}
          <div className="flex justify-center my-10">
            <Image
              className="bg-[#FFE6A5] w-[100px] lg:w-[140px] rounded-full p-5 lg:p-10"
              src={Idea}
              alt="#"
            />
          </div>
          <p className="text-center font-bold text-lg lg:text-xl">
            Innovative Approach
          </p>
          <p className="text-center">Cutting-edge strategies for growth.</p>
        </div>
        <div className="w-[280px]">
          {" "}
          <div className="flex justify-center my-10">
            <Image
              className="bg-[#BACFFF] w-[100px] lg:w-[140px] rounded-full p-5 lg:p-10"
              src={Test}
              alt="#"
            />
          </div>
          <p className="text-center font-bold text-lg lg:text-xl">
            Proven Results
          </p>
          <p className="text-center">Success stories across industries. </p>
        </div>
        <div className="w-[280px]">
          {" "}
          <div className="flex justify-center my-10">
            <Image
              className="bg-[#FF9B58] w-[100px] lg:w-[140px] rounded-full p-5 lg:p-10"
              src={People}
              alt="#"
            />
          </div>
          <p className="text-center font-bold text-lg lg:text-xl">
            Expert Team
          </p>
          <p className="text-center">Skilled professionals in every service.</p>
        </div>
      </div>

      {/* section6 */}
      <div className="flex h-[500px] rounded-md  flex-col antialiased bg-[#fdfdfd] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden md:rounded-b-[150px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="bg-[#fdfdfd]"
        />
      </div>
      <div
        id="testimonialsMb"
        className="flex overflow-x-scroll overflow-y-hidden w-auto gap-4"
      ></div>

      {/* section6 */}

      <div
        id="contact"
        className="flex flex-col lg:flex-row justify-between  md:w-[70%] m-auto pt-20 mb-4"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Get in touch
          </h1>
          <div className="w-[270px] md:w-[400px] ">
            <LottieAnimation animationData={LottieContact} />
          </div>
        </div>

        <form
          action="https://formsubmit.co/vrushabh.skymentor@gmail.com"
          method="POST"
        >
          <div>
            <div className="flex flex-col 2xl:flex-row w-[100%] md:mt-240 flex-wrap justify-center items-center">
              <div className="flex flex-col w-[70%] md:w-auto">
                <h3 className="font-bold py-2">Name</h3>
                <input
                  className="border-2 rounded-lg p-2 px-4 w-full md:w-80 lg-w-80 md:mr-2"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex flex-col w-[70%] md:w-auto">
                <h3 className="font-bold py-2">Email</h3>
                <input
                  className="border-2 rounded-lg p-2 px-4 w-full md:w-80"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-stretch ">
              <div className="flex flex-col w-[70%] md:w-auto">
                <h3 className="font-bold py-2 ">Message</h3>
                <textarea
                  className="border-2 rounded-lg p-2 px-4 w-full md:w-80 2xl:w-full h-24 mb-4"
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

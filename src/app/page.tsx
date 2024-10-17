"use client";
import React from "react";
import LottieAnimation from "../components/Lottie";
import LottieFlot from "@/app/assets/lottie/lottie1.json";
import LottieCircle from "@/app/assets/lottie/lottie2.json";
export default function Home() {
  return (
    <>
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
      <div>
        <div className="flex flex-row justify-center align-middle items-center">
          <span className="font-bold text-xl w-[60%]">
            At SkyMentor, we specialize in offering a wide array of digital
            services tailored to help your business grow. From website
            development and social media marketing to SEO and data analysis, we
            combine creative solutions with technical expertise to elevate your
            brand.{" "}
          </span>
          <div className="w-72 relative">
             <LottieAnimation animationData={LottieCircle}/>
          </div>
         
        </div>
        <span>
          We go beyond just providing services; we partner with you to develop
          innovative strategies that work for your unique needs. Whether you're
          aiming to build a high-performance website, boost your online
          visibility, or craft engaging marketing campaigns, SkyMentor is
          committed to being your trusted partner in navigating the complex
          digital landscape.
        </span>
      </div>
    </>
  );
}

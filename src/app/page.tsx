"use client";
import React from "react";
import LottieAnimation from "../components/Lottie";
import LottieFlot from '@/app/assets/lottie/lottie1.json' 
export default function Home() {
  return (
    <>
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_left,transparent_10%,black)]"></div>
 <hr /> 
      <div className="absolute flex flex-row  text-white justify-center align-middle items-center h-[80%] w-full rounded-bl-[220px]">
        <div className="flex flex-col w-[50%] mb-10">
          <span className="font-bold text-9xl">SKYMENTOR</span>
          <span className="ml-1 text-base">Get The Best Service</span>
          <span className="ml-1 text-xl">
            We are dedicated to providing top-notch services to our community. <br />
            Our mission is to support and guide you towards success.
          </span>
        </div>
        <div className="w-[600px]"> 
          <LottieAnimation animationData={LottieFlot} />
        </div>
      </div>

    <div>

    </div>
    </div>
     
   
    </>
  );
}

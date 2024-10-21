"use client";
import React from "react";
import LottieAbout from "@/app/assets/lottie/aboutus.json";
import LottieAnimation from "@/components/Lottie";
import Image from "next/image";
import Staffcards from "@/components/ui/staffcards";
import Vrushab from "@/app/assets/images/vrushab.webp";
import Parag from "@/app/assets/images/parag.webp";
import Abhi from "@/app/assets/images/abhi.webp";
import Chetna from "@/app/assets/images/chetna.webp";
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
import Faq from "@/components/ui/Faq";

export default function page() {
  return (
    <>
      {/* section1 */}
      <div className="bg-black h-[470px] rounded-bl-[180px]">
        <div className="flex flex-row justify-between items-center w-[70%] m-auto">
          <h1 className="text-white text-8xl font-bold pt-10">About Us</h1>
          <div className="w-[600px] ">
            {" "}
            <LottieAnimation animationData={LottieAbout} />
          </div>
        </div>
      </div>

      {/* section2 */}
      <p className="w-[80%] text-center m-auto font-bold text-xl mt-24">
        Skymentor Technology & Services, your gateway to digital success! Based
        in Nagpur, we're an innovative company offering Digital Marketing,
        Software Development, Website Development, SEO Execution, and Internship
        Recruitment services. Our visually appealing websites enhance online
        presence. Choose Skymentor as your strategic partner, and let us propel
        your business to new heights through technology, innovation, and
        creativity, paving the way for a prosperous digital future.
      </p>

      {/* section 3 */}
      <h1 className="text-center text-6xl font-bold mt-24 ">Meet The Team</h1>
      <div className="flex flex-row flex-wrap  w-[90%] m-auto mt-10">
        <Staffcards
          name={"Vrushabh Chaple"}
          post={"Chief Executive Officer"}
          link={"https://www.linkedin.com/in/vrushabh-chaple-485b2b118/"}
          image={Vrushab}
        />
        <Staffcards
          name={"Parag Dahat"}
          post={"Senior Fullstack Developer"}
          link={
            "https://www.linkedin.com/in/parag-dahat-00495411a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          image={Parag}
        />
        <Staffcards
          name={"Chetna Bopche"}
          post={"Human Resource Manager"}
          link={
            "https://www.linkedin.com/in/chetna-bopche-257982298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          image={Chetna}
        />
        <Staffcards
          name={"Abhishek Mishra"}
          post={"Data Analyst"}
          link={"https://www.linkedin.com/in/abhishek-mishra-185a95282/"}
          image={Abhi}
        />
        <Staffcards
          name={"Vrushabh Chaple"}
          post={"Chief Executive Officer"}
          link={"https://www.linkedin.com/in/vrushabh-chaple-485b2b11"}
          image={Vrushab}
        />
        <Staffcards
          name={"Parag Dahat"}
          post={"Senior Fullstack Developer"}
          link={
            "https://www.linkedin.com/in/parag-dahat-00495411a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          image={Parag}
        />
        <Staffcards
          name={"Chetna Bopche"}
          post={"Human Resource Manager"}
          link={
            "https://www.linkedin.com/in/chetna-bopche-257982298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          image={Chetna}
        />
        <Staffcards
          name={"Abhishek Mishra"}
          post={"Data Analyst"}
          link={"https://www.linkedin.com/in/abhishek-mishra-185a95282/"}
          image={Abhi}
        />
      </div>

      {/* section3 */}
      <div className="bg-white rounded-b-[150px] rounded-t-[150px] pb-10">
        <h1 className="text-center font-bold text-6xl mb-24 mt-10 pt-10 ">
          Trusted By
        </h1>
        <div className="flex flex-row flex-wrap w-[70%] m-auto  items-center">
          <div>
            <Image
              className="grayscale w-[300px] h-[210px] object-contain  bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo12}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] h-[210px] object-contain  bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo15}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] h-[210px] object-contain bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo1}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo2}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo3}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo4}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo5}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo6}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo9}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo10}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo11}
              alt="#"
            />
          </div>

          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo13}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo14}
              alt="#"
            />
          </div>

          <div>
            <Image
              className="grayscale w-[300px] bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo16}
              alt="#"
            />
          </div>
        </div>
      </div>

      {/* section4 */}
      <div className="mb-14">
        <h1 className="text-5xl font-bold text-center my-10">
        Your Questions, Answered
      </h1>

      <Faq
        question={"What is web development?"}
        answer={
          "Our team excels in website development, software development, and crafting high-converting landing pages."
        }
      />
      <Faq
        question={"What is web development?"}
        answer={
          "Our team excels in website development, software development, and crafting high-converting landing pages."
        }
      />
      <Faq
        question={"What is web development?"}
        answer={
          "Our team excels in website development, software development, and crafting high-converting landing pages."
        }
      />
      <Faq
        question={"What is web development?"}
        answer={
          "Our team excels in website development, software development, and crafting high-converting landing pages."
        }
      />
      </div>
      
    </>
  );
}

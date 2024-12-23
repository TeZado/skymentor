"use client";
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

import { useRef } from "react";
import { useInView } from "framer-motion";
import LottieAbout from "@/app/assets/lottie/aboutus.json";
// import LottieAnimation from "@/components/Lottie";
import dynamic from "next/dynamic";
const LottieAnimation = dynamic(() => import("@/components/Lottie"), { ssr: false });
import Image from "next/image";
import Staffcards from "@/components/ui/staffcards";
import Vrushab from "@/app/assets/images/vrushab.webp";
import Parag from "@/app/assets/images/parag.webp";
import Abhi from "@/app/assets/images/abhi.webp";
import Chetna from "@/app/assets/images/chetna.webp";
import Manthan from "@/app/assets/images/manthan.jpg";
import Kalyani from "@/app/assets/images/kalyani.jpg";
import Rohit from "@/app/assets/images/rohit.jpg";
import Office from "@/app/assets/images/office.jpg";
import Faq from "@/components/ui/Faq";

const teamMembers = [
  {
    name: "Vrushabh Chaple",
    post: "Chief Executive Officer",
    link: "https://www.linkedin.com/in/vrushabh-chaple-485b2b118/",
    image: Vrushab,
  },
  {
    name: "Parag Dahat",
    post: "Senior Fullstack Developer",
    link: "https://www.linkedin.com/in/parag-dahat-00495411a",
    image: Parag,
  },
  {
    name: "Chetna Bopche",
    post: "Human Resource Manager",
    link: "https://www.linkedin.com/in/chetna-bopche-257982298",
    image: Chetna,
  },
  {
    name: "Abhishek Mishra",
    post: "Data Analyst",
    link: "https://www.linkedin.com/in/abhishek-mishra-185a95282/",
    image: Abhi,
  },
  {
    name: "Rohit bawne",
    post: "Digital marketing head",
    link: "#",
    image: Rohit,
  },
  {
    name: "Kalyani rangankar",
    post: "Saleforce (team head)",
    link: "#",
    image: Kalyani,
  },
  {
    name: "Manthan Jagtade",
    post: "Sales officer",
    link: "#",
    image: Manthan,
  },
];

export default function page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* section1 */}
      <div className="bg-black h-[370px] lg:h-[350px] 2xl:h-[470px] md:rounded-bl-[180px] ">
        <div className="flex flex-col lg:flex-row justify-between items-center w-[70%] m-auto">
          <h1 className="text-white text-5xl md:text-6xl 2xl:text-8xl font-bold pt-10">
            About Us
          </h1>
          <div className="w-[350px] lg:w-[440px] 2xl:w-[600px]">
          <LottieAnimation animationData={LottieAbout} />
          </div>
        </div>
      </div>

      {/* section2 */}
      <div
        ref={ref}
        className={`w-full md:w-[95%] 2xl:w-[80%] flex lg:flex-row flex-col m-auto p-2 md:p-10 mt-0 lg:mt-24 gap-10 items-center justify-center ${
          isInView
            ? "opacity-100 transform-none"
            : "opacity-0 transform translate-y-20"
        }`}
      >
        <p className="w-[90%] m-auto font-normal md:font-bold text-lg md:text-xl mt-10 2xl:mt-24">
          Skymentor Technology & Services, your gateway to digital success!
          Based in Nagpur, we are an innovative company offering Digital
          Marketing, Software Development, Website Development, SEO Execution,
          and Internship Recruitment services. Our visually appealing websites
          enhance online presence. Choose Skymentor as your strategic partner,
          and let us propel your business to new heights through technology,
          innovation, and creativity, paving the way for a prosperous digital
          future.
        </p>
        <Image
          className="w-[90%] lg:w-[50%] 2xl:max-w-[800px] bg-white rounded-2xl shadow-lg md:m-3 m-auto object-contain"
          src={Office}
          alt="Office"
        />
      </div>

      {/* section 3 */}
      <h1 className="text-center text-4xl md:text-5xl font-bold my-16">
        Meet The Team
      </h1>
      <div className="flex flex-row flex-wrap w-[99%] 2xl:w-[85%] m-auto justify-center gap-2 md:gap-10">
        {teamMembers.map(({ name, post, link, image }, index) => (
          <Staffcards
            key={index}
            name={name}
            post={post}
            link={link}
            image={image}
          />
        ))}
      </div>

      {/* section gallery */}
      {/* section3 */}
      <div className="bg-[#fdfdfd] md:rounded-b-[150px] md:rounded-t-[150px] pb-10">
        <h1 className="text-center font-bold text-4xl md:text-5xl mb-7 md:mb-24 mt-10 pt-10 ">
          Trusted By
        </h1>
        <div className="flex flex-row flex-wrap w-full md:w-[90%] m-auto items-center justify-center">
          <div>
            <Image
              className=" w-[150px] h-[120px] lg:w-[300px] lg:h-[210px] object-contain  bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo12}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] h-[120px] lg:w-[300px] lg:h-[210px] object-contain  bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo15}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] h-[120px] lg:w-[300px] lg:h-[210px] object-contain bg-white rounded-2xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo1}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo2}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo3}
              alt="#"
            />
          </div>
          <div>
            <Image
              className="grayscale w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo4}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo5}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo6}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo9}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo10}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo11}
              alt="#"
            />
          </div>

          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo13}
              alt="#"
            />
          </div>
          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo14}
              alt="#"
            />
          </div>

          <div>
            <Image
              className=" w-[150px] lg:w-[300px] bg-white rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,_0,_0,_0.1)] p-3 m-3"
              src={CalibreLogo16}
              alt="#"
            />
          </div>
        </div>
      </div>

      {/* section4 */}
      <div className="mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-center my-10">
          Your Questions, Answered
        </h1>
        <Faq
          question="What types of websites do you develop?"
          answer="We develop a wide range of websites, including business websites, e-commerce stores, blogs, portfolios, and custom web applications. Our team works closely with you to create a site that fits your specific needs."
        />
        <Faq
          question="What is SEO, and why is it important for my business?"
          answer="SEO (Search Engine Optimization) helps improve your website’s visibility on search engines like Google. A higher ranking means more traffic to your site, which can lead to more customers and growth for your business. SEO is important because it helps you stay competitive online."
        />
        <Faq
          question="What digital marketing services do you offer?"
          answer="We offer a range of digital marketing services, including social media management, content creation, online advertising (PPC), and email marketing. We create customized strategies to help you reach your audience and achieve your business goals."
        />
        <Faq
          question="Do you offer ongoing website maintenance?"
          answer="Yes, we provide website maintenance and support to keep your website running smoothly. This includes regular updates, security checks, and performance optimization to ensure your site stays up-to-date and functional."
        />
      </div>
    </>
  );
}

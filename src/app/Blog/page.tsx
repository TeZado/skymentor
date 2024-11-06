"use client";
import LottieAnimation from "@/components/Lottie";
import BlogLottie from "@/app/assets/lottie/about.json";
import BLogImg from "@/app/assets/images/blog1.webp";
import Blogcard from "@/components/ui/blogcard";

export default function page() {
  return (
    <>
      {/* section 1 */}
      <div className="bg-black h-[350px] lg:h-[350px] 2xl:h-[470px] md:rounded-bl-[180px] ">
        <div className="flex flex-col lg:flex-row justify-between items-center w-[70%] m-auto">
          <h1 className="text-white text-5xl md:text-6xl 2xl:text-8xl font-bold pt-10">Blog</h1>
          <div className="w-[300px] lg:w-[440px] 2xl:w-[600px] ">
            {" "}
            <LottieAnimation animationData={BlogLottie} />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <Blogcard
          title={"  Navigating the Digital Marketing."}
          image={BLogImg}
          subtitle={"Landscape: Trends, Tips, and Strategies for 2024"}
          date={"3 Aug 2024"}
          name={"Vrushabh Chaple"}
          blogNumber={1}
        />
        <Blogcard
          title={"  Navigating the Digital Marketing."}
          image={BLogImg}
          subtitle={"Landscape: Trends, Tips, and Strategies for 2024"}
          date={"3 Aug 2024"}
          name={"Vrushabh Chaple"}
          blogNumber={2}
        />
  
        </div>
        </div> 
    </>
  );
}

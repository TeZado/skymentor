"use client";
import LottieAnimation from "@/components/Lottie";
import BlogLottie from "@/app/assets/lottie/about.json";
import BLogImg from "@/app/assets/images/blog1.webp";
import Blogcard from "@/components/ui/blogcard";

export default function page() {
  return (
    <>
      {/* section 1 */}
      <div className="bg-black h-[470px] rounded-bl-[180px]">
        <div className="flex flex-row justify-between items-center w-[70%] m-auto">
          <h1 className="text-white text-8xl font-bold pt-10">Blog</h1>
          <div className="w-[600px] ">
            {" "}
            <LottieAnimation animationData={BlogLottie} />
          </div>
        </div>
      </div>

      {/* section 2 */}

      <Blogcard
        title={"  Navigating the Digital Marketing."}
        image={BLogImg}
        subtitle={"Landscape: Trends, Tips, and Strategies for 2024"}
        date={"3 Aug 2024"}
        name
      />
    </>
  );
}

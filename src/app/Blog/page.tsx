"use client";
import LottieAnimation from "@/components/Lottie";
import BlogLottie from "@/app/assets/lottie/about.json";
import Image from "next/image";
import BLogImg from "@/app/assets/images/blog1.webp";
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
            <div className="flex justify-end mt-16 mr-10">
                <div className="bg-black w-[500px] h-[600px] rounded-xl flex flex-col p-5 pl-10">
                    <h1 className="text-white text-2xl text-right">
                        Navigating the Digital Marketing Landscape: Trends, Tips...
                    </h1>
                    <Image className="rounded-xl w-[400px]" src={BLogImg} alt="Blog cover" />
                </div>
            </div>
        </>
    );
}

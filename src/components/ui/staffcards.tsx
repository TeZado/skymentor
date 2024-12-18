import Image, { StaticImageData } from "next/image";
import React from "react";
import Linkdin from "@/app/assets/images/linkdin.png";

export default function staffcards({
  image,
  link,
  name,
  post,
}: {
  image: StaticImageData;
  link: string;
  name: string;
  post: string;
}) {
  return (
    <>
      <div className="hidden lg:block border-2 w-[200px] h-[360px] md:w-[300px] md:h-[430px] p-6 border-[#ffefad] rounded-2xl">
        <div>
          <div>
            <Image className="w-[300px] rounded-xl" src={image} alt="#" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mt-2 ml-2">
              <p className="font-bold">{name}</p>
              <p>{post}</p>
            </div>
            <div className="mt-2">
              <a href={link} target="blank">
                <Image src={Linkdin} alt="#" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MV */}
      <div className="lg:hidden border-2 w-[180px] h-[350px] lg:w-[300px] lg:h-[430px] p-2 border-[#ffefad] rounded-2xl">
        <div>
          <div>
            <Image className="w-[300px] rounded-xl" src={image} alt="#" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mt-2 ml-2">
              <p className="font-bold ">{name}</p>
              <p className="h-[50px]">{post}</p>
            </div>
          </div>
          <div className="relative bottom-0 ml-1">
            <a href={link} target="blank">
              <Image width={40} src={Linkdin} alt="#" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from 'next/image'
import React from 'react'
import Linkdin from "@/app/assets/images/linkdin.png";

export default function staffcards({image,link,name,post}:any) {
  return (
    <div className="border-2 w-[300px] p-6 ml-24 border-[#ffefad] rounded-2xl mb-6 " >
    <div>
      <div>
        <Image className="w-[300px] rounded-2xl" src={image} alt="#" />
      </div>
      <div className="flex flex-row justify-between">
        <div className="mt-2 ml-2">
          <p className="font-bold">{name}</p>
          <p>{post}</p>
        </div>
        <div className="mt-2">
         <a href={link} target='blank'><Image src={Linkdin} alt="#" /></a> 
        </div>
      </div>
    </div>
  </div>
  )
}

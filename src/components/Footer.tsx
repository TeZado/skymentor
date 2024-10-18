import Image from "next/image"
import SkymentorLogo from "@/app/assets/images/skymentor.png";
import FacebookLogo from "@/app/assets/images/Facebook.png";
import EmailLogo from "@/app/assets/images/Email.png";
import InstaLogo from "@/app/assets/images/Instagram.png";
import LinkLogo from "@/app/assets/images/LinkedIn.png";
import PhoneLogo from "@/app/assets/images/Phone.png";

function Footer() {
  return (
    <>
    <div className="bg-black w-full h-96 rounded-t-[128px] pt-20 font-bold text-white flex justify-between">
      <div className="ml-24  ">
        <Image src={SkymentorLogo} alt="Skymentor logo" />
        <div className="mt-6 ">
          <p className="font-bold">Skymentor Technology and Services Pvt.Ltd.</p>
          <p>Magh Apartment,Floor No 3rd,Padole Square,Nagpur,</p>
          <p>Maharshtra,440022</p>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <Image className="bg-black w-8 h-8" src={EmailLogo} alt="" />
          <div>
            <p>info@skymentor.in</p>
            <p>hr@skymentor.in</p>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <Image className="w-8 h-8" src={PhoneLogo} alt="" />{" "}
          <span>Call us</span>
        </div>
      </div>
      <div className="flex gap-8 mt-16 ml-24 mr-56">
        
          <div className="mr-48">
          <p>Home</p>
          <p className="mt-12">About</p>
          </div>
          <div className="">
            <p>Services</p>
            <p className="mt-12">Blog</p>
          
        </div>
      </div>

      <div className="mt-16 mr-48">
        <p>Connect with us on social media</p>
        <div className="flex gap-4 mt-4">
          <Image src={LinkLogo} alt="" />
          <Image src={InstaLogo} alt="" />
          <Image src={FacebookLogo} alt="" />
        </div>
        </div>
    </div>
    <hr />
    <div className="bg-black h-20 text-white flex items-center justify-between px-24">
      <div>
        &copy;2024 Skymentor.All Rights Reserved.
      </div>
      <ul className="flex gap-48">
        <li>• Cookies</li>
        <li>• Terms and Conditions</li>
        <li>• Privacy policy</li>
      </ul>
    </div>
  </>
  )
}

export default Footer
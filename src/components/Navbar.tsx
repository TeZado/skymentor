import Image from "next/image";
import SkymentorLogo from "@/app/assets/images/skymentor.png";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="relative flex flex-row gap-10 justify-center align-middle py-8 bg-black text-white z-50" >
        <Image
          className="absolute left-10 top-7  w-[160px] h-[40px] "
          src={SkymentorLogo}
          alt="Skymentor Logo"
        />
       <Link href={'/'}><span className="cursor-pointer text-xl ">Home</span></Link> 
      <Link href={'/Services'}><span className="cursor-pointer text-xl ">Services</span></Link>  
       <Link href={'/About'}><span className="cursor-pointer text-xl ">About</span></Link> 
      <Link href={'/Blog'}> <span className="cursor-pointer text-xl ">Blog</span></Link> 
        <span className="absolute cursor-pointer text-xl right-10 border-[1px] rounded-md px-4 py-2 top-6">
          Get in touch
        </span>
      </div>
<hr className="relative z-50"/>
    </>
  );
}

export default Navbar;

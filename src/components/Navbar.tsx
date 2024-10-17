import Image from "next/image";
import SkymentorLogo from "@/app/assets/skymentor.png";
function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-10 justify-center align-middle py-8 bg-black text-white">
        <Image
          className="absolute left-10 top-7  w-[160px] h-[40px] "
          src={SkymentorLogo}
          alt="Skymentor Logo"
        />
        <span className="cursor-pointer text-xl ">Home</span>
        <span className="cursor-pointer text-xl ">Services</span>
        <span className="cursor-pointer text-xl ">About</span>
        <span className="cursor-pointer text-xl ">Blog</span>
        <span className="absolute cursor-pointer text-xl right-10 border-[1px] rounded-md px-4 py-2 top-6">
          Get in touch
        </span>
      </div>
    </>
  );
}

export default Navbar;

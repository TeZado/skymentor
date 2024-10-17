import Image from "next/image";
function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-10 justify-center align-center py-8 font-bold bg-black text-white">
        <span className="cursor-pointer text-xl ">Home</span>
        <span className="cursor-pointer text-xl ">Services</span>
        <span className="cursor-pointer text-xl ">About</span>
        <span className="cursor-pointer text-xl ">Blog</span>
        <span className="absolute cursor-pointer text-xl right-10 border-2 rounded-md px-4 py-2 top-6">Get in touch</span>
      </div>
    </>
  );
}

export default Navbar;

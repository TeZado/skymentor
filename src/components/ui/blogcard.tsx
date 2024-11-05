import Image from "next/image";
import Link from "next/link";

export default function blogcard({ image, title, subtitle, time, date }: any) {
  return (
    <Link href={`Blog/${title}`}>
         <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div className="rounded overflow-hidden shadow-lg">
          <div className="relative">
            <Image
              className="w-full"
              src={image}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

            <div className="text-sm absolute top-0 right-0 bg-black px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 transition duration-500 ease-in-out">
              <small>{date}</small>
            </div>
          </div>
          <div className="px-6 py-4">
            <a
              href="#"
              className="font-semibold text-lg inline-block transition duration-500 ease-in-out"
            >
              {title}
            </a>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
          <div className="px-6 py-4 flex flex-row items-center">
            <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
              <span className="ml-1">{time}</span>
            </span>
          </div>
        </div>
      </div>
    </div> 
    </Link>
  
  );
}

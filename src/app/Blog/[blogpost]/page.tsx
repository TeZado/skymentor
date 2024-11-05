import BlogData from "@/data/blog.json";
import Image from "next/image";

export default function page({ params }: any) {
  return (
    <>
      <div className="w-[70%] m-auto">
        <div className="my-14">
                 <h1 className="font-bold 2xl:text-5xl text-center ">
          {BlogData[params.blogpost - 1].title}
        </h1>
        <h1 className="font-bold 2xl:text-xl text-center my-4">
          {BlogData[params.blogpost - 1].subtitle}
        </h1> 
        </div>


          <Image className="m-auto my-10" width={900} height={900} src={BlogData[params.blogpost - 1].image} alt="image" />


        {BlogData[params.blogpost - 1].data?.map(
          ({ title, description }, index) => {
            return (
              <>
              <div key={index + title}>
                          <h1 className="font-bold 2xl:text-2xl my-2">
                  {index + 1} ) {title}
                </h1>
                <p className="px-2 mb-4 text-xl">{description}</p>
              </div>
      
              </>
            );
          }
        )}
      </div>
    </>
  );
}

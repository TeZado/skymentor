import BlogData from "@/data/blog.json";
import Image from "next/image";

export default function Page({ params }: { params: { blogpost: string } }) {
  const blogIndex = parseInt(params.blogpost) - 1; // Convert to number and zero-based index
  const blog = BlogData[blogIndex];

  if (!blog) {
    // Handle invalid or out-of-range blogpost param
    return (
      <div className="w-[90%] lg:w-[70%] m-auto text-center mt-8">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          Blog Post Not Found
        </h1>
        <p className="text-lg mt-4">The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <head>
        <title>{blog.title} | Blog</title>
        <meta name="description" content={blog.subtitle} />
      </head>
      <div className="w-[90%] lg:w-[70%] m-auto">
        <div className="mt-8 text-center">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            {blog.title}
          </h1>
          <h2 className="md:text-lg lg:text-xl my-2 lg:my-4">
            {blog.subtitle}
          </h2>
        </div>

        <Image
          className="m-auto my-10 h-auto max-h-[350px] object-contain"
          width={900}
          height={900}
          src={blog.image}
          alt={blog.title}
        />

        {blog.data?.map(({ title, description }, index) => (
          <div key={`${index}-${title}`}>
            <h3 className="font-bold lg:text-xl my-2">
              {index + 1}. {title}
            </h3>
            <p className="px-2 mb-4 lg:text-xl">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

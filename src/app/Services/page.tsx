"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import SkymentorLogo from "@/app/assets/images/tablet.png";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function Services() {
  const content = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "Website development is the process of creating and building websites for the internet.  It involves various tasks, including web design, web content development, client-side/server-side scripting, and network security configuration. Web developers use programming languages like HTML, CSS, JavaScript, and server-side languages such as PHP, Python, or Ruby to build the functionality and interactivity of websites.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];
  return (
    <>
      {/* section 1 */}
      <div className="bg-black h-[740px] rounded-b-[180px]">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-8xl font-semibold text-white z-50">
                Services <br />
                <p className="text-xl md:text-xl leading-none pb-10 mt-2 z-50">
                  Our skilled team delivers customized solutions that help your
                  business succeed online.
                </p>
              </h1>
            </>
          }
        >
          <Image
            src={SkymentorLogo}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      {/* section 2 */}
      <div className="mt-[500px]">
        <h1 className="text-center text-5xl font-bold">What We Offer</h1>
        <div  className="p-10">
          <StickyScroll  content={content} />
        </div>
      </div>
    </>
  );
}

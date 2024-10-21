"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import SkymentorLogo from "@/app/assets/images/tablet.png";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Webdev from "@/app/assets/images/websitedev.jpg";
import Datadev from "@/app/assets/images/dataan.jpg";
import Digim from "@/app/assets/images/digim.jpg";
import Seo from "@/app/assets/images/seo.jpg";

export default function Services() {
  const content = [
    {
      title: "Website Development",
      description:
        "SkyMentor builds websites that are attractive, fast, and easy to use. Whether you’re a small business or a large company, we create custom websites to fit your needs. From simple one-page sites to full online stores, our team ensures your website works smoothly on all devices. We focus on providing a great experience for your users, which helps turn visitors into customers.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={Webdev}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Digital Marketing",
      description:
        "We help your business grow by creating digital marketing strategies that work. Our team manages your social media, runs ads, and creates content that connects with your target audience. Whether it’s boosting your brand’s visibility or driving more traffic to your website, our digital marketing services are tailored to your business goals. We help you reach the right people at the right time, so your business can thrive online.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={Digim}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Want to be found easily on search engines like Google? Our SEO services improve your website’s ranking, making it more visible to potential customers. We focus on optimizing your content and website structure so that you rank higher and attract more organic traffic. With SkyMentor’s SEO strategies, your business will stand out in a crowded market.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={Seo}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Data Analysis",
      description:
        "Our data analysis services turn your business data into valuable insights. We help you understand your data, identify trends, and make informed decisions to improve your business performance. By analyzing key metrics, we enable you to find opportunities for growth and efficiency.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Datadev}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
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
        <div className="p-10">
          <StickyScroll content={content} />
        </div>
      </div>
    </>
  );
}

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
      img: Webdev
    },
    {
      title: "Digital Marketing",
      description:
        "We help your business grow by creating digital marketing strategies that work. Our team manages your social media, runs ads, and creates content that connects with your target audience. Whether it’s boosting your brand’s visibility or driving more traffic to your website, our digital marketing services are tailored to your business goals. We help you reach the right people at the right time, so your business can thrive online.",
        img: Digim
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Want to be found easily on search engines like Google? Our SEO services improve your website’s ranking, making it more visible to potential customers. We focus on optimizing your content and website structure so that you rank higher and attract more organic traffic. With SkyMentor’s SEO strategies, your business will stand out in a crowded market.",
        img: Seo
    },
    {
      title: "Data Analysis",
      description:
        "Our data analysis services turn your business data into valuable insights. We help you understand your data, identify trends, and make informed decisions to improve your business performance. By analyzing key metrics, we enable you to find opportunities for growth and efficiency.",
        img: Datadev
    },
  ];
  return (
    <>
      {/* section 1 */}
      <div className="bg-black h-[600px] md:h-[740px] rounded-b-[50px] md:rounded-b-[180px]">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-5xl md:text-8xl font-semibold text-white z-50">
                Services <br />
                <p className="text-lg md:text-xl leading-none pb-10 mt-2 z-50 w-[90%] m-auto  ">
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
      <div className="hidden md:block mt-[500px]">
        <h1 className="text-center text-5xl font-bold">What We Offer</h1>
        <div className="p-10">
          <StickyScroll content={content} />
        </div>
      </div>



<div className="md:hidden  mt-40">
    {content?.map(({ title, description,img }) => {
        return (
          <div
            key={title}
            className="flex flex-col p-8 sm:p-16 md:p-24 justify-center"
          >
            <div data-theme="teal" className="mx-auto max-w-6xl">
              <h2 className="sr-only">Featured case study</h2>
              <section className="font-sans text-black">
                <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                  <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                    <div className="h-full">
                      <article className="h-full">
                        <div className="h-full">
                          <Image
                            className="h-full object-cover rounded-tr-xl"
                            src={img}
                            width="733"
                            height="412"
                            alt='""'
                          />
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="p-6 bg-[#fffbeb] border-[1px] rounded-bl-xl">
                    <div className="leading-relaxed">
                      <h2 className="leading-tight text-4xl font-bold">
                        {title}
                      </h2>
                      <p className="mt-4">{description}</p>

                      <p></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
      })}
</div>
    
    </>
  );
}

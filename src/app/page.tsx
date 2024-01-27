"use client";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton/PrimaryButton";
import Image from "next/image";
import React from "react";
import HeroImage from "../assets/hero/hero.svg";
import { CardforImage, PageTitle, Paragraph } from "@/components";
import Card1 from "../assets/svg/home/hanthana.svg";
import Card2 from "../assets/svg/home/lobbbyNight.svg";
import Card3 from "../assets/svg/home/balcony.svg";
import Card4 from "../assets/svg/home/topview.svg";
import Mission1 from "../assets/svg/home/Frame 1359.svg";
import Mission2 from "../assets/svg/home/bathroom.svg";
import Mission3 from "../assets/svg/home/terrace.svg";
import Mission4 from "../assets/svg/home/lobby.svg";
import Head from "next/head";
import { ContactForm } from "@/components/Forms/ContactForm/ContactForm";

const Fade = require("react-reveal/Fade");

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dream House</title>
        <meta
          name="description"
          content="Access and lead the future of information technology, today. Partner with Dream House to be at the forefront  of innovation."
        />
        <meta
          name="keywords"
          content="Dream House, technology, IT solutions, consulting, innovation"
        />
        <meta property="og:title" content="Dream House - We specialize in" />
        <meta
          property="og:description"
          content="Unleash Unparalleled Efficiency: Tailored IT Solutions for Every Business."
        />
        <meta
          property="og:image"
          content="URL to your featured image for social sharing"
        />
        <meta property="og:url" content="URL to your home page" />
      </Head>
      <div className="heroContainer px-5 mx-auto max-w-[1300px] lg:px-0  sm:min-h-[80vh] md:min-h-[50vh] md:h-auto lg:min-h-[90vh] items-center flex  ">
        <div className="grid md:grid-cols-5 grid-cols-1 items-center h-[100%]">
          <Fade bottom>
            <div className="block md:hidden col-span-2 relative">
              <Image
                src={HeroImage}
                alt=""
                className="w-full absolute scale-150 top-[40px] right-[20px] "
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="col-span-3 block md:hidden mt-96">
              <h1
                className="heroTitle font-poppins font-[600] text-4xl text-start md:text-start md:text-4xl  text-primaryColor "
                style={{ lineHeight: "1.2" }}
              >
                Dreamhouse villa
              </h1>

              <h2
                className="heroSubTitle text-2xl text-start font-[600] md:text-start md:text-2xl lg:text-3xl pt-6 font-poppins"
                style={{
                  background:
                    "linear-gradient(90deg, #868f96 -31.38%, #596164 132.45%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                When the mountains are calling, Hanthana is like nothing on
                earth. Our Resort is situated at the front door of this majestic
                range, steeped in pioneering spirit, a refined cultural touch,
                and legendary Sri Lankan hospitality.
              </h2>
              <div className="justify-start md:justify-start flex items-center md:items-start">
                <PrimaryButton url="/contact" hasArrow name={"See offers"} />
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="col-span-2 hidden md:block mt-20 md:mt-0">
              <h1
                className="heroTitle font-poppins font-[600] text-3xl text-center md:text-start md:text-4xl lg:text-6xl text-primaryColor pt-10"
                style={{ lineHeight: "1.2" }}
              >
                Welcome to{" "}
              </h1>
              <h1
                className="heroTitle font-poppins font-[600] text-3xl text-center md:text-start md:text-4xl lg:text-6xl text-primaryColor "
                style={{ lineHeight: "1.2" }}
              >
                Dreamhouse{" "}
              </h1>
              <h2
                className="heroSubTitle text-sm text-center font-[400] md:text-justify md:text-lg lg:text-xl pt-6 font-poppins"
                style={{
                  background:
                    "linear-gradient(90deg, #868f96 -31.38%, #596164 132.45%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                When the mountains are calling, Hanthana is like nothing on
                earth. Our Resort is situated at the front door of this majestic
                range, steeped in pioneering spirit, a refined cultural touch,
                and legendary Sri Lankan hospitality.
              </h2>
              <div className="justify-center md:justify-start flex items-center md:items-start">
                <PrimaryButton url="/contact" hasArrow name={"See offers"} />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="mt-10 hidden md:block md:mt-0 col-span-3 md:pl-20">
              <Image src={HeroImage} alt="" className="w-full  " />
            </div>
          </Fade>
        </div>
      </div>

      <div>
        <section className="h-auto mt-20 lg:mt-40 px-5 mx-auto max-w-[1300px] lg:px-0  md:min-h-[60vh] ">
          <div className="grid gap-10 lg:gap-32 lg:grid-cols-2 grid-cols-1  items-center justify-between h-auto">
            <Fade left>
              <div className="col">
                <Fade bottom>
                  <PageTitle start title="Amidst Nature and Culture" />
                </Fade>
                <Fade bottom>
                  <div className="mt-5">
                    <Paragraph
                      start
                      paragraph="Conceptualized with luxury, serenity and the best of hospitality in mind, the Seven Angels Collection aims to offer guests the finest holiday experience in beautiful locations around Sri Lanka. Our properties exude character from their surrounding historic cities, while also offering modern facilities of a luxury hotel getaway. With exceptional service, a team that has decades of experience and serene surroundings to help you relax, the purpose of our properties is to offer you, our guest, to create an everlasting memory of Sri Lankan hospitality and service."
                    />
                  </div>
                </Fade>
              </div>
            </Fade>
            <Fade right>
              <div className="col mt-5 md:mt-0">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                  <div className="grid-cols-1 md:gap-4">
                    <Fade bottom>
                      <div className="  h-auto  col-span-1">
                        <CardforImage alt="" path={Card1} />
                      </div>
                    </Fade>
                    <Fade bottom>
                      <div className="mt-5  h-auto col-span-1">
                        <CardforImage path={Card2} alt="" />
                      </div>
                    </Fade>
                  </div>
                  <div>
                    <Fade bottom>
                      <div className="  h-auto col-span-1">
                        <CardforImage path={Card3} alt="" />
                      </div>
                    </Fade>

                    <Fade bottom>
                      <div className=" mt-5 h-auto  col-span-1">
                        <CardforImage alt="" path={Card4} />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </div>
      <section className="h-auto px-5 mx-auto max-w-[1300px] lg:px-0 mt-20 lg:mt-40 md:min-h-[50vh]">
        <div className="grid gap-10 lg:gap-32  lg:grid-cols-2 grid-cols-1 flex-row-reverse md:flex-row  items-center justify-between h-auto">
          <Fade left>
            <div className="col hidden  md:hidden lg:block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid-cols-1 gap-4">
                  <Fade bottom>
                    <div className="  h-auto row-span-1 col-span-1">
                      <CardforImage path={Mission1} alt="" />
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="  md:mt-5 h-auto row-span-2 col-span-1">
                      <CardforImage path={Mission2} alt="" />
                    </div>
                  </Fade>
                </div>
                <div>
                  <Fade bottom>
                    <div className="  h-auto row-span-2 col-span-1">
                      <CardforImage path={Mission3} alt="" />
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className=" md:mt-5 h-auto row-span-1 col-span-1">
                      <CardforImage path={Mission4} alt="" />
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col  md:mt-0">
              <Fade bottom>
                <PageTitle start title="Best of Paradise" />
              </Fade>
              <Fade bottom>
                <div className="mt-5">
                  <Paragraph
                    start
                    paragraph="Sri Lankan hospitality is not just service with a smile. It is a heartfelt experience that each team member feels passionate about, in taking care of their guests and giving them the finest experience while they are in Sri Lanka. From a welcome smile and greeting, to ensuring that your needs are met with genuine compassion, the warmth of Sri Lankan hospitality is hard to beat."
                  />
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade left>
            <div className="lg:hidden md:block mt-5 md:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid-cols-1 gap-4">
                  <Fade bottom>
                    <div className="  h-auto row-span-1 col-span-1">
                      <CardforImage path={Mission1} alt="" />
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="  mt-5 h-auto row-span-2 col-span-1">
                      <CardforImage path={Mission2} alt="" />
                    </div>
                  </Fade>
                </div>
                <div>
                  <Fade bottom>
                    <div className="  h-auto row-span-2 col-span-1">
                      <CardforImage path={Mission3} alt="" />
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className=" mt-5 h-auto row-span-1 col-span-1">
                      <CardforImage path={Mission4} alt="" />
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <section className="min-h-[40vh] mt-20 px-5 mx-auto max-w-[1300px] lg:px-0 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-start justify-between h-auto">
          <Fade left>
            <div className="col bg-white bg-opacity-[0.1] rounded-[6px] border border-white border-opacity-[0.1] backdrop-filter backdrop-blur-[10px] pt-10">
              <Fade bottom>
                <PageTitle start title="Our team is ready to help!" />
              </Fade>
              <Fade bottom>
                <div className="mt-5">
                  <Paragraph start paragraph="You can call or whatsapp" />
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade right>
            <div className="col">
              <Fade bottom>
                <ContactForm />
              </Fade>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Home;

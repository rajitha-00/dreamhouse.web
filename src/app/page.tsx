"use client";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton/PrimaryButton";
import Image from "next/image";
import React from "react";
import HeroImage from "../assets/hero/hero.svg";
import {
  CardforImage,
  Cardimage,
  LongCard,
  PageTitle,
  Paragraph,
  SmallHomeCard,
} from "@/components";
import Card1 from "../assets/home/hometop/1.svg";
import Card2 from "../assets/home/hometop/3.svg";
import Card3 from "../assets/home/hometop/2.svg";
import Card4 from "../assets/home/hometop/4.svg";
import Mission1 from "../assets/home/bestofkandy/1.svg";
import Mission2 from "../assets/home/bestofkandy/2.svg";
import Mission3 from "../assets/home/bestofkandy/3.svg";
import Mission4 from "../assets/home/bestofkandy/4.svg";
import Card6 from "../assets/home/kandy/maligawa.svg";
import Card5 from "../assets/home/kandy/birds.svg";
import Card7 from "../assets/home/kandy/garden.svg";
import Card8 from "../assets/home/kandy/mahameunawa.svg";
import Card9 from "../assets/home/kandy/polgolla.svg";
import Head from "next/head";
import { ContactForm } from "@/components/Forms/ContactForm/ContactForm";

import { Fade } from "react-awesome-reveal";
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
      </Head>
      <div className="heroContainer px-5 mx-auto max-w-[1500px] lg:px-0  sm:min-h-[80vh] md:min-h-[50vh] md:h-auto lg:min-h-[90vh] items-center flex  ">
        <div className="grid md:grid-cols-5 grid-cols-1 items-center h-[100%]">
          <div className="mt-10 md:hidden md:mt-0 col-span-3 md:pl-20">
            <Fade triggerOnce direction="right">
              {" "}
              <div className="col mt-5 md:mt-0">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                  <div>
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="rounded-tl-[80px] rounded-bl-[80px]   col-span-1">
                        <Image
                          className=" w-auto justify-center relative rounded-tr-[170px] rounded-bl-[150px] rounded-br-[150px] z-10 "
                          src={Card1}
                          alt={""}
                          width={90}
                          height={50}
                        />
                      </div>
                    </Fade>
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="mt-2   ">
                        <Image
                          className=" w-auto justify-center relative rounded-tl-[100px]  rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px] z-10 "
                          src={Card2}
                          alt={""}
                          width={90}
                          height={50}
                        />
                      </div>
                    </Fade>
                  </div>
                  <div>
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="">
                        <Image
                          className=" w-auto justify-center relative rounded-tl-[100px]  rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px] z-10 "
                          src={Card3}
                          alt={""}
                          width={90}
                          height={50}
                        />
                      </div>
                    </Fade>

                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className=" mt-5  ">
                        <Image
                          className=" w-auto justify-center relative rounded-tl-[170px]  rounded-tr-[170px]  rounded-bl-[170px] z-10 "
                          src={Card4}
                          alt={""}
                          width={90}
                          height={50}
                        />{" "}
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="block md:hidden col-span-2 relative">
            <Fade triggerOnce direction="left"></Fade>
          </div>{" "}
          <div className="col-span-3 block md:hidden ">
            <Fade triggerOnce direction="up">
              <h1
                className="heroTitle font-poppins font-[600] text-3xl text-start md:text-start md:text-4xl lg:text-6xl text-DreamhouseColor pt-10"
                style={{ lineHeight: "1.2" }}
              >
                Dream House Residence{" "}
              </h1>
              <Paragraph
                paragraph="Welcome to our enchanting retreat in Kandy, where the whispering
                palms and rustling leaves compose a symphony of tranquility.
                Nestled amidst the lush embrace of nature, our rest house
                beckons you to unwind in a haven of serenity. Immerse yourself
                in the rich tapestry of Kandy's cultural heritage, while our
                sanctuary offers a blend of modern comfort and traditional
                charm. Each corner unveils a story, and every sunset paints the
                sky in hues of warmth, creating an unforgettable canvas for your
                escape. Welcome to a sanctuary where time takes a leisurely
                stroll, and every moment is a cherished memory waiting to
                unfold."
              />
              <div className="justify-start md:justify-start flex items-center md:items-start">
                <PrimaryButton url="/contact" hasArrow name={"Explore"} />
              </div>
            </Fade>
          </div>
          <div className="col-span-2 hidden md:block mt-20 md:mt-0">
            <Fade triggerOnce direction="left">
              <h1
                className="heroTitle font-poppins font-[600] text-3xl text-center md:text-start md:text-4xl lg:text-6xl text-DreamhouseColor pt-10"
                style={{ lineHeight: "1.2" }}
              >
                Dream House{" "}
              </h1>
              <h1
                className="heroTitle font-poppins font-[600] text-3xl text-center md:text-start md:text-4xl lg:text-6xl text-DreamhouseColor "
                style={{ lineHeight: "1.2" }}
              >
                Residence{" "}
              </h1>
              <Paragraph
                start
                paragraph="Welcome to our enchanting retreat in Kandy, where the whispering
                palms and rustling leaves compose a symphony of tranquility.
                Nestled amidst the lush embrace of nature, our rest house
                beckons you to unwind in a haven of serenity. Immerse yourself
                in the rich tapestry of Kandy's cultural heritage, while our
                sanctuary offers a blend of modern comfort and traditional
                charm. Each corner unveils a story, and every sunset paints the
                sky in hues of warmth, creating an unforgettable canvas for your
                escape. Welcome to a sanctuary where time takes a leisurely
                stroll, and every moment is a cherished memory waiting to
                unfold."
              />
              <div className="justify-center md:justify-start flex items-center md:items-start">
                <PrimaryButton url="/contact" hasArrow name={"Explore"} />
              </div>
            </Fade>
          </div>
          <div className="mt-10 hidden md:block md:mt-0 col-span-3 md:pl-20">
            <Fade triggerOnce direction="right">
              {" "}
              <div className="col mt-5 md:mt-0">
                <div className="grid grid-cols-1  md:grid-cols-12 gap-4 justify-center items-center">
                  <div className="col-span-7">
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="   col-span-1">
                        <div className="rounded-[80px] relative">
                          <Image
                            className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 "
                            src={Card1}
                            alt={""}
                            width={90}
                            height={50}
                          />
                        </div>
                      </div>
                    </Fade>
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="mt-2   ">
                        <Image
                          className=" w-auto justify-center relative rounded-tl-[80px] rounded-br-[80px] z-10 "
                          src={Card2}
                          alt={""}
                          width={70}
                          height={50}
                        />
                      </div>
                    </Fade>
                  </div>
                  <div className="justify-center items-center col-span-5">
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="">
                        <Image
                          className=" w-auto justify-center relative rounded-tl-[80px] rounded-br-[80px] z-10 "
                          src={Card3}
                          alt={""}
                          width={70}
                          height={50}
                        />
                      </div>
                    </Fade>

                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className=" mt-2  ">
                        <Image
                          className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 "
                          src={Card4}
                          alt={""}
                          width={70}
                          height={50}
                        />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <section className="h-auto px-5 mx-auto max-w-[1500px] lg:px-0 mt-20 lg:mt-40 md:min-h-[50vh]">
        <div className="grid gap-10 lg:gap-32  lg:grid-cols-2 grid-cols-1 flex-row-reverse md:flex-row  items-center justify-between h-auto">
          <Fade triggerOnce direction="left">
            <div className="col hidden  md:hidden lg:block">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 justify-center items-center">
                <div className="col-span-7 gap-4">
                  <Fade triggerOnce direction="up">
                    {" "}
                    <Image
                      className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 "
                      src={Mission1}
                      alt={""}
                      width={70}
                      height={50}
                    />
                  </Fade>
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className="  md:mt-2 h-auto ">
                      <Image
                        className=" w-auto justify-center relative rounded-tl-[80px] rounded-br-[80px] z-10 "
                        src={Mission2}
                        alt={""}
                        width={70}
                        height={50}
                      />{" "}
                    </div>
                  </Fade>
                </div>
                <div className="col-span-5 mt-5 pt-5">
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className="  h-auto ">
                      <Image
                        className=" w-auto justify-center relative rounded-tl-[80px] rounded-br-[80px] z-10 "
                        src={Mission3}
                        alt={""}
                        width={70}
                        height={50}
                      />{" "}
                    </div>
                  </Fade>
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className=" md:mt-2 h-auto ">
                      <Image
                        className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 "
                        src={Mission1}
                        alt={""}
                        width={70}
                        height={50}
                      />{" "}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce direction="right">
            <div className="col  md:mt-0">
              <Fade triggerOnce direction="up">
                {" "}
                <PageTitle start title="Best of Kandy" />
              </Fade>
              <Fade triggerOnce direction="up">
                {" "}
                <div className="mt-5">
                  <Paragraph
                    start
                    paragraph="Sri Lankan hospitality is not just service with a smile. It is a heartfelt experience that each team member feels passionate about, in taking care of their guests and giving them the finest experience while they are in Sri Lanka. From a welcome smile and greeting, to ensuring that your needs are met with genuine compassion, the warmth of Sri Lankan hospitality is hard to beat."
                  />
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade triggerOnce direction="left">
            <div className="lg:hidden md:block mt-5 md:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid-cols-1 gap-4">
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className="  h-auto row-span-1 col-span-1">
                      <Image
                        className=" w-auto justify-center relative rounded-tr-[170px] rounded-bl-[150px] rounded-br-[150px] z-10 "
                        src={Mission1}
                        alt={""}
                        width={90}
                        height={50}
                      />
                    </div>
                  </Fade>
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className="mt-5 h-auto row-span-1 col-span-1">
                      <Image
                        className=" w-auto justify-center relative rounded-tr-[100px]  rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] z-10 "
                        src={Mission2}
                        alt={""}
                        width={90}
                        height={50}
                      />
                    </div>
                  </Fade>
                </div>
                <div>
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className="  h-auto row-span-2 col-span-1">
                      <Image
                        className=" w-auto justify-center relative rounded-tr-[100px]  rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] z-10 "
                        src={Mission3}
                        alt={""}
                        width={90}
                        height={50}
                      />{" "}
                    </div>
                  </Fade>
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className=" mt-5 h-auto row-span-1 col-span-1">
                      <Image
                        className=" w-auto justify-center relative rounded-tl-[170px] rounded-tr-[170px] rounded-tb-[150px] rounded-bl-[150px] z-10 "
                        src={Mission4}
                        alt={""}
                        width={90}
                        height={50}
                      />{" "}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <section className="h-auto md:min-h-[90vh] lg:mt-40  md:mt-20 mt-10 px-5 mx-auto max-w-[1500px] lg:px-0   ">
        <div className="grid  md:grid-cols-12 grid-cols-1 gap-10 mt-10 md:mt-20">
          <div className="md:col-span-8  ">
            <Fade triggerOnce direction="up">
              {" "}
              <div className="">
                <LongCard
                  alt=""
                  path={Card6}
                  description=""
                  key={1}
                  name="Sri Dalada Maligawa | The Temple of the Sacred Tooth Relic"
                  byCar
                  car="5.5 km by vehicle from Temple of tooth"
                  byFoot
                  foot="1.4 km by foot from Temple of tooth"
                />
              </div>
            </Fade>
          </div>
          <div className="md:col-span-4 grid-rows-2 ">
            <Fade triggerOnce direction="up">
              <div className=" ">
                <Cardimage
                  alt=""
                  path={Card5}
                  description=""
                  key={1}
                  name="Hanthana International Bird park"
                  byCar
                  car="8.1 km by vehicle from Hanthana International Bird park & Recreation"
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-10 mt-10 md:mt-10">
          <div className="col-span-4">
            <Fade triggerOnce direction="up">
              <div className="">
                <Cardimage
                  alt=""
                  path={Card7}
                  description=""
                  key={1}
                  name="Peradeniya Royal Botanical Garden"
                  byCar
                  car="9.9 km by vehicle from Peradeniya Royal Botanical Garden"
                />
              </div>
            </Fade>
          </div>
          <div className="col-span-4">
            <Fade triggerOnce direction="up">
              <div className="">
                <Cardimage
                  alt=""
                  path={Card8}
                  description=""
                  key={1}
                  name="Mahamevna Buddhist Monetary"
                  byCar
                  car="10.6 km by vehicle from Mahamevna Buddhist Monetary"
                />
              </div>
            </Fade>
          </div>
          <div className="col-span-4">
            <Fade triggerOnce direction="up">
              <div className="">
                <Cardimage
                  alt=""
                  path={Card9}
                  description=""
                  key={1}
                  name="Polgolla Dam"
                  byCar
                  car="4 km by vehicle from Polgolla Dam"
                />
              </div>
            </Fade>
          </div>
          <div className="col-span-4">
            <Fade triggerOnce direction="up">
              <div className="">
                <SmallHomeCard
                  key={1}
                  name="Kandy Lake Round"
                  byCar
                  car="1.6 km by vehicle from Kandy Lake"
                  byFoot
                  foot="1.4 km by foot from Kandy Lake"
                />
              </div>
            </Fade>
          </div>
          <div className="col-span-4">
            <Fade triggerOnce direction="up">
              <div className="">
                <SmallHomeCard
                  key={1}
                  name="Kandy Main Bus Stand & Railway Station"
                  byCar
                  car="4 km by vehicle from Kandy Railway Station & Main Bus Stand"
                />
              </div>
            </Fade>
          </div>
          <div className="col-span-4">
            <Fade triggerOnce direction="up">
              <div className="">
                <SmallHomeCard
                  key={1}
                  name="Kandy Avanhala Auditorium"
                  byCar
                  car="5.5 km by vehicle from Avanhala Auditorium"
                  byFoot
                  foot="1.4 km by foot from Avanhala Auditorium"
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* <section className="min-h-[40vh] mt-20 px-5 mx-auto max-w-[1500px] lg:px-0 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-start justify-between h-auto">
          <Fade triggerOnce direction="left">
            <div className="col bg-white bg-opacity-[0.1] rounded-[6px] border border-white border-opacity-[0.1] backdrop-filter backdrop-blur-[10px] pt-10">
              <Fade triggerOnce direction="up">
                {" "}
                <PageTitle start title="Our team is ready to help!" />
              </Fade>
              <Fade triggerOnce direction="up">
                {" "}
                <div className="mt-5">
                  <Paragraph start paragraph="You can call or whatsapp" />
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade triggerOnce direction="right">
            <div className="col">
              <Fade triggerOnce direction="up">
                {" "}
                <ContactForm />
              </Fade>
            </div>
          </Fade>
        </div>
      </section> */}
    </>
  );
};

export default Home;

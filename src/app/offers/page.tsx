import { HeroSection } from "@/components";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";
import { aboutHero } from "@/constants";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { Section3 } from "./sections/Section3";
export const metadata: Metadata = {
  title: "Offers",
};
const Offers: React.FC = () => {
  return (
    <div className="px-5 mx-auto max-w-[1300px] lg:px-0 ">
      <Head>
        <title>Dreamhouse - Offers Us</title>
        <meta
          name="description"
          content="Unleash the power of software with Dreamhouse. IT consulting & development experts crafting solutions that orchestrate success for your business. Discover our mission, culture, & what life's like at Dreamhouse."
        />
        <meta
          name="keywords"
          content="Dreamhouse, services, IT solutions, consulting, technology"
        />
        <meta
          property="og:title"
          content="Dreamhouse Services - Empowering Your Business"
        />
        <meta
          property="og:description"
          content="Explore Dreamhouse's comprehensive IT services and consulting solutions. We empower businesses with innovative technology solutions tailored to their needs."
        />
        <meta
          property="og:image"
          content="URL to your featured image for social sharing"
        />
        <meta property="og:url" content="URL to your services page" />
      </Head>
      {aboutHero.map((item, index) => (
        <HeroSection
          key={item.key}
          subTitle={item.subTitle}
          title={item.title}
        />
      ))}
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Offers;

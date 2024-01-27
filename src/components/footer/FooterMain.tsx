"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logoWhite.svg";
import {
  footerCompany,
  footerConnect,
  footerContacts,
  footerOtherlinks,
} from "@/constants";

const Fade = require("react-reveal/Fade");

export default function FooterMain() {
  return (
    <Fade bottom>
      <div className="w-full bg-gray-700 mt-20 px-10">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full py-8  mx-auto max-w-[1300px] ">
          <div className="" key={1}>
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-16"
                width={"270"}
                height={"300"}
                src={Logo}
                alt=""
              />
            </Link>
            <p className="text-white font-poppins py-4">
              We have the best people to serve <br /> the right problems in the
              right way
            </p>
            {footerContacts.map((item) => (
              <div key={item.key}>
                <Link href="#" className="text-white font-poppins py-1">
                  {item.name}
                </Link>
              </div>
            ))}
            <p className="text-white font-poppins  py-2">info@Dreamhouse.com</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 sm:mt-4 sm:gap-6 pt-16">
            <div>
              <p className="text-[#49C0B6] font-poppins font-[600] ">Company</p>
              <div>
                {footerCompany.map((item) => (
                  <div key={item.key} className="py-1">
                    <Link
                      href={item.path}
                      className="text-white font-poppins hover:text-[#49C0B6] py-1"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#49C0B6] font-poppins font-[600] ">
                Other links
              </p>
              <div>
                {footerOtherlinks.map((item) => (
                  <div key={item.key} className="py-1">
                    <Link
                      href="#"
                      className="text-white font-poppins hover:text-[#49C0B6] py-1"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#49C0B6] font-poppins font-[600] ">
                Connect With Us
              </p>
              <ul>
                {footerConnect.map((item) => (
                  <li key={item.key} className="py-2">
                    <Link href={item.url}>
                      <div className="row flex items-center hover:text-[#49C0B6]">
                        <div className="col">
                          <Image
                            alt=""
                            className="text-white hover:text-[#49C0B6]"
                            src={item.path}
                          />
                        </div>
                        <div className="col pl-2">
                          <p className="text-white hover:text-[#49C0B6] font-poppins">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full mt-1 flex items-center justify-center">
          <Link
            href="#"
            key={20}
            className="text-white mt-1 font-poppins  text-sm pb-4"
          >
            <p className="font-poppins">
              Copyright 2024 by Dreamhouse. All Rights Reserved.
            </p>
          </Link>
        </div>
      </div>
    </Fade>
  );
}

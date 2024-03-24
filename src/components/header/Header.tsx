"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { ArrowRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import LogoWhite from "../../../public/logo.svg";

import { navigation } from "@/constants";
import { MobileMenu } from "./MobileMenu";
import { ModeToggle } from "..";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [fixedHeader, setFixedHeader] = useState<boolean>(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <>
      <div
        className={
          fixedHeader
            ? "fixed bg-[#323346] w-full z-50 "
            : " bg-[#323346] z-50 "
        }
      >
        <header
          className={
            fixedHeader
              ? "fixed bg-white w-full  inset-x-0 top-0 z-50 px-2 lg:px-0 "
              : "fixed w-full border-b-[0.5px] border-[#dfe1e48f]  inset-x-0 top-0 z-50 bg-white px-2  lg:px-0"
          }
        >
          <nav
            className="flex items-center justify-between p-2 lg:px-0 mx-auto max-w-[1500px]"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              {fixedHeader ? (
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-14 w-auto"
                    width={200}
                    height={200}
                    src={LogoWhite}
                    alt=""
                  />
                </Link>
              ) : (
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-14 w-auto"
                    width={200}
                    height={200}
                    src={LogoWhite}
                    alt=""
                  />
                </Link>
              )}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#03587C]"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className={
                    fixedHeader
                      ? "text-lg font-[600] w-6 h-6 font-poppins leading-6 text-[#03587C] "
                      : "text-lg font-[600] w-6 h-6 font-poppins leading-6 text-[#03587C] "
                  }
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                  className={
                    fixedHeader
                      ? "text-md font-[400] mx-3 font-poppins leading-6 duration-100 text-[#03587C] hover:text-sky-200"
                      : "text-md font-[400] mx-3 font-poppins leading-6 duration-100 text-[#03587C] hover:text-sky-200"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <MobileMenu
            open={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            key={1}
          />
        </header>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { ArrowRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import LogoWhite from "../../../public/logoWhite.svg";

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
          fixedHeader ? "fixed bg-[#040624ad] w-full z-50 " : " bg-white z-50 "
        }
      >
        <header
          className={
            fixedHeader
              ? "fixed bg-gradient-to-r from-[#dfa579] via-[#c79081]  to-[#dfa594] hover:bg-gradient-to-br w-full  inset-x-0 top-0 z-50 px-2 lg:px-0 "
              : "fixed w-full border-b-[0.5px] border-[#dfe1e48f]  inset-x-0 top-0 z-50 bg-white px-2  lg:px-0"
          }
        >
          <nav
            className="flex items-center justify-between p-2 lg:px-0 mx-auto max-w-[1300px]"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              {fixedHeader ? (
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-auto"
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
                    className="h-8 w-auto"
                    width={200}
                    height={200}
                    src={Logo}
                    alt=""
                  />
                </Link>
              )}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className={
                    fixedHeader
                      ? "text-lg font-[600] w-6 h-6 font-poppins leading-6 text-gray-500 "
                      : "text-lg font-[600] w-6 h-6 font-poppins leading-6 text-DreamhouseColor "
                  }
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                  className={
                    fixedHeader
                      ? "text-md font-[600] font-poppins leading-6 text-gray-700 hover:text-slate-800"
                      : "text-md font-[600] font-poppins leading-6 text-DreamhouseColor hover:text-slate-800"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <ModeToggle />
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

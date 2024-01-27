"use client";
import {
  ArrowRightIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type ScrollToTopButtonProps = {};

export const ScrollToTopButton = ({}: ScrollToTopButtonProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100); // Adjust this value based on when you want the button to appear
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <button
        className={`fixed bottom-4 right-4 p-2 bg-[#040624] z-50 text-white rounded-[10px] border-white border-[1px] ${
          isVisible ? "visible" : "invisible"
        }`}
        onClick={scrollToTop}
      >
        <ChevronDoubleUpIcon
          className="h-5 w-5 text-white  lg:font-500 font-poppins"
          aria-hidden="true"
        />
      </button>
    </>
  );
};

"use client";
// MobileMenu.tsx

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constants";
import Logo from "../../../public/logo.svg";
import { ModeToggle } from "..";

type MobileMenuProps = {
  open: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenu = ({
  open,
  setMobileMenuOpen,
}: MobileMenuProps): JSX.Element => {
  return (
    <div>
      <div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={open}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-exptext-DreamhouseColor/10">
            <div className="flex items-center justify-between">
              <Link href="/" passHref>
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src={Logo}
                  alt="Your Company Logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      passHref
                      className="-mx-3 block rounded-lg px-3 py-2 font-[600] font-poppins leading-7 text-DreamhouseColor hover:bg-gray-50 hover:text-[#49C0B6] "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

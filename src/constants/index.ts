import R1 from "../assets/home/Rooms/r1.svg";
import R2 from "../assets/home/Rooms/r2.svg";
import R3 from "../assets/home/Rooms/r3.svg";
import R4 from "../assets/home/Rooms/r4.svg";

import RR1 from "../assets/home/Rooms/rr1.svg";
import RR2 from "../assets/home/Rooms/rr2.svg";
import RR3 from "../assets/home/Rooms/rr3.svg";
import RR4 from "../assets/home/Rooms/rr4.svg";

import Fb from "../assets/contact/facebook.svg";
import X from "../assets/contact/X.svg";
import Insta from "../assets/contact/insta.svg";

// header
export const navigation = [
  { index: "1", name: "Home", href: "/" },
  { index: "2", name: "Offers", href: "/offers" },
  {
    index: "3",
    name: "Get Directions",
    href: "https://www.google.com/maps/dir//Temple+of+the+Tooth+Museum,+Kandy/@7.2935442,80.6003109,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x3ae3662dc9c94c75:0xe1885fe2929d358!2m2!1d80.6415106!2d7.2934609!3e2?entry=ttu",
  },
  { index: 4, name: "Contact Us", href: "/contact" },
];

export const aboutHero = [
  {
    key: 1,
    title: "Exclusive Offer,  ",
    subTitle: "With pleasure form hanthana",
  },
];

export const footerCompany = [
  { key: 1, name: "Home", path: "/" },
  { key: 2, name: "Offers", path: "/offers" },
  { key: 3, name: "About Us", path: "/about" },
  { key: 4, name: "Contact Us", path: "/contact" },
];

export const footerOtherlinks = [
  { key: 1, name: "Privacy Policy" },
  { key: 2, name: "Terms & Conditions" },
];
export const footerConnect = [
  {
    key: 2,
    name: "Facebook",
    path: Fb,
    url: "",
  },
  { key: 3, name: "X", path: X, url: "" },
  {
    key: 4,
    name: "Instagram",
    path: Insta,
    url: "",
  },
];

export const footerContacts = [
  { key: 1, name: "+94 77 349 0138" },
  { key: 2, name: "+94 77 291 6601" },
];

export const jobs = [
  {
    key: 1,
    name: "DELUXE ROOM  $ 55 ",
    occupancy: "2 adults and 1 child",
    size: "Hot water",
    description: "$ 55 Per Night",
    view: " AC",
    viewpoint: "Knuckles mountain range",
    balcony: "Amaizing balcony",
    tea: "Morning tea",
    wifi: "Free wifi",
    path1: R1,
    path2: R2,
    path3: R3,
    path4: R4,
    alt: "SUPERIOR ROOM",
  },
  {
    key: 2,
    name: "SUPERIOR ROOM  $ 33",
    size: "Hot water",
    description: "$ 33 Per Night",
    occupancy: "2 adults and 1 child",
    view: "Non - AC (Fans Included)",
    tea: "Morning tea",
    wifi: "Free wifi",
    path1: RR1,
    path2: RR2,
    path3: RR3,
    path4: RR4,
    alt: "DELUXE ROOM",
  },
  // {
  //   key: 3,
  //   name: "KING SUITE",
  //   size: "25 sqm",
  //   description:
  //     "Sweeping views of the majestic Hanthana mountains greet you as soon as you enter the Suite. Equipped with a panoramic seating area, and dining area our Suites are ideal for couples that yearn that extra privacy and indulgence.",
  //   occupancy: "2 adults and 1 child",
  //   view: "with mountain views",
  //   path: Job,
  //   alt: "KING SUITE",
  // },
  // {
  //   key: 4,
  //   name: "FAMILY SUITE",
  //   size: "25 sqm",
  //   description:
  //     "Sweeping views of the majestic Hanthana mountains greet you as soon as you enter the Suite. Equipped with a panoramic seating area, and dining area our Suites are ideal for couples that yearn that extra privacy and indulgence.",
  //   occupancy: "2 adults and 1 child",
  //   view: "with mountain views",
  //   path: Job,
  //   alt: "FAMILY SUITE",
  // },
];

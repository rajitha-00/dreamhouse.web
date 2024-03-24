import R1 from "../assets/home/Rooms/r1.svg";
import R2 from "../assets/home/Rooms/r2.svg";
import R3 from "../assets/home/Rooms/r3.svg";
import R4 from "../assets/home/Rooms/r4.svg";

import RR1 from "../assets/home/Rooms/rr1.svg";
import RR2 from "../assets/home/Rooms/rr2.svg";
import RR3 from "../assets/home/Rooms/rr3.svg";
import RR4 from "../assets/home/Rooms/rr4.svg";

import f1 from "../assets/home/Rooms/f1.svg";
import f2 from "../assets/home/Rooms/f2.svg";
import f3 from "../assets/home/Rooms/f3.svg";
import f4 from "../assets/home/Rooms/f4.svg";

import s1 from "../assets/home/Rooms/s1.svg";
import s2 from "../assets/home/Rooms/s2.svg";
import s3 from "../assets/home/Rooms/f3.svg";
import s4 from "../assets/home/Rooms/s4.svg";

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
    href: "https://www.google.com/maps/dir//7.2940323,80.6511909/@7.2923639,80.6530784,18.15z/data=!4m2!4m1!3e2?entry=ttu",
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
  {
    key: 3,
    name: "Get Directions",
    path: "https://www.google.com/maps/dir//Temple+of+the+Tooth+Museum,+Kandy/@7.2935442,80.6003109,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x3ae3662dc9c94c75:0xe1885fe2929d358!2m2!1d80.6415106!2d7.2934609!3e2?entry=ttu",
  },
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
    name: "DELUXE ROOM 1 : $ 45 ",
    occupancy: "2 adults",
    size: "Hot water",
    description: "$ 45 Per Night",
    view: " AC",
    viewpoint: "Knuckles mountain range",
    balcony: "Amaizing balcony",
    wifi: "Free WiFi",
    path1: R1,
    path2: R2,
    path3: R3,
    path4: R4,
    alt: "SUPERIOR ROOM",
  },
  {
    key: 2,
    name: "DELUXE ROOM 2 : $ 45",
    size: "Hot water",
    description: "$ 45 Per Night",
    occupancy: "2 adults",
    view: "AC",
    wifi: "Free WiFi",
    path1: RR1,
    path2: RR2,
    path3: RR3,
    path4: RR4,
    alt: "DELUXE ROOM",
  },
  {
    key: 3,
    name: "SUPERIOR ROOM 1 : $ 30",
    size: "Hot water",
    description: "$ 30 Per Night",
    occupancy: "2 adults",
    viewpoint: "Knuckles mountain range",
    view: "Non - AC (Fans Included)",
    wifi: "Free WiFi",
    path1: s1,
    path2: s2,
    path3: s3,
    path4: s4,
    alt: "DELUXE ROOM",
  },
  {
    key: 4,
    name: "SUPERIOR ROOM 2 : $ 30",
    size: "Hot water",
    description: "$ 30 Per Night",
    occupancy: "2 adults",
    viewpoint: "Knuckles mountain range",
    view: "Non - AC (Fans Included)",
    wifi: "Free WiFi",
    path1: f1,
    path2: f2,
    path3: f3,
    path4: f4,
    alt: "DELUXE ROOM",
  },
];

import Job from "../assets/home/offersImage.svg";
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
];

export const aboutHero = [
  {
    key: 1,
    title: "Enjoy,  ",
    subTitle: "With pleasure form hanthana",
  },
];

export const footerCompany = [
  { key: 1, name: "Home", path: "/" },
  { key: 2, name: "Offers", path: "/offers" },
  { key: 3, name: "Get Directions", path: "" },
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
    url: "https://www.facebook.com/Dreamhouse?mibextid=PtKPJ9",
  },
  { key: 3, name: "X", path: X, url: "" },
  {
    key: 4,
    name: "Instagram",
    path: Insta,
    url: "https://www.instagram.com/Dreamhouse?igsh=d3Z6eHNmZ3gwamp6",
  },
];

export const footerContacts = [
  { key: 1, name: "+94 772 219 965" },
  { key: 2, name: "+94 711 196 965" },
  { key: 3, name: "+1 515 817 8117" },
];

export const jobs = [
  {
    index: 1,
    name: "SUPERIOR ROOM",
    occupancy: "2 adults and 1 child",
    size: "25 sqm",
    description:
      "Sweeping views of the majestic Hanthana mountains greet you as soon as you enter the Suite. Equipped with a panoramic seating area, and dining area our Suites are ideal for couples that yearn that extra privacy and indulgence.",
    view: "with Hanthana mountain views",
    path: Job,
    alt: "SUPERIOR ROOM",
  },
  {
    index: 2,
    name: "DELUXE ROOM",
    size: "25 sqm",
    description:
      "Sweeping views of the majestic Hanthana mountains greet you as soon as you enter the Suite. Equipped with a panoramic seating area, and dining area our Suites are ideal for couples that yearn that extra privacy and indulgence.",
    occupancy: "2 adults and 1 child",
    view: "with Hanthana mountain views",
    path: Job,
    alt: "DELUXE ROOM",
  },
  {
    index: 3,
    name: "KING SUITE",
    size: "25 sqm",
    description:
      "Sweeping views of the majestic Hanthana mountains greet you as soon as you enter the Suite. Equipped with a panoramic seating area, and dining area our Suites are ideal for couples that yearn that extra privacy and indulgence.",
    occupancy: "2 adults and 1 child",
    view: "with mountain views",
    path: Job,
    alt: "KING SUITE",
  },
  {
    index: 4,
    name: "FAMILY SUITE",
    size: "25 sqm",
    description:
      "Sweeping views of the majestic Hanthana mountains greet you as soon as you enter the Suite. Equipped with a panoramic seating area, and dining area our Suites are ideal for couples that yearn that extra privacy and indulgence.",
    occupancy: "2 adults and 1 child",
    view: "with mountain views",
    path: Job,
    alt: "FAMILY SUITE",
  },
];

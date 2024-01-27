import "./globals.css";
import { Poppins } from "next/font/google";
import FooterMain from "@/components/footer/FooterMain";
import Header from "@/components/header/Header";
import { ScrollToTopButton } from "@/components";
import Head from "next/head";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["400", "600"],
});
export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Dreamhouse",
    template: "%s | Dreamhouse",
  },
};
export default function RootLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
}) {
  return (
    <html lang="en">
      <Head>
        <title>
          {pageTitle ? `${pageTitle} | Your Website Name` : "Your Website Name"}
        </title>
        {/* Add other meta tags as needed */}
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="bg-white overflow-hidden dark:bg-[#2F343F] md:mt-16 ">
            <div className={poppins.variable}>{children}</div>
          </div>
          <ScrollToTopButton />
          <FooterMain />
        </ThemeProvider>
      </body>
    </html>
  );
}

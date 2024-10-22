import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Roboto({
  weight:["100", "300", "400", "700", "900"],
  subsets:["latin"]
})


export const metadata: Metadata = {
  title: "Real estate Project/Next js",
  description: "Real Estate website using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={font.className} >
      <ResponsiveNav/>
       {children}
       </body>
    </html>
  );
}

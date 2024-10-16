import localFont from "next/font/local";
import "./globals.css";
import DashboardHeader from "@/app/Components/UI/DashboardHeader";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "VERP",
  description: "Generated by VERP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <DashboardHeader />
        {children}
        <div className="flex items-center justify-center bg-[#F8F8F8]">
          <p className="text-xs text-gray-400 mb-1 max-md:text-[10px]">
            Copyright © 2024 VERP System | EagleLion System technology. All
            rights reserved.
          </p>
        </div>
      </body>
    </html>
  );
}

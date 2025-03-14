import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/navbar/page";
import FooterPage from "@/layouts/footer/page";
import Sidebar from "@/layouts/sidebar/page";
import Titlebar from "@/layouts/titlebar/page"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Spark",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body className={inter.className}>
  
        <div className="flex w-screen"> 
          <div className="flex-grow reletive">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
              <div className="absolute top-0 w-screen">
        <Navbar />
         <Titlebar/>
        </div>
          <div className="absolute right-0">
            <Sidebar />
          </div>
        </div>
        <FooterPage />
      </body>
    </html>
  );
}

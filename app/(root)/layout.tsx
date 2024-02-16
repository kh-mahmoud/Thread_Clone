import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "../../components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "../../components/shared/LeftSidebar";
import RightSidebar from "../../components/shared/RightSidebar";
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Next js threads app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Topbar/>
            <main className="flex">
              <LeftSidebar/>
              <section className="main-container">
                  <div className="w-full max-w-4xl">
                    {children}
                    <Analytics />
                  </div>
              </section>
              {/* <RightSidebar/> */}
            </main>
            <Bottombar/>
            </body>
        </html>
    </ClerkProvider>
  );
}

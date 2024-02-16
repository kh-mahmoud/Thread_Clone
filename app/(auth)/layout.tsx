import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
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
              <body className={`${inter.className} bg-dark-1`} >
                 <div className="w-full min-h-screen flex justify-center items-center ">
                    {children}
                    <Analytics />
                 </div>
              </body>
        </html>
      </ClerkProvider>
    
  );
}

'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Provider as StoreProvider } from "react-redux";
import store from "@/redux/store";
import { endpointsApi } from "@/redux/api/endpoints";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider store={store} >
            <div>
              <NavBar/>
              {children}
            </div>
        </StoreProvider>
      </body>
    </html>
  );
}

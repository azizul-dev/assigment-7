import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./lib/providers";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: " Built to ensure meaningful relationships are never neglected.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-screen flex flex-col`}>
        <Providers>
          {children}
          <ToastContainer position="top-center"/>
        </Providers>
        </body>
    </html>
  );
}

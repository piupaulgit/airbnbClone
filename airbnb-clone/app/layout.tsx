import { Nunito } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";
import RegisterModal from "./components/modal/RegisterModal";
import LoginModal from "./components/modal/LoginModal";

export const metadata: Metadata = {
  title: "AirBnb Clone",
  description: "AirBnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <LoginModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

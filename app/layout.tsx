import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provide";
import { Toaster } from "sonner";

const font = Urbanist({
  weight:["500", "600", "700", "400"],
  subsets: ["latin"],
  display: "swap",
})
export const metadata: Metadata = {
  title: "Gift store",
  description: "Loja de presentes da convite digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Navbar/>
        <ModalProvider/>
        <Toaster/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

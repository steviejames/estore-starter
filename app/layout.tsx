import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google"
import ModalProvider from "@/providers/modal-provide";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
const font = Urbanist({
  weight:["500", "600", "700", "400"],
  subsets: ["latin"],
  display: "swap",
})
export const metadata: Metadata = {
  title: "Kamba Livros",
  description: "Plataforma de publicação e leitura de livros digitais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     {/* Amplitude Analytics Scripts */}
     <Script
        src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz"
        strategy="afterInteractive"
      />
      <Script id="amplitude-init" strategy="afterInteractive">
        {`
          window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
          window.amplitude.init('705ec5d0f0a30964b938dd79013d1fc2', {
            "autocapture": {"elementInteractions": true}
          });
        `}
      </Script>
    <ClerkProvider>
  
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ModalProvider/>
        <Toaster/>
        {children}
        </body>
      </html>
    </ClerkProvider>
    </>
  );
}

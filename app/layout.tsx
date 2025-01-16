import type { Metadata } from "next";
import "./globals.css";
import { HeaderComponent } from "./components/header.component";
import { MainComponent } from "./components/main.component";
import localFont from "next/font/local";
import { ServiceWorkerComponent } from "./components/service-worker.component";

const anekKannadaFont = localFont({
  src: [
    {
      path: "../public/fonts/AnekKannada-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AnekKannada-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-anek-kannada",
});

export const metadata: Metadata = {
  title: "ಮಂತ್ರ",
  description: "ಸಂಕ್ಷಿಪ್ತ ಸಂಧ್ಯಾವಂದನೆ ಮಂತ್ರ ಮತ್ತು ಭೋಜನ ವಿಧಿ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn">
      <meta name="apple-mobile-web-app-title" content="ಮಂತ್ರ" />
      <body className={`${anekKannadaFont.className} antialiased`}>
        <ServiceWorkerComponent />
        <HeaderComponent />
        <MainComponent>{children}</MainComponent>
      </body>
    </html>
  );
}

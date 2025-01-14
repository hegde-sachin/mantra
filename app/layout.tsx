import type { Metadata } from "next";
import { Anek_Kannada } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "./components/header.component";
import { MainComponent } from "./components/main.component";

const anekKannadaSans = Anek_Kannada({
  variable: "--font-anek-kannada-sans",
  subsets: ["kannada"],
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
      <body className={`${anekKannadaSans.variable} antialiased`}>
        <HeaderComponent />
        <MainComponent>{children}</MainComponent>
      </body>
    </html>
  );
}

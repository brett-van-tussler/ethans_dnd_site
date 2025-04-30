import type { Metadata } from "next";
import { Cinzel_Decorative, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";



const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ethan's DnD Master Services",
  description: "Professional Dungeon Master services, campaign creation, and storytelling expertise for your tabletop adventures",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32 48x48 64x64", type: "image/x-icon" },
      { url: "/images/favicon.svg", sizes: "64x64", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} font-crimson antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

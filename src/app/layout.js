import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header/Header";
import Hero from "../app/components/Hero/Hero";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "SOFRAH",
  description: "food restaurant",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  );
}

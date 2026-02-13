import { Outfit } from "next/font/google";
import "./globals.css";
import "react-phone-number-input/style.css";

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
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}

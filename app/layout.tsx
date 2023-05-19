import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Wikisearch-delta",
  description: "Search anything",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   
      <body className={poppins.className}>
      <Navbar />
        {children}</body>
    </html>
  );
}

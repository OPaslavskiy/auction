import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Аукціон",
  description: "Державні та комерційні електронні аукціони України",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

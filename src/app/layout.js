import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-inter", // optional for CSS variables
});
export const metadata = {
  title: "Codemantix Collectives",
  description: "The best tech brand you can always trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

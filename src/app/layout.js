import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio CMS",
  description: "Developed by Jeffrey Alteza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

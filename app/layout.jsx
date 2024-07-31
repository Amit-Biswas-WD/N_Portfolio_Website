import { Poppins } from "next/font/google";
import "./globals.css";
// components
import { Header } from "@/components/Header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/StairTransition";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: ["--font-poppins"],
});

export const metadata = {
  title: "Amit - Front-end Web Developer",
  description: "Complete Front-end Web Development Expert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

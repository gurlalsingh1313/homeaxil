import { Sen } from "next/font/google";
import "./globals.css";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { ThemeProvider } from "@/components/ThemeProvider";


const Josef = Sen({ 
  subsets: ["latin"],
  weight:["400","500","600","700"],
  display: "swap" });

export const metadata = {
  title: "Home Axil Interior Design",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Josef.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
        <Header/>
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}

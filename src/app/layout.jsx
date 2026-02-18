import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "ООО 'АЛЬФА КВАЛИТЕТ'",
    description: "ООО 'АЛЬФА КВАЛИТЕТ' неразрушающий контроль и техническое диагностирование",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistInter.variable} antialiased`}
        >
            <Header/>
            {children}
            <Footer/>
        </body>
        </html>
    );
}

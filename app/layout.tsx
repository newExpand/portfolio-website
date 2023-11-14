import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Expand 포트폴리오",
    description: "포트폴리오 모음 웹사이트 입니다.",
    icons: {
        icon: {
            url: "/expand-logo.png",
            href: "/expand-logo.png",
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body
                className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden min-w-[320px]`}
            >
                <StarsCanvas />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

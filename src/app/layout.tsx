import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/custom/LenisWrapper";
import ParticlesBackground from "@/components/custom/ParticlesBackground";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "XTRPHY Portfolio",
    description: "Welcome to my Portfolio page!",
    icons: {
        icon: '/favicon.webp',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${manrope.className} antialiased bg-[#e0e0e0] text-[#121212]`}
            >
                <ParticlesBackground />
                <LenisWrapper />
                {children}
            </body>
        </html>
    );
}

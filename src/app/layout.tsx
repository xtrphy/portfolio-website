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
    title: "Vladislav Perepechkin - Frontend Developer",
    description: "Моё портфолио: все проекты и стек технологий",
    icons: {
        icon: '/favicon.webp',
    },
    openGraph: {
        title: "Vladislav Perepechkin - Frontend Developer",
        description: "Моё портфолио: все проекты и стек технологий",
        url: "https://xtrphy-portfolio.com",
        siteName: "xtrphy-portfolio.com",
        images: [
            {
                url: "https://xtrphy-portfolio.com/glass_woman1.webp",
                width: 1200,
                height: 630,
            },
        ],
        locale: "ru_RU",
        type: "website",
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

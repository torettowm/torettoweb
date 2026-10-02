import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import TelegramButton from "../components/TelegramButton";


const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "تورتو وب | استودیو طراحی و توسعه لندینگ‌پیج‌های مدرن",
  description: "طراحی و توسعه اختصاصی لندینگ‌پیج و وب‌سایت‌های مدرن و فوق سریع با Next.js 15 و React. افزایش فروش و جذب مشتری برای کسب‌وکار شما.",
  keywords: ["طراحی سایت", "توسعه وب", "لندینگ پیج", "Next.js", "تورتو وب", "طراحی اختصاصی"],
  authors: [{ name: "Torreto Web Studio" }],
  openGraph: {
    title: "تورتو وب | استودیو طراحی و توسعه وب",
    description: "طراحی اختصاصی لندینگ‌پیج‌های پرسرعت و مدرن برای ارتقای کسب‌وکار شما",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "تورتو وب | استودیو طراحی وب",
    description: "طراحی و توسعه وب‌سایت‌های نسل جدید با بالاترین سرعت و کیفیت",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className={`${vazir.className} bg-[#07090E] antialiased selection:bg-cyan-500/30 selection:text-cyan-300`}>
        {children}
      <TelegramButton /> {/* ۲. قرار گرفتن قبل از بسته شدن body */}
      </body>
    </html>
  );
}

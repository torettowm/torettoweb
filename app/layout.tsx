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
  metadataBase: new URL("https://torettoweb-1.onrender.com"),
  title: "استودیو طراحی و توسعه تورتو وب | وب‌سایت‌های فوق‌سریع نسل جدید",
  description:
    "طراحی اختصاصی لندینگ‌پیج و وب‌سایت‌های فروشگاهی فوق‌سریع با Next.js 15. سرعت زیر ۱ ثانیه، طراحی مدرن و افزایش نرخ فروش برای برندها و آنلاین‌شاپ‌ها.",
  keywords: [
    "طراحی سایت",
    "توسعه وب Nextjs",
    "سایت فروشگاهی آنلاین شاپ",
    "لندینگ پیج اختصاصی",
    "تورتو وب",
  ],
  authors: [{ name: "Torreto Web" }],
  openGraph: {
    title: "استودیو تورتو وب | طراحی وب‌سایت‌های نسل جدید و پرسرعت",
    description:
      "فروشگاه اختصاصی و لندینگ‌پیج با تضمین سرعت لود زیر ۱ ثانیه و پشتیبانی کامل. دموهای آنلاین ما را مشاهده کنید.",
    url: "https://torettoweb-1.onrender.com",
    siteName: "Torreto Web Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "لوگوی استودیو تورتو وب",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "استودیو طراحی و توسعه تورتو وب",
    description: "طراحی وب‌سایت‌های مدرن، پرسرعت و بهینه‌شده برای فروش بیشتر",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

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

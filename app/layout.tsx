import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "تورِتو وب | استودیو طراحی و توسعه لندینگ پیج‌های نسل جدید",
  description: "طراحی و توسعه وب‌سایت‌های فوق‌سریع و مدرن با Next.js 15 و انیمیشن‌های روان.",
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
      </body>
    </html>
  );
}

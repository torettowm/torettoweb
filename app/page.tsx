"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Smartphone, 
  Code2, 
  ExternalLink,
  CheckCircle2,
  Coffee,
  TrendingUp,
  Flame,
  Send,
  ShieldCheck
} from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "لندینگ کافه & رستوران لوکس (Lumia)",
      desc: "طراحی منوی دیجیتال تعاملی با افکت‌های دارک و سرعت لود زیر ۱ ثانیه برای افزایش سفارشات.",
      tag: "کافه و رستوران",
      icon: <Coffee className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/5",
      border: "hover:border-amber-500/40",
      accent: "text-amber-400",
    },
    {
      title: "پلتفرم معاملاتی و فین‌تک (TradeWave)",
      desc: "طراحی فوق‌العاده مدرن با چارت‌های لایو، سیستم احراز هویت و تجربه کاربری دارک سایبرپانکی.",
      tag: "فین‌تک و کریپتو",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/5",
      border: "hover:border-cyan-500/40",
      accent: "text-cyan-400",
    },
    {
      title: "لندینگ فروشگاهی پریمیوم (PulseTech)",
      desc: "صفحه فرود متمرکز بر فروش محصول خاص با نرخ تبدیل بسیار بالا و اتصال به درگاه پرداخت.",
      tag: "محصول اختصاصی",
      icon: <Flame className="w-5 h-5 text-rose-400" />,
      color: "from-rose-500/20 to-purple-500/5",
      border: "hover:border-rose-500/40",
      accent: "text-rose-400",
    },
  ];

  const packages = [
    {
      name: "لندینگ پیج استارتاپ",
      price: "اقتصادی و سریع",
      desc: "مناسب برای معرفی خدمات، رویدادها و جذب لید اولیه با بودجه مناسب.",
      features: [
        "طراحی تک‌صفحه‌ای فوق‌سریع",
        "کاملاً ریسپانسیو روی موبایل و تبلت",
        "اتصال به پنل پیامک و فرم تماس",
        "سئوی مقدماتی استاندارد",
        "تحویل ۳ تا ۵ روز کاری"
      ],
      highlight: false,
    },
    {
      name: "وب‌سایت اختصاصی Pro (پیشنهادی)",
      price: "حرفه‌ای و مقیاس‌پذیر",
      desc: "طراحی دارک/نئونی سفارشی با انیمیشن‌های تعاملی Next.js برای برندهای متمایز.",
      features: [
        "معماری Next.js 15 با سرعت بارگذاری آنی",
        "انیمیشن‌های روان با Framer Motion",
        "اتصال به دیتابیس و پنل مدیریت ادمین",
        "بهینه‌سازی کامل نرخ تبدیل (CRO)",
        "۳ ماه پشتیبانی فنی رایگان"
      ],
      highlight: true,
    },
    {
      name: "محصول سفارشی / وب‌اپلیکیشن",
      price: "اختصاصی سازمانی",
      desc: "توسعه سامانه‌های معاملاتی، داشبوردهای اختصاصی و پروژه‌های پیچیده نرم‌افزاری.",
      features: [
        "توسعه فرانت‌اند و بک‌اند کامل",
        "طراحی سیستم Design System اختصاصی",
        "امنیت و مقیاس‌پذیری بالا",
        "اتصال به APIهای شخص ثالث و وب‌سوکت",
        "پشتیبانی و توسعه اختصاصی"
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 relative overflow-hidden" dir="rtl">
      {/* Background Glows */}
      <div className="absolute top-[-100px] right-1/2 translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-[35%] -left-40 w-[450px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[65%] -right-40 w-[450px] h-[450px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#07090E]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-black text-black text-base shadow-lg shadow-cyan-500/20">
              TW
            </div>
            <span className="font-extrabold tracking-wider text-lg text-white">
              TORRETO <span className="text-cyan-400">WEB</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#services" className="hover:text-cyan-400 transition-colors">مزایا</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">نمونه‌کارها</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">تعرفه‌ها</a>
          </nav>

          <a
            href="https://t.me/torretoweb" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-cyan-300 transition-all duration-300"
          >
            مشاوره رایگان تلگرام
            <ArrowLeft className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-36 pb-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-8 shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>توسعه نسل جدید وب‌سایت‌ها با متدهای ۲۰۲۶</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-[1.3] md:leading-[1.25] max-w-4xl"
          >
            کسب‌وکارتان را به یک <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-indigo-400">
              ماشین فروش مدرن و بدون توقف
            </span> تبدیل کنید
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            طراحی اختصاصی لندینگ‌پیج‌های فوق‌سریع و هوشمند برای برندهایی که می‌خواهند از رقبا متمایز باشند؛ بدون باگ، بهینه‌شده برای نرخ تبدیل بالا و تجربه کاربری بی‌نقص.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="https://t.me/torretoweb"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              شروع سفارش پروژه
              <ArrowLeft className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              دیدن نمونه‌کارها
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </motion.div>

          {/* Feature Highlights Grid */}
          <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-24 w-full text-right">
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">سرعت بارگذاری آنی</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                استفاده از معماری پیشرفته SSR برای باز شدن صفحه در کمتر از ۱ ثانیه و جلب نظر مشتری در همان لحظه اول.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">موبایل‌فرست و کامپکت</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                طراحی بی‌نقص روی انواع صفحه‌نمایش، به همراه تاچ ژست‌ها و انیمیشن‌های اختصاصی بدون لگ.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">کدنویسی استاندارد و تمیز</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                ساختار ماژولار با Next.js 15 و TypeScript، آماده برای رتبه یک نتایج جستجوی گوگل و توسعه‌های بعدی.
              </p>
            </div>
          </div>

          {/* Showcase / Projects Section */}
          <section id="projects" className="mt-32 w-full text-right">
            <div className="flex flex-col items-center text-center mb-14">
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">پروژه‌ها و نمونه‌کارهای اجرا شده</h2>
              <p className="text-sm text-slate-400 mt-3 max-w-lg">
                بخشی از ایده‌ها و پروژه‌های طراحی شده با جدیدترین استانداردهای روز رابط کاربری
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <div 
                  key={i} 
                  className={`p-6 rounded-2xl bg-gradient-to-b ${p.color} border border-white/10 ${p.border} transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                        {p.tag}
                      </span>
                      {p.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>مشاهده جزئیات</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing / Packages */}
          <section id="pricing" className="mt-32 w-full">
            <div className="flex flex-col items-center text-center mb-14">
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">تعرفه و پکیج‌های توسعه</h2>
              <p className="text-sm text-slate-400 mt-3 max-w-lg">
                شفافیت در هزینه‌ها همراه با بالاترین کیفیت فنی و استانداردهای طراحی
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
              {packages.map((pkg, idx) => (
                <div 
                  key={idx} 
                  className={`relative p-8 rounded-2xl flex flex-col justify-between ${
                    pkg.highlight 
                      ? "bg-gradient-to-b from-cyan-950/40 via-[#0C121E] to-[#07090E] border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/10" 
                      : "bg-white/[0.02] border border-white/10"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3.5 right-1/2 translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-black text-[11px] font-black tracking-wide">
                      محبوب‌ترین انتخاب
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-black text-white">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{pkg.desc}</p>
                    
                    <div className="my-6 py-4 border-y border-white/5">
                      <span className="text-sm font-bold text-cyan-300">{pkg.price}</span>
                    </div>

                    <ul className="space-y-3">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://t.me/torretoweb"
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-8 w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 ${
                      pkg.highlight
                        ? "bg-cyan-400 hover:bg-cyan-300 text-black shadow-lg shadow-cyan-400/20"
                        : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                    }`}
                  >
                    مشاوره و استعلام قیمت
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Box */}
          <div className="mt-32 w-full p-10 md:p-14 rounded-3xl bg-gradient-to-r from-blue-950/50 via-cyan-950/40 to-slate-900/50 border border-cyan-500/30 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl md:text-4xl font-black text-white leading-snug">
                آماده‌اید فروش آنلاین خود را متحول کنید؟
              </h2>
              <p className="text-slate-300 text-xs md:text-sm mt-4 leading-relaxed">
                همین الان پیام دهید تا ایده یا بیزینس شما را به صورت رایگان بررسی کنیم و بهترین راهکار طراحی را پیشنهاد دهیم.
              </p>
              <a
                href="https://t.me/torretoweb"
                target="_blank"
                rel="noreferrer"
                className="mt-8 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-cyan-400/20 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                ارتباط مستقیم در تلگرام (@torretoweb)
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 mt-20 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© ۲۰۲۶ استودیو طراحی و توسعه تورِتو وب (TORRETO WEB). تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://t.me/torretoweb" target="_blank" rel="noreferrer" className="hover:text-cyan-400">تلگرام</a>
            <a href="https://instagram.com/torretoweb" target="_blank" rel="noreferrer" className="hover:text-cyan-400">اینستاگرام</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

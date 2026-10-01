"use client";

import React from "react";

interface Plan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  telegramMessage: string;
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "لندینگ تک‌صفحه‌ای مدرن",
    price: "از ۶,۵۰۰,۰۰۰ تومان",
    description: "مناسب معرفی خدمات، کمپین‌های تبلیغاتی و فروش تک‌محصول",
    features: [
      "طراحی اختصاصی UI/UX و ریسپانسیو کامل",
      "توسعه با Next.js 15 و سرعت لود فوق‌العاده",
      "اتصال دکمه تماس هوشمند به تلگرام/واتساپ",
      "بهینه‌سازی پایه سئو (Technical SEO)",
      "تحویل سریع ظرف ۵ تا ۷ روز کاری",
    ],
    buttonText: "ثبت سفارش این پلن",
    telegramMessage: "سلام، من مایل به سفارش پلن لندینگ تک‌صفحه‌ای هستم.",
  },
  {
    id: "pro",
    name: "وب‌سایت شرکتی / پورتفولیو",
    badge: "🔥 پرفروش‌ترین",
    isPopular: true,
    price: "از ۱۲,۰۰۰,۰۰۰ تومان",
    description: "بهترین انتخاب برای استارتاپ‌ها، شرکت‌ها و فریلنسرهای حرفه‌ای",
    features: [
      "تمامی امکانات پلن استاندارد",
      "طراحی چند صفحه‌ای (درباره ما، خدمات، وبلاگ، تماس)",
      "داشبورد مدیریت محتوا داینامیک یا دیتابیس",
      "اتصال مستقیم فرم‌های سفارش به ربات تلگرام تورتو",
      "انیمیشن‌های نرم و افکت‌های مدرن UI",
      "پشتیبانی فنی و نگهداری رایگان (۱ ماه)",
    ],
    buttonText: "انتخاب پلن حرفه‌ای",
    telegramMessage: "سلام، در رابطه با سفارش پلن شرکتی و حرفه‌ای سوال داشتم.",
  },
  {
    id: "custom",
    name: "پروژه اختصاصی و فول‌استک",
    price: "تماس / توافقی",
    description: "سیستم‌های اختصاصی، وب‌اپلیکیشن‌ها، سامانه‌های نوبت‌دهی یا فروشگاه پیشرفته",
    features: [
      "معماری سفارشی با Prisma، دیتابیس و پنل ادمین",
      "احراز هویت پیامکی و درگاه پرداخت آنلاین",
      "ربات تلگرام اختصاصی متصل به دیتابیس سایت",
      "امنیت بالا و تست کامل پرفورمنس",
      "۳ ماه پشتیبانی و گارانتی عملکرد",
    ],
    buttonText: "مشاوره اختصاصی و برآورد",
    telegramMessage: "سلام، برای یک پروژه اختصاصی و سفارشی نیاز به برآورد قیمت دارم.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* هاله‌های نوری پس‌زمینه */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-4">
            تعرفه و پکیج‌ها
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            پلن‌های شفاف، بدون هزینه‌های پنهان
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            پلن متناسب با نیاز کسب‌وکارتان را انتخاب کنید یا برای پروژه‌های سفارشی با ما گفتگو کنید.
          </p>
        </div>

        {/* لیست کارت‌های قیمت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? "bg-slate-900/90 border-2 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.15)] md:-translate-y-2"
                  : "bg-slate-900/40 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm min-h-[38px] mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <span className="text-2xl sm:text-3xl font-black text-cyan-400">
                    {plan.price}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    ویژگی‌ها و امکانات:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-cyan-400 font-bold shrink-0">✓</span>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://t.me/TorretoWebBot?start=${encodeURIComponent(plan.id)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all ${
                  plan.isPopular
                    ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

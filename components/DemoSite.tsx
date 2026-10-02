"use client";

import Link from "next/link";
import { useState } from "react";

type DemoSiteProps = {
  slug: string;
};

export default function DemoSite({ slug }: DemoSiteProps) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("مشکی");
  const [activeTab, setActiveTab] = useState("all");

  // -------------------------------------------------------------
  // ۱. دموی بوتیک و آنلاین‌شاپ (Lumina)
  // -------------------------------------------------------------
  if (slug === "lumina") {
    return (
      <div className="min-h-screen bg-[#0f0f12] text-slate-100 font-sans">
        {/* نوار بالای سایت */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f0f12]/80 border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-200 via-rose-300 to-amber-400 bg-clip-text text-transparent">
              LUMINA BOUTIQUE
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
              کالکشن پاییزه
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#portfolio"
              className="text-xs text-slate-400 hover:text-white border border-slate-700 px-3 py-1.5 rounded-lg transition"
            >
              ← بازگشت به Torreto Web
            </Link>
            <a
              href="/#order"
              className="text-xs bg-rose-600 hover:bg-rose-500 text-white font-medium px-4 py-1.5 rounded-lg shadow-lg shadow-rose-600/30 transition"
            >
              سفارش این قالب
            </a>
          </div>
        </header>

        {/* بخش هیرو بوتیک */}
        <section className="relative px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-rose-400 text-sm font-semibold tracking-widest uppercase">
              NEW LUXURY COLLECTION 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
              استایل خاص خودت رو <br />
              <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
                با لومینا خلق کن
              </span>
            </h1>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              طراحی اختصاصی برای آنلاین‌شاپ‌ها و بوتیک‌های خاص با تجربه خرید فوق‌سریع، پنل مدیریت موجودی و درگاه پرداخت مستقیم.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button className="bg-rose-600 hover:bg-rose-500 px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-rose-600/30 transition">
                مشاهده همه محصولات
              </button>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                ارسال رایگان به سراسر کشور
              </div>
            </div>
          </div>

          {/* کارت پیش‌نمایش محصول */}
          <div className="bg-slate-900/80 border border-white/10 p-6 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-rose-600 text-xs px-3 py-1 rounded-full font-bold">
              تخفیف ویژه %۲۰
            </div>
            <div className="h-64 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center border border-white/5">
              <span className="text-6xl">🧥</span>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-bold">کت چرم اسپرت اورسایز Lumina</h3>
              <p className="text-xs text-slate-400 mt-1">کد محصول: LM-9821</p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 line-through">۴,۲۰۰,۰۰۰ تومان</div>
                  <div className="text-xl font-black text-amber-300">۳,۳۶۰,۰۰۰ تومان</div>
                </div>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition border ${
                        selectedSize === size
                          ? "border-rose-500 bg-rose-500/20 text-rose-300"
                          : "border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full mt-5 bg-white text-slate-950 font-bold py-3 rounded-xl hover:bg-slate-200 transition text-sm">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </section>

        {/* محصولات پرفروش */}
        <section className="px-6 py-12 max-w-6xl mx-auto border-t border-white/5">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">پرفروش‌ترین‌های هفته</h2>
            <span className="text-xs text-rose-400">مشاهده همه (۱۲ محصول)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { id: 1, title: "پلیور بافت دست‌دوز", price: "۱,۸۵۰,۰۰۰", icon: "🧶", tag: "پرفروش" },
              { id: 2, title: "شلوار کارگو بگ استایل", price: "۱,۴۹۰,۰۰۰", icon: "👖", tag: "جدید" },
              { id: 3, title: "بارانی کلاسیک ضدآب", price: "۲,۷۰۰,۰۰۰", icon: "🧥", tag: "محدود" },
            ].map((p) => (
              <div key={p.id} className="bg-slate-900/50 border border-white/5 p-4 rounded-xl hover:border-rose-500/40 transition">
                <div className="h-44 bg-slate-800/50 rounded-lg flex items-center justify-center text-4xl mb-3">
                  {p.icon}
                </div>
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-sm">{p.title}</h4>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-amber-300">{p.tag}</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-200">{p.price} تومان</span>
                  <button className="text-xs bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white px-3 py-1.5 rounded-lg transition">
                    خرید
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // -------------------------------------------------------------
  // ۲. دموی فین‌تک و صرافی دیجیتال (NovaPay)
  // -------------------------------------------------------------
  if (slug === "novapay") {
    return (
      <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070b14]/80 border-b border-cyan-500/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-black text-slate-950">
              N
            </div>
            <span className="text-xl font-black text-cyan-400 tracking-wider">
              NovaPay Exchange
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#portfolio"
              className="text-xs text-slate-400 hover:text-white border border-slate-700 px-3 py-1.5 rounded-lg transition"
            >
              ← بازگشت به Torreto Web
            </Link>
            <a
              href="/#order"
              className="text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-1.5 rounded-lg shadow-lg shadow-cyan-500/30 transition"
            >
              سفارش پلتفرم مشابه
            </a>
          </div>
        </header>

        <section className="px-6 py-16 max-w-6xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            نسل جدید زیرساخت مالی و پرداخت هوشمند
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl mx-auto">
            معاملات امن و آنی با سرعت <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              میلی‌ثانیه‌ای در نواپی
            </span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm">
            اتصال به درگاه‌های جهانی، تسویه حساب آنی، چارت‌های لایو معاملاتی و بالاترین پروتکل‌های امنیتی بانکی.
          </p>

          {/* داشبورد فین‌تک فرضی */}
          <div className="mt-12 bg-slate-900/90 border border-cyan-500/20 rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto text-right">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-slate-400 font-mono">LIVE MARKET RATES (USD/IRT)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">موجودی کیف پول شما</div>
                <div className="text-2xl font-bold text-white mt-1">$ 14,850.20</div>
                <div className="text-xs text-emerald-400 mt-2">+12.4% این ماه</div>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">تتر / تومان (USDT/TMN)</div>
                <div className="text-2xl font-bold text-cyan-400 mt-1">۹۴,۲۰۰</div>
                <div className="text-xs text-cyan-500 mt-2">حجم ۲۴ ساعته: ۲.۴M $</div>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">بیت‌کوین (BTC/USD)</div>
                <div className="text-2xl font-bold text-amber-400 mt-1">$ 98,450</div>
                <div className="text-xs text-emerald-400 mt-2">+3.8% ۲۴ ساعته</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // -------------------------------------------------------------
  // ۳. دموی وب‌سایت شرکتی و نرم‌افزاری (Arka Tech)
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/80 border-b border-indigo-500/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
            ▲
          </div>
          <span className="text-xl font-bold tracking-wider text-indigo-400">
            ARKA TECH
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/#portfolio"
            className="text-xs text-slate-400 hover:text-white border border-slate-700 px-3 py-1.5 rounded-lg transition"
          >
            ← بازگشت به Torreto Web
          </Link>
          <a
            href="/#order"
            className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-1.5 rounded-lg shadow-lg shadow-indigo-600/30 transition"
          >
            سفارش سایت شرکتی
          </a>
        </div>
      </header>

      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          توسعه نرم‌افزارهای سازمانی <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            با استانداردهای جهانی
          </span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto mt-5 text-sm leading-relaxed">
          آرکا تک راهکارهای یکپارچه ابری، اتوماسیون داده و طراحی سامانه‌های اختصاصی برای کسب‌وکارهای مدرن ارائه می‌دهد.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-right">
          {[
            { title: "زیرساخت ابری مقیاس‌پذیر", desc: "مدیریت و پشتیبانی سرویس‌های بدون قطعی با آپ‌تایم ۹۹.۹٪" },
            { title: "امنیت و هوش مصنوعی", desc: "تحلیل الگوهای داده سازمانی با الگوریتم‌های هوش مصنوعی" },
            { title: "طراحی UI/UX اختصاصی", desc: "تجربه کاربری منحصربه‌فرد بر اساس رفتار سازمانی" },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/40 transition">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

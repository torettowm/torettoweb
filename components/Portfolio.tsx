"use client";

import React from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  liveUrl: string; // لینک پروژه زنده
}

const projects: Project[] = [
  {
    id: 1,
    title: "فروشگاه آنلاین بوتیک لوکس (Lumina)",
    category: "سایت فروشگاهی & پوشاک",
    description:
      "طراحی پلتفرم مدرن با تجربه کاربری مینیمال، سرعت لود زیر ۱ ثانیه، فیلتر پیشرفته رنگ و سایز و پنل ثبت سفارش.",
    tags: ["Next.js 15", "Tailwind CSS", "سئو پیشرفته", "ریسپانسیو"],
    gradient: "from-purple-600/30 via-blue-600/20 to-slate-900",
    // لینکی که وقتی با هوش مصنوعی یا کد ساختی اینجا قرار میدی
    liveUrl: "https://torettoweb-1.onrender.com", 
  },
  {
    id: 2,
    title: "لندینگ‌پیج استودیو طراحی (Torreto Web)",
    category: "لندینگ‌پیج خدماتی & نرم‌افزار",
    description:
      "سایت اختصاصی با انیمیشن‌های نرم، فرم ثبت سفارش آنی متصل به ربات تلگرام و سئوی بهینه‌شده برای موتورهای جستجو.",
    tags: ["React 19", "Next.js 15", "اتصال به تلگرام", "UI/UX مدرن"],
    gradient: "from-cyan-600/30 via-blue-600/20 to-slate-900",
    liveUrl: "https://torettoweb-1.onrender.com",
  },
  {
    id: 3,
    title: "سایت شرکتی و معرفی خدمات (Arka Tech)",
    category: "پورتفولیو شرکتی",
    description:
      "صفحه اختصاصی معرفی خدمات مهندسی با طراحی دارک‌مود اختصاصی، پرفورمنس ۱۰۰ در لایت‌هاوس و فرم استعلام آنلاین.",
    tags: ["Next.js", "TypeScript", "داشبورد اختصاصی", "بهینه‌سازی سرعت"],
    gradient: "from-blue-600/30 via-indigo-600/20 to-slate-900",
    liveUrl: "https://torettoweb-1.onrender.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            پروژه‌ها و نمونه‌کارها
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
            کیفیت و عملکرد در یک قاب
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            نمونه‌ای از پروژه‌های طراحی شده؛ روی هر پروژه کلیک کنید تا پیش‌نمایش و عملکرد زنده آن را مشاهده کنید.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/90 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Project Preview Mockup Header */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${project.gradient} border-b border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-medium text-slate-300 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-700 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    آنلاین
                  </span>
                </div>

                <div className="z-10">
                  <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </div>
                </div>

                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-blue-300 bg-blue-950/50 border border-blue-800/40 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center py-2.5 px-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/20"
                    >
                      مشاهده آنلاین ↗
                    </a>
                    <a
                      href="#order"
                      className="inline-flex items-center justify-center py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-xl transition-all border border-slate-700"
                    >
                      سفارش مشابه
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

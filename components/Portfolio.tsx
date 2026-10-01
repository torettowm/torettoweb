import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "ربات و اتوماسیون تورتو وب",
    category: "Full-Stack / Python Bot",
    description: "سیستم هوشمند لیدجنریشن، محاسبه‌گر آنلاین هزینه پروژه و ارسال خودکار به تلگرام با معماری FSM.",
    tags: ["Next.js 15", "Python", "Aiogram", "TailwindCSS"],
    link: "https://t.me/TorretoWebBot",
    badge: "پروژه فعال"
  },
  {
    title: "لندینگ‌پیج نئومورفیک فین‌تک",
    category: "Landing Page / UI/UX",
    description: "طراحی رابط کاربری فوق‌سریع و ریسپانسیو با انیمیشن‌های روان مخصوص خدمات مالی و تریدینگ.",
    tags: ["React 19", "TypeScript", "TailwindCSS", "Framer Motion"],
    link: "https://t.me/TorretoWebBot",
    badge: "مفهومی"
  },
  {
    title: "پلتفرم فروشگاهی و شرکتی پرسرعت",
    category: "Web Application",
    description: "بهینه‌سازی کامل سئو، سرعت لود زیر ۱ ثانیه و تجربه کاربری بهینه‌شده برای نرخ تبدیل بالا.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    link: "https://t.me/TorretoWebBot",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* افکت نور پس‌زمینه */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* سرتیتر بخش */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            نمونه‌کارهای برگزیده
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
            پروژه‌هایی که با وسواس ساختیم
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            ترکیب کدنویسی تمیز، سرعت خیره‌کننده و طراحی مدرن متناسب با استانداردهای ۲۰۲۵
          </p>
        </div>

        {/* کارت‌های نمونه‌کار */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div>
                {/* هدر کارت */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-cyan-400 bg-slate-800/80 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* عنوان و توضیحات */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* تگ‌ها */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[11px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* لینک مشاهده */}
                <Link
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  مشاهده پروژه
                  <span className="transform group-hover/link:-translate-x-1 transition-transform">←</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Trust() {
  const guarantees = [
    {
      icon: "⚡",
      title: "سرعت لود موشکی (زیر ۱ ثانیه)",
      desc: "برخلاف سایت‌های وردپرسی سنگین و کند، پروژه‌های ما با معماری پیشرفته Next.js 15 ساخته می‌شوند تا مشتری با اولین کلیک وارد فروشگاه شود و نرخ ریزش به صفر برسد.",
      badge: "تکنولوژی روز دنیا",
    },
    {
      icon: "🎥",
      title: "آموزش ویدیویی اختصاصی پنل",
      desc: "نیازی به هیچ دانش فنی ندارید. پس از تحویل سایت، یک ویدیوی اختصاصی و کامل از نحوه اضافه کردن محصولات، تغییر قیمت‌ها و مدیریت سفارش‌ها به شما تحویل داده می‌شود.",
      badge: "کاربری آسان",
    },
    {
      icon: "🛡️",
      title: "۳۰ روز پشتیبانی فنی رایگان",
      desc: "خیال‌تان بابت شروع کار آسوده باشد. تا یک ماه پس از تحویل نهایی، در صورت بروز هرگونه سوال یا نیاز به تنظیمات، تیم تورتو وب مستقیماً در کنارتان خواهد بود.",
      badge: "ضمانت کیفیت",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
          چرا تورتو وب؟
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4">
          تضمین کیفیت و آرامش خاطر شما
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          ما فقط یک کد تحویل نمی‌دهیم؛ زیرساخت درآمدزایی و اعتبار پایدار کسب‌وکار شما را با استانداردهای مدرن پیاده می‌کنیم.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guarantees.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  {item.icon}
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              تضمین قطعی در قرارداد
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

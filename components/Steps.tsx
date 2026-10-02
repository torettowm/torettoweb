export default function Steps() {
  const steps = [
    {
      number: "۰۱",
      title: "ثبت سفارش و مشاوره",
      desc: "نیازها و اهداف پروژه‌تون رو در فرم یا از طریق تلگرام با ما به اشتراک می‌ذارید تا بهترین پلن انتخاب بشه.",
      badge: "گام اول",
    },
    {
      number: "۰۲",
      title: "طراحی UI و ساختار",
      desc: "طرح اولیه اختصاصی و معماری مدرن بر اساس استانداردهای روز و هویت برند شما آماده و تایید می‌شه.",
      badge: "گام دوم",
    },
    {
      number: "۰۳",
      title: "توسعه و کدنویسی",
      desc: "پیاده‌سازی پرسرعت با Next.js 15 و React 19 به همراه بهینه‌سازی کامل سئو، امنیت و ریسپانسیو بودن.",
      badge: "گام سوم",
    },
    {
      number: "۰۴",
      title: "تحویل و پشتیبانی",
      desc: "پروژه روی هاست/سرور آنلاین دیپلوی می‌شه و آموزش و پشتیبانی رایگان برای شما آغاز خواهد شد.",
      badge: "گام نهایی",
    },
  ];

  return (
    <section id="steps" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            مسیر اجرای <span className="text-cyan-400">پروژه شما</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            از ایده تا تحویل نهایی، همه‌چیز شفاف، سریع و با بالاترین کیفیت مهندسی پیش می‌ره.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

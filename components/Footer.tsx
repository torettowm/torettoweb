import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-md text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* ستون اول: معرفی و برند */}
          <div className="space-y-3 text-right">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-wider">TORRETO<span className="text-cyan-400">WEB</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              طراحی و توسعه وب‌سایت‌های فوق‌سریع و مدرن با Next.js 15 و ربات‌های هوشمند تلگرام.
            </p>
          </div>

          {/* ستون دوم: دسترسی سریع */}
          <div className="text-right">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">ویژگی‌ها</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">نمونه‌کارها</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">تعرفه‌ها</a>
              </li>
            </ul>
          </div>

          {/* ستون سوم: راه‌های ارتباطی */}
          <div className="text-right">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">ارتباط با ما</h4>
            <p className="text-sm text-slate-400 mb-3">
              برای مشاوره رایگان و ثبت سریع سفارش از طریق ربات تلگرام اقدام کنید.
            </p>
            <a
              href="https://t.me/TorretoWebBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-800/60 rounded-xl hover:bg-cyan-900/50 transition"
            >
              <span>ربات تلگرام Torreto</span>
              <span>←</span>
            </a>
          </div>

        </div>

        {/* خط کپی‌رایت پایین */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Torreto Web. تمامی حقوق محفوظ است.</p>
          <p className="font-mono text-slate-600">Built with Next.js 15 & React 19</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import OrderForm from "../components/OrderForm";



export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* ----------------- ۱. هدر سایت ----------------- */}
      <header className="border-b border-slate-800/80 sticky top-0 z-40 bg-[#07090E]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-white text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              TW
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              تورتو <span className="text-cyan-400">وب</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">مزایا</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">نمونه‌کارها</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">تماس با ما</a>
          </nav>

          <a
            href="https://t.me/TorretoWebBot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            مشاوره هوشمند ربات
          </a>
        </div>
      </header>

      {/* ----------------- ۲. بخش هیرو (Hero Section) ----------------- */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* نورهای پس‌زمینه */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            استودیو طراحی و توسعه وب‌سایت‌های نسل جدید
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
            طراحی لندینگ‌پیج‌های فوق‌سریع و مدرن با{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Next.js 15
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            کسب‌وکار خود را با وب‌سایت‌هایی مجهز به انیمیشن‌های روان، معماری مقیاس‌پذیر و اتوماسیون هوشمند تلگرام چند پله جلوتر ببرید.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/TorretoWebBot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              محاسبه آنلاین قیمت در ربات
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-white font-medium text-base transition-all"
            >
              مشاهده نمونه‌کارها
            </a>
          </div>
        </div>
      </section>

      {/* ----------------- ۳. بخش ویژگی‌ها (Features) ----------------- */}
      <section id="features" className="py-20 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              چرا تورتو وب را انتخاب کنید؟
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              استانداردهای فنی به‌روز برای تجربه‌ای پایدار، امن و بسیار پرسرعت
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* کارت ۱ */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white mb-3">سرعت لود موشکی</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                توسعه با SSR و کشینگ پیشرفته Next.js 15 برای دستیابی به بالاترین نمرات در Google PageSpeed.
              </p>
            </div>

            {/* کارت ۲ */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h3 className="text-xl font-bold text-white mb-3">اتصال به ربات تلگرام</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                دریافت مستقیم سفارش‌ها، محاسبات آنی و لیدهای کاربران داخل تلگرام بدون هیچ تاخیری.
              </p>
            </div>

            {/* کارت ۳ */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                💎
              </div>
              <h3 className="text-xl font-bold text-white mb-3">طراحی اختصاصی مدرن</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                رابط کاربری تیره، نئومورفیک و ریسپانسیو اختصاصی که هویت برند شما را برجسته می‌کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- ۴. بخش نمونه‌کارها (Portfolio) ----------------- */}
      <Portfolio />
      <Pricing />
      <OrderForm /> 
      {/* ----------------- ۵. فوتر (Footer) ----------------- */}
      <footer id="contact" className="border-t border-slate-800 bg-[#05070a] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-slate-950 text-sm">
              TW
            </div>
            <span className="text-slate-400 text-sm">
              استودیو طراحی و توسعه <strong className="text-white">تورتو وب</strong> © ۲۰۲۵
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="https://t.me/TorretoWebBot" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              ربات تلگرام
            </a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">
              درباره خدمات
            </a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
              پروژه‌ها
            </a>
          </div>
        </div>
      </footer>     
     <Footer />
    </main>
  );
}

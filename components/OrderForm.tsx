"use client";

import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "لندینگ پیج اختصاصی",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // اینجا می‌توانیم اطلاعات را مستقیماً به API بات یا سرور خود بفرستیم
      // یا کاربر را با یک پیام آماده به تلگرام هدایت کنیم:
      const text = `🎯 سفارش جدید از سایت:\n👤 نام: ${formData.name}\n📞 تلفن: ${formData.phone}\n💼 نوع پروژه: ${formData.projectType}\n📝 توضیحات: ${formData.description}`;
      
      // لینک مستقیم به ربات با متن پیش‌فرض (یا می‌توانید به سمت API تلگرام خودتان بفرستید)
      const telegramUrl = `https://t.me/TorretoWebBot?start=${encodeURIComponent(text)}`;
      
      setSubmitted(true);
      setLoading(false);

      // هدایت کاربر به تلگرام بعد از ۱ ثانیه
      setTimeout(() => {
        window.open(telegramUrl, "_blank");
      }, 1000);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-20 relative bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ثبت سفارش <span className="text-cyan-400">سریع پروژه</span>
          </h2>
          <p className="text-slate-400">
            فرم زیر را پر کنید تا برای نهایی کردن جزئیات مستقیماً به ربات تلگرام متصل شوید.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white">اطلاعات با موفقیت ثبت شد!</h3>
              <p className="text-slate-400 text-sm">در حال انتقال به ربات تلگرام تورتو وب...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-right" dir="rtl">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="مثال: علی رضایی"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">شماره تماس / تلگرام</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="09123456789"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">انتخاب نوع خدمت</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition"
                >
                  <option value="لندینگ پیج اختصاصی">لندینگ پیج اختصاصی (Next.js)</option>
                  <option value="وب‌سایت شرکتی/فروشگاهی">وب‌سایت شرکتی / کامل</option>
                  <option value="ربات هوشمند تلگرام">ربات هوشمند تلگرام</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">توضیحات کوتاه پروژه</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="جزئیات مد نظرت رو اینجا بنویس..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:opacity-95 transition flex items-center justify-center gap-2"
              >
                {loading ? "در حال انتقال..." : "ارسال سفارش و ورود به ربات تلگرام 🚀"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

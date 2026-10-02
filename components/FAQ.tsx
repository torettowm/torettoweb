"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "مدت زمان تحویل یک پروژه اختصاصی چقدر است؟",
    answer: "مدت زمان با توجه به مقیاس پروژه متفاوت است. لندینگ‌پیج‌های اختصاصی معمولاً بین ۳ تا ۵ روز کاری و وب‌سایت‌های کامل شرکتی یا فروشگاهی بین ۷ تا ۱۴ روز کاری تحویل داده می‌شوند.",
  },
  {
    question: "پروژه‌ها با چه تکنولوژی‌هایی توسعه داده می‌شوند؟",
    answer: "ما از مدرن‌ترین و سریع‌ترین ابزارهای روز دنیا شامل Next.js 15، React 19، Tailwind CSS و TypeScript استفاده می‌کنیم تا بالاترین سرعت و بهترین رتبه سئو تضمین شود.",
  },
  {
    question: "آیا وب‌سایت‌ها شامل پشتیبانی فنی می‌شوند؟",
    answer: "بله، تمامی پروژه‌ها شامل ۱ تا ۳ ماه پشتیبانی فنی رایگان برای رفع باگ، به‌روزرسانی‌ها و راهنمایی کامل هستند.",
  },
  {
    question: "فرایند پرداخت و شروع پروژه چگونه است؟",
    answer: "پس از ثبت سفارش و مشاوره اولیه در تلگرام، ۳۰٪ پیش‌پرداخت دریافت می‌شود و مابقی مبلغ پس از تایید دمو و تحویل نهایی تسویه خواهد شد.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            سوالات <span className="text-cyan-400">متداول</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            پاسخ به سوالاتی که ممکن است قبل از شروع همکاری برایتان پیش بیاید.
          </p>
        </div>

        <div className="space-y-4" dir="rtl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-white text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`text-cyan-400 text-xl font-bold transform transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-slate-800/40 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function TelegramButton() {
  return (
    <a
      href="https://t.me/TorretoWebBot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-4 py-3 rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group border border-cyan-400/30 backdrop-blur-sm"
      title="محاسبه هوشمند قیمت در تلگرام"
    >
      {/* آیکون تلگرام SVG */}
      <div className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full group-hover:rotate-12 transition-transform duration-300">
        <svg
          className="w-4 h-4 fill-current text-white"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.46c.537-.196 1.006.128.832.94z" />
        </svg>
      </div>

      {/* متن دکمه با افکت واکنش‌گرا */}
      <span className="text-sm font-semibold tracking-wide">
        محاسبه هوشمند قیمت
      </span>

      {/* افکت نوری چشمک‌زن (پالس) */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
      </span>
    </a>
  );
}

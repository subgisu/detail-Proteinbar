import { FadeIn } from './ui';
import { eatingGuide } from '../data/product';

const iconMap = {
  microwave: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="32" height="24" rx="3" />
      <rect x="8" y="12" width="18" height="16" rx="1" />
      <circle cx="31" cy="17" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="31" cy="23" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  fridge: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="4" width="24" height="32" rx="3" />
      <line x1="8" y1="18" x2="32" y2="18" />
      <line x1="14" y1="11" x2="14" y2="15" />
      <line x1="14" y1="22" x2="14" y2="28" />
    </svg>
  ),
};

export default function EatingGuideSection() {
  return (
    <section className="py-16 px-6 bg-[#F7F6F2] border-t border-stone-200">
      <FadeIn>
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 text-center mb-10">
            맛있게 먹는법
          </h2>

          <div className="space-y-6 mb-10">
            {eatingGuide.methods.map((method, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className="shrink-0 text-stone-500 mt-1">
                  {iconMap[method.icon]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-800 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-stone-600 whitespace-pre-line leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200">
            {eatingGuide.tips.map((tip, idx) => (
              <p
                key={idx}
                className="text-xs text-stone-500 leading-relaxed py-1"
              >
                · {tip}
              </p>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

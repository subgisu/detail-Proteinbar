import { ChevronDown } from 'lucide-react';
import { FadeIn } from './ui';
import { faqs, cautions } from '../data/product';

export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      {/* Q&A */}
      <section className="py-16 px-6">
        <FadeIn>
          <div className="max-w-md mx-auto">
            <p className="text-center text-sm text-stone-400 tracking-widest mb-2">
              Q&A
            </p>
            <h2 className="text-2xl font-bold text-stone-800 text-center mb-10">
              자주 묻는 질문
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group">
                  <summary className="flex items-start justify-between cursor-pointer py-4 px-5 bg-white rounded-xl border border-stone-200 list-none transition-colors hover:bg-stone-50">
                    <span className="font-medium text-sm text-stone-700 pr-4">
                      Q. {faq.q}
                    </span>
                    <ChevronDown className="w-4 h-4 text-stone-400 transition-transform group-open:rotate-180 shrink-0 mt-0.5" />
                  </summary>
                  <div className="px-5 pb-4 pt-2 bg-white rounded-b-xl -mt-2 border-x border-b border-stone-200">
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-bold text-orange-500 shrink-0 mt-0.5">A.</span>
                      <p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 주의사항 */}
      <section className="py-12 px-6 border-t border-stone-200">
        <div className="max-w-md mx-auto">
          <h3 className="text-lg font-bold text-stone-700 mb-6">주의사항</h3>
          <div className="space-y-2">
            {cautions.map((caution, idx) => (
              <p key={idx} className="text-xs text-stone-500 leading-relaxed pl-3 relative before:content-['·'] before:absolute before:left-0">
                {caution}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <div className="py-8 px-6 border-t border-stone-300 text-xs text-stone-400 leading-relaxed">
        <div className="max-w-md mx-auto">
          <p>
            제품명: 근육단단 단백질 바 | 식품의 유형: 과자류(단백질바) | 유통기한: 제조일로부터 12개월
          </p>
        </div>
      </div>
    </footer>
  );
}

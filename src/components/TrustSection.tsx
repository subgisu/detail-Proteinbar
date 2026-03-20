import { ShieldCheck } from 'lucide-react';
import { FadeIn } from './ui';

export default function TrustSection() {
  return (
    <section className="py-16 px-6 bg-white border-t border-stone-200">
      <FadeIn>
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <ShieldCheck className="w-16 h-16 text-stone-300" />
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              HACCP 인증 시설 제조
            </h3>
            <p className="text-stone-500 text-sm">
              근육단단 단백질 바는 엄격한 위생 관리 기준에 따라
              <br />
              안전하고 깨끗한 시설에서 생산됩니다.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

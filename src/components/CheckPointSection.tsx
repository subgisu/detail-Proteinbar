import { CheckCircle2, Leaf } from 'lucide-react';
import { FadeIn, ProteinBarIcon } from './ui';
import { checkPoints } from '../data/product';

const iconMap = {
  'protein-bar': <ProteinBarIcon className="w-8 h-8 text-orange-500" />,
  leaf: <Leaf className="w-8 h-8 text-green-600" />,
  check: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
} as const;

export default function CheckPointSection() {
  return (
    <section className="py-20 px-6 bg-stone-900">
      <FadeIn>
        <div className="text-center mb-12">
          <p className="text-orange-300/80 font-medium tracking-widest text-sm mb-2">
            Check Point
          </p>
          <h2 className="text-[34px] text-white font-bold">주요 포인트</h2>
        </div>

        <div className="space-y-8">
          {checkPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 p-6 bg-stone-50 rounded-2xl border border-stone-100 shadow-md"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
                {iconMap[point.iconType]}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-stone-900">
                  {point.title}
                </h3>
                <p className="text-stone-600 whitespace-pre-line leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

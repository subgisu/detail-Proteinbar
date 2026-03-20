import { FadeIn } from './ui';
import { flavors } from '../data/product';

export default function FlavorSection() {
  return (
    <section className="pt-20 pb-10 bg-white">
      <div className="text-center mb-16 px-6 flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-2 w-full max-w-[240px] mx-auto">
          <div className="h-[1px] bg-stone-300 flex-1" />
          <p className="text-stone-500 font-serif text-lg tracking-wider">Flavor</p>
          <div className="h-[1px] bg-stone-300 flex-1" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">
          4가지 맛 단백질 바
        </h2>
      </div>

      <div className="space-y-0">
        {flavors.map((flavor) => (
          <FadeIn key={flavor.id} delay={0.1}>
            <div className="bg-white pb-20 border-b border-stone-100 last:border-0">
              <div className="w-full aspect-[4/3] relative bg-stone-100">
                <img
                  src={flavor.img}
                  alt={flavor.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 text-white text-sm drop-shadow-md font-medium">
                  *연출예
                </div>
                <img
                  src={flavor.packageImg}
                  alt={`${flavor.name} 패키지`}
                  className="absolute -bottom-16 right-6 w-28 md:w-36 aspect-[3/4] object-cover shadow-xl border-4 border-white"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="pt-12 px-6 max-w-xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 text-white font-bold text-lg rounded-sm ${flavor.color}`}
                  >
                    {flavor.name}
                  </span>
                  <span className="px-3 py-1 bg-[#999999] text-white font-bold text-lg rounded-sm">
                    {flavor.tag}
                  </span>
                </div>

                <h3 className="text-xl font-medium mb-8 text-stone-800 tracking-tight">
                  {flavor.desc}
                </h3>

                <div className="border-t border-stone-200 pt-6">
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: '칼로리', value: flavor.nutrition.kcal, unit: 'kcal', pct: '' },
                      { label: '단백질', value: flavor.nutrition.protein, unit: 'g', pct: flavor.nutrition.proteinPct },
                      { label: '지방', value: flavor.nutrition.fat, unit: 'g', pct: flavor.nutrition.fatPct },
                      { label: '당류', value: flavor.nutrition.sugar, unit: 'g', pct: flavor.nutrition.sugarPct },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="text-stone-500 text-sm mb-1">{item.label}</p>
                        <p className="text-2xl font-bold text-stone-900">
                          {item.value}
                          <span className="text-base font-normal text-stone-600">
                            {item.unit}
                          </span>
                          {item.pct && (
                            <span className="text-xs text-stone-400 ml-0.5">
                              ({item.pct}%)
                            </span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-left text-xs text-stone-400 mt-6">총 내용량 50g</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

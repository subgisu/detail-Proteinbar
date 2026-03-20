import { FadeIn } from './ui';

const BASE = import.meta.env.BASE_URL;

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[800px] flex flex-col justify-between pt-24 pb-4 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-stone-900">
        <img
          src={`${BASE}protin.png`}
          alt="단백질 바 메인 연출컷"
          className="w-full h-full object-cover opacity-90"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&q=80&w=1200';
          }}
        />
      </div>

      <div className="absolute inset-0 z-0 h-3/5 bg-gradient-to-b from-black/90 via-black/50 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />

      <div className="relative z-10 mt-4">
        <FadeIn>
          <p className="text-orange-400 font-bold tracking-widest text-sm mb-4 drop-shadow-md">
            근육단단 단백질 바
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6 break-keep text-white drop-shadow-lg">
            단백질 바는 맛없다는 편견,
            <br />
            <span className="text-orange-400">근육단단이 깹니다.</span>
          </h1>
          <p className="text-stone-200 text-lg mb-10 break-keep drop-shadow-md font-medium">
            꾸덕한 브라우니 식감 그대로,
            <br />
            당류는 낮추고 단백질은 꽉 채웠습니다.
          </p>
        </FadeIn>
      </div>

      <div className="relative z-10 mt-auto pt-48">
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-3 gap-4 bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="text-center border-r border-white/20">
              <p className="text-stone-300 text-sm mb-1">내용량</p>
              <p className="text-2xl font-bold text-white">50g</p>
            </div>
            <div className="text-center border-r border-white/20">
              <p className="text-stone-300 text-sm mb-1">열량</p>
              <p className="text-2xl font-bold text-orange-400">
                185<span className="text-base font-normal">kcal</span>
              </p>
              <p className="text-[10px] text-stone-400 mt-1">(더블 초코 기준)</p>
            </div>
            <div className="text-center">
              <p className="text-stone-300 text-sm mb-1">단백질</p>
              <p className="text-2xl font-bold text-white">20g</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

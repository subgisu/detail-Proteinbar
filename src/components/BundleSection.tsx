import { FadeIn } from './ui';

export default function BundleSection() {
  return (
    <section className="py-20 px-6 bg-[#F9F8F4] text-center">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800 tracking-tight">
          넉넉하게 즐기는
          <br />
          10개입 번들 구성
        </h2>
        <p className="text-stone-600 mb-12 break-keep leading-relaxed font-medium">
          넉넉하게 준비하는{' '}
          <span className="font-bold text-stone-900">10개입 번들 구성</span>
          입니다.
          <br />
          실온 보관 후 필요할 때마다 간편하게 꺼내 드실 수 있습니다.
          <br />
          여유 있게 보관하기 좋은 구성입니다.
        </p>

        <div className="mb-8">
          <div className="flex justify-center -space-x-4 overflow-hidden py-4 px-4">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/bundle_pack_${i}/200/300`}
                alt="번들 패키지"
                className="w-20 md:w-28 aspect-[3/4] object-cover shadow-lg border-2 border-white relative transition-transform hover:-translate-y-2"
                style={{ zIndex: 5 - i }}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-stone-500">
          *번들 이미지는 연출 예시이며, 동일 맛 10개입 구성으로 발송됩니다.
        </p>
      </FadeIn>
    </section>
  );
}

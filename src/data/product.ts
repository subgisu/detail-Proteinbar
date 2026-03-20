export interface FlavorNutrition {
  kcal: string;
  protein: string;
  proteinPct: string;
  fat: string;
  fatPct: string;
  sugar: string;
  sugarPct: string;
}

export interface Flavor {
  id: string;
  name: string;
  tag: string;
  desc: string;
  color: string;
  img: string;
  packageImg: string;
  nutrition: FlavorNutrition;
}

export const flavors: Flavor[] = [
  {
    id: 'choco',
    name: '더블 초코',
    tag: '고단백',
    desc: '진한 카카오의 풍미를 살린 부담 없는 맛',
    color: 'bg-[#4A3728]',
    img: 'https://picsum.photos/seed/choco_plate/800/600',
    packageImg: 'https://picsum.photos/seed/choco_pack/300/400',
    nutrition: { kcal: '185', protein: '20', proteinPct: '36', fat: '5.0', fatPct: '9', sugar: '1.5', sugarPct: '1' },
  },
  {
    id: 'peanut',
    name: '피넛 카라멜',
    tag: '고단백',
    desc: '고소한 땅콩과 달콤한 카라멜의 단짠 조합',
    color: 'bg-[#D9772B]',
    img: 'https://picsum.photos/seed/peanut_plate/800/600',
    packageImg: 'https://picsum.photos/seed/peanut_pack/300/400',
    nutrition: { kcal: '190', protein: '21', proteinPct: '38', fat: '6.0', fatPct: '11', sugar: '1.8', sugarPct: '2' },
  },
  {
    id: 'matcha',
    name: '말차맛',
    tag: '고단백',
    desc: '제주 유기농 말차로 산뜻하게 즐기는 깔끔한 풍미',
    color: 'bg-[#5B8C5A]',
    img: 'https://picsum.photos/seed/matcha_plate/800/600',
    packageImg: 'https://picsum.photos/seed/matcha_pack/300/400',
    nutrition: { kcal: '180', protein: '20', proteinPct: '36', fat: '4.5', fatPct: '8', sugar: '1.2', sugarPct: '1' },
  },
  {
    id: 'berry',
    name: '베리 요거트',
    tag: '고단백',
    desc: '상큼한 베리를 입혀 새콤달콤한 감칠맛이 살아있는 맛',
    color: 'bg-[#C84B31]',
    img: 'https://picsum.photos/seed/berry_plate/800/600',
    packageImg: 'https://picsum.photos/seed/berry_pack/300/400',
    nutrition: { kcal: '175', protein: '19', proteinPct: '35', fat: '4.0', fatPct: '7', sugar: '2.0', sugarPct: '2' },
  },
];

export const checkPoints = [
  {
    title: '질리지 않는 4가지 맛',
    desc: '더블 초코 · 피넛버터 · 말차 · 베리\n매일 먹어도 질리지 않는 라인업',
    iconType: 'protein-bar' as const,
  },
  {
    title: '당류 2g 미만, 대체당 사용',
    desc: '설탕 대신 에리스리톨과 알룰로스를 사용해\n혈당 걱정 없이 달콤하게',
    iconType: 'leaf' as const,
  },
  {
    title: '단백질 20g 함유',
    desc: '닭가슴살 100g과 맞먹는 단백질량\n한 팩으로 채우는 든든한 한 끼',
    iconType: 'check' as const,
  },
];

export const reviews = [
  '단백질 특유의 비린 맛이 전혀 없어요!',
  '전자레인지에 10초 돌려 먹으면 진짜 브라우니 같아요.',
  '당류가 2g밖에 안 되는데 이렇게 달콤하다니 놀라워요.',
  '운동 전후로 하나씩 까먹기 딱 좋은 사이즈예요.',
];

export const eatingGuide = {
  methods: [
    {
      icon: 'microwave' as const,
      title: '전자레인지',
      desc: '포장을 살짝 개봉한 뒤, 전자레인지에 약 10초간(700W 기준) 돌려주세요.\n꾸덕한 브라우니 식감이 더욱 살아납니다.',
    },
    {
      icon: 'fridge' as const,
      title: '냉장 보관 후 섭취',
      desc: '냉장고에 1시간 정도 넣어두면 단단한 초콜릿 바 식감으로 즐길 수 있습니다.\n여름철에 특히 추천드립니다.',
    },
  ],
  tips: [
    '전자레인지 조리 시 과열에 주의해 주세요.',
    '개봉 후에는 가급적 빠르게 섭취해 주세요.',
    '기호에 따라 우유나 두유와 함께 드시면 더욱 맛있습니다.',
  ],
};

export const faqs = [
  {
    q: '단백질 바가 너무 딱딱한 것 같아요.',
    a: '실온에 보관하시면 부드러운 식감을 유지합니다. 냉장 보관 후에는 전자레인지에 10초 정도 돌려주시면 꾸덕한 브라우니 식감으로 돌아옵니다.',
  },
  {
    q: '하루에 몇 개까지 먹어도 되나요?',
    a: '일반 식품이므로 정해진 섭취량은 없으나, 간식 대용으로 1일 1~2개를 권장합니다. 개인의 일일 단백질 섭취 목표에 맞춰 조절해 주세요.',
  },
  {
    q: '보관은 어떻게 하나요?',
    a: '직사광선을 피해 서늘한 실온에 보관해 주세요. 냉장 보관 시 식감이 단단해질 수 있으니, 섭취 전 실온에 10분 정도 두시거나 전자레인지에 살짝 돌려주시면 됩니다.',
  },
  {
    q: '임산부나 어린이가 먹어도 되나요?',
    a: '일반 식품으로 남녀노소 누구나 섭취 가능합니다. 다만 특정 알레르기가 있으신 경우 원재료명을 반드시 확인해 주세요.',
  },
  {
    q: '배송 중 초콜릿이 녹은 것 같아요.',
    a: '제품은 실온 상태로 출고되며, 여름철 택배 과정에서 외부 환경에 따라 코팅이 일부 녹을 수 있습니다. 제품에 이상이 없다면 냉장 보관 후 섭취해 주세요.',
  },
];

export const cautions = [
  '직사광선을 피해 서늘한 실온(15~25°C)에 보관하시기 바랍니다.',
  '특이체질, 알레르기 체질의 경우 성분을 확인하신 후 섭취하시기 바랍니다.',
  '제품 포장재 내에 공기가 부풀어 있거나, 내용물에 이상이 있을 경우 섭취하지 마십시오.',
  '개봉 후에는 가급적 빠르게 섭취해 주시기 바랍니다.',
  '본 제품은 우유, 대두, 밀, 땅콩, 호두를 사용한 제품과 같은 제조 시설에서 제조하고 있습니다.',
  '동일 제품 특성상 맛이나 식감에 미세한 차이가 있을 수 있습니다.',
];

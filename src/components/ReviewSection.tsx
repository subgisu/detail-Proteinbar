import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { FadeIn } from './ui';
import { reviews } from '../data/product';

export default function ReviewSection() {
  return (
    <section className="py-20 px-6 bg-stone-100 text-center">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-12">
          다시 찾게 되는
          <br />
          <span className="text-orange-600">진짜 맛있는 단백질 바</span>
        </h2>

        <div className="space-y-4 max-w-md mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 text-left"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-stone-700 font-medium">"{review}"</p>
              <p className="text-xs text-stone-400 mt-2 text-right">
                *실구매 고객 후기 기반
              </p>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

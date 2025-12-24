import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    { name: "Sarah J.", text: "The Lavender Latte is a game changer. Best atmosphere for remote work in the city!", rating: 5 },
    { name: "Marcus T.", text: "Real wagyu in the burger. You can taste the quality. I'll be back every weekend.", rating: 5 }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-12 text-center">What People Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={i} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{rev.text}"</p>
              <p className="font-bold text-gray-900">— {rev.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
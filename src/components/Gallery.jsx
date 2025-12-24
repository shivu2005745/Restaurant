import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047", // Interior
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070", // Coffee Art
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974", // Pastries
    "https://images.unsplash.com/photo-1559925393-8be0ec418d66?q=80&w=2071", // Vibe
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">The Vibe</h2>
          <p className="text-gray-500 text-lg">A peek inside our modern sanctuary.</p>
        </div>

        {/* Responsive Photo Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-3xl bg-gray-200"
            >
              <img 
                src={src} 
                alt={`Cafe Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
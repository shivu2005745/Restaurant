import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menu';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Breakfast', 'Lunch', 'Drinks'];

  const filteredItems = activeCategory === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white min-h-[800px]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand font-bold tracking-widest uppercase text-sm"
          >
            Selection
          </motion.span>
          <h2 className="text-5xl font-black mt-2 mb-4 italic tracking-tighter">Our Menu</h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform active:scale-95 ${
                activeCategory === cat 
                ? 'bg-brand text-white shadow-lg shadow-orange-200 -translate-y-1' 
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid with Animations */}
        
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-x-12 gap-y-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map(item => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id} 
                className="group p-4 flex justify-between items-start border-b border-gray-100 hover:bg-gray-50/50 transition-all rounded-2xl"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-brand transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-1">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-tighter bg-brand/10 text-brand px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xl font-black text-gray-900">{item.price}</span>
                  <div className="h-px w-8 bg-gray-200 group-hover:w-12 group-hover:bg-brand transition-all"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-medium">
            No items available in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
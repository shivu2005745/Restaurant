export default function Hero({ onBookClick }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover"
          alt="Coffee and Interior"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Slightly darker overlay for better contrast */}
      </div>

      <div className="relative z-10 text-center text-white px-4">
        {/* Animated Headline */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
          Taste the <span className="text-brand">Future</span> <br /> of Coffee.
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 font-medium">
          Miami's favorite neighborhood spot for artisan brews and locally sourced brunch.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* View Menu - Now an Anchor Link for Scrolling */}
          <a 
            href="#menu" 
            className="bg-brand hover:scale-105 active:scale-95 transition-all text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-orange-900/20 text-center min-w-[200px]"
          >
            View Menu
          </a>

          {/* Book a Table - Now triggers the Modal */}
          <button 
            onClick={onBookClick}
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 active:scale-95 transition-all text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl text-center min-w-[200px]"
          >
            Book a Table
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator Mouse Icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";

export default function Navbar({ onBookClick, isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className={`fixed w-full z-[60] transition-all duration-300 ${
        isScrolled 
          ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-4" 
          : "top-11 bg-transparent py-6" // top-11 gives space for the larger announcement bar
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Keeping Name Hidden for SEO as requested */}
        <div className="sr-only">MODERN CAFE</div>

        {/* Desktop Links - Increased to text-base (16px) */}
        <div className="hidden md:flex flex-1 justify-center gap-10 font-black text-base text-white uppercase tracking-widest drop-shadow-md">
          {/* Using a drop-shadow-md helps white text stay visible over the hero image */}
          <a href="#menu" className={`hover:text-brand transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}>
            Menu
          </a>
          <a href="#gallery" className={`hover:text-brand transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}>
            Gallery
          </a>
          <a href="#contact" className={`hover:text-brand transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}>
            Location
          </a>
          <button 
            onClick={onBookClick} 
            className="text-brand hover:scale-105 transition-transform cursor-pointer"
          >
            Reservations
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex justify-end w-full">
          <button 
            className={`text-3xl p-2 rounded-lg ${isScrolled ? "text-gray-900 bg-gray-100" : "text-white bg-white/10"}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-10 flex flex-col gap-8 font-black text-center animate-in slide-in-from-top duration-300 shadow-2xl">
          <a href="#menu" className="text-2xl text-gray-800" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#gallery" className="text-2xl text-gray-800" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#contact" className="text-2xl text-gray-800" onClick={() => setIsOpen(false)}>Location</a>
          <button 
            onClick={() => { onBookClick(); setIsOpen(false); }} 
            className="bg-brand text-white py-5 rounded-2xl text-xl shadow-lg"
          >
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
}
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

// Cleanly separated Promo Bar
function Announcement() {
  return (
    <div className="bg-brand text-white py-2.5 px-4 text-center text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase sticky top-0 z-[70] shadow-sm">
      ✨ Happy Hour: 50% off all drinks from 4pm - 6pm daily ✨
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Handle Smooth Scroll and Scroll Detection for Navbar
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "The Modern Cafe",
    "image": "https://your-live-link.com/hero.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Design Street",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33101"
    }
  };

  return (
    <main className="antialiased bg-white selection:bg-brand selection:text-white min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify(restaurantSchema)}
      </script>

      {/* Top Marketing Layer */}
      <Announcement />

      {/* Navigation - isScrolled prop can be used for styling in Navbar */}
      <Navbar 
        onBookClick={() => setIsModalOpen(true)} 
        isScrolled={isScrolled} 
      />
      
      {/* Content Sections */}
      <Hero onBookClick={() => setIsModalOpen(true)} />
      
      {/* Social Proof & Conversion Funnel */}
      <div className="relative z-10 bg-white">
        <Stats />
        <Menu />
        <Testimonials />
        <Gallery />
        <Newsletter />
      </div>

      <Footer />

      {/* Global Reservation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] max-w-md w-full shadow-2xl relative animate-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-6 right-6 text-gray-400 hover:text-brand transition-colors text-2xl"
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className="text-center mb-8">
              <div className="inline-block bg-brand/10 text-brand px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                Exclusive Table
              </div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Table for two?</h2>
              <p className="text-gray-500 mt-2 text-sm">Instant confirmation via SMS</p>
            </div>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-1 tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Mason" 
                  className="w-full p-4 mt-1 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-brand focus:bg-white outline-none transition-all" 
                />
              </div>
              
              <div className="group">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-1 tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full p-4 mt-1 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-brand focus:bg-white outline-none transition-all" 
                />
              </div>

              <button 
                onClick={() => { alert("Booking Request Sent! 🥂"); setIsModalOpen(false); }}
                className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-200 hover:bg-brand-dark transition-all transform hover:-translate-y-1 active:scale-95 mt-4"
              >
                Confirm Reservation
              </button>
              
              <p className="text-[10px] text-center text-gray-400 px-4">
                By clicking confirm, you agree to receive a one-time automated text message.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
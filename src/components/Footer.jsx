export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        {/* Column 1: Info */}
        <div>
          <h2 className="text-4xl font-black mb-6 text-brand">Visit Us</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Located in the heart of the Arts District. We don't take reservations on weekends, so come early!
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">Address</h4>
              <p className="text-gray-400">123 Design Street, Miami, FL 33101</p>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">Hours</h4>
              <p className="text-gray-400">Mon — Fri: 7am - 6pm</p>
              <p className="text-gray-400">Sat — Sun: 8am - 8pm</p>
            </div>
            <button className="mt-4 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-brand hover:text-white transition-colors">
              Get Directions
            </button>
          </div>
        </div>

        {/* Column 2: Map (Simple Embed) */}
        <div className="h-80 bg-gray-800 rounded-3xl overflow-hidden border border-gray-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.563812821102!2d-80.194702!3d25.78500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzA2LjAiTiA4MMKwMTEnNDEuMCJX!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus" 
            className="w-full h-full grayscale opacity-80 contrast-125"
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2025 The Modern Cafe. Built by [Your Name] — Web Developer for Restaurants.
      </div>
    </footer>
  );
}
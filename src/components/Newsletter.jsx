import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-gray-900 rounded-[3rem] overflow-hidden p-8 md:p-16 shadow-2xl">
          
          {/* Decorative Design Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand font-bold tracking-[0.2em] uppercase text-sm"
              >
                The Breakfast Club
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
                Get <span className="text-brand">10% Off</span> <br /> 
                Your First Visit.
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                Join 2,000+ coffee lovers. We’ll send you secret menu items and weekend event invites. No spam, ever.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-2 rounded-[2rem] border border-white/10">
              <form 
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Welcome to the club! Check your email for your 10% code.");
                }}
              >
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  className="flex-1 bg-transparent px-6 py-4 text-white outline-none placeholder:text-gray-500"
                />
                <button className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-2xl font-black transition-all transform active:scale-95 shadow-lg shadow-orange-900/20">
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
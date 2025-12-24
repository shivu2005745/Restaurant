export default function Stats() {
  const stats = [
    { label: "Coffee Beans", value: "12+", sub: "Directly Sourced" },
    { label: "Google Reviews", value: "4.9", sub: "⭐⭐⭐⭐⭐" },
    { label: "Daily Guests", value: "250+", sub: "Happy Faces" },
    { label: "Est.", value: "2018", sub: "Miami Local" },
  ];

  return (
    <section className="bg-brand py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center text-white border-r border-white/20 last:border-0">
            <div className="text-4xl font-black mb-1">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest font-bold text-orange-200">{stat.label}</div>
            <div className="text-[10px] opacity-80 mt-1">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
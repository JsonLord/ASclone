export default function Partners() {
  const partners = [
    'Handtmann',
    'Respond',
    'Munich Startup',
    'KLiB',
    'Bavarian Chips Alliance',
    'BMW Startup Garage',
    'TUM Venture Labs',
    'European Innovation Council'
  ];

  return (
    <section className="py-24 border-t border-charcoal-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Driving change with established partners</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner, i) => (
            <div key={i} className="flex justify-center text-gray-300 font-bold text-lg text-center p-4 border border-charcoal-lighter rounded-xl">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

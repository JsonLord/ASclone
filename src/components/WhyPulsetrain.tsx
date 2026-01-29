export default function WhyPulsetrain() {
  return (
    <section className="py-24 border-y border-charcoal-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A layer of intelligence that just works.
            </h2>
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                Our system seamlessly combines advanced hardware and smart software to create a layer of intelligence that works on top of any existing battery.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                By actively managing thermal risks and enabling precise control, it optimizes performance and safety, extending battery life through multi-level inverter technology.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Advanced Hardware',
                  'Smart Software',
                  'Thermal Risk Management',
                  'Precise Control',
                  'Optimized Performance',
                  'Extended Lifespan'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-violet-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-square bg-gradient-to-br from-violet-accent/10 to-transparent rounded-3xl border border-charcoal-lighter flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:30px_30px]" />
            <div className="relative z-10 p-12 text-center">
              <div className="text-7xl font-bold text-violet-accent mb-4">PT Intelligence™</div>
              <div className="text-gray-400 text-lg">Seamless charging & discharging</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

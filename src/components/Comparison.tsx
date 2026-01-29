export default function Comparison() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integrated Technology. Enhanced Mobility.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-charcoal-light border border-charcoal-lighter rounded-3xl">
            <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider text-center">Standard BMS</h3>
            <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
               <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#111_10px,#111_20px)]" />
               <span className="absolute text-gray-600 font-mono">Traditional Architecture</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                Limited thermal management
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                Hardware-fixed logic
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                Standard charging speeds
              </li>
            </ul>
          </div>

          <div className="p-8 bg-charcoal-light border-2 border-violet-accent rounded-3xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-accent text-white text-xs font-bold px-4 py-1 rounded-full">
              RECOMMENDED
            </div>
            <h3 className="text-xl font-bold text-violet-accent mb-6 uppercase tracking-wider text-center">PULSETRAIN™ POWERED BMS</h3>
            <div className="aspect-video bg-violet-accent/10 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
               <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(45deg,#8B5CF6,#8B5CF6_10px,transparent_10px,transparent_20px)] animate-[pulse_3s_infinite]" />
               <span className="absolute text-violet-accent font-bold">Intelligent Pulse Architecture</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white font-medium">
                <div className="w-1.5 h-1.5 bg-violet-accent rounded-full" />
                Active thermal risk mitigation
              </li>
              <li className="flex items-center gap-2 text-white font-medium">
                <div className="w-1.5 h-1.5 bg-violet-accent rounded-full" />
                Software-defined intelligence
              </li>
              <li className="flex items-center gap-2 text-white font-medium">
                <div className="w-1.5 h-1.5 bg-violet-accent rounded-full" />
                Accelerated AI charging
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-accent/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Built to <span className="text-violet-accent">Last</span>.<br />
          Engineered to <span className="text-violet-accent">Perform</span>.
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          At Pulsetrain, we are pioneering transformative battery management and inverter technology for a new era in electric vehicles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="w-full sm:w-auto px-8 py-4 bg-violet-accent text-white font-semibold rounded-full hover:bg-violet-accent/80 transition-all flex items-center justify-center gap-2 group"
          >
            Explore our Technology
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="w-full sm:w-auto px-8 py-4 bg-charcoal-light border border-charcoal-lighter text-white font-semibold rounded-full hover:bg-charcoal-lighter transition-all"
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}

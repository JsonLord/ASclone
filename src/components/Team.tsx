export default function Team() {
  return (
    <section id="team" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">A team moving forward.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We’re a team of +40 people driving the future of electric mobility. Whether you are an experienced professional or just starting your career, we have opportunities for you to grow and make your mark.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-violet-accent text-white font-semibold rounded-full hover:bg-violet-accent/80 transition-all">
                About us
              </button>
              <button className="px-6 py-3 border border-charcoal-lighter text-white font-semibold rounded-full hover:bg-charcoal-light transition-all">
                Join our team
              </button>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="aspect-[4/3] bg-charcoal-light rounded-2xl border border-charcoal-lighter relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-8 h-1 bg-violet-accent rounded-full mb-1" />
                    <div className="text-white text-xs font-bold uppercase tracking-wider">Department {i}</div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

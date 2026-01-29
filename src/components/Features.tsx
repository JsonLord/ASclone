import { Shield, Brain, Battery } from 'lucide-react';

const features = [
  {
    title: 'Engineered for safety',
    description: 'Our hardware minimizes thermal risks. Paired with PT Intelligence™, it supports battery reuse and extends lifespan by 80% with simple software updates.',
    icon: Shield,
  },
  {
    title: 'Powered by AI',
    description: 'Pulsetrain Intelligence™ enables seamless charging and discharging across any battery. Software-driven, it accelerates charging speeds.',
    icon: Brain,
  },
  {
    title: 'Multi-level Inverter',
    description: 'Pioneering technology that optimizes power delivery for maximum performance, enabling higher torque and better acceleration.',
    icon: Battery,
  },
];

export default function Features() {
  return (
    <section id="technology" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Technology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming electric mobility through integrated technology and enhanced mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-charcoal-light border border-charcoal-lighter rounded-3xl hover:border-violet-accent/50 transition-all group"
            >
              <div className="w-12 h-12 bg-violet-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-violet-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Car, Bike, Tractor, Zap } from 'lucide-react';

const apps = [
  {
    title: 'Automotive',
    description: 'Reducing weight and size of drive components to enhance efficiency and extend range.',
    icon: Car,
  },
  {
    title: 'Two & Three-Wheelers',
    description: 'Enabling lighter, more compact drivetrains, extending battery life for electric models.',
    icon: Bike,
  },
  {
    title: 'Non-Road',
    description: 'Optimizing power delivery for maximum performance and higher torque in adrenaline-fueled adventures.',
    icon: Zap,
  },
  {
    title: 'ATV & UTV',
    description: 'Increasing durability and reducing maintenance in demanding industrial environments.',
    icon: Tractor,
  },
];

export default function Applications() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible by design. Limitless in applications.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our technology scales across industries, from personal mobility to industrial machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-charcoal-light border border-charcoal-lighter rounded-2xl p-6 transition-all hover:bg-violet-accent/5 hover:border-violet-accent/30"
            >
              <div className="mb-4 text-violet-accent">
                <app.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

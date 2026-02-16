import { Zap, Code, Wrench, Printer } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Wrench,
      title: 'Mechanical Engineering',
      description: 'FEA analysis, topology optimization, and CAD design for high-performance automotive components using SolidWorks and Fusion 360',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Building automation tools, Discord bots, web applications, and computer vision systems in Python, JavaScript, MATLAB, and C++',
    },
    {
      icon: Printer,
      title: 'Maker & Prototyping',
      description: '3D printing, electronics repair and modification, mechatronic systems, and hands-on prototyping from concept to physical product',
    },
    {
      icon: Zap,
      title: 'Motorsport & Sim Racing',
      description: 'Formula Student experience combined with deep sim racing knowledge — from suspension geometry to race car setup and vehicle dynamics',
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a final-year Mechanical Engineering student at Liverpool John Moores University
            with a knack for bridging the gap between physical engineering and software.
            Whether it's optimizing a suspension upright through FEA or writing a Discord bot
            from scratch, I enjoy solving problems across disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="inline-flex p-3 bg-orange-500/10 rounded-xl mb-4">
                    <Icon className="text-orange-500" size={24} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">The Engineering Mindset</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                My dissertation focuses on topology optimization of Formula Student suspension
                components — comparing software approaches and validating results through FEA.
                It's the kind of work that sits right at the intersection of analysis and practical design.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outside of academics, I'm constantly building things — from custom Discord bots
                and automation scripts to hall-effect controller mods and 3D-printed mechanisms.
                I believe the best engineers are the ones who can't stop tinkering.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-2xl opacity-20" />
                <div className="absolute inset-4 bg-zinc-900 rounded-full flex items-center justify-center border border-orange-500/30">
                  <div className="text-center">
                    <div className="text-5xl font-black text-orange-500">MM</div>
                    <div className="text-xs text-gray-400 mt-1">Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

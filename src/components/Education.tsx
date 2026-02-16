import { GraduationCap, TrendingUp, BookOpen } from 'lucide-react';

export default function Education() {
  const highlights = [
    { module: 'Industrial Management', mark: 95 },
    { module: 'Sensors & Robotics', mark: 94 },
    { module: 'Modelling & Simulation', mark: 93 },
    { module: 'FEA', mark: 86 },
  ];

  return (
    <section id="education" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Edu<span className="text-orange-500">cation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Currently in my final year, with a strong upward trajectory across all three years
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Degree Info */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl mb-6">
                <GraduationCap className="text-orange-500" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-2">BEng Mechanical Engineering</h3>
              <p className="text-xl text-orange-500 font-semibold mb-4">Liverpool John Moores University</p>
              <p className="text-gray-400 mb-6">2022 — 2026 (Expected)</p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700/50 rounded-lg">
                  <TrendingUp size={16} className="text-green-400" />
                  <span className="text-sm text-gray-300">Year 1: 61.5%</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700/50 rounded-lg">
                  <TrendingUp size={16} className="text-green-400" />
                  <span className="text-sm text-gray-300">Year 2: 72.9%</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-orange-500/30 rounded-lg">
                  <TrendingUp size={16} className="text-orange-400" />
                  <span className="text-sm text-white font-medium">Year 3: In Progress</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-orange-500/10">
              <div className="flex items-start gap-3">
                <BookOpen size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">Dissertation</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Topology Optimization of Formula Student Suspension Components — comparing
                    software approaches and validating results through FEA analysis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Modules */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-2">Top Modules</h3>
            <p className="text-gray-500 text-sm mb-8">Strongest results across Years 2 & 3</p>

            <div className="space-y-5">
              {highlights.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">{item.module}</span>
                    <span className="text-orange-500 font-bold text-lg">{item.mark}%</span>
                  </div>
                  <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${item.mark}%`,
                        background: item.mark >= 90
                          ? 'linear-gradient(90deg, #f97316, #ef4444)'
                          : 'linear-gradient(90deg, #f97316, #fb923c)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p className="text-gray-500 text-sm italic">
                Final year results pending — 3 modules and dissertation still in progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Cog, Cpu, Wrench, Gamepad2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Cog,
      title: 'Mechanical Engineering',
      skills: [
        'SolidWorks', 'Fusion 360', 'FEA (SolidWorks Simulation)',
        'Topology Optimization', 'CAD Modelling', 'GD&T',
        'Suspension Design', 'Manufacturing Processes', 'CNC Basics',
      ],
    },
    {
      icon: Cpu,
      title: 'Software & Programming',
      skills: [
        'Python', 'JavaScript', 'C/C++', 'MATLAB',
        'Discord.js', 'HTML/CSS', 'AutoHotkey',
        'Node.js', 'Git', 'React',
      ],
    },
    {
      icon: Wrench,
      title: 'Maker & Electronics',
      skills: [
        '3D Printing (FDM)', 'Arduino', 'Soldering',
        'PCB Basics', 'Sensor Integration', 'Motor Control',
        'Electronics Repair', 'Prototyping', 'Mechatronics',
      ],
    },
    {
      icon: Gamepad2,
      title: 'Simulation & Tools',
      skills: [
        'ANSYS', 'Vehicle Dynamics', 'Data Acquisition',
        'BeamNG.drive', 'Sim Racing', 'Technical Modding',
        'Project Management', 'Quality Management', 'Technical Writing',
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Technical <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tools, languages, and disciplines I work with across engineering and software
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-xl">
                    <Icon className="text-orange-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-zinc-800 border border-zinc-700/50 text-gray-300 rounded-lg text-sm font-medium hover:border-orange-500/40 hover:text-orange-400 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-orange-500 mb-2">LJMU</div>
            <div className="text-gray-400">Liverpool John Moores</div>
            <div className="text-sm text-gray-500 mt-1">BEng Mechanical Engineering</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-orange-500 mb-2">3</div>
            <div className="text-gray-400">Disciplines</div>
            <div className="text-sm text-gray-500 mt-1">Mechanical · Software · Electronics</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-orange-500 mb-2">∞</div>
            <div className="text-gray-400">Side Projects</div>
            <div className="text-sm text-gray-500 mt-1">Always building something</div>
          </div>
        </div>
      </div>
    </section>
  );
}

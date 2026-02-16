import { ChevronDown, Wrench } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-black" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
          <Wrench size={16} className="text-orange-500" />
          <span className="text-sm text-orange-500 font-medium">Mechanical Engineer & Software Developer</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
          Mohamed
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Mahjoub
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Mechanical engineering meets software innovation.
          <br />
          From FEA & topology optimization to computer vision and embedded systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full transition-all transform hover:scale-105"
          >
            Explore My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-20 flex items-center justify-center gap-12 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500">BEng</div>
            <div className="text-sm text-gray-500 mt-1">Mechanical Engineering</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div>
            <div className="text-4xl font-bold text-orange-500">FEA</div>
            <div className="text-sm text-gray-500 mt-1">& Topology Optimization</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div>
            <div className="text-4xl font-bold text-orange-500">Full Stack</div>
            <div className="text-sm text-gray-500 mt-1">Software & Hardware</div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-orange-500 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

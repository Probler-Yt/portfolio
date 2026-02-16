import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Get in touch',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      link: 'https://github.com',
    },
    {
      icon: FileText,
      label: 'CV',
      value: 'Download CV',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Looking for a graduate engineer who can work across mechanical, software, and electronics?
            Let's have a chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 bg-orange-500/10 rounded-xl mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="text-orange-500" size={24} />
                </div>
                <div className="text-sm text-gray-500 mb-1">{method.label}</div>
                <div className="text-white font-medium group-hover:text-orange-500 transition-colors">
                  {method.value}
                </div>
              </a>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Build Something Together?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether it's an engineering challenge, a software project, or something
            that needs a bit of both — I'm always up for a conversation.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full transition-all transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <footer className="mt-16 pt-8 border-t border-zinc-800 text-center text-gray-500">
          <p className="mb-4">
            Designed & built by Mohamed Mahjoub
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}

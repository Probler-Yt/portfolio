// Everything the site says lives in this file. Edit here, not in the components.

export const CV_BASE: string = import.meta.env.VITE_CV_BASE ?? '/cv/';

export const person = {
  name: 'Mohamed Mahjoub',
  lede: "I'm a mechanical engineer. I design and analyse parts, and I build the electronics and software that go around them.",
  email: 'MohamadMahjoub21@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohamed-mahjoub-457b2421b/',
  github: 'https://github.com/Probler-Yt',
  repo: 'https://github.com/Probler-Yt/portfolio',
  revision: 'Rev. Sep 2026',
};

export const titleBlock: { label: string; value: string; note?: string }[] = [
  {
    label: 'Degree',
    value: 'BEng (Hons) Mechanical Engineering, First Class',
    note: 'Liverpool John Moores University, 2026',
  },
  {
    label: 'Strongest at',
    value: 'CAD and FEA, topology optimisation, embedded hardware, software',
  },
  {
    label: 'Based in',
    value: 'Liverpool, with a full UK driving licence',
    note: 'Open to relocating for the right role',
  },
  {
    label: 'Looking for',
    value: 'Graduate and junior engineering roles',
    note: 'Available now',
  },
];

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  context: string;
  summary: string;
  points: string[];
  tools: string;
  links: Link[];
  note?: string;
};

export const dissertation = {
  title: 'Formula Student suspension upright',
  context: 'Final-year dissertation, 2026',
  summary:
    'Topology optimisation and FEA of a 2014-T6 aluminium upright, turned into a lighter part that can still be machined.',
  points: [
    'Modelled the upright against a Formula Student reference vehicle and ran three load cases (hard braking, cornering and a 3g vertical bump) in SolidWorks Simulation.',
    'Used the topology optimisation result as a map of the load paths, then redesigned the part by hand in CAD so it stays manufacturable.',
    'Ran a modal analysis to confirm the first natural frequency sits above the powertrain excitation band.',
  ],
  specs: [
    ['Material', '2014-T6 aluminium'],
    ['Load cases', 'Braking, cornering, 3g bump, plus modal'],
    ['Peak stress', '331 MPa'],
    ['Minimum safety factor', '1.25'],
    ['Software', 'SolidWorks, SolidWorks Simulation'],
  ] as [string, string][],
  massReduction: 45.2,
  note: 'Full report and CAD available on request.',
};

export const projects: Project[] = [
  {
    title: 'ScrimLabs',
    context: 'Lead developer and co-founder, live and in use',
    summary:
      'A Discord bot and React statistics website that runs competitive scrims for The Finals community.',
    points: [
      'The bot owns the database and serves an Express API. The website reads everything through it, so there is one source of truth.',
      'Built with my co-founder. I write and ship features such as matchmaking queues with vote-to-cancel, a looking-for-scrim board, account linking, and player stats with rank history.',
      'Deployed on DigitalOcean with GitHub Actions. I debug production issues and test changes live with the community.',
    ],
    tools: 'Node.js, Discord.js, Express, React, SQL, DigitalOcean, GitHub Actions',
    links: [
      { label: 'Open scrimlabs.com', href: 'https://scrimlabs.com' },
      { label: 'Bot overview on GitHub', href: 'https://github.com/Probler-Yt/ScrimBot' },
    ],
  },
  {
    title: 'In-car speed limit display',
    context: 'Personal project, 2026',
    summary:
      'A dash-mounted screen that shows the current UK speed limit, fed by my own Android app and an offline map database.',
    points: [
      'A Kotlin Android app looks up the limit in a local OpenStreetMap SQLite database and sends it over Bluetooth.',
      'An ESP32 drives a round TFT screen that draws UK-style speed signs.',
      'I designed and 3D printed the enclosure, wired the unit into the car and tested it on real drives.',
    ],
    tools: 'ESP32, C++, Kotlin, SQLite, Bluetooth, 3D printing',
    links: [],
    note: 'Photos and a demo on request.',
  },
  {
    title: 'Autonomous robot with vision tracking',
    context: 'Sensors & Robotics module, scored 94%',
    summary:
      'An Arduino robot that drives a set route on its own, tracked frame by frame from a fixed camera in MATLAB.',
    points: [
      'Wired a differential-drive chassis through an H-bridge and tuned PWM and timing to hit set distances and 90° turns, finishing 5 cm from the target.',
      'Wrote a MATLAB colour-tracking algorithm that follows the robot through the whole run without losing it.',
    ],
    tools: 'Arduino, C++, H-bridge motor control, MATLAB',
    links: [{ label: 'View the code on GitHub', href: 'https://github.com/Probler-Yt/SensorsAndRobotics' }],
  },
];

export const moreWork: { title: string; text: string; link?: Link }[] = [
  {
    title: '6-axis desk robot arm',
    text: 'Bench testing showed the servos were continuous-rotation, so I wrote velocity-control firmware for keyboard teleoperation. PCA9685 servo driver on Arduino. In progress.',
  },
  {
    title: 'MacroPad for Linux',
    text: 'A Python and Qt 6 app that sets up cheap USB macro pads on Linux without needing Windows. Open source with a one-line installer.',
    link: { label: 'View on GitHub', href: 'https://github.com/Probler-Yt/MacroPad' },
  },
  {
    title: 'BeamNG texture addon for Blender',
    text: 'A Python addon that reads BeamNG vehicle files and assigns every texture in one click. Shared with the modding community on Reddit.',
    link: { label: 'View on GitHub', href: 'https://github.com/Probler-Yt/beamng-one-click-textures' },
  },
];

export const experience: { when: string; title: string; where: string; text: string }[] = [
  {
    when: '2024 - now',
    title: 'Localisation QA Tester',
    where: 'Universally Speaking, Liverpool',
    text: 'Testing AAA games to release standard across localisation and functionality, on live development builds. Two shipped credits. Jira and Jenkins.',
  },
  {
    when: '2025 - 2026',
    title: 'Formula Student team member',
    where: 'Liverpool John Moores University',
    text: 'CAD, electronics integration and troubleshooting on the competition car.',
  },
  {
    when: '2023',
    title: 'Vehicle Mechanic',
    where: 'Rimmers, Liverpool',
    text: 'Fleet servicing, diagnostics and repairs, including engine and subframe removal and refitting.',
  },
  {
    when: '2021',
    title: 'Winner, DSTL Callisto Moon Base project',
    where: 'Defence Science and Technology Laboratory',
    text: 'Led a team of four designing a lunar base concept, presented to DSTL.',
  },
];

export const education: { when: string; title: string; where: string; text: string }[] = [
  {
    when: '2023 - 2026',
    title: 'BEng (Hons) Mechanical Engineering, First Class',
    where: 'Liverpool John Moores University',
    text: 'Top final-year modules: Sensors & Robotics 94, Finite Element Analysis 86, Industrial Management 82.',
  },
  {
    when: '2021 - 2023',
    title: 'Technical A-levels',
    where: 'The Studio, Liverpool (studio school)',
    text: 'Computer Programming / IT D*D*, Engineering Merit.',
  },
];

export const skills: [string, string][] = [
  ['Design and analysis', 'SolidWorks, Fusion 360, FEA (static and modal), topology optimisation, Abaqus, MATLAB, design for manufacture, technical drawings'],
  ['Workshop', 'Manual lathe, milling, CNC, welding, 3D printing, vehicle servicing and repair'],
  ['Electronics', 'ESP32, Arduino, Raspberry Pi Pico, SPI, I2C, UART, Bluetooth, servo and motor control, soldering'],
  ['Software', 'JavaScript, TypeScript, Python, C++, Kotlin, React, Node.js, SQL, Git, GitHub Actions, Jira, Jenkins'],
  ['Languages', 'English and Arabic, both fluent'],
];

export const cvs: { title: string; text: string; file: string; size: string; primary?: boolean }[] = [
  {
    title: 'Mechanical and design',
    text: 'CAD, FEA and workshop skills first. My default CV.',
    file: 'Mohamed_Mahjoub_CV_Mechanical.pdf',
    size: '49 KB',
    primary: true,
  },
  {
    title: 'Electrical and embedded',
    text: 'Hardware, firmware and packaging it in CAD.',
    file: 'Mohamed_Mahjoub_CV_Electrical.pdf',
    size: '48 KB',
  },
  {
    title: 'Software and QA',
    text: 'For test, QA and software development roles.',
    file: 'Mohamed_Mahjoub_CV_Software_QA.pdf',
    size: '46 KB',
  },
];

export const cvHref = (file: string) => CV_BASE + file;
export const primaryCv = cvHref(cvs.find((c) => c.primary)!.file);

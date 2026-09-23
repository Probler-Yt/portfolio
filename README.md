# My portfolio

This is the code behind **[probler.uk](https://probler.uk)**, where I keep my projects, my experience and my CVs.

![The portfolio homepage, laid out like an engineering drawing title block](docs/preview.png)

I'm Mohamed, a mechanical engineering graduate from LJMU, First Class, based in Liverpool. I design and analyse parts in CAD, and I build the electronics and the software that go around them. Most of what's on the site started as something I wanted to exist, so I made it.

Want to talk to me about a job? Email is best: MohamadMahjoub21@gmail.com. I'm also on [LinkedIn](https://www.linkedin.com/in/mohamed-mahjoub-457b2421b/).

## What's on the site

| Section | What's in it |
| --- | --- |
| Title block | My degree, what I'm strongest at, where I am and whether I'm free |
| Selected work | The dissertation, ScrimLabs, the speed limit display and the vision tracked robot, then shorter bits on the robot arm, MacroPad and the BeamNG addon |
| Experience | QA testing, Formula Student, mechanic work and the DSTL award |
| Education | The LJMU degree with my final year module marks, and my Level 3 qualifications |
| Skills | Design and analysis, workshop, electronics, software, languages |
| CVs | Three one page PDFs, one per discipline |
| Contact | Email, LinkedIn, GitHub |

### The CVs

Same CV, three versions, sat in [`public/cv/`](public/cv). Each one leads with a different side of my work:

- **Mechanical and design**: CAD, FEA and workshop first. This is the one the main button downloads.
- **Electrical and embedded**: hardware, firmware, and packaging it all in CAD.
- **Software and QA**: for test, QA and software roles.

### The projects I'd point at first

- **Formula Student suspension upright**, my final year dissertation. Topology optimisation and FEA on a 2014-T6 aluminium upright, three load cases plus a modal analysis in SolidWorks Simulation. I got it 45.2% lighter at a 331 MPa peak stress, with a minimum safety factor of 1.25, and kept it machinable.
- **[ScrimLabs](https://scrimlabs.com)**, a Discord bot and React stats site that runs competitive scrims for The Finals community. The bot owns the database and serves an Express API, and the website reads everything through it, so there's one source of truth. It's deployed on DigitalOcean with GitHub Actions. ([bot overview](https://github.com/Probler-Yt/ScrimBot))
- **In-car speed limit display**. My Kotlin Android app finds the limit in an offline OpenStreetMap database and sends it over Bluetooth to an ESP32 driving a round TFT screen, in an enclosure I designed and printed. It's been in the car and it works.
- **[Autonomous robot with vision tracking](https://github.com/Probler-Yt/SensorsAndRobotics)**, an Arduino robot that drives a set route on its own while MATLAB tracks it from a fixed camera. Scored 94%.

## Changing things

All the writing is in one file, [`src/content.ts`](src/content.ts). Title block, projects, experience, education, skills, the CV list, all of it. Nine times out of ten that's the only file worth opening.

To swap a CV, drop the new PDF into [`public/cv/`](public/cv) with the same filename, then fix the `size` next to it in `src/content.ts`.

```
src/
  content.ts            every word on the site
  styles.css            colours, layout, dark mode
  App.tsx               the order the sections appear in
  components/
    Header.tsx          sticky bar with the CV button
    TitleBlock.tsx      the hero, drawn like a drawing title block
    Work.tsx            projects
    MassDiagram.tsx     the mass comparison drawing (inline SVG)
    Experience.tsx      experience and education
    Skills.tsx          skills, grouped
    CVs.tsx             CV downloads
    Contact.tsx         contact details and footer
    Icons.tsx           inline SVG icons
public/
  cv/                   the three CV PDFs
  favicon.svg           first angle projection symbol
  og.png                the image that shows when you share the link
```

## Why it looks like this

I wanted it to look like something an engineer made, not another gradient landing page. So the hero is a title block like you'd find in the corner of a drawing, there's a first angle projection symbol down in the corner, and the weight I saved on the upright is drawn as a proper dimensioned comparison with the removed material hatched out.

Paper grey, graphite ink, one drawing blue, and a dark theme that follows whatever your phone or laptop is set to. The typeface is [Archivo](https://fonts.google.com/specimen/Archivo), a variable font, and the headings use its width axis rather than shouting in bold.

## Stack

React, TypeScript and Vite. Plain CSS in [`src/styles.css`](src/styles.css), no framework, and Archivo self hosted with Fontsource. No trackers, no analytics, nothing following you around.

```bash
npm install
npm run dev        # local dev server
npm run build      # production build into dist/
npm run typecheck  # tsc, no emit
npm run lint       # eslint
```

## Deployment

Push to `main` and [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds it and publishes `dist/` to GitHub Pages, which serves it at probler.uk. Nothing to do by hand.

---

© 2026 Mohamed Mahjoub. Take what's useful from the code. The CV content, project write ups and images are mine, please don't reuse those.

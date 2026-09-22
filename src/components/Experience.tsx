import { education, experience } from '../content';

type Row = { when: string; title: string; where: string; text: string };

function Timeline({ rows }: { rows: Row[] }) {
  return (
    <ol className="timeline">
      {rows.map((r) => (
        <li key={r.title}>
          <p className="timeline__when">{r.when}</p>
          <div>
            <h4 className="timeline__title">{r.title}</h4>
            <p className="timeline__where">{r.where}</p>
            <p>{r.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section__title">Experience</h2>
      <Timeline rows={experience} />
      <h3 className="subhead">Education</h3>
      <Timeline rows={education} />
    </section>
  );
}

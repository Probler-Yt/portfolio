import { dissertation, moreWork, projects, type Link } from '../content';
import MassDiagram from './MassDiagram';

function Links({ links }: { links: Link[] }) {
  if (links.length === 0) return null;
  return (
    <p className="links">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
          {l.label}
        </a>
      ))}
    </p>
  );
}

export default function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <h2 id="work-title" className="section__title">Selected work</h2>

      <article className="sheet feature">
        <div className="feature__text">
          <h3 className="project__title">{dissertation.title}</h3>
          <p className="project__context">{dissertation.context}</p>
          <p className="project__summary">{dissertation.summary}</p>
          <ul className="points">
            {dissertation.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="project__note">{dissertation.note}</p>
        </div>
        <div className="feature__data">
          <MassDiagram reduction={dissertation.massReduction} />
          <table className="specs">
            <caption className="visually-hidden">Dissertation results</caption>
            <tbody>
              {dissertation.specs.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <div className="projects">
        {projects.map((p) => (
          <article className="sheet project" key={p.title}>
            <h3 className="project__title">{p.title}</h3>
            <p className="project__context">{p.context}</p>
            <p className="project__summary">{p.summary}</p>
            <ul className="points">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p className="project__tools">
              <span className="visually-hidden">Tools: </span>
              {p.tools}
            </p>
            <Links links={p.links} />
            {p.note && <p className="project__note">{p.note}</p>}
          </article>
        ))}
      </div>

      <h3 className="subhead">Also built</h3>
      <ul className="more">
        {moreWork.map((m) => (
          <li key={m.title}>
            <h4>{m.title}</h4>
            <p>{m.text}</p>
            {m.link && (
              <a href={m.link.href} target="_blank" rel="noopener noreferrer">
                {m.link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

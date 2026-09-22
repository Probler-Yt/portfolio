import { person, primaryCv, titleBlock } from '../content';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, ProjectionSymbol } from './Icons';

// The hero is laid out like the title block in the corner of an engineering drawing.
export default function TitleBlock() {
  return (
    <section className="tb" aria-labelledby="name">
      <div className="tb__head">
        <h1 id="name" className="tb__name">
          {person.name}
        </h1>
        <p className="tb__lede">{person.lede}</p>
      </div>

      <dl className="tb__cells">
        {titleBlock.map((cell) => (
          <div className="tb__cell" key={cell.label}>
            <dt>{cell.label}</dt>
            <dd>
              {cell.value}
              {cell.note && <span className="tb__note">{cell.note}</span>}
            </dd>
          </div>
        ))}
      </dl>

      <div className="tb__foot">
        <div className="tb__actions">
          <a className="btn btn--primary" href={primaryCv} download>
            <DownloadIcon />
            <span>Download CV</span>
          </a>
          <a className="btn" href={`mailto:${person.email}`}>
            <MailIcon />
            <span>Email</span>
          </a>
          <a className="btn" href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a className="btn" href={person.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
        <div className="tb__rev">
          <ProjectionSymbol size={34} />
          <span>{person.revision}</span>
        </div>
      </div>
    </section>
  );
}

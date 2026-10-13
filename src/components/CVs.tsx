import { cvHref, cvs } from '../content';
import { DownloadIcon } from './Icons';

export default function CVs() {
  return (
    <section id="cvs" className="section" aria-labelledby="cvs-title">
      <h2 id="cvs-title" className="section__title">CVs</h2>
      <p className="section__intro">Three versions of the same one-page CV, each leading with a different side of my work. All PDF, updated October 2026.</p>
      <ul className="cvs">
        {cvs.map((cv) => (
          <li key={cv.file} className="cvs__row">
            <div>
              <h3 className="cvs__title">{cv.title}</h3>
              <p>{cv.text}</p>
            </div>
            <a className={`btn${cv.primary ? ' btn--primary' : ''}`} href={cvHref(cv.file)} download>
              <DownloadIcon />
              <span>
                Download PDF<span className="visually-hidden">: {cv.title} CV</span>
              </span>
              <span className="btn__meta">{cv.size}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

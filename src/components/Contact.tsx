import { person } from '../content';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { track } from '../analytics';

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="section__title">Contact</h2>
        <p className="section__intro">Email is the quickest way to reach me. I'm also on LinkedIn.</p>
        <a className="contact__email" href={`mailto:${person.email}`} onClick={() => track('contact-email', 'Clicked email address')}>
          {person.email}
        </a>
        <ul className="contact__links">
          <li>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => track('contact-linkedin', 'Opened LinkedIn')}>
              <LinkedInIcon /> LinkedIn
            </a>
          </li>
          <li>
            <a href={person.github} target="_blank" rel="noopener noreferrer" onClick={() => track('contact-github', 'Opened GitHub')}>
              <GitHubIcon /> GitHub
            </a>
          </li>
        </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          Designed and built by {person.name} in React and TypeScript.{' '}
          <a href={person.repo} target="_blank" rel="noopener noreferrer">
            Source on GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

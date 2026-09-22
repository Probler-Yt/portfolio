import Header from './components/Header';
import TitleBlock from './components/TitleBlock';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CVs from './components/CVs';
import Contact, { Footer } from './components/Contact';

export default function App() {
  return (
    <>
      <span id="top" />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="wrap">
        <TitleBlock />
        <Work />
        <Experience />
        <Skills />
        <CVs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

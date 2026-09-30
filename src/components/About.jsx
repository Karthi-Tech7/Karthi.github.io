import SectionHeading from './SectionHeading.jsx';
import { about } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" title="About Me" />
        <div className="prose">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

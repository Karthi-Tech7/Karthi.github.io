import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" title="Education" />
        {education.map((e) => (
          <div className="edu" key={e.degree}>
            <GraduationCap size={28} aria-hidden="true" />
            <div>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              <p className="muted">{e.location}{e.period ? ` · ${e.period}` : ''}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

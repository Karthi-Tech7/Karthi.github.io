import { Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { achievement, profile } from '../data/portfolio.js';

export default function Achievement() {
  return (
    <section id="achievement" className="section section--alt" aria-labelledby="achievement-title">
      <div className="container">
        <SectionHeading id="achievement-title" title="Coding Achievement" />
        <div className="achievement">
          <p className="achievement__count" aria-hidden="true">{achievement.count}</p>
          <div>
            <p className="achievement__label">{achievement.label}</p>
            <p className="achievement__note">{achievement.note}</p>
            <a className="btn btn--outline btn--small" href={profile.hackerrank} target="_blank" rel="noopener noreferrer">
              <Code2 size={16} aria-hidden="true" /> View HackerRank profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

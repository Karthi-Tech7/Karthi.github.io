import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" title="Skills">
          Technologies I am learning and working with.
        </SectionHeading>
        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

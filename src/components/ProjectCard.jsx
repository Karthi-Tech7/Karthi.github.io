import { Github, ExternalLink } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function ProjectCard({ project }) {
  const repoUrl = project.repo || `${profile.github}?tab=repositories`;

  return (
    <article className="project">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="project__tech" aria-label="Technologies used">
        {project.tech.map((t) => (
          <li key={t} className={project.techIsPlaceholder ? 'is-placeholder' : ''}>{t}</li>
        ))}
      </ul>

      <div className="project__actions">
        <a className="btn btn--primary btn--small" href={repoUrl} target="_blank" rel="noopener noreferrer">
          <Github size={16} aria-hidden="true" /> GitHub repository
        </a>
        {project.demo ? (
          <a className="btn btn--outline btn--small" href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} aria-hidden="true" /> Live demo
          </a>
        ) : (
          <button className="btn btn--outline btn--small" type="button" disabled title="Add your live demo link in src/data/portfolio.js">
            <ExternalLink size={16} aria-hidden="true" /> Live demo
          </button>
        )}
      </div>
      {!project.demo && <p className="project__note">Live demo link coming soon.</p>}
    </article>
  );
}

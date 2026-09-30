import { Github, Linkedin, Download, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__hello">Hi, I&apos;m</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">View My Projects</a>
            <a className="btn btn--outline" href="#contact">Contact Me</a>
          </div>

          <div className="hero__meta">
            <a className="icon-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github size={20} />
            </a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
            <a className="text-link" href={profile.resume} download>
              <Download size={16} aria-hidden="true" /> Download resume
            </a>
            <span className="hero__loc"><MapPin size={16} aria-hidden="true" /> Pudukkottai, India</span>
          </div>
        </div>

        <figure className="code" aria-label="Short profile written as a Java class">
          <div className="code__bar" aria-hidden="true">
            <span /><span /><span />
            <em>Developer.java</em>
          </div>
          <pre>
            <code>
{`public class `}<b className="t">Developer</b>{` {
  `}<b className="t">String</b>{` name = `}<b className="s">"{profile.name}"</b>{`;
  `}<b className="t">String</b>{` role = `}<b className="s">"{profile.role}"</b>{`;
  `}<b className="t">String</b>{`[] learning = {
    `}<b className="s">"Spring Boot"</b>{`,
    `}<b className="s">"REST APIs"</b>{`,
    `}<b className="s">"React.js"</b>{`
  };
  `}<b className="t">String</b>{` degree = `}<b className="s">"B.Tech IT"</b>{`;
  `}<b className="k">boolean</b>{` openToWork = `}<b className="k">true</b>{`;
}`}
            </code>
          </pre>
        </figure>
      </div>
    </section>
  );
}

import { Mail, Github, Linkedin, MapPin, Download } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" title="Contact">
          I am open to fresher and junior developer opportunities. Send me an email and I will get back to you.
        </SectionHeading>

        <ul className="contact">
          <li>
            <Mail size={20} aria-hidden="true" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <Github size={20} aria-hidden="true" />
            <a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/karthi-Tech7</a>
          </li>
          <li>
            <Linkedin size={20} aria-hidden="true" />
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile</a>
          </li>
          <li>
            <MapPin size={20} aria-hidden="true" />
            <span>{profile.location}</span>
          </li>
        </ul>

        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" /> Send an email
          </a>
          <a className="btn btn--outline" href={profile.resume} download>
            <Download size={18} aria-hidden="true" /> Download resume
          </a>
        </div>
      </div>
    </section>
  );
}

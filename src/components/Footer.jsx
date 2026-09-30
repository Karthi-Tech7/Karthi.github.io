import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="footer__links">
          <a className="icon-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
          <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Send an email"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

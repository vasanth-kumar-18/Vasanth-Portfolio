import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>Vasanth Kumar — Portfolio 2026</span>
        <span className="foot-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.phoneHref}>Call</a>
          <a href="/resume.pdf" download="Vasanth_Kumar_Resume.pdf">Resume</a>
          {profile.socialLinks.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
        </span>
      </div>
    </footer>
  )
}

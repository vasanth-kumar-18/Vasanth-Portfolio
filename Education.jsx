import { Check } from 'lucide-react'
import { education, certs } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <p className="kicker">Credentials</p>
        <h2>Education & certifications</h2>
        <Reveal className="card edu">
          <span className="date">{education.year}</span>
          <h3>{education.degree}</h3>
          <p className="meta">{education.note}</p>
        </Reveal>
        <div className="grid g3">
          {certs.map(([t, o]) => (
            <Reveal className="card cert" key={t}>
              <span className="tick"><Check size={18} aria-hidden="true" /></span>
              <div><h3>{t}</h3><small>{o}</small></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

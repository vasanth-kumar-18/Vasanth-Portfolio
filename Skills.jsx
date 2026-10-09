import { skills, tools } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="alt">
      <div className="wrap">
        <p className="kicker">Capabilities</p>
        <h2>Skills dashboard</h2>
        <p className="lede">Self-rated proficiency across performance marketing, search, social and content.</p>
        <div className="grid g4">
          {skills.map((g) => (
            <Reveal className="card" key={g.title}>
              {(seen) => (
                <>
                  <h3>{g.title}</h3>
                  {g.items.map(([name, v]) => (
                    <div className="bar" key={name}>
                      <div><span>{name}</span><em>{v}%</em></div>
                      <span className="track" role="img" aria-label={`${name} ${v} percent`}><i style={{ width: seen ? `${v}%` : 0 }} /></span>
                    </div>
                  ))}
                </>
              )}
            </Reveal>
          ))}
          <Reveal className="card">
            <h3>Tools & platforms</h3>
            <div className="pills">{tools.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

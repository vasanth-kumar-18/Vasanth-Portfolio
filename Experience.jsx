import { experience } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="kicker">Career path</p>
        <h2>Experience timeline</h2>
        <p className="lede">Three organizations in Hyderabad, from internship to full-time role.</p>
        <ol className="grid tl">
          {experience.map((e) => (
            <Reveal as="li" className="card" key={e.date}>
              <span className="date">{e.date}</span>
              <h3>{e.title}</h3>
              <p className="meta">{e.org}</p>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { profile } from '../data.js'
import Photo from './Photo.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <Reveal><Photo alt="Vasanth Kumar" /></Reveal>
        <Reveal>
          <p className="kicker">Who I am</p>
          <h2>About me</h2>
          <p className="strong">{profile.tagline}</p>
          {profile.about.map((p) => <p className="mute" key={p.slice(0, 20)}>{p}</p>)}
          <div className="pills">{profile.aboutChips.map((c) => <span className="pill" key={c}>{c}</span>)}</div>
          <div className="facts">
            <div><b>{profile.fullName}</b><small>Full name</small></div>
            <div><b>{profile.languages}</b><small>Languages</small></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

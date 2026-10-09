import { useEffect, useState } from 'react'
import { Download, Mail, ArrowDown } from 'lucide-react'
import { profile } from '../data.js'
import Photo from './Photo.jsx'

function Count({ n, s }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setV(n); return }
    let raf; const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1)
      setV(n * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [n])
  return <strong>{(n % 1 ? v.toFixed(1) : Math.round(v))}{s}</strong>
}

export default function Hero() {
  return (
    <section id="home" className="hero-sec">
      <div className="wrap hero">
        <div>
          <span className="tag">{profile.tag}</span>
          <h1>Vasanth <span>Kumar</span></h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <div className="pills">{profile.chips.map((c) => <span className="pill" key={c}>{c}</span>)}</div>
          <div className="cta">
            <a className="btn primary" href="#work"><ArrowDown size={18} /> View Portfolio</a>
            <a className="btn ghost" href="/resume.pdf" download="Vasanth_Kumar_Resume.pdf"><Download size={18} /> Download Resume</a>
            <a className="btn ghost" href="#contact"><Mail size={18} /> Contact Me</a>
          </div>
          <div className="stats">
            {profile.stats.map((s) => <div key={s.l}><Count n={s.n} s={s.s} /><small>{s.l}</small></div>)}
          </div>
        </div>
        <Photo alt="Portrait of Vasanth Kumar" eager />
      </div>
    </section>
  )
}

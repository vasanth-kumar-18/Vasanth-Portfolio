import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home'
      navLinks.forEach(([id]) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 140) cur = id
      })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="logo" href="#home" aria-label="Vasanth Kumar, home">VK<b>.</b></a>
        <nav aria-label="Main">
          <ul className={`links ${open ? 'show' : ''}`}>
            {navLinks.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="open-pill" href="#contact">Open to work</a>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

import { useEffect, useRef, useState } from 'react'

// Fades content in once when it scrolls into view. `children` may be a function receiving the visible flag.
export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`rv ${seen ? 'in' : ''} ${className}`}>{typeof children === 'function' ? children(seen) : children}</Tag>
}

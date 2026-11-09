import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const links = [
  ['Home', '/'],
  ['About Us', '/about-us'],
  ['Admissions', '/admissions'],
  ['Curriculum', '/curriculum'],
  ['Extracurricular Activities', '/extracurricular-activities'],
  ['Gallery', '/gallery'],
  ['Contact Us', '/contact-us']
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="topbar"><div className="container topbar-inner">
        <span>Achieving Excellence Together</span>
        <span>Roodepoort, Gauteng <b>•</b> <a href="tel:0834445273">083 444 5273</a></span>
      </div></div>
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/westrand-logo.jpg" alt="Westrand Private School logo" />
          <span><strong>WESTRAND</strong><small>PRIVATE SCHOOL</small></span>
        </Link>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <Link className="nav-enquire" to="/admissions" onClick={() => setOpen(false)}>Enquire Now</Link>
        </nav>
      </div>
    </header>
  )
}
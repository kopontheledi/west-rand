import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const pages = [
  ['Home', '/'], ['About Us', '/about-us'], ['Admissions', '/admissions'],
  ['Curriculum', '/curriculum'], ['Extracurricular Activities', '/extracurricular-activities'],
  ['Gallery', '/gallery'], ['Contact Us', '/contact-us']
]
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=298+Ontdekkers+Services+Road%2C+Roodepoort%2C+South+Africa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="footer-brand"><img src="/westrand-logo.jpg" alt="" /><span><b>WESTRAND</b><small>PRIVATE SCHOOL</small></span></Link>
          <p>Because You Deserve To Shine.</p>
          <p className="footer-motto">Achieving Excellence Together</p>
        </div>
        <div><h3>Quick Links</h3><ul>{pages.map(([label, path]) => <li key={path}><Link to={path}>{label}</Link></li>)}</ul></div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><Phone /><a href="tel:0834445273">083 444 5273</a></p>
          <p><Phone /><a href="tel:0798326736">079 832 6736</a></p>
          <p><Mail /><a href="mailto:info@westrandprivateschool.co.za">info@westrandprivateschool.co.za</a></p>
          <p><MapPin /><span>298 Ontdekkers Services Road, 1709, Roodepoort, South Africa</span></p>
          <a className="directions" href={mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight /></a>
        </div>
      </div>
      <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Westrand Private School. All rights reserved.</span><span>Because You Deserve To Shine.</span></div></div>
    </footer>
  )
}
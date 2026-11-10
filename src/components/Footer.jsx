
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight, Facebook, Instagram } from 'lucide-react'

const pages = [
  ['Home', '/'],
  ['About Us', '/about-us'],
  ['Admissions', '/admissions'],
  ['Curriculum', '/curriculum'],
  ['Extracurricular Activities', '/extracurricular-activities'],
  ['Gallery', '/gallery'],
  ['Contact Us', '/contact-us']
]

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=298+Ontdekkers+Services+Road%2C+Roodepoort%2C+South+Africa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* SCHOOL BRAND */}
        <div className="footer-about">
          <Link to="/" className="footer-brand">
            <img src="/westrand-logo.jpg" alt="Westrand Private School logo" />
            <span>
              <b>WESTRAND</b>
              <small>PRIVATE SCHOOL</small>
            </span>
          </Link>

          <p>Because You Deserve To Shine.</p>
          <p className="footer-motto">Achieving Excellence Together</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            {pages.map(([label, path]) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT DETAILS + SOCIAL MEDIA */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <Phone />
            <a href="tel:0834445273">083 444 5273</a>
          </p>

          <p>
            <Phone />
            <a href="tel:0798326736">079 832 6736</a>
          </p>

          <p>
            <Mail />
            <a href="mailto:info@westrandprivateschool.co.za">
              info@westrandprivateschool.co.za
            </a>
          </p>

          <p>
            <MapPin />
            <span>
              298 Ontdekkers Services Road, 1709, Roodepoort, South Africa
            </span>
          </p>

          <a
            className="directions"
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <ArrowUpRight />
          </a>

          {/* FOLLOW US */}
          <div className="mt-8">
            <h3 className="mb-4">Follow Us</h3>

            <p className="mb-5 text-sm leading-6 text-slate-300">
              Stay connected with Westrand Private School and keep up with
              our latest news, activities and school updates.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://web.facebook.com/people/Westrand-Private-School/100075869179549/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Westrand Private School on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#1877F2]"
              >
                <Facebook size={21} />
              </a>

              <a
                href="https://www.instagram.com/wsp_school/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Westrand Private School on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#E4405F]"
              >
                <Instagram size={21} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} Westrand Private School. All rights reserved.
          </span>
          <span>Because You Deserve To Shine.</span>
        </div>
      </div>
    </footer>
  )
}

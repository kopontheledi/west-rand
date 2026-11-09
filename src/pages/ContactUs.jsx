import PageBanner from '../components/PageBanner'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'

const address = '298 Ontdekkers Services Road, 1709, Roodepoort, South Africa'
const directions = 'https://www.google.com/maps/search/?api=1&query=298+Ontdekkers+Services+Road%2C+1709%2C+Roodepoort%2C+South+Africa'

export default function ContactUs() {
  return <>
    <PageBanner title="Contact Us" description="We would love to hear from you. Get in touch with Westrand Private School." />
    <section className="section-pad"><div className="container contact-grid">
      <div><span className="eyebrow">GET IN TOUCH</span><h2>Let's start a<br /><em>conversation.</em></h2><p className="lead">Contact us with questions about admissions, the curriculum or school life.</p>
        <div className="contact-list">
          <div><span><Phone /></span><section><h3>Call Us</h3><a href="tel:0834445273">083 444 5273</a><br /><a href="tel:0798326736">079 832 6736</a></section></div>
          <div><span><Mail /></span><section><h3>Email Us</h3><a href="mailto:info@westrandprivateschool.co.za">info@westrandprivateschool.co.za</a></section></div>
          <div><span><MapPin /></span><section><h3>Visit Us</h3><p>{address}</p></section></div>
          <div><span><Clock /></span><section><h3>Office Hours</h3><p>Please contact the school to confirm office hours.</p></section></div>
        </div>
      </div>
      <div className="map-panel"><div className="map-content"><MapPin size={42} /><h3>Find Westrand Private School</h3><p>{address}</p><a className="btn btn-red" href={directions} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={16} /></a></div></div>
    </div></section>
  </>
}
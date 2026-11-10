
import PageBanner from '../components/PageBanner'
import EnquiryForm from '../components/EnquiryForm'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'

const address =
  '298 Ontdekkers Services Road, 1709, Roodepoort, South Africa'

const directions =
  'https://www.google.com/maps/search/?api=1&query=298+Ontdekkers+Services+Road%2C+1709%2C+Roodepoort%2C+South+Africa'

export default function ContactUs() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        description="We would love to hear from you. Get in touch with Westrand Private School."
      />

      {/* CONTACT DETAILS AND ENQUIRY FORM */}
      <section className="px-5 pt-12 pb-10 md:pt-16 md:pb-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">

          {/* CONTACT DETAILS */}
          <div className="self-start">
            <span className="eyebrow">GET IN TOUCH</span>

            <h2>
              Let's start a
              <br />
              <em>conversation.</em>
            </h2>

            <p className="lead mt-4">
              Contact us with questions about admissions, the curriculum
              or school life. Our team would be happy to assist you.
            </p>

            <div className="contact-list mt-8">

              <div>
                <span><Phone /></span>
                <section>
                  <h3>Call Us</h3>
                  <a href="tel:0834445273">083 444 5273</a>
                  <br />
                  <a href="tel:0798326736">079 832 6736</a>
                </section>
              </div>

              <div>
                <span><Mail /></span>
                <section>
                  <h3>Email Us</h3>
                  <a href="mailto:info@westrandprivateschool.co.za">
                    info@westrandprivateschool.co.za
                  </a>
                </section>
              </div>

              <div>
                <span><MapPin /></span>
                <section>
                  <h3>Visit Us</h3>
                  <p>{address}</p>
                </section>
              </div>

              <div>
                <span><Clock /></span>
                <section>
                  <h3>Office Hours</h3>
                  <p>Please contact the school to confirm office hours.</p>
                </section>
              </div>

            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="w-full self-start rounded-2xl bg-slate-50 p-4 md:p-6">
            <EnquiryForm />
          </div>

        </div>
      </section>

      {/* GOOGLE MAP - BOTTOM OF PAGE */}
      <section className="bg-slate-50 px-5 pt-8 pb-14 md:pt-10 md:pb-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-6 text-center">
            <span className="eyebrow">FIND US</span>

            <h2 className="mt-3">
              Visit <em>Our School</em>
            </h2>

            <p className="lead mx-auto mt-3 max-w-2xl">
              We welcome you to visit Westrand Private School.
              Find us at our Roodepoort campus.
            </p>
          </div>

          
      {/* GOOGLE MAP - BOTTOM OF PAGE */}
      <section className="bg-slate-50 px-5 pt-8 pb-14 md:pt-10 md:pb-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-6 text-center">
            <span className="eyebrow">FIND US</span>

            <h2 className="mt-3">
              Visit <em>Our School</em>
            </h2>

            <p className="lead mx-auto mt-3 max-w-2xl">
              We welcome you to visit Westrand Private School.
              Find us at our Roodepoort campus.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.4961409621783!2d27.888783500000002!3d-26.147966699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a1b31f87137d%3A0xbdf689cc09ddda0!2sWestrand%20Private%20School!5e0!3m2!1sen!2sza!4v1794269232580!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Westrand Private School Google Maps Location"
            />
          </div>

          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm text-slate-600">
              <MapPin className="mr-2 inline-block" size={17} />
              298 Ontdekkers Services Road, 1709, Roodepoort
            </p>

            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red"
            >
              Get Directions
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </section>


        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  HeartHandshake,
  Clock,
  Laptop,
  Bus,
  Medal
} from 'lucide-react'

const features = [
  { icon: <BookOpen />, title: 'Quality Education', text: 'Building knowledge, curiosity and a strong foundation for lifelong learning.' },
  { icon: <Users />, title: 'Supportive Community', text: 'Creating a welcoming environment where learners are encouraged to grow.' },
  { icon: <Trophy />, title: 'Beyond the Classroom', text: 'Making room for sport, creativity, teamwork and personal discovery.' },
  { icon: <HeartHandshake />, title: 'Growing Together', text: 'Working with families to support every learner’s educational journey.' }
]

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-shade" />
      <div className="container hero-content">
        <span className="hero-label">WELCOME TO WESTRAND PRIVATE SCHOOL</span>
        <span className="admissions-pill"><i /> ADMISSION FOR 2027 NOW OPEN</span>
        <h1>Because You<br /><em>Deserve To Shine.</em></h1>
        <p>Achieving Excellence Together. A place to learn, discover your potential and build a bright future.</p>
        <div className="hero-actions">
          <Link className="btn btn-red" to="/admissions">Enquire Now <ArrowRight size={17} /></Link>
          <Link className="btn btn-light-outline" to="/about-us">Discover Our School</Link>
        </div>
      </div>
      <div className="hero-bottom"><span>LEARN</span><b>•</b><span>GROW</span><b>•</b><span>SHINE</span></div>
    </section>

    <section className="welcome section-pad">
      <div className="container welcome-grid">
        <div><span className="eyebrow">WELCOME TO OUR SCHOOL</span><h2>A place where<br />you can <em>shine.</em></h2></div>
        <div><p className="lead">At Westrand Private School, we believe every learner deserves the opportunity to discover their strengths, develop their talents and work towards their full potential.</p><p className="muted">Our motto, “Achieving Excellence Together”, reflects the importance of learners, educators and families working together.</p><Link className="text-link" to="/about-us">Learn more about us <ArrowRight size={16} /></Link></div>
      </div>
    </section>

        {/* WHY WESTRAND PRIVATE SCHOOL */}
    <section className="why-westrand section-pad">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">MORE THAN JUST EDUCATION</span>
          <h2>Why Choose <em>Westrand?</em></h2>
          <p>
            We offer opportunities and support that help learners
            develop academically, socially and personally.
          </p>
        </div>

        <div className="why-grid">

          <article className="why-card">
            <div className="why-icon">
              <Clock size={30} />
            </div>
            <h3>Aftercare Classes</h3>
            <p>
              Providing learners with additional support and a
              structured environment beyond regular school hours.
            </p>
          </article>

          <article className="why-card">
            <div className="why-icon">
              <Laptop size={30} />
            </div>
            <h3>Coding and Robotics</h3>
            <p>
              Introducing learners to technology, creativity,
              problem-solving and the digital skills of tomorrow.
            </p>
          </article>

          <article className="why-card">
            <div className="why-icon">
              <Bus size={30} />
            </div>
            <h3>Transport Service</h3>
            <p>
              Supporting families with convenient school transport
              arrangements.
            </p>
          </article>

          <article className="why-card">
            <div className="why-icon">
              <Medal size={30} />
            </div>
            <h3>Exciting Extracurricular Activities</h3>
            <p>
              Encouraging learners to explore their interests,
              discover their talents and build confidence beyond
              the classroom.
            </p>
          </article>

        </div>

      </div>
    </section>

    <section className="mission-section section-pad">
      <div className="container mission-grid">

        {/* LEFT: MISSION, VISION AND VALUES */}
        <div className="mission-content">
          <span className="eyebrow">WHAT GUIDES US</span>

          <h2>
            Our Mission, Vision
            <br />
            & <em>Core Values.</em>
          </h2>

          <div className="mission-item">
            <h3>Our Mission</h3>
            <p>
              To provide a safe, nurturing, and academically excellent
              environment for holistic development.
            </p>
          </div>

          <div className="mission-item">
            <h3>Our Vision</h3>
            <p>
              To be a leading independent school recognized for
              educational excellence and community impact.
            </p>
          </div>

          <div className="mission-item">
            <h3>Our Core Values</h3>
            <div className="values-list">
              {[
                'Integrity',
                'Respect',
                'Excellence',
                'Collaboration',
                'Leadership',
                'Lifelong Learning'
              ].map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: FIVE SCHOOL IMAGES */}
        <div className="mission-gallery">
          <div className="mission-image image-one">
            <img src="/images/school-4.jpeg" alt="Learners at Westrand Private School" />
          </div>

          <div className="mission-image image-two">
            <img src="/images/school-7.jpeg" alt="School learning activities" />
          </div>

          <div className="mission-image image-three">
            <img src="/images/school-3.jpeg" alt="School environment" />
          </div>

          <div className="mission-image image-four">
            <img src="/images/school-5.jpeg" alt="Learners participating in activities" />
          </div>

          <div className="mission-image image-five">
            <img src="/images/school-4.jpeg" alt="School community" />
          </div>
        </div>

      </div>
    </section>

    <section className="features section-pad">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">THE WESTRAND EXPERIENCE</span><h2>Learn. Grow. Achieve.</h2><p>Education is a journey of discovery, development and opportunity.</p></div>
        <div className="feature-grid">{features.map(item => <article className="feature-card" key={item.title}><div className="feature-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div>
    </section>

    <section className="admissions-cta">
      <div className="cta-photo" />
      <div className="cta-copy"><span className="eyebrow light">TAKE THE NEXT STEP</span><h2>Your future<br /><em>starts here.</em></h2><p>Admissions for 2026 are open. Contact our school to enquire about the application process.</p><Link className="btn btn-red" to="/admissions">Enquire Now <ArrowRight size={17} /></Link></div>
    </section>

  </>
}
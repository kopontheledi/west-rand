
import { ArrowRight, CheckCircle2, GraduationCap, Heart, Mail } from 'lucide-react'

const reasons = [
  'Small, focused classes for individual attention',
  'Dedicated literacy and numeracy support to strengthen foundational skills',
  'A safe, caring, and disciplined learning environment',
  'Transport available for convenience',
  'Limited spaces per grade to maintain quality learning'
]

const phases = [
  {
    title: 'Foundation Phase',
    grades: 'Grade R to Grade 3',
    description:
      'The primary formative years are set to achieve a secure level of functionality and effectiveness in core skills, which include reading, oral and written communication.',
    image:
      '/images/school-4.jpeg',
    alt: 'Foundation Phase learners at Westrand Private School'
  },
  {
    title: 'Intermediate Phase',
    grades: 'Grade 4 to Grade 7',
    description:
      'The Intermediate Phase marks an exciting shift as students step into a stage where curiosity meets growing confidence. In these years, learners begin to shape their own academic identity, discovering how they think, how they learn, and how they express their ideas.',
    image:
      '/images/school-8.jpeg',
    alt: 'Intermediate Phase learners at Westrand Private School'
  },
  {
    title: 'Senior & FET Phase',
    grades: 'Grade 8 to Grade 11',
    description:
      'The Senior and FET Phase is a key stage where students refine their focus, strengthen their understanding, and prepare for life beyond school. Learners are encouraged to think critically, manage their time well, and take ownership of their academic journey.',
    image:
      '/images/school-3.jpeg',
    alt: 'Senior Phase learners at Westrand Private School'
  }
]

export default function AboutUs() {
  return (
    <>
      <section className="bg-image-about-us">
        <div className="about-us-overlay">
          <div className="container">
            <span className="eyebrow">GET TO KNOW US</span>
            <h1>About Westrand Private School</h1>
            <p>Achieving Excellence Together</p>
          </div>
        </div>
      </section>

      {/* ABOUT THE SCHOOL */}
      <section className="section-pad about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-copy">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>A place where every learner can <em>thrive.</em></h2>

            <p>
              Westrand Private School is a proudly independent institution
              located in the heart of Roodepoort. We offer comprehensive,
              high-quality basic education aligned with the standards of the
              South African Comprehensive Assessment Institute (SACAI).
            </p>

            <p>
              We believe every child deserves the opportunity to grow,
              achieve, and thrive. Our approach combines strong values,
              personalised attention, and high academic standards to support
              each learner’s full potential.
            </p>
          </div>

          <div className="about-intro-image">
            <img
              src="/images/wESTRAND-SCHOOL.jpeg"
              alt="Westrand Private School"
            />
          </div>
        </div>
      </section>

      {/* WHY PARENTS CHOOSE US */}
      <section className="section-pad why-parents">
        <div className="container why-parents-grid">
          <div>
            <span className="eyebrow">THE WESTRAND DIFFERENCE</span>
            <h2>Why Parents Choose <em>Westrand</em></h2>
            <p>
              We are committed to creating an environment where learners
              receive the attention, guidance and encouragement they need
              to reach their potential.
            </p>
          </div>

          <div className="reasons-list">
            {reasons.map((reason) => (
              <div className="reason-item" key={reason}>
                <CheckCircle2 size={21} />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EDUCATION PHASES */}
      <section className="section-pad education-phases">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">THE LEARNING JOURNEY</span>
            <h2>Our Education <em>Phases</em></h2>
            <p>
              Supporting learners through every stage of their educational
              journey, from their first school experiences to their senior
              school years.
            </p>
          </div>

          <div className="phase-list">
            {phases.map((phase, index) => (
              <article className={`phase-card ${index % 2 ? 'reverse' : ''}`} key={phase.title}>
                <div className="phase-image">
                  <img src={phase.image} alt={phase.alt} loading="lazy" />
                </div>

                <div className="phase-content">
                  <span className="phase-number">
                    PHASE 0{index + 1}
                  </span>
                  <h3>{phase.title}</h3>
                  <span className="phase-grades">{phase.grades}</span>
                  <p>{phase.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <section className="section-pad founder-section">
        <div className="container founder-grid">
          <div className="founder-image">
            <img
              src="/images/school-1.png"
              alt="Westrand Private School community"
              loading="lazy"
            />
            <div className="founder-image-caption">
              <Heart size={19} />
              <span>Achieving Excellence Together</span>
            </div>
          </div>

          <div className="founder-copy">
            <span className="eyebrow">A MESSAGE FROM OUR FOUNDER</span>
            <h2>Every child deserves a place to <em>shine.</em></h2>

            <p>
              At Westrand Private School, my heart has always been guided by
              one simple belief: every child deserves a place where they feel
              loved, supported, and inspired to become their best self. Our
              school was built on the vision of creating a home of learning
              — a space where children are not just taught, but truly seen,
              heard, and cherished.
            </p>

            <p>
              We strive to empower our students to express themselves with
              confidence, to grow through curiosity, and to discover the
              incredible potential that already lives within them. Every
              lesson, every moment, and every interaction is rooted in care,
              respect, and the belief that each child’s journey is uniquely
              special.
            </p>

            <p>
              It is my greatest joy to watch our learners blossom into
              confident, compassionate young people who carry the courage
              to dream and the strength to achieve. Thank you for allowing
              us to be part of your child’s story. Together, we shape a
              future filled with hope, purpose, and possibility.
            </p>

            <div className="founder-signoff">
              <GraduationCap size={25} />
              <span>Westrand Private School Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="careers-cta">
        <div className="container careers-content">
          <div>
            <span className="eyebrow light">CAREERS AT WESTRAND</span>
            <h2>Join us in shaping <em>bright futures.</em></h2>
            <p>
              Are you passionate about education and making a difference
              in the lives of learners? We would love to hear from you.
            </p>
          </div>

          <a
            className="btn btn-light-outline"
            href="mailto:info@westrandprivateschool.co.za?subject=Career%20Application"
          >
            <Mail size={17} />
            Submit Resume
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </>
  )
}


import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ClipboardList,
  FileText,
  CheckCircle,
  ShieldCheck,
  Users,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  School,
  Wallet,
  Clock,
  Award,
  UserCheck,
  Sparkles
} from 'lucide-react'

const requiredDocuments = [
  'Copy of the learner’s birth certificate',
  'Most recent school report (where applicable)',
  'Copy of parent/guardian ID',
  'Proof of residence',
  'Completed application form',
  'Proof of payment for the registration fee'
]

const fees = [
  {
    title: 'Foundation Phase',
    grades: 'Grade R – Grade 3',
    annual: 'R25 200',
    monthly: 'R2 100'
  },
  {
    title: 'Intermediate Phase',
    grades: 'Grade 4 – Grade 7',
    annual: 'R25 800',
    monthly: 'R2 150'
  },
  {
    title: 'Senior & FET Phase',
    grades: 'Grade 8 – Grade 11',
    annual: 'R26 400',
    monthly: 'R2 200'
  }
]

const additionalFees = [
  { service: 'Aftercare', price: 'R800 p/m' },
  { service: 'Home Schooling Assistance', price: 'R800 p/m' },
  { service: 'Swimming Lessons', price: 'R500 p/m' },
  { service: 'Karate', price: 'R200 p/m' },
  { service: 'Chess', price: 'R150 once-off yearly' }
]

const expectations = [
  {
    icon: School,
    title: 'A Fantastic Learning Environment',
    description:
      'An exciting, immersive school experience awaits. Our classrooms are vibrant spaces where teachers lead dynamic, interactive lessons and provide real-time feedback. Students engage with rich learning materials, hands-on activities, and supportive guidance that ensures continuous growth and understanding.',
    color: 'bg-sky-100 text-sky-700'
  },
  {
    icon: Award,
    title: 'Quality Teaching',
    description:
      'We employ qualified, SACE-registered teachers who are passionate about supporting every learner to achieve better results.',
    color: 'bg-orange-100 text-orange-700'
  },
  {
    icon: Users,
    title: 'There’s a Place for Everyone',
    description:
      'At Westrand Private School, we believe every learner deserves the opportunity to succeed. Admissions are open to students who meet our academic requirements and share our commitment to growth and learning. With a supportive environment and dedicated teachers, we help each learner reach their full potential.',
    color: 'bg-red-100 text-red-700'
  },
  {
    icon: ShieldCheck,
    title: 'A Safe, Supportive Environment',
    description:
      'Our school provides a safe and inclusive environment where every learner is treated with respect. We maintain strong anti-bullying measures, promote positive behaviour, and ensure secure communication between staff, students, and families. With clear policies and dedicated support systems in place, we prioritise the wellbeing and protection of all our learners.',
    color: 'bg-blue-100 text-blue-800'
  }
]

export default function Admissions() {
  return (
    <main className="bg-white text-slate-700">

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#092B45] py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#092B45] via-[#092B45]/95 to-[#1689BE]/60" />

        <div className="relative mx-auto max-w-7xl px-5">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
            Join Our School Community
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Admissions at
            <span className="block text-[#F07832]">
              Westrand Private School
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            Give your child the opportunity to learn, grow and shine.
            We look forward to welcoming your family to our school.
          </p>

          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#D71920] px-7 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Enquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#1689BE]">
              Start Your Journey
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092B45] md:text-4xl">
              Admission Process
            </h2>

            <p className="mt-6 leading-8">
              Choosing the right school is one of the most important
              decisions a parent can make, and we are honoured that
              you are considering Westrand Private School for your
              child. Our admissions process is designed to be simple,
              supportive, and accessible for all families.
            </p>

            <p className="mt-4 leading-8">
              At Westrand Private School, we welcome learners who are
              eager to grow academically, socially, and emotionally
              in a structured and values-based environment. We aim
              to enrol learners who will benefit from our small
              classes, dedicated teachers, and well-rounded
              educational approach.
            </p>

            <div className="mt-8 rounded-xl border-l-4 border-[#1689BE] bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <HeartHandshake className="text-[#1689BE]" size={27} />
                <h3 className="text-xl font-bold text-[#092B45]">
                  Our Commitment
                </h3>
              </div>

              <p className="mt-4 leading-8">
                Every application is reviewed fairly and carefully.
                While placement is subject to availability, we strive
                to ensure that each learner is matched to a grade
                level where they can succeed and receive the
                individual attention they deserve.
              </p>
            </div>
          </div>

          {/* REQUIRED DOCUMENTS */}
          <div className="rounded-2xl bg-[#092B45] p-7 text-white shadow-xl md:p-9">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-3">
                <ClipboardList size={27} />
              </div>

              <h3 className="text-2xl font-bold">
                What You Will Need
              </h3>
            </div>

            <p className="mt-4 leading-7 text-white/75">
              To process your application efficiently, the
              following documents are required:
            </p>

            <ul className="mt-7 space-y-5">
              {requiredDocuments.map((document) => (
                <li key={document} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-[#F07832]"
                  />
                  <span className="leading-6">{document}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-white/20 pt-6">
              <p className="flex items-center gap-2 font-bold text-[#F07832]">
                <Clock size={19} />
                Limited spaces available
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Limited spaces are available in each grade.
                Early application is strongly advised.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ADMISSIONS OPEN CTA */}
      <section className="bg-[#D71920] px-5 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-white/80">
              Admission in Progress
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Admissions Now Open for 2027
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-white/90">
              Secure your child’s place at Westrand Private School
              today.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-7 py-4 font-bold text-[#092B45] transition hover:bg-slate-100"
          >
            Enquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SCHOOL BENEFITS */}
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">

          {[
            { icon: Users, text: 'Small Classes' },
            { icon: HeartHandshake, text: 'Values-Based Education' },
            { icon: Wallet, text: 'Affordable Private School Fees' }
          ].map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.text}
                className="flex items-center justify-center gap-3 rounded-xl bg-slate-50 p-6 text-center"
              >
                <Icon className="shrink-0 text-[#1689BE]" size={25} />
                <span className="font-bold text-[#092B45]">
                  {item.text}
                </span>
              </div>
            )
          })}

        </div>
      </section>

      {/* FEES STRUCTURE */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#1689BE]">
              Plan Ahead
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092B45] md:text-4xl">
              Fees Structure
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Our school fees are structured according to the
              learner’s educational phase.
            </p>
          </div>

          {/* REGISTRATION */}
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-500">
                Registration – New Learners
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[#092B45]">
                R1 000
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-500">
                Registration – Returning Learners
              </p>
              <p className="mt-2 text-3xl font-extrabold text-[#092B45]">
                R800
              </p>
            </div>
          </div>

          {/* PHASE FEES */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {fees.map((fee, index) => (
              <article
                key={fee.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div
                  className={`p-6 text-white ${
                    index === 0
                      ? 'bg-[#092B45]'
                      : index === 1
                      ? 'bg-[#1689BE]'
                      : 'bg-[#D71920]'
                  }`}
                >
                  <GraduationCap size={30} />
                  <h3 className="mt-4 text-xl font-bold">
                    {fee.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    {fee.grades}
                  </p>
                </div>

                <div className="space-y-5 p-6">
                  <div>
                    <p className="text-sm text-slate-500">
                      Annual Fee
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-[#092B45]">
                      {fee.annual}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <p className="text-sm text-slate-500">
                      Monthly Fee
                    </p>
                    <p className="mt-1 text-xl font-bold text-[#1689BE]">
                      {fee.monthly}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ADDITIONAL FEES */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-[#092B45]">
              Additional Services and Fees
            </h3>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
              {additionalFees.map((item, index) => (
                <div
                  key={item.service}
                  className={`flex flex-col justify-between gap-2 px-6 py-5 sm:flex-row sm:items-center ${
                    index !== additionalFees.length - 1
                      ? 'border-b border-slate-100'
                      : ''
                  }`}
                >
                  <span className="font-medium text-slate-700">
                    {item.service}
                  </span>

                  <span className="font-bold text-[#092B45]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TERMS */}
          <div className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6">
            <div className="flex items-center gap-3">
              <FileText className="text-orange-700" size={25} />
              <h3 className="text-lg font-bold text-[#092B45]">
                Terms and Conditions
              </h3>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              School fees are payable in eleven (11) equal monthly
              instalments, due in advance on the 1st of each month
              from January to November.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#1689BE]">
              The Westrand Experience
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092B45] md:text-4xl">
              What to Expect at Westrand Private School
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              We are committed to creating an environment where
              every learner feels supported, encouraged and
              inspired to achieve.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {expectations.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row"
                >
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#092B45]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#092B45] px-5 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <Sparkles className="mx-auto text-[#F07832]" size={35} />

          <h2 className="mt-5 text-3xl font-extrabold text-white md:text-4xl">
            Give Your Child a Bright Future
          </h2>

          <p className="mt-4 leading-7 text-white/80">
            We would love to help you take the next step in your
            child’s educational journey.
          </p>

          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#D71920] px-7 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Contact Our School <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  )
}

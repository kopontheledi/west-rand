
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Brain,
  Lightbulb,
  MessageCircle,
  Palette,
  Laptop,
  FlaskConical,
  GraduationCap
} from 'lucide-react'

const curriculumImages = [
  {
    image: '/images/school-2.jpeg',
    alt: 'Learners participating in classroom learning'
  },
  {
    image: '/images/bg-image-about-us.jpeg',
    alt: 'Learners developing their academic skills'
  },
  {
    image: '/images/curriculum-2.jpeg',
    alt: 'Learners taking part in school activities'
  },
  {
    image: '/images/curriculum-1.jpeg',
    alt: 'Learners enjoying educational activities'
  },
  {
    image: '/images/school-6.jpeg',
    alt: 'Learners collaborating and learning together'
  },
  {
    image: '/images/school-7.jpeg',
    alt: 'Learning and development at Westrand Private School'
  }
]

const learningAreas = [
  {
    icon: Brain,
    title: 'Critical Thinking',
    description:
      'Encouraging learners to question, analyse information and develop independent thinking skills.',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving',
    description:
      'Developing the confidence to approach challenges, explore solutions and apply knowledge.',
    color: 'bg-orange-100 text-orange-700'
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description:
      'Building effective speaking, listening, reading and writing skills.',
    color: 'bg-red-100 text-red-700'
  },
  {
    icon: Palette,
    title: 'Creativity',
    description:
      'Giving learners opportunities to express their ideas, explore talents and think creatively.',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    icon: Laptop,
    title: 'Digital Literacy',
    description:
      'Introducing learners to digital skills and the knowledge needed in an increasingly connected world.',
    color: 'bg-sky-100 text-sky-700'
  },
  {
    icon: FlaskConical,
    title: 'Practical Learning',
    description:
      'Connecting classroom knowledge to everyday life through hands-on activities and collaborative projects.',
    color: 'bg-green-100 text-green-700'
  }
]

export default function Curriculum() {
  return (
    <main className="bg-white text-slate-700">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#092B45] py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#092B45] via-[#092B45]/95 to-[#1689BE]/60" />

        <div className="relative mx-auto max-w-7xl px-5">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
            Learning Without Limits
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Our
            <span className="block text-[#F07832]">
              Curriculum
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            Inspiring curiosity, developing creativity and
            preparing learners for a world full of possibilities.
          </p>

          <Link
            to="/admissions"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#D71920] px-7 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Explore Admissions <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CURRICULUM INTRODUCTION */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#1689BE]">
              Education That Inspires
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#092B45] md:text-4xl">
              Learning Goes
              <span className="block text-[#D71920]">
                Beyond Textbooks.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              At our school, learning goes beyond textbooks. Our
              curriculum is designed to inspire curiosity, ignite
              creativity, and develop skills that matter in the real
              world. Students engage in a balance of academic rigor
              and practical experiences, exploring subjects in depth
              while connecting what they learn to everyday life.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We emphasize critical thinking, problem-solving, and
              effective communication, while nurturing each learner’s
              unique talents. From collaborative projects and
              hands-on experiments to artistic expression and
              digital literacy, our approach ensures that every
              student grows confidently, prepares for future
              challenges, and discovers a lifelong love of learning.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-xl bg-slate-50 p-5">
              <div className="rounded-xl bg-[#092B45] p-3 text-white">
                <GraduationCap size={30} />
              </div>

              <div>
                <h3 className="font-bold text-[#092B45]">
                  Achieving Excellence Together
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Supporting every learner's potential.
                </p>
              </div>
            </div>
          </div>

          {/* FEATURE IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={curriculumImages[0].image}
                alt={curriculumImages[0].alt}
                className="h-[400px] w-full object-cover sm:h-[450px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 rounded-xl bg-[#D71920] p-5 text-white shadow-lg sm:-left-6">
              <BookOpen size={30} />
              <p className="mt-2 font-bold">
                Discover. Learn. Grow.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#1689BE]">
              Our Approach
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092B45] md:text-4xl">
              Skills for a Bright Future
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              We nurture important skills that help learners
              become confident, capable and independent thinkers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${area.color}`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#092B45]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              )
            })}
          </div>

        </div>
      </section>


      {/* CURRICULUM IMAGE GALLERY */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#1689BE]">
              Inside Our School
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#092B45] md:text-4xl">
              Learning in Action
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              A glimpse into the learning experiences and
              activities at Westrand Private School.
            </p>
          </div>

          {/* TWO IMAGES PER ROW */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6">
            {curriculumImages.map((item) => (
              <div
                key={item.image}
                className="overflow-hidden rounded-xl bg-slate-200"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#092B45] px-5 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <GraduationCap
            size={38}
            className="mx-auto text-[#F07832]"
          />

          <h2 className="mt-5 text-3xl font-extrabold text-white md:text-4xl">
            Be Part of Our Learning Community
          </h2>

          <p className="mt-4 leading-7 text-white/80">
            Give your child an opportunity to discover their
            potential and build a foundation for lifelong learning.
          </p>

          <Link
            to="/admissions"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#D71920] px-7 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Enquire About Admissions <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  )
}


import {
  Trophy,
  Code,
  Palette,
  MessageSquare,
  Medal,
  Volleyball,
  Mic,
  Goal,
  BookOpen,
  Waves,
  Globe,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const activities = [
  {
    title: 'Chess',
    description:
      'Develop strategic thinking, concentration and problem-solving skills.',
    icon: Trophy,
  },
  {
    title: 'Coding and Robotics',
    description:
      'Explore technology, creativity and problem-solving through coding and robotics.',
    icon: Code,
  },
  {
    title: 'Creative Arts',
    description:
      'Discover creativity and express ideas through artistic activities.',
    icon: Palette,
  },
  {
    title: 'Debate',
    description:
      'Build critical thinking, confidence and the ability to express ideas.',
    icon: MessageSquare,
  },
  {
    title: 'Karate',
    description:
      'Develop discipline, focus, respect and self-confidence.',
    icon: Medal,
  },
  {
    title: 'Netball',
    description:
      'Encourage teamwork, coordination and sporting confidence.',
    icon: Volleyball,
  },
  {
    title: 'Public Speaking',
    description:
      'Build communication skills and confidence when speaking in front of others.',
    icon: Mic,
  },
  {
    title: 'Soccer',
    description:
      'Develop teamwork, coordination and a love for sport.',
    icon: Goal,
  },
  {
    title: 'Spelling Bees',
    description:
      'Strengthen vocabulary, spelling and language skills.',
    icon: BookOpen,
  },
  {
    title: 'Swimming',
    description:
      'Encourage physical development and confidence in the water.',
    icon: Waves,
  },
  {
    title: 'Cultural Tours',
    description:
      'Explore different places, experiences and opportunities to learn beyond the classroom.',
    icon: Globe,
  },
]

const photos = [
  {
    src: '/images/school-5.jpeg',
    alt: 'Westrand Private School learners participating in an activity',
  },
  {
    src: '/images/activity2.jpg',
    alt: 'Westrand Private School extracurricular activities',
  },
]

export default function ExtracurricularActivities() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#092B45] px-5 py-24 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F07832]">
          Beyond the Classroom
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Extracurricular Activities
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          Discover your interests, develop your talents and find new ways to shine.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#D71920]">
              Explore. Create. Achieve.
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#092B45] md:text-4xl">
              Learning Beyond the Classroom
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              At Westrand Private School, learning is not limited to textbooks
              or desks. It’s woven into every experience our learners encounter.
              We believe in shaping well rounded individuals, and that means
              creating spaces where curiosity, creativity, leadership, and
              passion can grow.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our extracurricular programme is designed to spark discovery
              and give every learner the chance to find what excites them.
              Whether they’re stepping onto a stage, putting ideas into action,
              building confidence, or working as part of a team, our students
              thrive because they’re encouraged to explore, experiment and shine.
            </p>
          </div>

          {/* SCHOOL PHOTOS */}
          <div className="grid grid-cols-2 items-center gap-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D71920]">
              Find Your Passion
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#092B45] md:text-4xl">
              Explore Our Activities
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From sports and technology to creative expression and
              communication, there is an opportunity for every learner
              to discover something they enjoy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {activities.map((activity) => {
              const Icon = activity.icon

              return (
                <div
                  key={activity.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#092B45] text-white transition group-hover:bg-[#D71920]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#092B45]">
                    {activity.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {activity.description}
                  </p>
                </div>
              )
            })}

          </div>
        </div>
      </section>

     
{/* MORE THAN JUST ACTIVITIES */}
<section className="px-5 py-20">
  <div className="mx-auto max-w-7xl">

    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-[#092B45] md:text-4xl">
        More Than Just Activities
      </h2>

      <p className="mt-6 leading-8 text-slate-600">
        Whether participating in sports, joining a club, taking part in
        competitions or exploring new experiences, learners are given
        opportunities to develop their abilities and build lasting confidence.
      </p>
    </div>

    {/* ACTIVITY IMAGE OVERLAYS */}
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

      {[
        'Sports',
        'Karate',
        'Chess Clubs',
        'Spelling Bees',
        'Cultural Tours',
      ].map((item, index) => (
        <div
          key={item}
          className="group relative h-64 overflow-hidden rounded-2xl bg-[#092B45] md:h-72"
        >
          <img
            src={photos[index % photos.length].src}
            alt={item}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/60" />

          {/* ACTIVITY TITLE */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <h3 className="text-center text-xl font-bold text-white md:text-2xl">
              {item}
            </h3>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* CONTACT CTA */}
      <section className="bg-[#092B45] px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Let Your Child Discover Their Potential
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-200">
          At Westrand Private School, every learner deserves the opportunity
          to explore, participate and shine.
        </p>

        <Link
          to="/contact-us"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#D71920] px-7 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Enquire Now
          <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  )
}

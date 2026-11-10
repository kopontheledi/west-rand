
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Home } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-slate-50 px-5 py-16">
      <div className="w-full max-w-2xl rounded-3xl bg-white px-6 py-12 text-center shadow-lg md:px-12">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
          <CheckCircle size={46} className="text-green-600" />
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#D71920]">
          Westrand Private School
        </p>

        <h1 className="mt-4 text-3xl font-bold text-[#092B45] md:text-4xl">
          Thank You for Contacting Us!
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-slate-600">
          Your enquiry has been successfully submitted.
          We appreciate your interest in Westrand Private School.
          Our team will review your message and get back to you as soon as possible.
        </p>

        <p className="mt-5 font-semibold text-[#092B45]">
          Because You Deserve To Shine.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#D71920] px-7 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            to="/about-us"
            className="flex items-center justify-center gap-2 rounded-lg border border-[#092B45] px-7 py-3 font-semibold text-[#092B45] transition hover:bg-[#092B45] hover:text-white"
          >
            Discover Our School
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </div>
  )
}

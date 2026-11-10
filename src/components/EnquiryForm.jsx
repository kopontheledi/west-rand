
import { Send } from 'lucide-react'

export default function EnquiryForm() {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-3xl">

                <div className="mb-8 text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#D71920]">
                        Get in Touch
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-[#092B45] md:text-4xl">
                        Send Us an Enquiry
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Have a question about admissions, school fees or our programmes?
                        Complete the form below and our team will get back to you.
                    </p>
                </div>

                <form
                    //   action="https://formsubmit.co/info@westrandprivateschool.co.za"
                    action="https://formsubmit.co/kopontheledi@gmail.com"
                    method="POST"
                    className="space-y-6 rounded-2xl bg-white p-6 shadow-sm md:p-10"
                >
                    <input
                        type="hidden"
                        name="_subject"
                        value="New Website Enquiry - Westrand Private School"
                    />

                    <input
                        type="hidden"
                        name="_template"
                        value="table"
                    />

                    <input
                        type="hidden"
                        name="_next"
                        value="https://west-rand-private-school.vercel.app/thank-you"
                    />

                    <input
                        type="hidden"
                        name="_captcha"
                        value="true"
                    />

                    {/* Spam protection */}
                    <input
                        type="text"
                        name="_honey"
                        className="hidden"
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#092B45]">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="Full Name"
                                required
                                placeholder="Enter your full name"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1689BE] focus:ring-2 focus:ring-[#1689BE]/20"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#092B45]">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="Email"
                                required
                                placeholder="Enter your email address"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1689BE] focus:ring-2 focus:ring-[#1689BE]/20"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#092B45]">
                                Contact Number *
                            </label>
                            <input
                                type="tel"
                                name="Contact Number"
                                required
                                placeholder="Enter your contact number"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1689BE] focus:ring-2 focus:ring-[#1689BE]/20"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#092B45]">
                                Enquiry Subject *
                            </label>
                            <select
                                name="Enquiry Subject"
                                required
                                defaultValue=""
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#1689BE] focus:ring-2 focus:ring-[#1689BE]/20"
                            >
                                <option value="" disabled>Select a subject</option>
                                <option>Admissions</option>
                                <option>School Fees</option>
                                <option>Curriculum</option>
                                <option>Extracurricular Activities</option>
                                <option>General Enquiry</option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#092B45]">
                            Your Message *
                        </label>
                        <textarea
                            name="Message"
                            required
                            rows="5"
                            placeholder="How can we assist you?"
                            className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1689BE] focus:ring-2 focus:ring-[#1689BE]/20"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#D71920] px-6 py-4 font-semibold text-white transition hover:bg-red-700"
                    >
                        Send Enquiry
                        <Send size={18} />
                    </button>

                    <p className="text-center text-xs text-slate-500">
                        Your information will be used to respond to your enquiry.
                    </p>

                </form>
            </div>
        </section>
    )
}

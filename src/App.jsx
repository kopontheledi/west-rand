import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Admissions from './pages/Admissions'
import Curriculum from './pages/Curriculum'
import Extracurricular from './pages/Extracurricular'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/extracurricular-activities" element={<Extracurricular />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
import PageBanner from '../components/PageBanner'

const photos = [
  ['/images/bg-image-about-us.jpeg', 'Learning together'],
  ['/images/activity2.jpg', 'Discovering new ideas'],
  ['/images/activity3.jpg', 'Teamwork and sport'],
  ['/images/school-2.jpeg', 'Reading and learning'],
  ['/images/school-7.jpeg', 'School playing'],
  ['/images/school-6.jpeg', 'School life'],
  ['/images/curriculum-1.jpeg', 'School curriculum'],
  ['/images/curriculum-2.jpeg', 'Community moments']
]
export default function Gallery() {
  return <>
    <PageBanner title="Gallery" description="A glimpse of learning, friendship and the experiences that make up school life." />
    <section className="section-pad"><div className="container"><div className="section-heading"><span className="eyebrow">OUR SCHOOL IN PICTURES</span><h2>Moments that matter.</h2><p>Replace these sample photographs with approved Westrand Private School photographs.</p></div>
      <div className="gallery-grid">{photos.map(([src, label], i) => <figure key={i} className={`gallery-item gallery-${i + 1}`}><img src={src} alt={label} loading="lazy" /><figcaption>{label}</figcaption></figure>)}</div>
    </div></section>
  </>
}
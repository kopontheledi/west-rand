import PageBanner from '../components/PageBanner'

const photos = [
  ['https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85', 'Learning together'],
  ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85', 'Discovering new ideas'],
  ['https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85', 'Teamwork and sport'],
  ['https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85', 'Reading and learning'],
  ['https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85', 'Community moments'],
  ['https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85', 'School life']
]
export default function Gallery() {
  return <>
    <PageBanner title="Gallery" description="A glimpse of learning, friendship and the experiences that make up school life." />
    <section className="section-pad"><div className="container"><div className="section-heading"><span className="eyebrow">OUR SCHOOL IN PICTURES</span><h2>Moments that matter.</h2><p>Replace these sample photographs with approved Westrand Private School photographs.</p></div>
      <div className="gallery-grid">{photos.map(([src, label], i) => <figure key={i} className={`gallery-item gallery-${i + 1}`}><img src={src} alt={label} loading="lazy" /><figcaption>{label}</figcaption></figure>)}</div>
      <p className="editor-note">Please obtain parent or guardian permission before publishing identifiable photographs of learners.</p>
    </div></section>
  </>
}
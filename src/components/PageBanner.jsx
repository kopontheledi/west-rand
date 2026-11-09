export default function PageBanner({ title, description }) {
  return <section className="page-banner"><div className="container"><span className="eyebrow">WESTRAND PRIVATE SCHOOL</span><h1>{title}</h1>{description && <p>{description}</p>}</div></section>
}
import Link from "next/link";

export const metadata = { title: "About Galade Technologies" };

export default function About() {
  return (
    <main className="simple-page">
      <nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><div className="nav-links"><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/solar-calculator">Solar calculator</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><Link className="nav-cta" href="/contact">Request an estimate <span>↗</span></Link></nav>
      <section className="simple-hero shell"><p className="eyebrow">Our installation story</p><h1>Powering a<br /><em>better everyday.</em></h1><p>Galade Technologies exists to make solar installation feel clear, personal, and possible for more people. We are a team of installers, engineers, and problem-solvers who believe clean energy should work beautifully.</p></section>
      <section className="about-band"><div className="shell about-grid"><img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85" alt="Wind turbines and clean energy landscape" /><div><p className="eyebrow">What guides our work</p><h2>Big energy.<br /><em>Human scale.</em></h2><p>We started Galade in 2012 after seeing too many people overwhelmed by an installation industry that should be empowering them. Today, we make every recommendation with the same question: will this make life better?</p><Link className="button button-dark" href="/contact">Book an installation <span>↗</span></Link></div></div></section>
      <footer className="footer shell"><Link className="brand" href="/"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><p>© 2025 Galade Technologies</p></footer>
    </main>
  );
}

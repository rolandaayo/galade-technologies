import Link from "next/link";

export const metadata = { title: "Contact Galade Technologies" };

export default function Contact() {
  return (
    <main className="simple-page">
      <nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><div className="nav-links"><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/solar-calculator">Solar calculator</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><Link className="nav-cta" href="/contact">Request an estimate <span>↗</span></Link></nav>
      <section className="contact-layout shell"><div><p className="eyebrow">Let’s plan your installation</p><h1>Make your<br /><em>move.</em></h1><p className="contact-intro">Tell us a little about your space and your installation goals. We’ll get back to you within one business day.</p><div className="contact-details"><p><strong>Call</strong><br /><a href="tel:+15125550144">+1 512 555 0144</a></p><p><strong>Email</strong><br /><a href="mailto:hello@galade.tech">hello@galade.tech</a></p><p><strong>Studio</strong><br />1108 East 6th Street<br />Austin, TX 78702</p></div></div><form className="contact-form"><label>Name<input type="text" name="name" placeholder="Your name" required /></label><label>Email<input type="email" name="email" placeholder="you@email.com" required /></label><label>What can we install?<select name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Home solar installation</option><option>Business solar installation</option><option>Battery storage installation</option><option>Site assessment</option></select></label><label>Message<textarea name="message" rows="5" placeholder="Tell us about your installation project" /></label><button className="button button-dark" type="submit">Request an estimate <span>↗</span></button></form></section>
      <footer className="footer shell"><Link className="brand" href="/"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><p>© 2025 Galade Technologies</p></footer>
    </main>
  );
}

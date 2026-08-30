"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="nav shell">
        <Link className="brand" href="/" aria-label="Galade Technologies home"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link>
        <div className="nav-links"><a href="/products">Products</a><a href="#solutions">Our process</a><a href="/solar-calculator">Solar calculator</a><a href="/about">About</a><a href="/contact">Contact</a></div>
        <a className="nav-cta" href="/contact">Request an estimate <span aria-hidden="true">↗</span></a>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-links"><a href="/products" onClick={() => setMenuOpen(false)}>Products <span>↗</span></a><a href="#solutions" onClick={() => setMenuOpen(false)}>Our process <span>↘</span></a><a href="/solar-calculator">Solar calculator <span>↗</span></a><a href="/about">About <span>↗</span></a><a href="/contact">Contact <span>↗</span></a></div>
        <p>Professional solar installation, beautifully simple.</p>
      </div>

      <section className="hero shell">
        <div className="hero-copy"><p className="eyebrow"><span className="sun-dot" /> Clean power, beautifully installed</p><h1>Energy for<br /><em>what’s next.</em></h1><p className="hero-text">Expert solar installation designed for real life. Make your home or business more independent, resilient, and ready for a brighter tomorrow.</p><div className="hero-actions"><a className="button button-dark explore-button" href="#shop">Explore installation <span>↘</span></a><a className="text-link" href="/contact">Talk to an installation advisor <span>→</span></a></div></div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85" alt="Solar panels on a modern home at sunset" /><div className="image-note"><span className="live-dot" /> Powering possibility since 2012</div></div>
      </section>

      <section className="ticker"><div className="ticker-inner"><span>Solar installation, made human</span><i>✳</i><span>Smarter energy, everyday</span><i>✳</i><span>Built for your future</span><i>✳</i><span>Solar installation, made human</span></div></section>

      <section className="intro shell"><div><p className="eyebrow">Why Galade</p><h2>Good energy<br /><em>starts here.</em></h2></div><div className="intro-detail"><p>We believe solar installation should feel less like a construction project and more like a smart decision. Our team makes the whole journey clear, considered, and completely yours.</p><a className="circle-arrow" href="/about" aria-label="Learn about Galade">↗</a></div></section>

      <section id="shop" className="products shell"><div className="section-heading"><div><p className="eyebrow">Installation services</p><h2>Power, your way.</h2></div><a className="text-link" href="/contact">Plan your installation <span>→</span></a></div><div className="product-grid"><article className="product-card product-sun"><div className="product-image"><img src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=85" alt="Residential solar panel installation" /><span className="product-tag">Most popular</span></div><div className="product-info"><div><h3>Home installation</h3><p>Simple, beautiful energy independence.</p></div><strong>Free estimate</strong></div><a className="product-link" href="/contact">Plan my installation <span>↗</span></a></article><article className="product-card product-green"><div className="product-image"><img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85" alt="Commercial solar panel installation" /><span className="product-tag">For business</span></div><div className="product-info"><div><h3>Business installation</h3><p>More control for your bottom line.</p></div><strong>Free estimate</strong></div><a className="product-link" href="/contact">Power my business <span>↗</span></a></article></div></section>

      <section id="solutions" className="split-feature"><div className="split-photo"><img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1300&q=85" alt="Solar panel installation in a green landscape" /></div><div className="split-copy"><p className="eyebrow">The Galade way</p><h2>More sun.<br /><em>Less fuss.</em></h2><p>From your first question to your first sunny bill, our local installation experts are with you. We pair the best hardware with careful workmanship and one very human experience.</p><div className="stats"><div><strong>25 yr</strong><span>Panel warranty</span></div><div><strong>4.9/5</strong><span>Customer rating</span></div></div><a className="button button-light" href="/about">Meet the team <span>↗</span></a></div></section>

      <section className="quote shell"><p className="eyebrow">Good news travels</p><blockquote>“Galade made the whole installation process feel easy. Now we’re making our own power, and our electric bill is finally something we look forward to.”</blockquote><p className="quote-byline">Maya R. <span>— homeowner, Austin TX</span></p></section>

      <section className="final-cta"><div className="shell final-inner"><p className="eyebrow">Your next bright idea</p><h2>Let’s make it<br /><em>real.</em></h2><a className="button button-dark" href="/contact">Start a conversation <span>↗</span></a><p className="final-note">No pressure. Just good energy.</p></div></section>

      <footer className="footer shell"><Link className="brand" href="/"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><div className="footer-links"><a href="/about">About</a><a href="/contact">Contact</a><a href="#shop">Installation</a><a href="#solutions">Our process</a></div><p>© 2025 Galade Technologies</p></footer>
    </main>
  );
}

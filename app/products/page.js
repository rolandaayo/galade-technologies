"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const products = [
  { id: "panels", name: "Sunline 450W Panel", category: "Panels", price: 285, description: "High-efficiency monocrystalline panel for dependable daily output.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85", tag: "Best seller" },
  { id: "inverter", name: "BrightGrid Inverter", category: "Inverters", price: 1240, description: "Quiet, smart conversion for a more resilient home system.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85", tag: "Smart home" },
  { id: "battery", name: "Reserve 10 Battery", category: "Batteries", price: 3890, description: "Store your clean energy for evenings, outages, and peace of mind.", image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=900&q=85", tag: "New" },
  { id: "mounting", name: "Roofline Mount Kit", category: "Accessories", price: 460, description: "A complete, weather-ready mounting kit for pitched roofs.", image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=900&q=85", tag: "Installer pick" },
];

const categories = ["All", "Panels", "Inverters", "Batteries", "Accessories"];

export default function Products() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState({});
  const visibleProducts = products.filter((product) => category === "All" || product.category === category);
  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  const cartTotal = useMemo(() => products.reduce((total, product) => total + product.price * (cart[product.id] || 0), 0), [cart]);

  function addProduct(id) {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
  }

  return (
    <main className="products-page">
      <nav className="nav shell"><Link className="brand" href="/" aria-label="Galade Technologies home"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><div className="nav-links"><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/solar-calculator">Solar calculator</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><Link className="nav-cta" href="/contact">Request an estimate <span>↗</span></Link></nav>

      <section className="products-hero shell"><div><p className="eyebrow">The Galade shop</p><h1>Good gear for<br /><em>good energy.</em></h1></div></section>
      <div className="product-categories shell">{categories.map((item) => <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}<span className="cart-count">{cartCount} {cartCount === 1 ? "item" : "items"}</span></div>

      <section className="catalog shell"><div className="catalog-grid">{visibleProducts.map((product) => <article className="store-product" key={product.id}><div className="store-product-image"><img src={product.image} alt={product.name} /><span>{product.tag}</span></div><div className="store-product-info"><p className="product-category">{product.category}</p><h2>{product.name}</h2><p>{product.description}</p><div className="store-product-bottom"><strong>${product.price.toLocaleString()}</strong><button className="add-button" type="button" onClick={() => addProduct(product.id)} aria-label={`Add ${product.name} to order`}>Add <span>+</span></button></div></div></article>)}</div><aside className="cart-summary"><p className="eyebrow">Your order</p><h2>{cartCount ? `${cartCount} ${cartCount === 1 ? "item" : "items"}` : "Your cart is empty"}</h2><div className="cart-lines">{products.filter((product) => cart[product.id]).map((product) => <div key={product.id}><span>{product.name} × {cart[product.id]}</span><strong>${(product.price * cart[product.id]).toLocaleString()}</strong></div>)}</div><div className="cart-total"><span>Total</span><strong>${cartTotal.toLocaleString()}</strong></div><Link className={`button button-dark ${!cartCount ? "is-disabled" : ""}`} href="/contact">Continue to checkout <span>↗</span></Link><p className="cart-note">Final system sizing and installation are confirmed by a Galade advisor.</p></aside></section>

      <section className="shop-callout"><div className="shell"><p className="eyebrow">Need a hand?</p><h2>Not sure where<br /><em>to start?</em></h2><Link className="button button-light" href="/solar-calculator">Use the solar calculator <span>↗</span></Link></div></section>
      <footer className="footer shell"><Link className="brand" href="/"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><p>© 2025 Galade Technologies</p></footer>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const appliances = [
  { id: "ac", name: "Air conditioner", watts: 1200, hours: 4, icon: "❄" },
  { id: "fridge", name: "Refrigerator", watts: 180, hours: 10, icon: "▣" },
  { id: "fans", name: "Ceiling fan", watts: 75, hours: 8, icon: "✣" },
  { id: "freezer", name: "Deep freezer", watts: 500, hours: 10, icon: "▦" },
  { id: "lights", name: "LED lights", watts: 60, hours: 6, icon: "✦" },
  { id: "tv", name: "Television", watts: 120, hours: 5, icon: "▤" },
  { id: "laptop", name: "Laptop / desktop", watts: 100, hours: 6, icon: "▱" },
  { id: "pump", name: "Water pump", watts: 750, hours: 1, icon: "≈" },
  { id: "washing", name: "Washing machine", watts: 500, hours: 1, icon: "◉" },
];

export default function SolarCalculator() {
  const [selected, setSelected] = useState({ fridge: true, tv: true, fans: true, lights: true });
  const [usage, setUsage] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  function updateUsage(id, key, value) {
    setUsage((current) => ({ ...current, [id]: { ...current[id], [key]: value } }));
  }

  const selectedAppliances = appliances.filter((appliance) => selected[appliance.id]);
  const peakWatts = selectedAppliances.reduce((total, appliance) => {
    const quantity = Number(usage[appliance.id]?.quantity || 1);
    return total + appliance.watts * quantity;
  }, 0);
  const dailyWh = selectedAppliances.reduce((total, appliance) => {
    const quantity = Number(usage[appliance.id]?.quantity || 1);
    const hours = Number(usage[appliance.id]?.hours || appliance.hours);
    return total + appliance.watts * quantity * hours;
  }, 0);
  const recommendedKw = Math.max(1, Math.ceil(Math.max(peakWatts / 1000 * 1.25, dailyWh / 4000 * 1.25) * 2) / 2);
  const batteryKwh = Math.max(2, Math.ceil(dailyWh * 0.5 / 1000));

  return (
    <main className="simple-page calculator-page">
      <nav className="nav shell"><Link className="brand" href="/" aria-label="Galade Technologies home"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><div className="nav-links"><Link href="/">Home</Link><Link href="/solar-calculator">Solar calculator</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><Link className="nav-cta" href="/contact">Request an estimate <span>↗</span></Link><button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button></nav>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}><div className="mobile-menu-links"><Link href="/" onClick={() => setMenuOpen(false)}>Home <span>↗</span></Link><Link href="/solar-calculator" onClick={() => setMenuOpen(false)}>Solar calculator <span>↗</span></Link><Link href="/about">About <span>↗</span></Link><Link href="/contact">Contact <span>↗</span></Link></div><p>Professional solar installation, beautifully simple.</p></div>

      <section className="calculator-intro"><div className="calculator-intro-inner"><h1>Solar Calculator</h1><p>Skip the guesswork, we will help you find<br className="desktop-break" /> the perfect Galade solar installation for you.</p></div></section>

      <div className="calculator-tabs shell"><span className="calculator-tab active">Home</span></div>

      <section className="calculator-layout shell"><div className="calculator-panel"><p className="eyebrow">01 / Your appliances</p><h2>Select<br /><em>appliances</em></h2><p className="calculator-help">Choose the appliances you want your solar installation to power.</p><div className="appliance-list">{appliances.map((appliance) => { const isSelected = Boolean(selected[appliance.id]); return <label className={`appliance-card ${isSelected ? "is-selected" : ""}`} key={appliance.id}><input type="checkbox" checked={isSelected} onChange={() => setSelected((current) => ({ ...current, [appliance.id]: !isSelected }))} aria-label={`Include ${appliance.name}`} /><span className="appliance-icon" aria-hidden="true">{appliance.icon}</span><strong>{appliance.name}</strong><small>{appliance.watts}W</small>{isSelected && <span className="card-controls"><span><em>Qty</em><input type="number" min="1" max="20" value={usage[appliance.id]?.quantity || 1} onChange={(event) => updateUsage(appliance.id, "quantity", event.target.value)} aria-label={`${appliance.name} quantity`} /></span><span><em>Hours</em><input type="number" min="0.5" max="24" step="0.5" value={usage[appliance.id]?.hours || appliance.hours} onChange={(event) => updateUsage(appliance.id, "hours", event.target.value)} aria-label={`${appliance.name} hours per day`} /></span></span>}</label>; })}</div></div>

        <aside className="calculator-result"><p className="eyebrow result-kicker">02 / Your starting point</p><h2>A bright<br /><em>recommendation.</em></h2><p className="result-size">{recommendedKw} kW</p><p className="result-label">Suggested solar installation</p><div className="result-stats"><div><strong>{(dailyWh / 1000).toFixed(1)} kWh</strong><span>Daily energy</span></div><div><strong>{(peakWatts / 1000).toFixed(1)} kW</strong><span>Peak demand</span></div><div><strong>{batteryKwh} kWh</strong><span>Battery option</span></div><div><strong>{selectedAppliances.length}</strong><span>Appliances selected</span></div></div><p className="result-note">This is a planning estimate based on typical appliance usage. Our installation team will confirm the right system after a proper site assessment.</p><Link className="button button-light" href="/contact">Get my installation estimate <span>↗</span></Link></aside></section>

      <footer className="footer shell"><Link className="brand" href="/"><span className="brand-mark">G</span><span>GALADE<br /><small>TECHNOLOGIES</small></span></Link><p>© 2025 Galade Technologies</p></footer>
    </main>
  );
}

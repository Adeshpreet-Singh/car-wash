'use client';
import { useState } from 'react';

const WASHES = [
  { name: 'Express Wash', price: '$10', time: '3 min', features: ['Exterior wash', 'Spot-free rinse', 'Air dry'] },
  { name: 'Deluxe Wash', price: '$18', time: '5 min', features: ['Everything in Express', 'Wheel cleaning', 'Tire shine', 'Carnauba wax'] },
  { name: 'Ultimate Wash', price: '$28', time: '8 min', features: ['Everything in Deluxe', 'Interior vacuum', 'Dashboard wipe', 'Window cleaning', 'Air freshener'], featured: true },
];

const PLANS = [
  { name: 'Basic', price: '$19.99/mo', washes: 'Unlimited Express' },
  { name: 'Premium', price: '$29.99/mo', washes: 'Unlimited Deluxe', popular: true },
  { name: 'Elite', price: '$39.99/mo', washes: 'Unlimited Ultimate' },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#083344] text-cyan-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-black px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-[#083344]/95 backdrop-blur-md border-b border-cyan-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-bold water-shimmer">ShineBox</h1><p className="text-[10px] tracking-[0.2em] text-cyan-600 uppercase">Express Car Wash — Phoenix</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('washes')} className="text-sm text-cyan-400 hover:text-cyan-200 transition-colors">Washes</button>
            <button onClick={() => scrollTo('plans')} className="text-sm text-cyan-400 hover:text-cyan-200 transition-colors">Plans</button>
            <button onClick={() => scrollTo('contact')} className="bg-cyan-500 text-black px-5 py-2.5 text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors">Get Washed</button>
          </div>
        </div>
      </nav>

      <main id="main" role="main">
        <section className="pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4">Eco-Friendly — Free Vacuums — Est. 2017</p>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-6">Spotless.<br />Every <span className="water-shimmer">time.</span></h2>
            <p className="text-xl text-cyan-300 max-w-lg mx-auto mb-10">Express car wash with free vacuums, unlimited plans, and eco-friendly soaps. In and out in 3 minutes.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => scrollTo('plans')} className="bg-cyan-500 text-black px-8 py-4 text-lg font-bold rounded-full hover:bg-cyan-400 transition-colors">Monthly Plans</button>
              <button onClick={() => scrollTo('washes')} className="border-2 border-cyan-500 text-cyan-300 px-8 py-4 text-lg rounded-full hover:bg-cyan-500/10 transition-colors">Single Wash</button>
            </div>
          </div>
        </section>

        <section className="reveal py-8 bg-cyan-900/50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
            <div><div className="text-3xl font-black text-cyan-400">3min</div><div className="text-xs text-cyan-600 uppercase">Avg Wash Time</div></div>
            <div><div className="text-3xl font-black text-cyan-400">50K+</div><div className="text-xs text-cyan-600 uppercase">Cars Washed</div></div>
            <div><div className="text-3xl font-black text-cyan-400">80%</div><div className="text-xs text-cyan-600 uppercase">Water Reclaimed</div></div>
          </div>
        </section>

        <section id="washes" className="reveal py-24" aria-labelledby="washes-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="washes-heading" className="text-4xl font-black uppercase">Wash Packages</h2></div>
            <div className="grid md:grid-cols-3 gap-6">
              {WASHES.map((w, i) => (
                <div key={i} className={`wash-card p-8 ${w.featured ? 'featured' : ''}`}>
                  {w.featured && <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">Most Popular</div>}
                  <h3 className="text-xl font-black uppercase mb-1">{w.name}</h3>
                  <div className="text-4xl font-black text-cyan-400 mb-1">{w.price}</div>
                  <div className="text-cyan-600 text-sm mb-6">{w.time} avg</div>
                  <ul className="space-y-2">
                    {w.features.map((f, j) => (<li key={j} className="text-sm text-cyan-200 flex items-center gap-2"><span className="text-cyan-400">✓</span>{f}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="reveal py-24 bg-cyan-900/30" aria-labelledby="plans-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="plans-heading" className="text-4xl font-black uppercase">Unlimited Plans</h2><p className="text-cyan-400 mt-3">Wash as often as you want. Free vacuums included.</p></div>
            <div className="grid md:grid-cols-3 gap-6">
              {PLANS.map((p, i) => (
                <div key={i} className={`wash-card p-8 text-center ${p.popular ? 'featured' : ''}`}>
                  {p.popular && <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">Best Value</div>}
                  <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                  <div className="text-3xl font-black text-cyan-400 mb-2">{p.price}</div>
                  <p className="text-cyan-300 text-sm mb-6">{p.washes}</p>
                  <button className="w-full bg-cyan-500 text-black py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors">Sign Up</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal py-24" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12"><h2 id="faq-heading" className="text-4xl font-black uppercase">FAQ</h2></div>
            <div className="space-y-4">
              {[
                { q: 'How long does a wash take?', a: 'Express wash takes about 3 minutes. Deluxe is 5 minutes. Ultimate with interior cleaning takes about 8 minutes.' },
                { q: 'What\'s included in unlimited plans?', a: 'Unlimited washes at your plan level, free vacuums, and member-only fast lane access.' },
                { q: 'Is it eco-friendly?', a: 'Yes! We reclaim 80% of our water and use biodegradable, phosphate-free soaps.' },
              ].map((faq, i) => (
                <details key={i} className="group border border-cyan-800 rounded-xl p-6 cursor-pointer hover:border-cyan-500/30 transition-colors">
                  <summary className="font-bold flex justify-between items-center list-none">{faq.q}<span className="text-cyan-400 text-2xl group-open:rotate-45 transition-transform">+</span></summary>
                  <p className="mt-4 text-cyan-300 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="reveal py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-cyan-900/50 border border-cyan-800 rounded-xl p-8"><div className="text-3xl mb-3">📍</div><div className="font-bold">Location</div><p className="text-cyan-400 text-sm">1200 Speedway Blvd<br />Phoenix, AZ 85001</p></div>
            <div className="bg-cyan-900/50 border border-cyan-800 rounded-xl p-8"><div className="text-3xl mb-3">⏰</div><div className="font-bold">Hours</div><p className="text-cyan-400 text-sm">Daily 7 AM – 9 PM<br />365 days a year</p></div>
            <div className="bg-cyan-900/50 border border-cyan-800 rounded-xl p-8"><div className="text-3xl mb-3">📞</div><div className="font-bold">Call Us</div><a href="tel:(555) 012-3456" className="text-cyan-400 hover:underline">(555) 012-3456</a></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-900 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-cyan-600 text-sm">© {new Date().getFullYear()} ShineBox Car Wash. Phoenix, AZ.</div></footer>
    </div>
  );
}

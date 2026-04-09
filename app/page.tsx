'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen bg-cyan-950 text-cyan-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 {{ACCENTBG}} text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      {/* CENTERED HERO */}
      <section className="pt-24 text-center">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-sm text-cyan-400 tracking-widest uppercase mb-4">ShineBox Car Wash</h1>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 whitespace-pre-line uppercase">Spotless.
Every time.</h2>
          <p className="text-xl text-cyan-300 mb-10">Eco-friendly express wash with free vacuums and unlimited plans.</p>
          <button onClick={() => scrollTo('pricing')} className="bg-cyan-400 text-white px-10 py-4 text-lg rounded-full font-bold">Get Wash</button>
        </div>
      </section>
      {/* PRICING TABLES - The main feature */}
      <section id="pricing" className="py-24 bg-cyan-900" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16"><h2 id="pricing-heading" className="text-4xl font-bold">Choose Your Plan</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cyan-900 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2">Express Wash</h3>
              <p className="text-sm text-cyan-300 mb-6">5-minute exterior wash.</p>
              <button className="w-full bg-cyan-400 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-cyan-900 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Deluxe Wash</h3>
              <p className="text-sm text-cyan-300 mb-6">Plus wheels, tire shine, wax.</p>
              <button className="w-full bg-cyan-400 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-cyan-900 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Ultimate Wash</h3>
              <p className="text-sm text-cyan-300 mb-6">Full interior included.</p>
              <button className="w-full bg-cyan-400 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-cyan-900 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">♾️</div>
              <h3 className="text-xl font-bold mb-2">Unlimited Plan</h3>
              <p className="text-sm text-cyan-300 mb-6">$29.99/mo unlimited washes.</p>
              <button className="w-full bg-cyan-400 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-cyan-900 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold mb-2">Fleet Services</h3>
              <p className="text-sm text-cyan-300 mb-6">On-site commercial washing.</p>
              <button className="w-full bg-cyan-400 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-cyan-900 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">Detail Shop</h3>
              <p className="text-sm text-cyan-300 mb-6">Full detailing packages.</p>
              <button className="w-full bg-cyan-400 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES LIST */}
      <section className="py-24" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="features-heading" className="text-4xl font-bold mb-6">Why choose us?</h2>
            <div className="bg-cyan-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center text-2xl font-bold text-cyan-400">DC</div>
              <h3 className="font-bold">Dan Cooper</h3><p className="text-sm text-cyan-400">Ops Manager</p><p className="text-sm text-cyan-300 mt-1">10yr car wash</p></div>
            <div className="bg-cyan-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center text-2xl font-bold text-cyan-400">LP</div>
              <h3 className="font-bold">Lisa Park</h3><p className="text-sm text-cyan-400">Site Manager</p><p className="text-sm text-cyan-300 mt-1">CX pro</p></div>
            <div className="bg-cyan-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center text-2xl font-bold text-cyan-400">MT</div>
              <h3 className="font-bold">Mike Torres</h3><p className="text-sm text-cyan-400">Lead Detailer</p><p className="text-sm text-cyan-300 mt-1">Paint specialist</p></div>
            <div className="bg-cyan-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-400/20 flex items-center justify-center text-2xl font-bold text-cyan-400">AB</div>
              <h3 className="font-bold">Amy Brown</h3><p className="text-sm text-cyan-400">Fleet Coord</p><p className="text-sm text-cyan-300 mt-1">Commercial</p></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-cyan-400">3min</div><div className="text-sm text-cyan-300 mt-1">Avg wash</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-cyan-400">$29</div><div className="text-sm text-cyan-300 mt-1">Unlimited plan</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-cyan-400">50K+</div><div className="text-sm text-cyan-300 mt-1">Cars washed</div></div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-24 bg-cyan-900" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12"><h2 id="faq-heading" className="text-4xl font-bold">Questions?</h2></div>
          <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">How long?<span className="ml-4 text-cyan-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-cyan-300 text-sm leading-relaxed">Express 3min, detail 2-4hrs.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Unlimited plan?<span className="ml-4 text-cyan-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-cyan-300 text-sm leading-relaxed">Washes + free vacuums $29.99/mo.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Eco-friendly?<span className="ml-4 text-cyan-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-cyan-300 text-sm leading-relaxed">80% water reclaim, biodegradable soap.</p></details></div>
        </div>
      </section>
      {/* CTA BANNER */}
      <section className="py-16 bg-cyan-400 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <button onClick={() => scrollTo('contact')} className="bg-white text-black px-8 py-4 rounded-full font-bold">Get Wash</button>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="py-24" aria-labelledby="contact-heading">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 id="contact-heading" className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4 text-cyan-300 mb-8">                  <div><div className="font-bold">Phone</div><a href="tel:(555) 012-3456" class="text-cyan-400">(555) 012-3456</a></div>
                  <div><div className="font-bold">Address</div><p>1200 Speedway Blvd, Phoenix, AZ</p></div>
                  <div><div className="font-bold">Hours</div><p>Daily 7 AM – 9 PM</p></div></div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent" />
            <input type="email" placeholder="Email" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent" />
            <button type="submit" className="w-full bg-cyan-400 text-white py-4 rounded-xl font-bold">Get Wash</button>
          </form>
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-cyan-300">&copy; 2026 ShineBox Car Wash</footer>
    </div>
  );
}

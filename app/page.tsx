'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const packages = [
    { name: 'Express Wash', desc: 'Exterior wash, tire shine, windows', price: '$15', time: '10 min' },
    { name: 'Full Service', desc: 'Interior vacuum, dashboard, exterior wash', price: '$35', time: '25 min' },
    { name: 'Premium Detail', desc: 'Clay bar, polish, wax, interior deep clean', price: '$149', time: '3 hrs' },
    { name: 'Ceramic Coating', desc: 'Professional ceramic protection, paint correction', price: '$599', time: '1 day' },
  ];

  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl" aria-hidden="true">\uD83D\uDE97</div>
              <div><h1 className="text-lg font-bold text-blue-900">ShineTime</h1><p className="text-[9px] text-blue-600 tracking-wider">CAR WASH & DETAILING</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Packages','Membership','About','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a car wash now" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Wash Now</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 text-sm font-bold tracking-widest mb-4">DRIVE-IN, SHINE OUT</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">Your Car,<br/><span className="text-blue-600">Spotless</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">Express washes to full detailing. Eco-friendly products, state-of-the-art equipment, and a shine that lasts.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Get your car washed now" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Wash Now</button>
                <button aria-label="View our wash packages" className="border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">View Packages</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'50K+',label:'Cars Washed'},{num:'8min',label:'Avg Wait Time'},{num:'4.8',label:'Google Rating'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-blue-700">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80" alt="Car going through an automatic car wash with soap and water" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="packages" aria-labelledby="packages-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-blue-600 text-sm font-bold tracking-widest mb-4">OUR PACKAGES</p><h2 id="packages-heading" className="text-4xl font-bold text-blue-900 mb-4">Wash & Detail Options</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((p,i) => (<article key={i} className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><h3 className="text-xl font-bold text-blue-900 mb-2">{p.name}</h3><p className="text-gray-500 text-sm mb-4">{p.desc}</p><div className="flex justify-between items-center"><span className="text-2xl font-bold text-blue-700">{p.price}</span><span className="text-blue-600 text-sm">{p.time}</span></div></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-blue-600 text-sm font-bold tracking-widest mb-4">VISIT US</p><h2 id="contact-heading" className="text-4xl font-bold text-blue-900 mb-6">Drive In Today</h2><p className="text-gray-600 mb-8">No appointment needed for express washes. Open 7 days a week.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Chris Shine" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">Package</label><select id="package" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"><option value="">Select package</option><option value="express">Express Wash</option><option value="full">Full Service</option><option value="premium">Premium Detail</option><option value="ceramic">Ceramic Coating</option></select></div>
                <button type="submit" aria-label="Reserve your car wash" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Reserve Wash</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-blue-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white" aria-hidden="true">\uD83D\uDE97</div><span className="text-white font-bold">ShineTime Car Wash</span></div><p className="text-blue-300 text-sm">Eco-friendly car care since 2012</p></div></footer>
    </div>
  );
}
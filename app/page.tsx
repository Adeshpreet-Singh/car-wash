'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const testimonials = [
    { name: "Tom Harris", role: "BMW Owner", text: "My car looks brand new every time. The premium detail is worth every penny - my 5 Series has never looked better!", rating: 5, date: "March 2026" },
    { name: "Karen Martinez", role: "Minivan Mom", text: "With 3 kids, my minivan takes a beating. ShineTime's full service gets it looking immaculate. Staff is always friendly.", rating: 5, date: "February 2026" },
    { name: "James Wright", role: "Classic Car Collector", text: "They handled my vintage Mustang with kid gloves. The ceramic coating has preserved the paint beautifully.", rating: 5, date: "January 2026" },
    { name: "Linda Chen", role: "Tesla Owner", text: "Was nervous about an electric car at a car wash but they assured me. Results were perfect - no issues at all!", rating: 4, date: "December 2025" }
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80', alt: 'Shiny clean car exterior', caption: 'Express Wash' },
    { src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80', alt: 'Car being washed', caption: 'Full Service' },
    { src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q-80', alt: 'Detailing in progress', caption: 'Premium Detail' },
    { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', alt: 'Showroom shine', caption: 'Ceramic Coating' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd04?w=600&q=80', alt: 'Clean wheels and tires', caption: 'Wheel & Tire' },
    { src: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80', alt: 'Spotless interior', caption: 'Interior Detail' }
  ];

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
        {/* Testimonials */}
        <section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-blue-600 text-sm font-bold tracking-widest mb-4">CUSTOMER REVIEWS</p>
              <h2 id="testimonials-heading" className="text-4xl font-bold text-blue-900 mb-4">What Drivers Say</h2>
            </div>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex mb-3" aria-label={`${t.rating} stars`}>
                    {[...Array(t.rating)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  <p className="text-gray-600 mb-3 italic">&quot;{t.text}&quot;</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-blue-900 font-medium">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role} • {t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" aria-labelledby="gallery-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-blue-600 text-sm font-bold tracking-widest mb-4">OUR WORK</p>
              <h2 id="gallery-heading" className="text-4xl font-bold text-blue-900 mb-4">Before & After</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-blue-600 text-sm font-bold tracking-widest mb-4">GET CLEAN</p>
              <h2 id="contact-heading" className="text-4xl font-bold text-blue-900 mb-6">Book Your Wash</h2>
              <p className="text-gray-600 mb-8">Drive in today or schedule for later. No appointment needed for express wash.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">📍</div>
                  <div><h3 className="font-bold text-blue-900">Visit Us</h3><p className="text-gray-600">123 Shine Boulevard<br/>Auto Row, Houston, TX 77057</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">📞</div>
                  <div><h3 className="font-bold text-blue-900">Call Us</h3><p className="text-gray-600">(713) 555-WASH</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">🕒</div>
                  <div><h3 className="font-bold text-blue-900">Hours</h3><p className="text-gray-600">Mon-Sat: 7AM-8PM<br/>Sun: 8AM-6PM</p></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="contact-name" type="text" aria-required="true" placeholder="Alex Driver" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label><input id="contact-email" type="email" aria-required="true" placeholder="alex@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="contact-package" className="block text-sm font-medium text-gray-700 mb-2">Package</label><select id="contact-package" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"><option value="">Select package</option><option value="express">Express Wash - $15</option><option value="full">Full Service - $35</option><option value="premium">Premium Detail - $149</option><option value="ceramic">Ceramic Coating - $599</option></select></div>
                <button type="submit" aria-label="Book your car wash" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Book Now</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white" aria-hidden="true">🚗</div>
                <div><h3 className="text-white font-bold">ShineTime</h3><p className="text-xs text-blue-300">CAR WASH & DETAILING</p></div>
              </div>
              <p className="text-blue-300 text-sm">Eco-friendly car care since 2010.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('packages')} className="text-blue-300 hover:text-white transition-colors text-sm">Packages</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-blue-300 hover:text-white transition-colors text-sm">Reviews</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="text-blue-300 hover:text-white transition-colors text-sm">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-blue-300 hover:text-white transition-colors text-sm">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-blue-300 text-sm">Express Wash</span></li>
                <li><span className="text-blue-300 text-sm">Full Service</span></li>
                <li><span className="text-blue-300 text-sm">Premium Detail</span></li>
                <li><span className="text-blue-300 text-sm">Ceramic Coating</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-blue-300 text-sm">&copy; 2026 ShineTime Car Wash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
'use client';
import { useState, useEffect } from 'react';

const services = [
  { icon: '🚿', title: 'Express Wash', desc: 'A quick exterior wash with premium foam, high-pressure rinse, and spot-free drying. In and out in under 15 minutes with a showroom-quality shine every time.', img: 'https://picsum.photos/seed/express-wash/600/400' },
  { icon: '✨', title: 'Deluxe Hand Wash', desc: 'Meticulous hand washing using the two-bucket method to prevent swirl marks. Includes wheel cleaning, tire dressing, and chrome polishing for that extra pop.', img: 'https://picsum.photos/seed/hand-wash/600/400' },
  { icon: '🛡️', title: 'Ceramic Coating', desc: 'Professional-grade ceramic coating application that bonds to your paint, creating a hydrophobic barrier lasting up to 3 years. Protection against UV, scratches, and chemicals.', img: 'https://picsum.photos/seed/ceramic-coat/600/400' },
  { icon: '🧹', title: 'Interior Detailing', desc: 'Complete interior overhaul including vacuuming, steam cleaning, leather conditioning, dashboard treatment, and glass cleaning. We reach every crevice and crease.', img: 'https://picsum.photos/seed/interior-detail/600/400' },
  { icon: '🔧', title: 'Paint Correction', desc: 'Multi-stage paint correction removes scratches, swirl marks, oxidation, and water spots. Machine polishing restores depth and clarity to your vehicle finish.', img: 'https://picsum.photos/seed/paint-correct/600/400' },
  { icon: '🏍️', title: 'Motorcycle & Boat', desc: 'Specialized cleaning for motorcycles, boats, jet skis, and RVs. We understand the unique materials and finishes on recreational vehicles and treat them with expert care.', img: 'https://picsum.photos/seed/boat-wash/600/400' },
];

const packages = [
  { name: 'Quick Shine', price: '$25', period: 'per wash', features: ['Exterior foam wash', 'High-pressure rinse', 'Spot-free air dry', 'Tire shine', '15-minute service'], highlight: false },
  { name: 'Full Detail', price: '$89', period: 'per detail', features: ['Hand wash & clay bar', 'One-step polish', 'Interior vacuum & wipe', 'Window cleaning', 'Tire & wheel detail', 'Air freshener', '60-minute service'], highlight: true, badge: 'Most Popular' },
  { name: 'Ultimate PPF', price: '$299', period: 'per package', features: ['Full paint correction', 'Ceramic coating application', 'Interior deep steam', 'Leather conditioning', 'Engine bay clean', '6-month protection guarantee'], highlight: false },
];

const gallery = [
  'https://picsum.photos/seed/car-red/500/350',
  'https://picsum.photos/seed/car-black/500/350',
  'https://picsum.photos/seed/car-white/500/350',
  'https://picsum.photos/seed/car-blue/500/350',
  'https://picsum.photos/seed/car-silver/500/350',
  'https://picsum.photos/seed/suv-clean/500/350',
];

const testimonials = [
  { name: 'Mike Thompson', text: 'My Tesla has never looked this good. The ceramic coating was applied perfectly and six months later it still beads water like day one. True craftsmanship.', avatar: 'https://picsum.photos/seed/avatar-mike/80/80' },
  { name: 'Rachel Adams', text: 'I brought in my SUV after a road trip covered in bugs and mud. They spent two hours on it and it literally looked better than when I drove it off the lot. Incredible attention to detail.', avatar: 'https://picsum.photos/seed/avatar-rachel/80/80' },
  { name: 'Carlos Rivera', text: 'As a car collector, I need detailers I can trust with rare paint. ShineOn is the only shop I trust with my 1967 Mustang. They treat every car like it belongs in a museum.', avatar: 'https://picsum.photos/seed/avatar-carlos/80/80' },
];

const stats = [
  { number: '45K+', label: 'Cars Washed' },
  { number: '99%', label: 'Happy Customers' },
  { number: '8', label: 'Service Bays' },
  { number: '10', label: 'Years Serving' },
];

const beforeAfter = [
  { before: 'https://picsum.photos/seed/dirty-car1/400/300', after: 'https://picsum.photos/seed/clean-car1/400/300', label: 'SUV Full Detail' },
  { before: 'https://picsum.photos/seed/dirty-car2/400/300', after: 'https://picsum.photos/seed/clean-car2/400/300', label: 'Sedan Paint Correction' },
  { before: 'https://picsum.photos/seed/dirty-car3/400/300', after: 'https://picsum.photos/seed/clean-car3/400/300', label: 'Interior Restoration' },
];

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', phone: '', vehicle: '', service: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % beforeAfter.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">💧</span>
            <span className="font-extrabold text-lg tracking-tight" style={{ color: 'var(--accent-dark)', fontFamily: "'Outfit', sans-serif" }}>ShineOn</span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {['Services', 'Packages', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold transition-colors" style={{ color: 'var(--body)', fontFamily: "'Outfit', sans-serif" }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--body)')}>{item}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-block px-5 py-2.5 rounded-lg text-white text-sm font-bold" style={{ background: 'var(--accent)', fontFamily: "'Outfit', sans-serif" }}>Book a Wash</a>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-2xl" style={{ color: 'var(--heading)' }}>☰</button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3" style={{ borderColor: 'var(--border)' }}>
            {['Services', 'Packages', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="text-sm font-semibold py-2" style={{ color: 'var(--heading)' }}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="pt-28 pb-20 md:pt-36 md:pb-28" style={{ background: 'linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 30%, #ffffff 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6" style={{ background: 'rgba(2,136,209,0.08)', color: 'var(--accent-dark)', fontFamily: "'Outfit', sans-serif" }}>
              ⚡ Premium Auto Detailing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.7rem] font-black leading-[1.1] mb-6" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)', letterSpacing: '-0.04em' }}>
              Your Car Deserves the <span style={{ color: 'var(--accent)' }}>Ultimate Shine</span>
            </h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--body)', maxWidth: 480, fontFamily: "'Work Sans', sans-serif" }}>
              ShineOn Auto Spa delivers premium car washing, detailing, and protection services. From a quick express wash to full ceramic coating, we treat every vehicle with the precision and care it deserves. Our state-of-the-art facility uses purified water systems, pH-balanced soaps, and microfiber-safe techniques to protect your investment. Whether you drive a daily commuter or a six-figure exotic, you will leave with a finish that turns heads.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="px-8 py-3 rounded-lg text-white font-bold shadow-lg transition-transform hover:-translate-y-1" style={{ background: 'var(--accent)', fontFamily: "'Outfit', sans-serif" }}>Book Your Wash</a>
              <a href="#packages" className="px-8 py-3 rounded-lg font-bold border-2 transition-transform hover:-translate-y-1" style={{ borderColor: 'var(--accent)', color: 'var(--accent)', fontFamily: "'Outfit', sans-serif" }}>View Packages</a>
            </div>
            <div className="flex gap-6 text-xs font-bold" style={{ color: 'var(--body)', fontFamily: "'Outfit', sans-serif" }}>
              <span>🛡️ Insured</span>
              <span>🌿 Eco-Friendly</span>
              <span>⏱️ Fast Service</span>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <img src="https://picsum.photos/seed/car-hero2/700/480" alt="Premium car wash in action" className="rounded-2xl shadow-2xl w-full object-cover" style={{ maxHeight: 460 }} />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-black" style={{ color: 'var(--accent)', fontFamily: "'Outfit', sans-serif" }}>45K+</div>
                <div className="text-xs font-semibold" style={{ color: 'var(--body)' }}>Cars Detailed</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="py-8" style={{ background: 'var(--accent)', color: 'white' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="reveal">
              <div className="text-3xl md:text-4xl font-black" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.number}</div>
              <div className="text-xs font-semibold mt-1 opacity-80 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(2,136,209,0.08)', color: 'var(--accent-dark)' }}>What We Do</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>Expert Auto Care Services</h2>
            <p style={{ color: 'var(--body)', maxWidth: 600, margin: '0 auto' }}>Every vehicle that enters our bay receives meticulous attention. We have invested in the best equipment, the finest products, and the most knowledgeable technicians in the region. Our service menu covers everything from a quick rinse to full paint restoration and ceramic protection.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="reveal rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-2 bg-white" style={{ borderColor: 'var(--border)', transitionDelay: `${i * 0.08}s` }}>
                <img src={svc.img} alt={svc.title} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <span className="text-3xl mb-3 block">{svc.icon}</span>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body)', fontFamily: "'Work Sans', sans-serif" }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-20 md:py-28" style={{ background: 'var(--alt-bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(2,136,209,0.08)', color: 'var(--accent-dark)' }}>Pricing</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>Choose Your Wash Package</h2>
            <p style={{ color: 'var(--body)', maxWidth: 550, margin: '0 auto' }}>Straightforward pricing with no hidden add-ons. Every package includes free vacuums for self-service and a satisfaction guarantee. Monthly memberships available for unlimited washes at discounted rates.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`reveal rounded-2xl p-8 bg-white border-2 relative transition-all hover:shadow-xl hover:-translate-y-2 ${pkg.highlight ? 'shadow-xl' : ''}`} style={{ borderColor: pkg.highlight ? 'var(--accent)' : 'var(--border)', transitionDelay: `${i * 0.1}s` }}>
                {pkg.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'var(--accent)' }}>{pkg.badge}</span>}
                <h3 className="text-xl font-black mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>{pkg.name}</h3>
                <div className="mb-4"><span className="text-4xl font-black" style={{ color: 'var(--accent)' }}>{pkg.price}</span><span className="text-xs font-semibold ml-1" style={{ color: 'var(--body)' }}>{pkg.period}</span></div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--body)', fontFamily: "'Work Sans', sans-serif" }}>
                      <span className="font-bold" style={{ color: 'var(--accent)' }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-lg font-bold text-sm transition-all ${pkg.highlight ? 'text-white' : ''}`} style={{ background: pkg.highlight ? 'var(--accent)' : 'white', border: pkg.highlight ? 'none' : '2px solid var(--accent)', color: pkg.highlight ? 'white' : 'var(--accent)', fontFamily: "'Outfit', sans-serif" }}>
                  Select Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SLIDER */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(2,136,209,0.08)', color: 'var(--accent-dark)' }}>Results</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>Before & After Transformations</h2>
            <p style={{ color: 'var(--body)', maxWidth: 500, margin: '0 auto' }}>See the dramatic difference our detailing services make. These unretouched photos show real vehicles after a single visit to ShineOn Auto Spa.</p>
          </div>
          <div className="reveal rounded-2xl overflow-hidden shadow-xl" style={{ background: 'var(--alt-bg)' }}>
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img src={beforeAfter[currentSlide].before} alt="Before" className="w-full h-64 md:h-80 object-cover" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold text-white" style={{ background: 'rgba(0,0,0,0.6)' }}>BEFORE</span>
              </div>
              <div className="relative">
                <img src={beforeAfter[currentSlide].after} alt="After" className="w-full h-64 md:h-80 object-cover" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold text-white" style={{ background: 'var(--accent)' }}>AFTER</span>
              </div>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-bold mb-3" style={{ color: 'var(--heading)', fontFamily: "'Outfit', sans-serif" }}>{beforeAfter[currentSlide].label}</p>
              <div className="flex justify-center gap-2">
                {beforeAfter.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className="w-3 h-3 rounded-full transition-all" style={{ background: i === currentSlide ? 'var(--accent)' : 'var(--border)' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28" style={{ background: 'var(--alt-bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(2,136,209,0.08)', color: 'var(--accent-dark)' }}>Gallery</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>Recent Work</h2>
            <p style={{ color: 'var(--body)', maxWidth: 500, margin: '0 auto' }}>A showcase of recently completed details and washes. From daily drivers to weekend warriors, we bring out the best in every vehicle that visits our facility.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="reveal overflow-hidden rounded-xl group cursor-pointer" style={{ transitionDelay: `${i * 0.06}s` }}>
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-44 md:h-52 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <img src="https://picsum.photos/seed/car-detailer/600/500" alt="Our professional detailing team" className="rounded-2xl shadow-xl w-full object-cover" style={{ maxHeight: 480 }} />
          </div>
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(2,136,209,0.08)', color: 'var(--accent-dark)' }}>Why ShineOn</div>
            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>Built by Car Enthusiasts, for Car Enthusiasts</h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--body)', fontFamily: "'Work Sans', sans-serif" }}>ShineOn was started by two lifelong car enthusiasts who were frustrated with the lack of quality auto care in the area. We have since grown to a team of 25 certified detailers, but our philosophy remains the same: treat every car as if it were our own. We use only professional-grade products from brands like Meguiars, Chemical Guys, and Gtechniq, and every member of our team completes a 200-hour training program.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '💧', label: 'Purified Water System' },
                { icon: '🧪', label: 'pH-Balanced Soaps' },
                { icon: '🔧', label: 'Certified Technicians' },
                { icon: '♻️', label: 'Water Recycling' },
                { icon: '📸', label: 'Photo Documentation' },
                { icon: '🕐', label: 'Same-Day Service' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-lg" style={{ background: 'var(--alt-bg)' }}>
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--heading)', fontFamily: "'Outfit', sans-serif" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-20 md:py-28" style={{ background: 'var(--alt-bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(2,136,209,0.08)', color: 'var(--accent-dark)' }}>Reviews</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>What Drivers Are Saying</h2>
            <p style={{ color: 'var(--body)', maxWidth: 500, margin: '0 auto' }}>Our reputation is built on thousands of five-star experiences. Here is what some of our loyal customers have to say about trusting ShineOn with their prized vehicles.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="reveal rounded-2xl p-8 bg-white border transition-all hover:shadow-lg" style={{ borderColor: 'var(--border)', transitionDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--heading)', fontFamily: "'Outfit', sans-serif" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--accent)' }}>★★★★★</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: 'var(--body)', fontFamily: "'Work Sans', sans-serif" }}>&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Ready for the Shine of a Lifetime?</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">Book your first wash today and get 20% off any package. Open 7 days a week with drive-through and appointment options available. Your car will thank you.</p>
          <a href="#contact" className="inline-block px-8 py-3 rounded-lg font-bold bg-white transition-transform hover:-translate-y-1" style={{ color: 'var(--accent-dark)', fontFamily: "'Outfit', sans-serif" }}>Claim 20% Off First Wash</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(2,136,209,0.08)', color: 'var(--accent-dark)' }}>Book Now</div>
            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--heading)' }}>Schedule Your Appointment</h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--body)', fontFamily: "'Work Sans', sans-serif" }}>Select your preferred service, date, and time. We will confirm your appointment within minutes. Walk-ins are also welcome, but appointments guarantee zero wait time. Fleet and commercial accounts welcome with volume discounts.</p>
            <div className="space-y-4 mb-8">
              {[
                { icon: '📍', text: '4500 Auto Boulevard, Bay 12' },
                { icon: '📞', text: '(555) 789-0123' },
                { icon: '✉️', text: 'wash@shineonauto.com' },
                { icon: '🕐', text: 'Mon-Sun 7AM - 7PM' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{c.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--heading)', fontFamily: "'Outfit', sans-serif" }}>{c.text}</span>
                </div>
              ))}
            </div>
            <img src="https://picsum.photos/seed/car-wash-facility/500/300" alt="ShineOn facility" className="rounded-2xl shadow-lg w-full object-cover" style={{ maxHeight: 240 }} />
          </div>
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div className="rounded-2xl p-12 text-center border bg-white" style={{ borderColor: 'var(--border)' }}>
                <span className="text-5xl block mb-4">🚗</span>
                <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--accent)', fontFamily: "'Outfit', sans-serif" }}>Booking Confirmed!</h3>
                <p style={{ color: 'var(--body)' }}>We will send a confirmation text with your appointment details. See you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-8 border bg-white" style={{ borderColor: 'var(--border)' }}>
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 rounded-lg border text-sm mb-4" style={{ borderColor: 'var(--border)', fontFamily: "'Outfit', sans-serif" }} />
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full px-4 py-3 rounded-lg border text-sm mb-4" style={{ borderColor: 'var(--border)', fontFamily: "'Outfit', sans-serif" }} />
                <input type="text" placeholder="Vehicle (Year, Make, Model)" value={formData.vehicle} onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })} className="w-full px-4 py-3 rounded-lg border text-sm mb-4" style={{ borderColor: 'var(--border)', fontFamily: "'Outfit', sans-serif" }} />
                <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 rounded-lg border text-sm mb-4" style={{ borderColor: 'var(--border)', fontFamily: "'Outfit', sans-serif" }}>
                  <option value="">Select Package</option>
                  {packages.map((p, i) => <option key={i} value={p.name}>{p.name} — {p.price}</option>)}
                </select>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="px-4 py-3 rounded-lg border text-sm" style={{ borderColor: 'var(--border)', fontFamily: "'Outfit', sans-serif" }} />
                  <select value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="px-4 py-3 rounded-lg border text-sm" style={{ borderColor: 'var(--border)', fontFamily: "'Outfit', sans-serif" }}>
                    <option value="">Preferred Time</option>
                    {['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full py-3 rounded-lg text-white font-bold text-sm transition-transform hover:-translate-y-1" style={{ background: 'var(--accent)', fontFamily: "'Outfit', sans-serif" }}>Confirm Booking</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ background: 'var(--heading)', color: '#a8b8cc' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4"><span className="text-2xl">💧</span><span className="font-black text-white text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>ShineOn</span></div>
              <p className="text-sm leading-relaxed">Premium auto wash and detailing. Protecting your investment with expert care since 2014.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>Services</h4>
              <ul className="space-y-2 text-sm">
                {['Express Wash', 'Hand Wash', 'Ceramic Coating', 'Interior Detail', 'Paint Correction'].map((l) => <li key={l}><a href="#services" className="hover:text-white transition-colors">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>Company</h4>
              <ul className="space-y-2 text-sm">
                {['About', 'Careers', 'Gift Cards', 'Fleet Program', 'Franchise'].map((l) => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>Social</h4>
              <ul className="space-y-2 text-sm">
                {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map((l) => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm" style={{ borderColor: '#1e293b' }}>
            &copy; 2024 ShineOn Auto Spa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

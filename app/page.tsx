'use client';

import { useEffect, useState, useRef, type FormEvent } from 'react';

/* ── constants ────────────────────────────────────────────── */
const PHONE = '+15551234567';
const EMAIL = 'hello@crystaltide.com';
const ADDRESS = '742 Sparkle Lane, Austin, TX 78701';
const WHATSAPP = '15551234567';
const MAPS_QUERY = encodeURIComponent(ADDRESS);

const HOURS = [
  { day: 'Mon – Fri', time: '7:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 7:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 5:00 PM' },
];

const SERVICES = [
  {
    icon: '',
    title: 'Aqua Rinse',
    desc: 'High-pressure pure water wash, microfiber dry, tire conditioning & streak-free windows.',
    price: '$24',
    duration: '20 min',
    tag: 'Express',
  },
  {
    icon: '',
    title: 'Crystal Detail',
    desc: 'Clay bar decontamination, dual-action polish, sealant protection & full interior refresh.',
    price: '$59',
    duration: '45 min',
    tag: 'Popular',
  },
  {
    icon: '✨',
    title: 'Diamond Coating',
    desc: 'Multi-stage paint correction, 9H ceramic application, leather treatment & engine bay detail.',
    price: '$249',
    duration: '4 hrs',
    tag: 'Premium',
  },
];

const PACKAGES = [
  {
    name: 'Ripple',
    price: '$39',
    period: '/mo',
    features: ['2 Aqua Rinse washes', '10% off add-ons', 'Priority lane'],
    highlight: false,
  },
  {
    name: 'Tide',
    price: '$79',
    period: '/mo',
    features: [
      'Unlimited Aqua Rinse',
      '2 Crystal Details',
      'Free vacuum every visit',
      '20% off Diamond Coating',
    ],
    highlight: true,
  },
  {
    name: 'Surge',
    price: '$149',
    period: '/mo',
    features: [
      'Unlimited Crystal Detail',
      '1 Diamond Coating / quarter',
      'Ceramic boost every visit',
      'Complimentary pickup & delivery',
    ],
    highlight: false,
  },
];

const FAQS = [
  {
    q: 'Do I need an appointment?',
    a: 'Walk-ins welcome for Aqua Rinse and Crystal Detail. Diamond Coating requires appointment — book online or call.',
  },
  {
    q: 'How long does ceramic coating last?',
    a: 'Our 9H ceramic coating lasts 2–5 years with proper care. Includes a free inspection at 6 months.',
  },
  {
    q: 'Can I cancel my membership anytime?',
    a: 'Yes — all plans are month-to-month with no contracts. Cancel anytime from your dashboard or by calling us.',
  },
  {
    q: 'Do you service trucks and SUVs?',
    a: 'Absolutely. Sedans, SUVs, trucks, and vans welcome. Oversized vehicles may have a small surcharge.',
  },
];

/* ── animated counter hook ────────────────────────────────── */
function useCounter(target: string, duration = 2000) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const numMatch = target.match(/[\d.]+/);
          if (!numMatch) { setDisplay(target); return; }
          const end = parseFloat(numMatch[0]);
          const suffix = target.replace(numMatch[0], '');
          const start = 0;
          const startTime = performance.now();
          function tick(now: number) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * eased;
            setDisplay(
              (Number.isInteger(end) ? Math.round(current).toString() : current.toFixed(1)) + suffix
            );
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { display, ref };
}

/* ── floating particles ───────────────────────────────────── */
function FloatingDroplets() {
  return (
    <div className="droplets" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="droplet"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            width: `${3 + Math.random() * 6}px`,
            height: `${3 + Math.random() * 6}px`,
            opacity: 0.15 + Math.random() * 0.25,
          }}
        />
      ))}
    </div>
  );
}

/* ── page ─────────────────────────────────────────────────── */
export default function Page() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [mobileNav, setMobileNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    /* scroll-reveal */
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));

    /* parallax */
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) { setStatus('sent'); form.reset(); } else setStatus('error');
    } catch { setStatus('error'); }
  }

  const counters = [
    { val: '12+', label: 'Years' },
    { val: '50k+', label: 'Cars Washed' },
    { val: '4.9', label: 'Rating' },
    { val: '100%', label: 'Eco Products' },
  ];

  return (
    <>
      {/* ════════════ NAV ════════════ */}
      <nav className="site-nav">
        <a href="#top" className="logo">
          <span className="logo-icon">◈</span>
          <span>CrystalTide</span>
        </a>
        <button
          className="mobile-toggle"
          onClick={() => setMobileNav(!mobileNav)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${mobileNav ? 'open' : ''}`} />
          <span className={`bar ${mobileNav ? 'open' : ''}`} />
          <span className={`bar ${mobileNav ? 'open' : ''}`} />
        </button>
        <div className={`nav-links ${mobileNav ? 'show' : ''}`}>
          {['Services', 'Pricing', 'Hours', 'Contact'].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setMobileNav(false)}>
              {s}
            </a>
          ))}
          <a href={`tel:${PHONE}`} className="btn btn-nav">Call Now</a>
        </div>
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section id="top" className="hero">
        <FloatingDroplets />
        <div
          className="hero-bg-orb orb-1"
          style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.05}px)` }}
        />
        <div
          className="hero-bg-orb orb-2"
          style={{ transform: `translate(${scrollY * -0.04}px, ${scrollY * 0.03}px)` }}
        />
        <div className="container hero-content">
          <span className="badge-glow reveal">Austin&apos;s #1 Luxury Wash</span>
          <h1 className="hero-heading reveal">
            Where Water
            <br />
            Meets <span className="gradient-text">Crystal</span>
          </h1>
          <p className="hero-sub reveal">
            From a quick rinse to full ceramic coating — precision detailing
            that transforms your vehicle into a masterpiece.
          </p>
          <div className="hero-buttons reveal">
            <a href="#services" className="btn">Explore Services</a>
            <a href="#contact" className="btn btn-ghost">Book Online</a>
          </div>

          {/* Hero image strip */}
          <div className="hero-image reveal">
            <div className="hero-image-glow" />
            <img
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=80"
              alt="Luxury car being hand-washed with water droplets"
              loading="eager"
            />
            <div className="hero-image-overlay" />
          </div>
        </div>
      </section>

      {/* ════════════ MARQUEE ════════════ */}
      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="marquee-item">
              Hand Wash · Ceramic Coating · Paint Correction · Interior Detail · Eco-Friendly · Hand Wash · Ceramic Coating · Paint Correction ·
            </span>
          ))}
        </div>
      </div>

      {/* ════════════ SERVICES ════════════ */}
      <section id="services">
        <div className="container">
          <div className="reveal section-header animate-fade-in-up">
            <span className="badge-glow">Services</span>
            <h2 className="section-heading">
              Precision-Crafted<br />
              <span className="gradient-text">Wash Experiences</span>
            </h2>
          </div>
          <div className="grid-3">
            {SERVICES.map((s, idx) => (
              <div key={s.title} className="service-card hover-lift reveal" style={{ animationDelay: `${idx * 100}ms` }}>
                <span className="service-tag">{s.tag}</span>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-footer">
                  <span className="service-price">{s.price}</span>
                  <span className="service-duration">{s.duration}</span>
                </div>
                <a href="#contact" className="btn btn-sm">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ GALLERY ════════════ */}
      <section className="gallery-section">
        <div className="container">
          <div className="reveal section-header animate-fade-in-up">
            <span className="badge-glow">Gallery</span>
            <h2 className="section-heading">
              The <span className="gradient-text">CrystalTide</span> Difference
            </h2>
          </div>
          <div className="gallery-grid reveal">
            {[
              { src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80', alt: 'Car wash soapy water' },
              { src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80', alt: 'Shiny car interior' },
              { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Car detailing ceramic' },
              { src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80', alt: 'Water droplets on car' },
              { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80', alt: 'Clean luxury car' },
              { src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80', alt: 'Premium car wash' },
            ].map((img, i) => (
              <div key={i} className={`gallery-item gallery-item-${i}`}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHY US (STATS) ════════════ */}
      <section className="stats-section">
        <div className="container">
          <div className="reveal section-header animate-fade-in-up">
            <span className="badge-glow">Why CrystalTide</span>
            <h2 className="section-heading">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
          </div>
          <div className="stats-grid reveal">
            {counters.map((c, i) => {
              const counter = useCounter(c.val);
              return (
                <div key={c.label} className="stat-card hover-lift">
                  <span ref={counter.ref} className="stat-value">{counter.display}</span>
                  <span className="stat-label">{c.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ PACKAGES / MEMBERSHIP ════════════ */}
      <section id="pricing">
        <div className="container">
          <div className="reveal section-header animate-fade-in-up">
            <span className="badge-glow">Membership</span>
            <h2 className="section-heading">
              Ride the <span className="gradient-text">Wave</span>
            </h2>
            <p className="section-desc">No contracts. Cancel anytime. All plans include priority lane access.</p>
          </div>
          <div className="grid-3">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`pricing-card reveal ${pkg.highlight ? 'pricing-highlight' : ''}`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {pkg.highlight && <span className="pricing-popular-badge">Most Popular</span>}
                <h3>{pkg.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">{pkg.price}</span>
                  <span className="pricing-period">{pkg.period}</span>
                </div>
                <ul>
                  {pkg.features.map((f) => (
                    <li key={f}>✦ {f}</li>
                  ))}
                </ul>
                <a href="#contact" className={pkg.highlight ? 'btn btn-full' : 'btn btn-ghost btn-full'}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROCESS ════════════ */}
      <section className="process-section">
        <div className="container">
          <div className="reveal section-header animate-fade-in-up">
            <span className="badge-glow">How It Works</span>
            <h2 className="section-heading">
              Simple as <span className="gradient-text">1-2-3</span>
            </h2>
          </div>
          <div className="process-grid reveal">
            {[
              { step: '01', title: 'Drive In', desc: 'Pull into our covered bay — no appointment needed for Express or Detail services.' },
              { step: '02', title: 'Pick Your Wash', desc: 'Choose from our handcrafted service tiers or speak with our team for a custom quote.' },
              { step: '03', title: 'Drive Out Shining', desc: 'Walk through our quality check tunnel, spotless and ready to turn heads.' },
            ].map((s, i) => (
              <div key={s.step} className="process-card hover-lift">
                <span className="process-step">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ HOURS & MAP ════════════ */}
      <section id="hours">
        <div className="container">
          <div className="reveal section-header animate-fade-in-up">
            <span className="badge-glow">Visit Us</span>
            <h2 className="section-heading">
              Hours & <span className="gradient-text">Location</span>
            </h2>
          </div>
          <div className="grid-2 reveal">
            <div className="glass-card hover-lift">
              <h3>Business Hours</h3>
              <div className="hours-list">
                {HOURS.map((h) => (
                  <div key={h.day} className="hours-row">
                    <span className="hours-day">{h.day}</span>
                    <span className="hours-dots" />
                    <span className="hours-time">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="address-line">
                {ADDRESS}{' '}
                <a href={`https://maps.google.com/?q=${MAPS_QUERY}`} target="_blank" rel="noopener noreferrer">
                  Directions →
                </a>
              </p>
              <div className="contact-chips">
                <a href={`tel:${PHONE}`} className="chip"> {PHONE}</a>
                <a href={`mailto:${EMAIL}`} className="chip">✉️ {EMAIL}</a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="chip"> WhatsApp</a>
              </div>
            </div>
            <div className="map-container">
              <iframe
                title="CrystalTide Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAyLjAiTiA5N8KwNDQnMzUuMiJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px', filter: 'invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.8)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="faq-section">
        <div className="container">
          <div className="reveal section-header animate-fade-in-up">
            <span className="badge-glow">FAQ</span>
            <h2 className="section-heading">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="faq-list reveal">
            {FAQS.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT ════════════ */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="reveal section-header animate-fade-in-up">
            <span className="badge-glow">Book Now</span>
            <h2 className="section-heading">
              Ready for the <span className="gradient-text">Crystal Touch?</span>
            </h2>
            <p className="section-desc">
              Or reach us directly:{' '}
              <a href={`tel:${PHONE}`}>{PHONE}</a> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card hover-lift contact-form reveal">
            <input type="hidden" name="subject" value="New inquiry from CrystalTide website" />
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Email Address" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" defaultValue="" required>
                <option value="" disabled>Select a Service</option>
                <option value="Aqua Rinse">Aqua Rinse</option>
                <option value="Crystal Detail">Crystal Detail</option>
                <option value="Diamond Coating">Diamond Coating</option>
                <option value="Membership Inquiry">Membership Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your vehicle or question..." required />
            </div>
            <button type="submit" className="btn btn-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent!' : 'Send Message'}
            </button>
            {status === 'error' && <p className="form-msg form-error">Something went wrong. Please try again or call us directly.</p>}
            {status === 'sent' && <p className="form-msg form-success">Thanks! We&apos;ll get back to you within 1 business hour.</p>}
          </form>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="logo">
                <span className="logo-icon">◈</span>
                <span>CrystalTide</span>
              </a>
              <p>Premium car wash &amp; detailing in Austin. Eco-friendly products, expert staff, and a shine you can trust.</p>
            </div>
            <div>
              <h4>Links</h4>
              <div className="footer-links">
                <a href="#services">Services</a>
                <a href="#pricing">Pricing</a>
                <a href="#hours">Hours</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div>
              <h4>Contact</h4>
              <div className="footer-links">
                <a href={`tel:${PHONE}`}>{PHONE}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
            <div>
              <h4>Follow</h4>
              <div className="social-links">
                {['IG', 'FB', 'X', 'TT'].map((s) => (
                  <a key={s} href="/contact" target="_blank" rel="noopener noreferrer" className="social-chip">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} CrystalTide Car Wash. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

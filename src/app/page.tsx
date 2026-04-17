'use client';

import { useEffect, useState, type FormEvent } from 'react';

/* ── constants ────────────────────────────────────────────── */
const PHONE = '+15551234567';
const EMAIL = 'hello@aquashinewash.com';
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
    icon: '🧽',
    title: 'Basic Wash',
    desc: 'Exterior hand wash, tire shine, window cleaning & air freshener.',
    price: '$19',
    duration: '~20 min',
  },
  {
    icon: '✨',
    title: 'Premium Wash',
    desc: 'Everything in Basic plus clay bar decontamination, spray wax & interior vacuum.',
    price: '$49',
    duration: '~45 min',
  },
  {
    icon: '💎',
    title: 'Full Detailing',
    desc: 'Paint correction, ceramic coating, leather conditioning, engine bay & full interior detail.',
    price: '$199',
    duration: '~4 hrs',
  },
];

const PACKAGES = [
  {
    name: 'Starter',
    price: '$39',
    period: '/month',
    features: ['2 Basic Washes', '10% off add-ons', 'Priority lane access'],
    highlight: false,
  },
  {
    name: 'Unlimited',
    price: '$79',
    period: '/month',
    features: [
      'Unlimited Basic Washes',
      '2 Premium Washes',
      'Free vacuum every visit',
      '20% off detailing',
    ],
    highlight: true,
  },
  {
    name: 'VIP',
    price: '$149',
    period: '/month',
    features: [
      'Unlimited Premium Washes',
      '1 Full Detail / quarter',
      'Ceramic boost every visit',
      'Complimentary pickup & delivery',
    ],
    highlight: false,
  },
];

const FAQS = [
  {
    q: 'Do I need an appointment?',
    a: 'Walk-ins are always welcome for Basic and Premium washes. Full Detailing is by appointment — book online or call us.',
  },
  {
    q: 'How long does a ceramic coating last?',
    a: 'Our professional ceramic coating lasts 2–5 years depending on maintenance. We include a free inspection at 6 months.',
  },
  {
    q: 'Can I cancel my membership anytime?',
    a: 'Yes! All memberships are month-to-month with no contracts. Cancel anytime from your dashboard or by calling us.',
  },
  {
    q: 'Do you wash trucks and SUVs?',
    a: 'Absolutely. We service sedans, SUVs, trucks, and vans. Oversized vehicles may have a small surcharge.',
  },
];

/* ── scroll-reveal hook ───────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── page ─────────────────────────────────────────────────── */
export default function Page() {
  useReveal();

  /* contact form state */
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // <-- replace with real key

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ════════════ NAV ════════════ */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '0.85rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#top" style={{ fontWeight: 900, fontSize: '1.3rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '-0.03em' }}>
          💧 AquaShine
        </a>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {['Services', 'Pricing', 'Hours', 'Contact'].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{ color: 'var(--body)', textDecoration: 'none' }}>
              {s}
            </a>
          ))}
          <a href={`tel:${PHONE}`} className="btn" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}>
            📞 Call Now
          </a>
        </div>
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section id="top" className="hero" style={{ padding: '6rem 2rem 5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span className="badge">Austin's #1 Rated Car Wash</span>
          <h1 className="heading" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', marginTop: '1rem' }}>
            A Shine That<br />Speaks for Itself
          </h1>
          <p style={{ marginTop: '1rem', color: 'var(--body)', fontSize: '1.15rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            From a quick exterior rinse to full paint correction & ceramic coating — we treat every car like our own.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="#services" className="btn">View Services ↓</a>
            <a href="#contact" className="btn-outline">Book Online</a>
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section id="services" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">What We Offer</span>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>
              Our Services
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map((s) => (
              <div key={s.title} className="card reveal">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.25rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--body)', marginTop: '0.5rem', flex: 1 }}>{s.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <span style={{ fontWeight: 900, fontSize: '1.6rem', color: 'var(--accent)' }}>{s.price}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--body)' }}>{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PACKAGES / MEMBERSHIP ════════════ */}
      <section id="pricing" className="section-alt" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">Membership Plans</span>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>
              Save Big Every Month
            </h2>
            <p style={{ color: 'var(--body)', marginTop: '0.5rem' }}>No contracts. Cancel anytime. All plans include priority lane.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="card reveal"
                style={{
                  textAlign: 'center',
                  border: pkg.highlight ? '2.5px solid var(--accent)' : undefined,
                  boxShadow: pkg.highlight ? '0 0 0 4px var(--accent-glow), var(--shadow)' : undefined,
                  position: 'relative',
                }}
              >
                {pkg.highlight && (
                  <span
                    style={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--accent)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 1rem',
                      borderRadius: 4,
                    }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: pkg.highlight ? '0.5rem' : 0 }}>{pkg.name}</h3>
                <div style={{ margin: '1rem 0' }}>
                  <span style={{ fontWeight: 900, fontSize: '2.2rem', color: 'var(--accent)' }}>{pkg.price}</span>
                  <span style={{ color: 'var(--body)' }}>{pkg.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', flex: 1 }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ padding: '0.4rem 0', borderBottom: '1px solid var(--border)' }}>
                      ✓&ensp;{f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={pkg.highlight ? 'btn' : 'btn-outline'} style={{ marginTop: '1.5rem', justifyContent: 'center', width: '100%' }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal">
            <span className="badge">Why AquaShine</span>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginTop: '0.75rem', marginBottom: '2rem' }}>
              Built on Trust & Quality
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '🏆', stat: '12+', label: 'Years Experience' },
              { icon: '🚗', stat: '50k+', label: 'Cars Washed' },
              { icon: '⭐', stat: '4.9', label: 'Google Rating' },
              { icon: '🌿', stat: '100%', label: 'Eco-Friendly Products' },
            ].map((item) => (
              <div key={item.label} className="reveal">
                <div style={{ fontSize: '2.2rem' }}>{item.icon}</div>
                <div style={{ fontWeight: 900, fontSize: '1.8rem', color: 'var(--accent)', marginTop: '0.25rem' }}>{item.stat}</div>
                <div style={{ color: 'var(--body)', fontSize: '0.9rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ HOURS & MAP ════════════ */}
      <section id="hours" className="section-alt" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">Find Us</span>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>
              Hours & Location
            </h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            {/* hours card */}
            <div className="card" style={{ gap: '0.5rem' }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>🕐 Business Hours</h3>
              {HOURS.map((h) => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontWeight: 600 }}>{h.day}</span>
                  <span style={{ color: 'var(--body)' }}>{h.time}</span>
                </div>
              ))}
              <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--body)' }}>
                📍 {ADDRESS}
                <br />
                <a href={`https://maps.google.com/?q=${MAPS_QUERY}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Get Directions →
                </a>
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                <a href={`tel:${PHONE}`} className="btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem' }}>📞 Call</a>
                <a href={`mailto:${EMAIL}`} className="btn-outline" style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem' }}>✉️ Email</a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem' }}>💬 WhatsApp</a>
              </div>
            </div>

            {/* map embed */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1.5px solid var(--border)', minHeight: 360 }}>
              <iframe
                title="AquaShine Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAyLjAiTiA5N8KwNDQnMzUuMiJX!5e0!3m2!1sen!2sus!4v1`}
                width="100%"
                height="360"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge">FAQ</span>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>
              Common Questions
            </h2>
          </div>
          {FAQS.map((f, i) => (
            <details key={i} className="reveal" style={{ borderBottom: '1px solid var(--border)' }}>
              <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {f.q}
                <span style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>+</span>
              </summary>
              <p style={{ padding: '0 0 1.25rem', color: 'var(--body)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ════════════ CONTACT ════════════ */}
      <section id="contact" className="section-alt" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge">Get in Touch</span>
            <h2 className="heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>
              Book or Ask a Question
            </h2>
            <p style={{ color: 'var(--body)', marginTop: '0.5rem' }}>
              Or reach us directly:{' '}
              <a href={`tel:${PHONE}`} style={{ color: 'var(--accent)', fontWeight: 700 }}>{PHONE}</a>
              {' · '}
              <a href={`mailto:${EMAIL}`} style={{ color: 'var(--accent)', fontWeight: 700 }}>{EMAIL}</a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card reveal" style={{ gap: '1rem' }}>
            <input type="hidden" name="subject" value="New inquiry from AquaShine website" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <input name="name" placeholder="Your Name" required style={{ width: '100%' }} />
              <input name="email" type="email" placeholder="Email Address" required style={{ width: '100%' }} />
            </div>
            <input name="phone" type="tel" placeholder="Phone (optional)" style={{ width: '100%' }} />
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a Service</option>
              <option>Basic Wash</option>
              <option>Premium Wash</option>
              <option>Full Detailing</option>
              <option>Membership Inquiry</option>
              <option>Other</option>
            </select>
            <textarea name="message" rows={4} placeholder="Tell us about your vehicle or question…" required style={{ width: '100%', resize: 'vertical' }} />
            <button type="submit" className="btn" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
              {status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Sent!' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p style={{ color: '#c62828', textAlign: 'center', fontSize: '0.9rem' }}>
                Something went wrong. Please try again or call us directly.
              </p>
            )}
            {status === 'sent' && (
              <p style={{ color: '#2e7d32', textAlign: 'center', fontSize: '0.9rem' }}>
                Thanks! We&rsquo;ll get back to you within 1 business hour.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{ padding: '3rem 2rem', color: 'rgba(255,255,255,0.7)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.3rem', color: 'white', marginBottom: '0.5rem' }}>💧 AquaShine</div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>Premium car wash & detailing in the heart of Austin. Eco-friendly products, expert staff, and a shine you can trust.</p>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '0.75rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="#services" style={{ color: 'rgba(255,255,255,0.7)' }}>Services</a>
              <a href="#pricing" style={{ color: 'rgba(255,255,255,0.7)' }}>Pricing</a>
              <a href="#hours" style={{ color: 'rgba(255,255,255,0.7)' }}>Hours</a>
              <a href="#contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '0.75rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
              <a href={`tel:${PHONE}`} style={{ color: 'rgba(255,255,255,0.7)' }}>📞 {PHONE}</a>
              <a href={`mailto:${EMAIL}`} style={{ color: 'rgba(255,255,255,0.7)' }}>✉️ {EMAIL}</a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>💬 WhatsApp</a>
              <a href={`https://maps.google.com/?q=${MAPS_QUERY}`} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }}>📍 {ADDRESS}</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '0.75rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'IG', url: 'https://instagram.com/aquashinewash' },
                { label: 'FB', url: 'https://facebook.com/aquashinewash' },
                { label: 'X', url: 'https://x.com/aquashinewash' },
                { label: 'TT', url: 'https://tiktok.com/@aquashinewash' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} AquaShine Car Wash. All rights reserved.
        </div>
      </footer>
    </>
  );
}

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
 >
 <a href="#top">
 💧 AquaShine
 </a>
 <div>
 {['Services', 'Pricing', 'Hours', 'Contact'].map((s) => (
 <a key={s} href={`#${s.toLowerCase()}`}>
 {s}
 </a>
 ))}
 <a href={`tel:${PHONE}`} className="btn">
 Call Now
 </a>
 </div>
 </nav>

 {/* ════════════ HERO ════════════ */}
 <section id="top" className="hero">
 <div>
 <span className="badge">Austin&apos;s #1 Rated Car Wash</span>
 <h1 className="heading">
 A Shine That<br />Speaks for Itself
 </h1>
 <p>
 From a quick exterior rinse to full paint correction &amp; ceramic coating — we treat every car like our own.
 </p>
 <div>
 <a href="#services" className="btn">View Services</a>
 <a href="#contact" className="btn-outline">Book Online</a>
 </div>
 </div>
 </section>

 {/* ════════════ SERVICES ════════════ */}
 <section id="services">
 <div>
 <div className="reveal">
 <span className="badge">What We Offer</span>
 <h2 className="heading">
 Our Services
 </h2>
 </div>
 <div>
 {SERVICES.map((s) => (
 <div key={s.title} className="card reveal">
 <div>{s.icon}</div>
 <h3>{s.title}</h3>
 <p>{s.desc}</p>
 <div>
 <span>{s.price}</span>
 <span>{s.duration}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ════════════ PACKAGES / MEMBERSHIP ════════════ */}
 <section id="pricing" className="section-alt">
 <div>
 <div className="reveal">
 <span className="badge">Membership Plans</span>
 <h2 className="heading">
 Save Big Every Month
 </h2>
 <p>No contracts. Cancel anytime. All plans include priority lane.</p>
 </div>
 <div>
 {PACKAGES.map((pkg) => (
 <div
 key={pkg.name}
 className="card reveal"
 >
 {pkg.highlight && (
 <span
 >
 Most Popular
 </span>
 )}
 <h3>{pkg.name}</h3>
 <div>
 <span>{pkg.price}</span>
 <span>{pkg.period}</span>
 </div>
 <ul>
 {pkg.features.map((f) => (
 <li key={f}>
 ✓&ensp;{f}
 </li>
 ))}
 </ul>
 <a href="#contact" className={pkg.highlight ? 'btn' : 'btn-outline'}>
 Get Started
 </a>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ════════════ WHY CHOOSE US ════════════ */}
 <section>
 <div>
 <div className="reveal">
 <span className="badge">Why AquaShine</span>
 <h2 className="heading">
 Built on Trust &amp; Quality
 </h2>
 </div>
 <div>
 {[
 { icon: '🏆', stat: '12+', label: 'Years Experience' },
 { icon: '🚗', stat: '50k+', label: 'Cars Washed' },
 { icon: '⭐', stat: '4.9', label: 'Google Rating' },
 { icon: '🌿', stat: '100%', label: 'Eco-Friendly Products' },
 ].map((item) => (
 <div key={item.label} className="reveal">
 <div>{item.icon}</div>
 <div>{item.stat}</div>
 <div>{item.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ════════════ HOURS & MAP ════════════ */}
 <section id="hours" className="section-alt">
 <div>
 <div className="reveal">
 <span className="badge">Find Us</span>
 <h2 className="heading">
 Hours &amp; Location
 </h2>
 </div>
 <div className="reveal">
 {/* hours card */}
 <div className="card">
 <h3>Business Hours</h3>
 {HOURS.map((h) => (
 <div key={h.day}>
 <span>{h.day}</span>
 <span>{h.time}</span>
 </div>
 ))}
 <p>
 {ADDRESS}
 <br />
 <a href={`https://maps.google.com/?q=${MAPS_QUERY}`} target="_blank" rel="noopener noreferrer">
 Get Directions
 </a>
 </p>
 <div>
 <a href={`tel:${PHONE}`} className="btn">Call</a>
 <a href={`mailto:${EMAIL}`} className="btn-outline">Email</a>
 <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
 </div>
 </div>

 {/* map embed */}
 <div>
 <iframe
 title="AquaShine Location"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAyLjAiTiA5N8KwNDQnMzUuMiJX!5e0!3m2!1sen!2sus!4v1"
 width="100%"
 height="360"

 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 allowFullScreen
 />
 </div>
 </div>
 </div>
 </section>

 {/* ════════════ FAQ ════════════ */}
 <section>
 <div>
 <div className="reveal">
 <span className="badge">FAQ</span>
 <h2 className="heading">
 Common Questions
 </h2>
 </div>
 {FAQS.map((f, i) => (
 <details key={i} className="reveal">
 <summary>
 {f.q}
 <span>+</span>
 </summary>
 <p>{f.a}</p>
 </details>
 ))}
 </div>
 </section>

 {/* ════════════ CONTACT ════════════ */}
 <section id="contact" className="section-alt">
 <div>
 <div className="reveal">
 <span className="badge">Get in Touch</span>
 <h2 className="heading">
 Book or Ask a Question
 </h2>
 <p>
 Or reach us directly:{' '}
 <a href={`tel:${PHONE}`}>{PHONE}</a>
 {' · '}
 <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
 </p>
 </div>

 <form onSubmit={handleSubmit} className="card reveal">
 <input type="hidden" name="subject" value="New inquiry from AquaShine website" />
 <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />

 <div>
 <input name="name" placeholder="Your Name" required />
 <input name="email" type="email" placeholder="Email Address" required />
 </div>
 <input name="phone" type="tel" placeholder="Phone (optional)" />
 <select name="service" defaultValue="" required>
 <option value="" disabled>Select a Service</option>
 <option value="Basic Wash">Basic Wash</option>
 <option value="Premium Wash">Premium Wash</option>
 <option value="Full Detailing">Full Detailing</option>
 <option value="Membership Inquiry">Membership Inquiry</option>
 <option value="Other">Other</option>
 </select>
 <textarea name="message" rows={4} placeholder="Tell us about your vehicle or question..." required />
 <button type="submit" className="btn" disabled={status === 'sending'}>
 {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
 </button>
 {status === 'error' && (
 <p>
 Something went wrong. Please try again or call us directly.
 </p>
 )}
 {status === 'sent' && (
 <p>
 Thanks! We&apos;ll get back to you within 1 business hour.
 </p>
 )}
 </form>
 </div>
 </section>

 {/* ════════════ FOOTER ════════════ */}
 <footer>
 <div>
 <div>
 <div>AquaShine</div>
 <p>Premium car wash &amp; detailing in the heart of Austin. Eco-friendly products, expert staff, and a shine you can trust.</p>
 </div>
 <div>
 <h4>Quick Links</h4>
 <div>
 <a href="#services">Services</a>
 <a href="#pricing">Pricing</a>
 <a href="#hours">Hours</a>
 <a href="#contact">Contact</a>
 </div>
 </div>
 <div>
 <h4>Contact</h4>
 <div>
 <a href={`tel:${PHONE}`}>{PHONE}</a>
 <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
 <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
 <a href={`https://maps.google.com/?q=${MAPS_QUERY}`} target="_blank" rel="noopener noreferrer">{ADDRESS}</a>
 </div>
 </div>
 <div>
 <h4>Follow Us</h4>
 <div>
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
 >
 {s.label}
 </a>
 ))}
 </div>
 </div>
 </div>
 <div>
 &copy; {new Date().getFullYear()} AquaShine Car Wash. All rights reserved.
 </div>
 </footer>
 </>
 );
}

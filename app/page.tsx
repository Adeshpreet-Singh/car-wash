'use client';
import { useState } from 'react';

const PACKAGES = [
  {
    name: 'Basic',
    price: '$12',
    time: '3 min',
    features: [
      'Exterior soft-cloth wash',
      'Spot-free rinse',
      'High-velocity air dry',
      'Tire and rim rinse',
    ],
  },
  {
    name: 'Deluxe',
    price: '$20',
    time: '5 min',
    features: [
      'Everything in Basic',
      'Wheel cleaning & tire shine',
      'Carnauba wax protectant',
      'Bug & tar remover',
      'Undercarriage wash',
    ],
  },
  {
    name: 'Premium',
    price: '$30',
    time: '8 min',
    features: [
      'Everything in Deluxe',
      'Interior vacuum & mat cleaning',
      'Dashboard & console wipe',
      'Window cleaning (inside & out)',
      'Air freshener',
    ],
    featured: true,
  },
  {
    name: 'Ultimate',
    price: '$45',
    time: '15 min',
    features: [
      'Everything in Premium',
      'Ceramic sealant coating',
      'Leather conditioning',
      'Full interior detail wipe',
      'Engine bay rinse',
      'Rain-repellent windshield treatment',
    ],
  },
];

const ADDONS = [
  { name: 'Engine Bay Cleaning', price: '$15' },
  { name: 'Leather Seat Conditioning', price: '$12' },
  { name: 'Pet Hair Removal', price: '$10' },
  { name: 'Headlight Restoration', price: '$20' },
  { name: 'Odor Elimination Treatment', price: '$8' },
  { name: 'Ceramic Spray Boost', price: '$10' },
  { name: 'Floor Mat Deep Clean', price: '$6' },
  { name: 'Rain-Repellent Glass Coating', price: '$15' },
];

const PLANS = [
  {
    name: 'Basic',
    price: '$19.99/mo',
    washes: 'Unlimited Basic Washes',
    perks: ['Free self-serve vacuums', 'Member fast lane'],
  },
  {
    name: 'Premium',
    price: '$29.99/mo',
    washes: 'Unlimited Deluxe Washes',
    popular: true,
    perks: [
      'Free self-serve vacuums',
      'Member fast lane',
      '10% off all add-ons',
      'Birthday month free upgrade',
    ],
  },
  {
    name: 'Elite',
    price: '$39.99/mo',
    washes: 'Unlimited Premium Washes',
    perks: [
      'Free self-serve vacuums',
      'Priority fast lane',
      '20% off all add-ons',
      'Free quarterly ceramic boost',
      'One free interior detail / year',
    ],
  },
];

const testimonials = [
  { quote: 'I have tried half a dozen car washes in Phoenix and ShineZone is hands down the fastest and cleanest. The Elite membership pays for itself by the second week. My car looks showroom fresh every time.', name: 'Marcus Thompson', location: 'Downtown Phoenix, AZ', rating: 5 },
  { quote: 'My SUV looks better than when I bought it. The ceramic sealant keeps the desert dust from sticking — I only need a rinse between full washes. The free vacuums are a lifesaver with two kids.', name: 'Priya Krishnan', location: 'Scottsdale, AZ', rating: 5 },
  { quote: 'Super convenient, super fast. I pull in on my way to work, get the Deluxe, and I am out in five minutes. The membership fast lane means zero wait. Best car wash in the Valley, period.', name: 'Daniel Reeves', location: 'Tempe, AZ', rating: 5 },
];

const FAQS = [
  {
    q: 'How long does each wash take?',
    a: 'Our Basic wash averages about 3 minutes, Deluxe takes around 5 minutes, Premium is 8 minutes, and the full Ultimate detail runs about 15 minutes. Even during peak hours, our dual-bay conveyor keeps wait times under 5 minutes.',
  },
  {
    q: 'What is included in unlimited membership plans?',
    a: 'Every plan gives you unlimited washes at your chosen tier, free self-serve vacuums, and access to our dedicated member fast lane. Higher tiers also bundle discounts on add-ons and complimentary upgrades.',
  },
  {
    q: 'Can I use my membership at multiple locations?',
    a: 'Yes. All ShineZone memberships are valid at every Phoenix-metro location. Your license plate is tied to your account, so just drive up — our system recognizes you automatically.',
  },
  {
    q: 'Are your products eco-friendly?',
    a: 'Absolutely. We reclaim and filter over 80 percent of the water we use, and every soap and sealant in our lineup is biodegradable and phosphate-free. Our conveyors are solar-powered at two of three locations.',
  },
  {
    q: 'Do you accept credit cards and mobile payments?',
    a: 'We accept all major credit and debit cards, Apple Pay, Google Pay, and Samsung Pay. Memberships are billed monthly to your card on file and can be paused or cancelled anytime from your online account.',
  },
  {
    q: 'What happens if I am not satisfied with my wash?',
    a: 'We offer a 24-hour rewash guarantee. If anything is not up to your standard, just come back within 24 hours and we will rewash your vehicle at no extra charge. No questions asked.',
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#083344] text-cyan-50">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-black px-4 py-2 rounded z-[100] font-bold"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-[#083344]/95 backdrop-blur-md border-b border-cyan-900"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold water-shimmer">ShineZone</h1>
            <p className="text-base tracking-[0.2em] text-cyan-600 uppercase">
              Car Wash — Phoenix
            </p>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button className="btn"
              onClick={() => scrollTo('packages')}
              className="text-base text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              Packages
            </button>
            <button className="btn"
              onClick={() => scrollTo('addons')}
              className="text-base text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              Add-Ons
            </button>
            <button className="btn"
              onClick={() => scrollTo('plans')}
              className="text-base text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              Plans
            </button>
            <button className="btn"
              onClick={() => scrollTo('testimonials')}
              className="text-base text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              Testimonials
            </button>
            <button className="btn"
              onClick={() => scrollTo('how')}
              className="text-base text-cyan-400 hover:text-cyan-200 transition-colors"
            >
              How It Works
            </button>
            <button className="btn"
              onClick={() => scrollTo('contact')}
              className="bg-cyan-500 text-black px-5 py-2.5 text-base font-bold rounded-full hover:bg-cyan-400 transition-colors"
            >
              Get Washed
            </button>
          </div>
        </div>
      </nav>

      <main id="main" role="main">
        {/* ---- Hero ---- */}
        <section className="hero pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4">
              Eco-Friendly — Free Vacuums — Est. 2017
            </p>
            <h2 className="heading text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-6">
              Drive clean,{' '}
              <span className="water-shimmer">every time.</span>
            </h2>
            <p className="text-xl text-cyan-300 max-w-xl mx-auto mb-10">
              ShineZone delivers a showroom-quality wash in minutes. Free
              vacuums at every bay, monthly unlimited plans, and eco-friendly
              soaps safe for every finish. Whether you commute across the Valley
              or just want your weekend ride to shine, we have you covered —
              365 days a year.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn"
                onClick={() => scrollTo('plans')}
                className="btn bg-cyan-500 text-black px-8 py-4 text-lg font-bold rounded-full hover:bg-cyan-400 transition-colors"
              >
                Monthly Plans
              </button>
              <button className="btn"
                onClick={() => scrollTo('packages')}
                className="btn-outline border-2 border-cyan-500 text-cyan-300 px-8 py-4 text-lg rounded-full hover:bg-cyan-500/10 transition-colors"
              >
                Single Wash
              </button>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="reveal py-8 bg-cyan-900/50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-cyan-400">3 min</div>
              <div className="text-xs text-cyan-600 uppercase">
                Avg Wash Time
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">50K+</div>
              <div className="text-xs text-cyan-600 uppercase">Cars Washed</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">80%</div>
              <div className="text-xs text-cyan-600 uppercase">
                Water Reclaimed
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">3</div>
              <div className="text-xs text-cyan-600 uppercase">
                Valley Locations
              </div>
            </div>
          </div>
        </section>

        {/* ---- Wash Packages ---- */}
        <section
          id="packages"
          className="reveal py-24"
          aria-labelledby="packages-heading"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="badge text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
                Our Wash Menu
              </p>
              <h2
                id="packages-heading"
                className="heading text-4xl font-black uppercase"
              >
                Wash Packages
              </h2>
              <p className="text-cyan-400 mt-3 max-w-lg mx-auto">
                From a quick express rinse to a full interior-and-exterior
                detail, every package uses pH-balanced soaps and spot-free rinse
                water. Choose the tier that fits your drive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg, i) => (
                <div
                  key={i}
                  className={`card wash-card p-8 rounded-2xl border border-cyan-800 bg-cyan-900/40 hover:border-cyan-500/40 transition-colors ${pkg.featured ? 'featured ring-2 ring-cyan-500' : ''}`}
                >
                  {pkg.featured && (
                    <div className="badge text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-black uppercase mb-1">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-black text-cyan-400 mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-cyan-600 text-sm mb-6">
                    ~{pkg.time} avg
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((f, j) => (
                      <li
                        key={j}
                        className="text-sm text-cyan-200 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Add-Ons ---- */}
        <section
          id="addons"
          className="reveal py-24 section-alt bg-cyan-900/30"
          aria-labelledby="addons-heading"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="badge text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
                Customize Your Wash
              </p>
              <h2
                id="addons-heading"
                className="heading text-4xl font-black uppercase"
              >
                Add-On Services
              </h2>
              <p className="text-cyan-400 mt-3 max-w-lg mx-auto">
                Stack any add-on to your wash package for extra protection and
                interior freshness. Ask a team member or select them at the pay
                station.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {ADDONS.map((addon, i) => (
                <div
                  key={i}
                  className="card flex justify-between items-center border border-cyan-800 rounded-xl px-6 py-4 bg-cyan-900/40 hover:border-cyan-500/30 transition-colors"
                >
                  <span className="text-cyan-200">{addon.name}</span>
                  <span className="badge text-cyan-400 font-bold">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Membership Plans ---- */}
        <section
          id="plans"
          className="reveal py-24"
          aria-labelledby="plans-heading"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="badge text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
                Save Every Month
              </p>
              <h2
                id="plans-heading"
                className="heading text-4xl font-black uppercase"
              >
                Monthly Unlimited Plans
              </h2>
              <p className="text-cyan-400 mt-3 max-w-lg mx-auto">
                Wash as often as you want — every day if you like. All plans
                include free self-serve vacuums and a dedicated member fast lane.
                Cancel or pause anytime.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PLANS.map((p, i) => (
                <div
                  key={i}
                  className={`card wash-card p-8 text-center rounded-2xl border border-cyan-800 bg-cyan-900/40 hover:border-cyan-500/40 transition-colors ${p.popular ? 'featured ring-2 ring-cyan-500' : ''}`}
                >
                  {p.popular && (
                    <div className="badge text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                  <div className="text-3xl font-black text-cyan-400 mb-2">
                    {p.price}
                  </div>
                  <p className="text-cyan-300 text-sm mb-4">{p.washes}</p>
                  <ul className="space-y-2 text-left mb-6">
                    {p.perks.map((perk, j) => (
                      <li
                        key={j}
                        className="text-sm text-cyan-200 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button className="btn w-full bg-cyan-500 text-black py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors">
                    Sign Up
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- How It Works ---- */}
        <section
          id="how"
          className="reveal py-24 section-alt bg-cyan-900/30"
          aria-labelledby="how-heading"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="badge text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
                Three Easy Steps
              </p>
              <h2
                id="how-heading"
                className="heading text-4xl font-black uppercase"
              >
                How It Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: '01',
                  title: 'Drive Up',
                  desc: 'Pull into any ShineZone bay. Our license-plate recognition identifies members automatically, so you skip the pay kiosk and head straight into the wash tunnel.',
                },
                {
                  step: '02',
                  title: 'Choose Your Wash',
                  desc: 'Select a package on the touchscreen or stay on your selected plan. Want extras like leather conditioning or ceramic boost? Tap to add them before the cycle starts.',
                },
                {
                  step: '03',
                  title: 'Roll Out Clean',
                  desc: 'Exit the tunnel in minutes with a spotless finish. Pull into a free vacuum station to clean your interior at your own pace — no time limits, no extra cost.',
                },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-6xl font-black text-cyan-800 mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Why Choose Us ---- */}
        <section
          className="reveal py-24"
          aria-labelledby="why-heading"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="badge text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
                The ShineZone Difference
              </p>
              <h2
                id="why-heading"
                className="heading text-4xl font-black uppercase"
              >
                Why Choose Us
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '⚡',
                  title: 'Fast In & Out',
                  desc: 'Dual-bay conveyors and license-plate recognition keep average wash time under 5 minutes, even at peak hours.',
                },
                {
                  icon: '♻️',
                  title: 'Eco-Friendly',
                  desc: 'We reclaim 80% of our water, use biodegradable soaps, and power two locations with rooftop solar panels.',
                },
                {
                  icon: '🛡️',
                  title: 'Finish Protection',
                  desc: 'pH-balanced formulas and ceramic sealants protect factory clear coat, vinyl wraps, and ceramic coatings alike.',
                },
                {
                  icon: '🧹',
                  title: 'Free Vacuums',
                  desc: 'Unlimited self-serve vacuum stations at every location — no tokens, no timers, no charge for members and single-wash customers.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card text-center p-8 rounded-2xl border border-cyan-800 bg-cyan-900/40 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Testimonials ---- */}
        <section
          id="testimonials"
          className="reveal py-24 section-alt bg-cyan-900/30"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="badge text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
                What Drivers Say
              </p>
              <h2
                id="testimonials-heading"
                className="heading text-4xl font-black uppercase"
              >
                Testimonials
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="card p-8 rounded-2xl border border-cyan-800 bg-cyan-900/40"
                >
                  <div className="text-yellow-400 mb-3">{'★'.repeat(t.rating)}</div>
                  <p className="text-cyan-200 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-cyan-800 pt-3">
                    <div className="font-bold">{t.name}</div>
                    <div className="text-cyan-500 text-xs">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section
          className="reveal py-24"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="badge text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
                Common Questions
              </p>
              <h2
                id="faq-heading"
                className="heading text-4xl font-black uppercase"
              >
                FAQ
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-cyan-800 rounded-xl p-6 cursor-pointer hover:border-cyan-500/30 transition-colors"
                >
                  <summary className="font-bold flex justify-between items-center list-none">
                    {faq.q}
                    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-cyan-300 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Contact & Locations ---- */}
        <section
          id="contact"
          className="reveal py-24 section-alt bg-cyan-900/30"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="badge text-cyan-400 text-xs tracking-[0.3em] uppercase mb-2">
                Get In Touch
              </p>
              <h2
                id="contact-heading"
                className="heading text-4xl font-black uppercase"
              >
                Contact & Locations
              </h2>
              <p className="text-cyan-400 mt-3 max-w-lg mx-auto">
                Three locations across the Phoenix metro area, open 7 AM to 9 PM
                every day of the year. Call, click, or just drive in.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="card bg-cyan-900/50 border border-cyan-800 rounded-xl p-8 text-center">
                <div className="text-3xl mb-3">📍</div>
                <div className="font-bold mb-1">Downtown Phoenix</div>
                <p className="text-cyan-400 text-sm">
                  1200 Speedway Blvd
                  <br />
                  Phoenix, AZ 85001
                </p>
              </div>
              <div className="card bg-cyan-900/50 border border-cyan-800 rounded-xl p-8 text-center">
                <div className="text-3xl mb-3">📍</div>
                <div className="font-bold mb-1">Scottsdale</div>
                <p className="text-cyan-400 text-sm">
                  7340 E McDowell Rd
                  <br />
                  Scottsdale, AZ 85257
                </p>
              </div>
              <div className="card bg-cyan-900/50 border border-cyan-800 rounded-xl p-8 text-center">
                <div className="text-3xl mb-3">📍</div>
                <div className="font-bold mb-1">Tempe</div>
                <p className="text-cyan-400 text-sm">
                  1940 E Apache Blvd
                  <br />
                  Tempe, AZ 85281
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-12">
              <div className="bg-cyan-900/50 border border-cyan-800 rounded-xl p-6">
                <div className="text-2xl mb-2">⏰</div>
                <div className="font-bold">Hours</div>
                <p className="text-cyan-400 text-sm">
                  Daily 7 AM – 9 PM
                  <br />
                  365 days a year
                </p>
              </div>
              <div className="bg-cyan-900/50 border border-cyan-800 rounded-xl p-6">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-bold">Call Us</div>
                <a
                  href="tel:(555) 012-3456"
                  className="text-cyan-400 hover:underline"
                >
                  (555) 012-3456
                </a>
              </div>
              <div className="bg-cyan-900/50 border border-cyan-800 rounded-xl p-6">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-bold">Email</div>
                <a
                  href="mailto:hello@shinezone.com"
                  className="text-cyan-400 hover:underline"
                >
                  hello@shinezone.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black uppercase mb-2">Send Us a Message</h3>
                <p className="text-cyan-400 text-sm">Have a question or special request? Fill out the form and we'll get back to you within 24 hours.</p>
              </div>
              {submitted ? (
                <div className="bg-cyan-900/50 border border-cyan-800 rounded-xl p-12 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-cyan-400">We'll respond to your inquiry within 24 hours.</p>
                  <button className="btn" onClick={() => setSubmitted(false)} className="mt-6 text-cyan-400 hover:text-cyan-200 underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="bg-cyan-900/50 border border-cyan-800 rounded-xl p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2 text-cyan-300">Name</label>
                      <input type="text" placeholder="Your name" required className="w-full bg-cyan-950/50 border border-cyan-800 rounded-lg px-4 py-3 text-cyan-50 placeholder-cyan-600 focus:border-cyan-500 focus:outline-none transition-colors border border-gray-300 " />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-cyan-300">Email</label>
                      <input type="email" placeholder="you@email.com" required className="w-full bg-cyan-950/50 border border-cyan-800 rounded-lg px-4 py-3 text-cyan-50 placeholder-cyan-600 focus:border-cyan-500 focus:outline-none transition-colors border border-gray-300 " />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2 text-cyan-300">Phone</label>
                      <input type="tel" placeholder="(555) 123-4567" className="w-full bg-cyan-950/50 border border-cyan-800 rounded-lg px-4 py-3 text-cyan-50 placeholder-cyan-600 focus:border-cyan-500 focus:outline-none transition-colors border border-gray-300 " />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-cyan-300">Service Type</label>
                      <select className="w-full bg-cyan-950/50 border border-cyan-800 rounded-lg px-4 py-3 text-cyan-50 focus:border-cyan-500 focus:outline-none transition-colors border border-gray-300 ">
                        <option value="">Select a service</option>
                        <option>Basic Wash</option>
                        <option>Deluxe Wash</option>
                        <option>Premium Wash</option>
                        <option>Ultimate Wash</option>
                        <option>Monthly Membership</option>
                        <option>Fleet Services</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-cyan-300">Message</label>
                    <textarea rows={4} placeholder="Tell us how we can help..." required className="w-full bg-cyan-950/50 border border-cyan-800 rounded-lg px-4 py-3 text-cyan-50 placeholder-cyan-600 focus:border-cyan-500 focus:outline-none transition-colors resize-none border border-gray-300 " />
                  </div>
                  <button type="submit" className="w-full bg-cyan-500 text-black py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-cyan-600 text-sm">
          &copy; {new Date().getFullYear()} ShineZone Car Wash. Phoenix, AZ.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}

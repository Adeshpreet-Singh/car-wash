'use client';
import { useState } from 'react';

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
  gallery1: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80',
  gallery2: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  gallery3: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
  gallery4: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80',
};

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
  { name: 'Engine Bay Cleaning', price: '$15', icon: '🔧' },
  { name: 'Leather Seat Conditioning', price: '$12', icon: '💺' },
  { name: 'Pet Hair Removal', price: '$10', icon: '🐾' },
  { name: 'Headlight Restoration', price: '$20', icon: '💡' },
  { name: 'Odor Elimination Treatment', price: '$8', icon: '🌿' },
  { name: 'Ceramic Spray Boost', price: '$10', icon: '✨' },
  { name: 'Floor Mat Deep Clean', price: '$6', icon: '🧹' },
  { name: 'Rain-Repellent Glass Coating', price: '$15', icon: '🌧️' },
];

const PLANS = [
  {
    name: 'Basic',
    price: '$19.99',
    period: '/mo',
    washes: 'Unlimited Basic Washes',
    perks: ['Free self-serve vacuums', 'Member fast lane'],
  },
  {
    name: 'Premium',
    price: '$29.99',
    period: '/mo',
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
    price: '$39.99',
    period: '/mo',
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
  {
    quote:
      'I have tried half a dozen car washes in Phoenix and ShineZone is hands down the fastest and cleanest. The Elite membership pays for itself by the second week. My car looks showroom fresh every time.',
    name: 'Marcus Thompson',
    location: 'Downtown Phoenix, AZ',
    rating: 5,
  },
  {
    quote:
      'My SUV looks better than when I bought it. The ceramic sealant keeps the desert dust from sticking — I only need a rinse between full washes. The free vacuums are a lifesaver with two kids.',
    name: 'Priya Krishnan',
    location: 'Scottsdale, AZ',
    rating: 5,
  },
  {
    quote:
      'Super convenient, super fast. I pull in on my way to work, get the Deluxe, and I am out in five minutes. The membership fast lane means zero wait. Best car wash in the Valley, period.',
    name: 'Daniel Reeves',
    location: 'Tempe, AZ',
    rating: 5,
  },
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0288d1] text-white px-4 py-2 rounded z-[100] font-bold"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold text-[#0288d1] tracking-tight">
              ShineZone
            </h1>
            <p className="text-[10px] tracking-[0.25em] text-gray-400 uppercase font-medium">
              Car Wash — Phoenix
            </p>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['packages', 'addons', 'how', 'plans', 'gallery', 'testimonials'].map(
              (id) => (
                <button
                  key={id}
                  className="text-sm text-gray-500 hover:text-[#0288d1] transition-colors font-semibold uppercase tracking-wide"
                  onClick={() => scrollTo(id)}
                >
                  {id === 'how'
                    ? 'How It Works'
                    : id === 'plans'
                    ? 'Membership'
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              )
            )}
            <button
              className="bg-[#0288d1] text-white px-5 py-2.5 text-sm font-bold rounded-full hover:bg-[#0277bd] transition-colors shadow-lg shadow-[#0288d1]/20"
              onClick={() => scrollTo('contact')}
            >
              Get Washed
            </button>
          </div>
        </div>
      </nav>

      <main id="main" role="main">
        {/* ============ HERO ============ */}
        <section className="pt-24 bg-gradient-to-br from-[#e1f5fe] via-white to-[#f0f9ff] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0288d1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#0288d1] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Eco-Friendly — Free Vacuums — Est. 2017
                </p>
                <h2 className="heading text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-6 text-gray-900">
                  Drive clean,{' '}
                  <span className="text-[#0288d1]">every time.</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-lg mb-8 font-['Work_Sans'] leading-relaxed">
                  ShineZone delivers a showroom-quality wash in minutes. Free
                  vacuums at every bay, monthly unlimited plans, and eco-friendly
                  soaps safe for every finish. Whether you commute across the
                  Valley or just want your weekend ride to shine, we have you
                  covered — 365 days a year.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    className="bg-[#0288d1] text-white px-8 py-4 text-base font-bold rounded-full hover:bg-[#0277bd] transition-all shadow-xl shadow-[#0288d1]/25 hover:shadow-2xl hover:shadow-[#0288d1]/30 hover:-translate-y-0.5"
                    onClick={() => scrollTo('plans')}
                  >
                    Monthly Plans
                  </button>
                  <button
                    className="border-2 border-[#0288d1] text-[#0288d1] px-8 py-4 text-base font-bold rounded-full hover:bg-[#0288d1] hover:text-white transition-all"
                    onClick={() => scrollTo('packages')}
                  >
                    Single Wash
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#0288d1]/15 border-4 border-white">
                  <img
                    src={IMAGES.hero}
                    alt="Clean car after professional wash at ShineZone"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 border border-gray-100">
                  <div className="text-2xl font-black text-[#0288d1]">50K+</div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    Cars Washed
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full">
              <path
                d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* ============ STATS BAR ============ */}
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '3 min', label: 'Avg Wash Time' },
              { value: '50K+', label: 'Cars Washed' },
              { value: '80%', label: 'Water Reclaimed' },
              { value: '3', label: 'Valley Locations' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-[#0288d1]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ WASH PACKAGES ============ */}
        <section
          id="packages"
          className="py-24 bg-white"
          aria-labelledby="packages-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#0288d1] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Our Wash Menu
              </p>
              <h2
                id="packages-heading"
                className="heading text-4xl md:text-5xl font-black uppercase text-gray-900"
              >
                Wash Packages
              </h2>
              <p className="text-gray-500 mt-4 max-w-lg mx-auto font-['Work_Sans']">
                From a quick express rinse to a full interior-and-exterior detail,
                every package uses pH-balanced soaps and spot-free rinse water.
                Choose the tier that fits your drive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg, i) => (
                <div
                  key={i}
                  className={`card bg-white rounded-2xl border-2 p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                    pkg.featured
                      ? 'border-[#0288d1] shadow-lg shadow-[#0288d1]/10 ring-2 ring-[#0288d1]/20'
                      : 'border-gray-100 hover:border-[#0288d1]/30'
                  }`}
                >
                  {pkg.featured && (
                    <div className="bg-[#0288d1] text-white text-[10px] font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-black uppercase text-gray-900 mb-1">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-[#0288d1]">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm mb-6 font-['Work_Sans']">
                    ~{pkg.time} avg
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((f, j) => (
                      <li
                        key={j}
                        className="text-sm text-gray-600 flex items-start gap-2 font-['Work_Sans']"
                      >
                        <span className="text-[#0288d1] mt-0.5 font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-6 w-full py-3 rounded-full font-bold text-sm transition-all ${
                      pkg.featured
                        ? 'bg-[#0288d1] text-white hover:bg-[#0277bd] shadow-lg shadow-[#0288d1]/20'
                        : 'bg-[#e1f5fe] text-[#0288d1] hover:bg-[#0288d1] hover:text-white'
                    }`}
                  >
                    Select Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ADD-ON SERVICES ============ */}
        <section
          id="addons"
          className="py-24 bg-[#f0f9ff]"
          aria-labelledby="addons-heading"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#0288d1] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Customize Your Wash
              </p>
              <h2
                id="addons-heading"
                className="heading text-4xl md:text-5xl font-black uppercase text-gray-900"
              >
                Add-On Services
              </h2>
              <p className="text-gray-500 mt-4 max-w-lg mx-auto font-['Work_Sans']">
                Stack any add-on to your wash package for extra protection and
                interior freshness. Ask a team member or select them at the pay
                station.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ADDONS.map((addon, i) => (
                <div
                  key={i}
                  className="bg-white flex flex-col items-center text-center border border-gray-100 rounded-xl px-5 py-6 hover:border-[#0288d1]/30 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <div className="text-3xl mb-3">{addon.icon}</div>
                  <span className="text-gray-700 font-semibold text-sm mb-2 font-['Work_Sans']">
                    {addon.name}
                  </span>
                  <span className="text-[#0288d1] font-black text-lg">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS (3 STEPS) ============ */}
        <section
          id="how"
          className="py-24 bg-white"
          aria-labelledby="how-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#0288d1] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Three Easy Steps
              </p>
              <h2
                id="how-heading"
                className="heading text-4xl md:text-5xl font-black uppercase text-gray-900"
              >
                How It Works
              </h2>
              <p className="text-gray-500 mt-4 max-w-lg mx-auto font-['Work_Sans']">
                Getting your car cleaned at ShineZone is as easy as drive, choose,
                and roll out. No appointments needed — just show up.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#0288d1]/20 via-[#0288d1]/40 to-[#0288d1]/20" />
              {[
                {
                  step: '01',
                  title: 'Drive Up',
                  desc: 'Pull into any ShineZone bay. Our license-plate recognition identifies members automatically, so you skip the pay kiosk and head straight into the wash tunnel.',
                  icon: '🚗',
                },
                {
                  step: '02',
                  title: 'Choose Your Wash',
                  desc: 'Select a package on the touchscreen or stay on your selected plan. Want extras like leather conditioning or ceramic boost? Tap to add them before the cycle starts.',
                  icon: '📱',
                },
                {
                  step: '03',
                  title: 'Roll Out Clean',
                  desc: 'Exit the tunnel in minutes with a spotless finish. Pull into a free vacuum station to clean your interior at your own pace — no time limits, no extra cost.',
                  icon: '✨',
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center bg-[#f0f9ff] rounded-2xl p-8 border border-gray-100 relative hover:border-[#0288d1]/30 transition-all"
                >
                  <div className="w-16 h-16 bg-[#0288d1] rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4 shadow-lg shadow-[#0288d1]/25 relative z-10">
                    {s.step}
                  </div>
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Outfit']">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-['Work_Sans']">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ GALLERY ============ */}
        <section
          id="gallery"
          className="py-24 bg-[#f0f9ff]"
          aria-labelledby="gallery-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#0288d1] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                See The Shine
              </p>
              <h2
                id="gallery-heading"
                className="heading text-4xl md:text-5xl font-black uppercase text-gray-900"
              >
                Our Work
              </h2>
              <p className="text-gray-500 mt-4 max-w-lg mx-auto font-['Work_Sans']">
                Every car that rolls out of ShineZone leaves with a mirror-like
                finish. Browse some of our recent washes and details.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: IMAGES.gallery1, alt: 'Spotless sedan after ShineZone Premium wash' },
                { src: IMAGES.gallery2, alt: 'Detailed SUV with ceramic coating and tire shine' },
                { src: IMAGES.gallery3, alt: 'Sports car with gleaming paint after Ultimate detail' },
                { src: IMAGES.gallery4, alt: 'Clean vehicle interior after vacuum and wipe service' },
              ].map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border-2 border-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ MEMBERSHIP PLANS ============ */}
        <section
          id="plans"
          className="py-24 bg-white"
          aria-labelledby="plans-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#0288d1] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Save Every Month
              </p>
              <h2
                id="plans-heading"
                className="heading text-4xl md:text-5xl font-black uppercase text-gray-900"
              >
                Monthly Unlimited Plans
              </h2>
              <p className="text-gray-500 mt-4 max-w-lg mx-auto font-['Work_Sans']">
                Wash as often as you want — every day if you like. All plans
                include free self-serve vacuums and a dedicated member fast lane.
                Cancel or pause anytime.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PLANS.map((p, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border-2 p-8 text-center transition-all hover:-translate-y-1 ${
                    p.popular
                      ? 'border-[#0288d1] bg-gradient-to-b from-[#e1f5fe] to-white shadow-xl shadow-[#0288d1]/10 ring-2 ring-[#0288d1]/20 relative'
                      : 'border-gray-100 bg-white hover:border-[#0288d1]/30 hover:shadow-xl'
                  }`}
                >
                  {p.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0288d1] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-4xl font-black text-[#0288d1]">
                      {p.price}
                    </span>
                    <span className="text-gray-400 font-semibold">
                      {p.period}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 font-['Work_Sans'] font-medium">
                    {p.washes}
                  </p>
                  <ul className="space-y-3 text-left mb-8">
                    {p.perks.map((perk, j) => (
                      <li
                        key={j}
                        className="text-sm text-gray-600 flex items-start gap-2 font-['Work_Sans']"
                      >
                        <span className="text-[#0288d1] mt-0.5 font-bold">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3.5 rounded-full font-bold text-sm transition-all ${
                      p.popular
                        ? 'bg-[#0288d1] text-white hover:bg-[#0277bd] shadow-lg shadow-[#0288d1]/20'
                        : 'bg-[#e1f5fe] text-[#0288d1] hover:bg-[#0288d1] hover:text-white'
                    }`}
                  >
                    Sign Up Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section
          id="testimonials"
          className="py-24 bg-[#f0f9ff]"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#0288d1] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                What Drivers Say
              </p>
              <h2
                id="testimonials-heading"
                className="heading text-4xl md:text-5xl font-black uppercase text-gray-900"
              >
                Testimonials
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <div className="text-yellow-400 mb-3 text-lg">
                    {'★'.repeat(t.rating)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-['Work_Sans'] italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-[#0288d1] text-xs font-semibold">
                      {t.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section
          className="py-24 bg-white"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#0288d1] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Common Questions
              </p>
              <h2
                id="faq-heading"
                className="heading text-4xl md:text-5xl font-black uppercase text-gray-900"
              >
                FAQ
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-gray-200 rounded-xl px-6 cursor-pointer hover:border-[#0288d1]/30 transition-colors"
                >
                  <summary className="font-bold flex justify-between items-center list-none py-5 text-gray-900 font-['Outfit']">
                    {faq.q}
                    <span className="text-[#0288d1] text-2xl group-open:rotate-45 transition-transform ml-4 flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-gray-500 leading-relaxed font-['Work_Sans']">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ LOCATION & HOURS ============ */}
        <section
          id="contact"
          className="py-24 bg-gradient-to-br from-[#0288d1] to-[#01579b] text-white"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#b3e5fc] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Get In Touch
              </p>
              <h2
                id="contact-heading"
                className="heading text-4xl md:text-5xl font-black uppercase"
              >
                Contact & Locations
              </h2>
              <p className="text-[#b3e5fc] mt-4 max-w-lg mx-auto font-['Work_Sans']">
                Three locations across the Phoenix metro area, open 7 AM to 9 PM
                every day of the year. Call, click, or just drive in.
              </p>
            </div>

            {/* Locations */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: 'Downtown Phoenix',
                  addr: '1200 Speedway Blvd',
                  city: 'Phoenix, AZ 85001',
                },
                {
                  name: 'Scottsdale',
                  addr: '7340 E McDowell Rd',
                  city: 'Scottsdale, AZ 85257',
                },
                {
                  name: 'Tempe',
                  addr: '1940 E Apache Blvd',
                  city: 'Tempe, AZ 85281',
                },
              ].map((loc, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 transition-colors"
                >
                  <div className="text-3xl mb-3">📍</div>
                  <div className="font-bold text-lg mb-1">{loc.name}</div>
                  <p className="text-[#b3e5fc] text-sm font-['Work_Sans']">
                    {loc.addr}
                    <br />
                    {loc.city}
                  </p>
                </div>
              ))}
            </div>

            {/* Hours / Phone / Email */}
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl mb-2">⏰</div>
                <div className="font-bold">Hours</div>
                <p className="text-[#b3e5fc] text-sm font-['Work_Sans']">
                  Daily 7 AM – 9 PM
                  <br />
                  365 days a year
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-bold">Call Us</div>
                <a
                  href="tel:(555) 012-3456"
                  className="text-[#b3e5fc] hover:text-white transition-colors font-['Work_Sans']"
                >
                  (555) 012-3456
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-bold">Email</div>
                <a
                  href="mailto:hello@shinezone.com"
                  className="text-[#b3e5fc] hover:text-white transition-colors font-['Work_Sans']"
                >
                  hello@shinezone.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black uppercase mb-2">
                  Send Us a Message
                </h3>
                <p className="text-[#b3e5fc] text-sm font-['Work_Sans']">
                  Have a question or special request? Fill out the form and we will
                  get back to you within 24 hours.
                </p>
              </div>
              {submitted ? (
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-12 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-[#b3e5fc]">
                    We will respond to your inquiry within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#b3e5fc] hover:text-white underline transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2 text-[#b3e5fc] font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-[#b3e5fc] font-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2 text-[#b3e5fc] font-semibold">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-[#b3e5fc] font-semibold">
                        Service Type
                      </label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors">
                        <option value="" className="text-gray-900">
                          Select a service
                        </option>
                        <option className="text-gray-900">Basic Wash</option>
                        <option className="text-gray-900">Deluxe Wash</option>
                        <option className="text-gray-900">Premium Wash</option>
                        <option className="text-gray-900">Ultimate Wash</option>
                        <option className="text-gray-900">Monthly Membership</option>
                        <option className="text-gray-900">Fleet Services</option>
                        <option className="text-gray-900">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-[#b3e5fc] font-semibold">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can help..."
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-[#0288d1] py-4 rounded-lg font-bold text-lg hover:bg-[#e1f5fe] transition-colors shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#0a1628] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-extrabold text-[#0288d1] mb-2">
                ShineZone
              </h4>
              <p className="text-gray-400 text-sm font-['Work_Sans']">
                Premium car wash and detailing services across the Phoenix metro
                area. Eco-friendly, fast, and always spotless.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-3 uppercase text-sm tracking-wider">
                Services
              </h5>
              <ul className="space-y-2 text-gray-400 text-sm font-['Work_Sans']">
                <li>Basic Wash</li>
                <li>Deluxe Wash</li>
                <li>Premium Wash</li>
                <li>Ultimate Detail</li>
                <li>Add-On Services</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-3 uppercase text-sm tracking-wider">
                Company
              </h5>
              <ul className="space-y-2 text-gray-400 text-sm font-['Work_Sans']">
                <li>About Us</li>
                <li>Locations</li>
                <li>Careers</li>
                <li>Franchise</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-3 uppercase text-sm tracking-wider">
                Connect
              </h5>
              <ul className="space-y-2 text-gray-400 text-sm font-['Work_Sans']">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter / X</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm font-['Work_Sans']">
            &copy; {new Date().getFullYear()} ShineZone Car Wash. Phoenix, AZ.
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

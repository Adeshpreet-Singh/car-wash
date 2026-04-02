"use client";

import { useState, useEffect } from "react";

const services = [
  { name: "Basic Wash", price: "$15", time: "15 min", icon: "🚗", desc: "Exterior wash & dry" },
  { name: "Deluxe Wash", price: "$35", time: "30 min", icon: "✨", desc: "Interior & exterior detail" },
  { name: "Full Detail", price: "$85", time: "90 min", icon: "💎", desc: "Premium inside & out" },
  { name: "Ceramic Coating", price: "$299", time: "4 hours", icon: "🛡️", desc: "Long-lasting protection" },
];

const features = [
  { icon: "💧", title: "Eco-Friendly", desc: "Water-saving technology" },
  { icon: "⚡", title: "Fast Service", desc: "Express wash available" },
  { icon: "🌿", title: "Green Products", desc: "Biodegradable soaps" },
  { icon: "📱", title: "App Booking", desc: "Schedule online" },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", car: "", message: "" });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking confirmed! We'll send you a confirmation text.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-cyan-100">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">💧</span>
            </div>
            <span className="text-xl font-bold text-cyan-700 tracking-wider">SPARKLE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Booking", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-gray-600 hover:text-cyan-600 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection("booking")} 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 via-white to-blue-100/50" />
        
        {/* Floating Water Droplets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl"
            style={{ 
              top: '15%', 
              left: '15%',
              transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` 
            }}
          />
          <div 
            className="absolute w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl"
            style={{ 
              bottom: '15%', 
              right: '15%',
              transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)` 
            }}
          />
        </div>

        {/* Water Droplet Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-20 text-3xl animate-bounce">💧</div>
          <div className="absolute top-60 right-32 text-2xl animate-bounce delay-300">💦</div>
          <div className="absolute bottom-40 left-40 text-3xl animate-bounce delay-700">✨</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-8">
              <span className="text-cyan-600">✨</span>
              <span className="text-cyan-700 text-sm font-medium">Eco-Friendly Wash</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Shine<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Bright</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Premium car wash experience with eco-friendly products. 
              Your car deserves the best care, and so does our planet.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("booking")} 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-105"
              >
                Book Now
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all"
              >
                View Services
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">50K+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Cars Washed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">4.9★</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">15min</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Express Wash</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80" 
                alt="Car wash" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💧</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Water Saving</div>
                  <div className="text-sm text-gray-500">80% less water</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-600 text-sm tracking-[0.3em] uppercase mb-4 block">Our Services</span>
            <h2 className="text-5xl font-bold text-gray-800">Wash Packages</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-cyan-100 hover:border-cyan-300"
              >
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <div className="flex justify-between items-center pt-4 border-t border-cyan-200">
                  <span className="text-cyan-600 font-bold text-xl">{service.price}</span>
                  <span className="text-gray-500 text-sm">{service.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-32 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-200 text-sm tracking-[0.3em] uppercase mb-4 block">Why Choose Us</span>
            <h2 className="text-5xl font-bold">Sparkle Difference</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 rounded-2xl p-8 text-center hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <span className="text-5xl mb-6 block">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-cyan-200 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-32 bg-[#f0fdfa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-600 text-sm tracking-[0.3em] uppercase mb-4 block">Get Started</span>
            <h2 className="text-5xl font-bold text-gray-800">Book Your Wash</h2>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-cyan-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all"
                  placeholder="Your name"
                  required
                />
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all"
                >
                  <option value="">Select service</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.name}>{s.name} - {s.price}</option>
                  ))}
                </select>
                <input 
                  type="text" 
                  value={formData.car}
                  onChange={(e) => setFormData({...formData, car: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all"
                  placeholder="Car model"
                />
              </div>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all resize-none"
                placeholder="Special requests..."
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-[1.02]"
              >
                Book Appointment
              </button>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">📍</span>
              <p className="text-gray-600">123 Clean Street<br />Sparkle District, CA 90210</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">📞</span>
              <p className="text-gray-600">+1 (555) 234-5678</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">🕐</span>
              <p className="text-gray-600">Mon-Sun: 8AM - 8PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white">💧</span>
              </div>
              <span className="text-xl font-bold tracking-wider">SPARKLE WASH</span>
            </div>
            <div className="flex gap-6">
              {["Instagram", "Facebook", "Google"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2026 Sparkle Car Wash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
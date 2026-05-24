import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Leaf, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Footer() {
  const quickLinks = [
    { label: 'All Products', to: '/products' },
    { label: 'Our Story', to: '/#our-story' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/faq' },
    { label: 'Order Success', to: '/order-success' },
  ];

  const categoryLinks = [
    { label: 'Pickles', to: '/category/pickles' },
    { label: 'Murabba', to: '/category/murabba' },
    { label: 'Juices', to: '/category/juices' },
    { label: 'Organic Honey', to: '/category/honey' },
    { label: 'Powders', to: '/category/organic-powders' },
    { label: 'Gift Boxes', to: '/category/gift-boxes' },
  ];

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const certBadges = [
    'FSSAI Certified',
    '100% Organic',
    'Non-GMO',
    'Chemical Free',
  ];

  return (
    <footer className="relative bg-[#0f1e14] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1686150569507-e41a64f92d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1e14]/80 via-[#0f1e14]/60 to-[#0f1e14]" />
      </div>

      {/* Top green accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#4a6741]/60 to-transparent" />

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 group mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-white font-serif text-lg leading-none">Doon Gooseberry</p>
                <p className="text-[#4a6741] text-xs tracking-wide">Farm</p>
              </div>
            </Link>
            <p className="text-white/45 text-sm mb-6 leading-relaxed max-w-xs">
              Three decades of preserving Himalayan traditions. Every jar crafted with mountain-grown ingredients and ancestral recipes.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#4a6741] hover:border-[#4a6741] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={(e) => {
                      if (to.startsWith('/#')) {
                        const id = to.replace('/#', '');
                        const element = document.getElementById(id);
                        if (element) {
                          e.preventDefault();
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="group flex items-center gap-2 text-white/45 hover:text-[#d4a533] text-sm transition-colors duration-300"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Shop by Category</h3>
            <ul className="space-y-2.5">
              {categoryLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-white/45 hover:text-[#d4a533] text-sm transition-colors duration-300"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Get In Touch</h3>
            <ul className="space-y-4 mb-7">
              <li className="flex items-start gap-3 text-sm text-white/45">
                <MapPin className="w-4 h-4 shrink-0 text-[#4a6741] mt-0.5" />
                <span>Doon Valley, Uttarakhand, India 248001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/45">
                <Phone className="w-4 h-4 shrink-0 text-[#4a6741]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/45">
                <Mail className="w-4 h-4 shrink-0 text-[#4a6741]" />
                <span>hello@doongooseberry.com</span>
              </li>
            </ul>

            {/* Mini newsletter */}
            <div className="p-4 rounded-xl bg-white/4 border border-white/8">
              <p className="text-white text-xs font-semibold mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/8 border border-white/10 text-white text-xs placeholder-white/30 focus:outline-none focus:border-[#4a6741]/50 transition-colors"
                />
                <motion.button
                  className="px-3 py-2 bg-[#4a6741] hover:bg-[#5a7851] text-white rounded-lg text-xs font-semibold transition-colors shrink-0"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications bar */}
      <div className="border-t border-white/6 relative z-10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {certBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-white/35 text-xs">
                <CheckCircle className="w-3.5 h-3.5 text-[#4a6741]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 relative z-10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/28">
            <span>© 2024 Doon Gooseberry Farm. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <Link to="/faq" className="hover:text-white/55 transition-colors">Privacy Policy</Link>
              <Link to="/faq" className="hover:text-white/55 transition-colors">Terms of Service</Link>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                <span>Delivering across India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

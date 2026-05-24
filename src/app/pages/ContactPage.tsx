import { MapPin, Phone, Mail, Clock, Send, Leaf } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TiltCard } from '../components/effects/TiltCard';
import { MagneticButton } from '../components/effects/MagneticButton';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { ScrollReveal } from '../components/animations/ScrollReveal';

export function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['Doon Valley, Uttarakhand', 'India 248001'],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['hello@organicfarmfresh.com', 'support@organicfarmfresh.com'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  const faqs = [
    {
      question: 'Do you ship pan-India?',
      answer: 'Yes! We deliver to all major cities across India with free shipping on orders above ₹999.',
    },
    {
      question: 'Are your products certified organic?',
      answer: 'Absolutely. All our products are certified organic by National Organic Standards.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy for unopened products. Customer satisfaction is our priority.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1755353545156-ae3525d9b676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Organic farm lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2b]/85 to-[#0d1f18]/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[rgba(212,165,51,0.35)] backdrop-blur-sm mb-5">
              <Leaf className="w-3.5 h-3.5 text-[#d4a533]" />
              <span className="text-[#d4a533] text-xs font-semibold tracking-[0.15em] uppercase">We're Here to Help</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-3"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out with any questions or feedback.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-3xl text-[#2a2a2a] mb-6">Send Us a Message</h2>
              <form className="glass-card rounded-2xl p-8 space-y-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]">
                  <option>General Inquiry</option>
                  <option>Product Question</option>
                  <option>Order Support</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                />
              </div>
              <MagneticButton strength={0.25}>
                <GlowEffect glowColor="#1c3a2b" intensity={30}>
                  <RippleButton className="w-full px-10 py-5 bg-gradient-to-r from-[#1c3a2b] to-[#2a4a3b] hover:from-[#2a4a3b] hover:to-[#1c3a2b] text-white rounded-full font-semibold transition-all duration-500 flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(28,58,43,0.3)] hover:shadow-[0_12px_40px_rgba(28,58,43,0.5)]">
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                    Send Message
                  </RippleButton>
                </GlowEffect>
              </MagneticButton>
            </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="font-serif text-3xl text-[#2a2a2a] mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-5 bg-white rounded-[24px] py-6 px-7 shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-[#f0ebe1] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-[50px] h-[50px] bg-[#4a6741] rounded-full flex items-center justify-center text-white shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[1.1rem] text-[#1c2a1f] mb-1">{info.title}</h3>
                      <div className="space-y-0.5">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-[#6b6560] text-[15px]">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <motion.div
                className="bg-gradient-to-r from-[#4a6741] to-[#364d2f] rounded-[24px] py-8 px-7 text-white text-center flex flex-col items-center justify-center shadow-[0_12px_32px_rgba(74,103,65,0.25)] relative overflow-hidden group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#d4a533]/50 animate-pulse" />
                <div className="w-14 h-14 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-1.5">Visit Our Farm</h3>
                <p className="text-white/80 text-[15px] mb-6">
                  Experience organic farming firsthand
                </p>
                <RippleButton className="px-8 py-3 bg-white text-[#4a6741] rounded-full font-semibold hover:bg-[#f5f0e8] transition-colors shadow-md text-[15px]">
                  Get Directions
                </RippleButton>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Preview */}
        <ScrollReveal delay={0.3}>
          <div className="glass-card rounded-3xl p-12 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl text-[#2a2a2a]">Frequently Asked Questions</h2>
              <Link
                to="/faq"
                className="text-[#1c3a2b] font-semibold hover:text-[#4a6741] transition-colors link-underline"
              >
                View All FAQs →
              </Link>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-6 border-b border-[rgba(139,125,107,0.1)] last:border-0">
                  <h3 className="font-semibold text-lg text-[#2a2a2a] mb-2">{faq.question}</h3>
                  <p className="text-[#6b6560]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

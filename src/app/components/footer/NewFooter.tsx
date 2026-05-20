import { motion } from "motion/react";
import { Leaf, Mail, Phone, Clock, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { CreditCard, Smartphone } from "lucide-react";

export default function NewFooter() {
  const quickLinks = [
    { label: "Shop", href: "#" },
    { label: "Categories", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Recipes", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" }
  ];

  const supportLinks = [
    { label: "Shipping Policy", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Support Center", href: "#" }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", count: "12.5K", href: "#" },
    { icon: Facebook, label: "Facebook", count: "8.2K", href: "#" },
    { icon: Youtube, label: "YouTube", count: "5.1K", href: "#" },
    { icon: Twitter, label: "Twitter", count: "3.4K", href: "#" }
  ];

  const paymentMethods = [
    { name: "Visa", icon: CreditCard },
    { name: "Mastercard", icon: CreditCard },
    { name: "UPI", icon: Smartphone },
    { name: "Google Pay", icon: Smartphone }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhiOWQ4MyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Story - Larger Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Leaf className="w-10 h-10 text-primary" />
                </motion.div>
                <span className="text-3xl font-serif text-foreground">Organic Farm Fresh</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Since 1998, we've been bringing the finest organic produce from our family farms
                to your table. Every product is handpicked, chemical-free, and filled with the
                goodness nature intended.
              </p>

              <div className="p-6 rounded-2xl mb-6" style={{ backgroundColor: 'rgba(74, 103, 65, 0.05)', border: '1px solid rgba(74, 103, 65, 0.1)' }}>
                <p className="text-foreground italic text-lg mb-2">
                  "Freshness you can trust, quality you can taste."
                </p>
                <p className="text-sm text-muted-foreground">— John Anderson, Founder</p>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Get Fresh Offers & Recipes</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border outline-none focus:border-primary transition-colors"
                    style={{ borderColor: 'rgba(139, 125, 107, 0.2)' }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-primary text-white rounded-xl font-semibold"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Customer Support */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Support</h3>
              <ul className="space-y-3 mb-6">
                {supportLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@farmfresh.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat, 9AM-6PM</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social & Community */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Join Our Community</h3>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-4 rounded-xl border backdrop-blur-sm transition-all"
                    style={{
                      backgroundColor: 'rgba(74, 103, 65, 0.05)',
                      borderColor: 'rgba(74, 103, 65, 0.15)'
                    }}
                  >
                    <social.icon className="w-5 h-5 text-primary mb-2" />
                    <div className="text-xs text-muted-foreground">{social.label}</div>
                    <div className="text-sm font-semibold text-foreground">{social.count}</div>
                  </motion.a>
                ))}
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">We Accept</h4>
                <div className="flex flex-wrap gap-3">
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="p-3 rounded-lg border"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderColor: 'rgba(139, 125, 107, 0.2)'
                      }}
                    >
                      <method.icon className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: 'rgba(139, 125, 107, 0.15)' }}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© 2024 Organic Farm Fresh.</span>
              <span className="hidden md:inline">Made with</span>
              <span className="text-primary">❤️</span>
              <span className="hidden md:inline">in India</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Delivering across India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

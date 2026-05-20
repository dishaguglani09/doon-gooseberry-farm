import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: "Fruits & Vegetables", href: "#" },
      { name: "Dairy Products", href: "#" },
      { name: "Homemade Goods", href: "#" },
      { name: "Organic Staples", href: "#" },
      { name: "Beverages", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Story", href: "#" },
      { name: "Farm Partners", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Careers", href: "#" }
    ],
    support: [
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Track Order", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-8 h-8 text-primary" />
                <span className="text-2xl font-serif text-foreground">Organic Farm Fresh</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bringing you the finest organic products from local farms to your table.
                Committed to quality, sustainability, and community.
              </p>
            </motion.div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Farm Road, Green Valley, CA 94000</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@organicfarmfresh.com</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-8 bg-white rounded border border-border flex items-center justify-center text-xs font-medium">
                  VISA
                </div>
                <div className="w-12 h-8 bg-white rounded border border-border flex items-center justify-center text-xs font-medium">
                  MC
                </div>
                <div className="w-12 h-8 bg-white rounded border border-border flex items-center justify-center text-xs font-medium">
                  AMEX
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-primary">🌿 USDA Organic</span>
                </div>
                <div className="bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-primary">✓ Non-GMO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Organic Farm Fresh. All rights reserved. Made with ❤️ for a healthier planet.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

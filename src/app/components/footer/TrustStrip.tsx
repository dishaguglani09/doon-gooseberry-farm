import { motion } from "motion/react";
import { ShieldCheck, Leaf, Package, CreditCard } from "lucide-react";

export default function TrustStrip() {
  const certifications = [
    {
      icon: ShieldCheck,
      title: "Organic Certified",
      description: "100% Authentic",
      color: "#10b981"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable Packaging",
      color: "#4a6741"
    },
    {
      icon: Package,
      title: "Farm Fresh",
      description: "Daily Harvest Guarantee",
      color: "#f59e0b"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "SSL Protected",
      color: "#8b5cf6"
    }
  ];

  return (
    <section className="py-12 border-t" style={{ borderColor: 'rgba(139, 125, 107, 0.1)' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl backdrop-blur-md"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                border: '1px solid rgba(139, 125, 107, 0.15)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
              }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    `0 0 20px 0px ${cert.color}40`,
                    `0 0 30px 5px ${cert.color}20`,
                    `0 0 20px 0px ${cert.color}40`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 p-4 rounded-full"
                style={{ backgroundColor: `${cert.color}15` }}
              >
                <cert.icon className="w-8 h-8" style={{ color: cert.color }} />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

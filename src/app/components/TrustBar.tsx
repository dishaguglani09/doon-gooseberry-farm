import { useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Leaf, Users, Calendar, Truck } from "lucide-react";
import { useRef } from "react";

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const trustItems = [
    {
      icon: Leaf,
      label: "100% Natural",
      value: 100,
      suffix: "%",
      description: "Pure ingredients"
    },
    {
      icon: Users,
      label: "10,000+ Happy Customers",
      value: 10000,
      suffix: "+",
      description: "Families served"
    },
    {
      icon: Calendar,
      label: "Since 1995",
      value: 1995,
      suffix: "",
      description: "Years of heritage"
    },
    {
      icon: Truck,
      label: "Free Shipping ₹500+",
      value: 500,
      prefix: "₹",
      suffix: "+",
      description: "Pan India delivery"
    }
  ];

  const Counter = ({ value, prefix = "", suffix = "", duration = 2 }: { value: number; prefix?: string; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(value * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }, [isInView, value, duration]);

    return (
      <span className="font-display text-3xl lg:text-4xl text-cream">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--earth)' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA4IiAvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              className="text-center relative"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                className="inline-flex p-4 rounded-2xl mb-4"
                style={{
                  backgroundColor: 'rgba(212, 165, 51, 0.15)',
                  border: '1px solid rgba(212, 165, 51, 0.3)'
                }}
              >
                <item.icon className="w-8 h-8 text-amla-gold" />
              </motion.div>

              {/* Counter */}
              <div className="mb-2">
                <Counter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  duration={2.5}
                />
              </div>

              {/* Label */}
              <h3 className="text-lg font-sans font-semibold text-cream mb-1">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-sm" style={{ color: 'rgba(245, 240, 232, 0.7)' }}>
                {item.description}
              </p>

              {/* Separator (except last item) */}
              {index < trustItems.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-24 -translate-y-1/2" style={{ backgroundColor: 'rgba(245, 240, 232, 0.15)' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Truck, Leaf, ShieldCheck, X } from "lucide-react";

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const announcements = [
    {
      icon: Truck,
      text: "Free Delivery on Orders Above ₹999",
      highlight: "Free Delivery"
    },
    {
      icon: Leaf,
      text: "Freshly Harvested Every Morning",
      highlight: "Freshly Harvested"
    },
    {
      icon: ShieldCheck,
      text: "100% Organic & Chemical Free",
      highlight: "100% Organic"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  if (!isVisible) return null;

  const current = announcements[currentIndex];

  return (
    <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4a6741, #5a7851, #4a6741)' }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-11">
          <div className="flex-1" />

          <div className="flex items-center justify-center gap-3 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-white"
              >
                <current.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{current.text}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-1 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="p-1.5 rounded-full transition-colors"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <X className="w-3.5 h-3.5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-1">
        {announcements.map((_, index) => (
          <motion.div
            key={index}
            className="h-0.5 rounded-full"
            style={{
              width: '24px',
              backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)'
            }}
            animate={{
              backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}

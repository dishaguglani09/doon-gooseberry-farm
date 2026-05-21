import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
    >
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="block"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#00c950] border-2 border-white rounded-full" />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-full shadow-lg border border-[rgba(139,125,107,0.2)]"
              >
                <span className="text-sm font-medium text-[#2a2a2a]">Chat on WhatsApp</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </a>
    </motion.div>
  );
}

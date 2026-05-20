import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone, ShoppingBag, HelpCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappNumber = "+919876543210"; // Replace with actual WhatsApp business number

  const quickActions = [
    {
      icon: ShoppingBag,
      label: "Order via WhatsApp",
      message: "Hi! I'd like to place an order",
      color: "#10b981"
    },
    {
      icon: HelpCircle,
      label: "Product Inquiry",
      message: "Hi! I have a question about your products",
      color: "#3b82f6"
    },
    {
      icon: Phone,
      label: "Talk to Expert",
      message: "Hi! I'd like to speak with a wellness expert",
      color: "#8b5cf6"
    }
  ];

  const handleWhatsAppClick = (message?: string) => {
    const encodedMessage = encodeURIComponent(message || "Hi! I'm interested in your organic products");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  return (
    <>
      {/* Expanded Menu */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            />

            {/* Quick Actions Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed bottom-28 right-8 z-50 space-y-3"
            >
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick(action.message)}
                  className="flex items-center gap-3 px-5 py-3 rounded-full shadow-xl backdrop-blur-xl border max-w-xs"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderColor: 'rgba(139, 125, 107, 0.2)'
                  }}
                >
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${action.color}15` }}
                  >
                    <action.icon className="w-5 h-5" style={{ color: action.color }} />
                  </div>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {action.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-8 right-28 z-50 p-5 rounded-full shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
        }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(37, 211, 102, 0.7)',
              '0 0 0 20px rgba(37, 211, 102, 0)',
              '0 0 0 0 rgba(37, 211, 102, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Badge - "Message Us" tooltip */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl shadow-lg whitespace-nowrap hidden lg:block"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(139, 125, 107, 0.2)'
            }}
          >
            <span className="text-sm font-medium text-foreground">Chat on WhatsApp</span>
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRight: '1px solid rgba(139, 125, 107, 0.2)',
                borderBottom: '1px solid rgba(139, 125, 107, 0.2)'
              }}
            />
          </motion.div>
        )}
      </motion.button>
    </>
  );
}

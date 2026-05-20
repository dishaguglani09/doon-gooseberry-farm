import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Package, Truck, HelpCircle, Phone } from "lucide-react";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  const quickHelp = [
    { icon: Package, label: "Track Order", description: "Check your delivery status" },
    { icon: Truck, label: "Delivery Info", description: "Shipping & delivery times" },
    { icon: HelpCircle, label: "FAQ", description: "Common questions" },
    { icon: Phone, label: "Call Us", description: "+91 98765 43210" }
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 p-5 rounded-full shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #4a6741, #5a7851)',
          boxShadow: '0 10px 25px -5px rgba(74, 103, 65, 0.4), 0 8px 10px -6px rgba(74, 103, 65, 0.3)'
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
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
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(74, 103, 65, 0.7)',
              '0 0 0 20px rgba(74, 103, 65, 0)',
              '0 0 0 0 rgba(74, 103, 65, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Online indicator */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(4px)' }}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-28 left-8 z-50 w-96 max-w-[calc(100vw-4rem)] rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))',
                border: '1px solid rgba(139, 125, 107, 0.2)'
              }}
            >
              {/* Header */}
              <div className="p-6 text-white" style={{ background: 'linear-gradient(135deg, #4a6741, #5a7851)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Customer Support</h3>
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Hi! How can we help you today?
                </p>
              </div>

              {/* Quick Help Options */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">Choose a topic or ask us anything:</p>
                <div className="space-y-3">
                  {quickHelp.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all"
                      style={{
                        backgroundColor: 'rgba(74, 103, 65, 0.05)',
                        border: '1px solid rgba(74, 103, 65, 0.1)'
                      }}
                    >
                      <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(74, 103, 65, 0.1)' }}>
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground text-sm">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Message Input */}
                <div className="mt-6">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 rounded-xl border outline-none focus:border-primary transition-colors"
                    style={{ borderColor: 'rgba(139, 125, 107, 0.2)' }}
                  />
                </div>

                {/* Support Hours */}
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  We typically reply within minutes • Mon-Sat, 9AM-6PM
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

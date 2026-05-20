import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sprout, CheckCircle, Boxes, Package, Truck } from "lucide-react";

export default function FarmProcess() {
  const steps = [
    {
      title: "Harvested Fresh",
      description: "Hand-picked at peak ripeness every morning from our certified organic fields.",
      icon: Sprout,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "linear-gradient(to right, #10b981, #059669)"
    },
    {
      title: "Carefully Sorted",
      description: "Each item is inspected by hand to ensure only the finest quality reaches you.",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1595855759920-86582396756a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "linear-gradient(to right, #3b82f6, #06b6d4)"
    },
    {
      title: "Homemade Preparation",
      description: "Artisan goods are crafted in small batches using traditional family recipes.",
      icon: Boxes,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "linear-gradient(to right, #f59e0b, #ea580c)"
    },
    {
      title: "Eco Packaging",
      description: "Wrapped in compostable materials that protect your food and our planet.",
      icon: Package,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "linear-gradient(to right, #14b8a6, #22c55e)"
    },
    {
      title: "Delivered Fresh",
      description: "From our farm to your doorstep within 24 hours—guaranteed freshness.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "linear-gradient(to right, #a855f7, #4f46e5)"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(245, 241, 237, 0.5), #fdfcfb)' }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhiOWQ4MyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-7xl mb-6 text-foreground">From Farm to Your Family</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every step of our process is designed to preserve freshness, quality, and the natural goodness of organic farming.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:flex items-center justify-between mb-12 relative">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center flex-1">
                <ProcessConnector index={index} total={steps.length} />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessConnector({ index, total }: { index: number; total: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (index === total - 1) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
      className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-2"
      style={{ transformOrigin: "left" }}
    />
  );
}

function ProcessStep({ step, index }: { step: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="group"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
          className="relative mb-6"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
            <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), transparent)' }} />
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-4 right-4 z-20">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-2xl"
                style={{ background: step.color }}
              >
                <step.icon className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            <div className="absolute bottom-4 left-4 z-20">
              <div className="backdrop-blur-md rounded-full px-4 py-1 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                <span className="text-white font-medium text-sm">Step {index + 1}</span>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-16 bg-background rounded-full border-4 flex items-center justify-center shadow-lg z-20"
            style={{ borderColor: 'rgba(74, 103, 65, 0.2)' }}
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 200 }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: step.color }}>
              <step.icon className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
          className="text-center mt-8"
        >
          <h3 className="text-xl lg:text-2xl mb-3 text-foreground">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{step.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

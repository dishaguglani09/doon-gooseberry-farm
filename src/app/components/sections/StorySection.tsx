import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const FARM_WOMEN = 'https://images.unsplash.com/photo-1755353545156-ae3525d9b676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';
const FARM_HARVEST = 'https://images.unsplash.com/photo-1755353018072-a8c33e95503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';
const TERRACED_FARM = 'https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';
const TEA_HILLS = 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=900&h=1300&fit=crop&crop=bottom';
const SPICES = 'https://images.unsplash.com/photo-1649509857227-f63b234545f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600';

const stats = [
  { val: '50+ Acres', label: 'Certified organic land' },
  { val: '50,000+', label: 'Families served' },
  { val: '80+', label: 'Local farmers supported' },
  { val: '0', label: 'Artificial additives' },
];

const timeline = [
  { year: '1995', text: 'The family started organic amla cultivation in the Doon valley' },
  { year: '2005', text: 'Expanded to traditional processing of gooseberry products' },
  { year: '2015', text: 'Doon Gooseberry Farm was officially established' },
  { year: '2020', text: 'Launched online store bringing Himalayan goodness nationwide' },
  { year: '2024', text: 'Certified organic producer with 10,000+ happy customers' },
];

export function StorySection() {
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);

  return (
    <div className="bg-[#f7f6f2] overflow-hidden">
      {/* SECTION 1 — HERO HERITAGE STORY */}
      <section id="our-story" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT IMAGE GRID */}
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4 translate-y-6">
                  {/* Top Left: Large tall */}
                  <motion.div 
                    className="relative rounded-[28px] overflow-hidden shadow-lg w-full isolate"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback src={FARM_WOMEN} alt="Farm Women" className="aspect-[3/4] w-full object-cover object-center block rounded-[28px]" />
                  </motion.div>
                  {/* Bottom Left: Dark flatlay */}
                  <motion.div 
                    className="relative rounded-[28px] overflow-hidden shadow-lg w-full isolate"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback src={SPICES} alt="Spices" className="aspect-[4/3] w-full object-cover object-center block rounded-[28px]" />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-4 -translate-y-6">
                  {/* Top Right: Medium landscape */}
                  <motion.div 
                    className="relative rounded-[28px] overflow-hidden shadow-lg w-full isolate"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback src={TERRACED_FARM} alt="Terraced Farm" className="aspect-[4/3] w-full object-cover object-center block rounded-[28px]" />
                  </motion.div>
                  {/* Bottom Right: Medium portrait */}
                  <motion.div 
                    className="relative rounded-[28px] overflow-hidden shadow-lg w-full isolate"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback src={FARM_HARVEST} alt="Farm Harvest" className="aspect-[3/4] w-full object-cover object-center block rounded-[28px]" />
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT CONTENT */}
            <ScrollReveal>
              <div className="lg:pl-6">
                <p className="text-[#4a6741] text-sm font-semibold tracking-[0.15em] uppercase mb-3">
                  OUR HERITAGE
                </p>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1c2a1f] mb-5 leading-tight">
                  Three Decades of<br />Organic Excellence
                </h2>
                <p className="text-[#6b6560] mb-4 text-lg leading-relaxed">
                  Since 1995, we've been cultivating organic produce in the pristine valleys of Uttarakhand. Our journey began with a simple belief: that food should be pure, natural, and full of life.
                </p>
                <p className="text-[#6b6560] mb-8 text-lg leading-relaxed">
                  Today, we continue that legacy — combining traditional farming wisdom with modern sustainable practices to bring you the finest organic products from the heart of the Himalayas.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {stats.map((stat, idx) => (
                    <motion.div 
                      key={idx} 
                      className="p-5 rounded-[20px] bg-white shadow-sm border border-[rgba(74,103,65,0.08)] flex flex-col justify-center"
                      whileHover={{ y: -3, boxShadow: '0 8px 25px -8px rgba(0,0,0,0.06)' }}
                    >
                      <p className="font-bold text-[#1c3a2b] text-xl md:text-2xl mb-1">{stat.val}</p>
                      <p className="text-xs md:text-sm text-[#6b6560]">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={() => {
                    document.getElementById('combined-story-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#4a6741] hover:bg-[#385131] text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discover Our Journey <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FULL STORY + ROOTED IN HIMALAYAS */}
      <section id="combined-story-section" className="py-12 md:py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <ScrollReveal className="h-full">
              <div className="relative h-full rounded-[32px]">
                <motion.div 
                  className="relative overflow-hidden rounded-[32px] w-full h-full min-h-[500px] isolate"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img src={TEA_HILLS} alt="Himalayan valley" className="w-full h-full object-cover object-center block rounded-[32px]" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-5 md:p-7 rounded-[24px] shadow-2xl border border-[#f0ebe1]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <p className="text-[#4a6741] font-serif text-xl md:text-2xl font-bold">10+ Years</p>
                  <p className="text-[#6b6560] text-xs md:text-sm mt-1 font-medium">of Tradition</p>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="lg:pr-4 mt-12 lg:mt-0">
                <div className="mb-10">
                  <p className="text-[#4a6741] text-sm font-semibold tracking-[0.15em] uppercase mb-3">
                    OUR STORY
                  </p>
                  <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3rem)] text-[#1c2a1f] mb-6 leading-[1.15]">
                    From the Hills of <span className="text-[#4a6741]">Uttarakhand</span> to Your Table
                  </h2>
                  <div className="space-y-5 text-[#6b6560] text-lg leading-relaxed">
                    <p>
                      Nestled in the pristine valleys and foothills of the Himalayas, Doon Gooseberry Farm is a family-owned organic farm dedicated to preserving the authentic flavors of Uttarakhand. What began as a small family kitchen tradition has grown into a celebration of the region's rich culinary heritage and natural abundance.
                    </p>
                    <p>
                      For generations, our family has cultivated amla (Indian gooseberry) using traditional organic methods passed down through centuries. Every fruit is carefully handpicked at peak ripeness, ensuring maximum nutrition, purity, and flavor in every product we create.
                    </p>
                    <p>
                      Every jar of our pickle, every bottle of our juice, and every spoonful of our jam carries the essence of our land — pure, natural, and crafted with unwavering dedication to quality. Today, we combine ancestral farming wisdom with modern quality standards to create products that honor both tradition and well-being.
                    </p>
                  </div>
                </div>

                <div className="bg-[#fcfaf7] border-l-4 border-[#4a6741] p-8 md:p-10 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-10">
                  <p className="font-serif italic text-xl md:text-2xl text-[#1c2a1f] leading-relaxed">
                    "We believe in letting nature do the work. Our products are a testament to the belief that the best food comes from patience, tradition, and respect for the earth."
                  </p>
                </div>

                {!isTimelineExpanded && (
                  <motion.button
                    onClick={() => setIsTimelineExpanded(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4a6741] to-[#2c3d26] text-white rounded-full font-semibold transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(74,103,65,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(74,103,65,0.65)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Discover Our Legacy <ArrowRight className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TIMELINE EXPERIENCE */}
      <AnimatePresence>
        {isTimelineExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden bg-[#f7f6f2]"
          >
            <section className="py-16 md:py-24 relative">
              <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal>
                  <div className="text-center mb-16">
                    <p className="text-[#4a6741] text-sm font-semibold tracking-[0.15em] uppercase mb-3">
                      Our Milestones
                    </p>
                    <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] text-[#1c2a1f]">
                      A Journey of Passion
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="relative">
                  {/* Central Line */}
                  <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#e5e0d8] transform md:-translate-x-1/2" />

                  <div className="space-y-8 md:space-y-12">
                    {timeline.map((item, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <ScrollReveal key={item.year}>
                          <div className={`flex flex-col md:flex-row items-start md:items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            {/* Marker */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#4a6741] border-4 border-[#f7f6f2] transform -translate-x-1/2 mt-[26px] md:mt-0 z-10 box-content shadow-sm" />
                            
                            {/* Content Card */}
                            <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12 lg:pl-16' : 'md:pr-12 lg:pr-16'}`}>
                              <motion.div 
                                className="bg-white p-6 md:p-8 rounded-[20px] shadow-sm border border-[#f0ebe1]"
                                whileHover={{ y: -4, boxShadow: '0 12px 24px -10px rgba(0,0,0,0.08)' }}
                                transition={{ duration: 0.3 }}
                              >
                                <span className="text-[#4a6741] font-serif text-2xl md:text-3xl font-bold block mb-2">{item.year}</span>
                                <p className="text-[#6b6560] text-[1.05rem] leading-relaxed">{item.text}</p>
                              </motion.div>
                            </div>
                          </div>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

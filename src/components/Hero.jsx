import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    badge: "Best Seller",
    title: "Rose Gold",
    subtitle: "Face Serum",
    description: "Luxury 24k rose gold infused anti-aging serum for radiant skin. Delivered across Pakistan.",
    price: "Rs. 2,499",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80",
    cta: "SHOP NOW",
  },
  {
    id: 2,
    badge: "New Arrival",
    title: "Oud Noir",
    subtitle: "Perfume",
    description: "Deep smoky oud with hints of amber and musk. 100ml EDP. Long lasting fragrance.",
    price: "Rs. 4,999",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=80",
    cta: "EXPLORE",
  },
  {
    id: 3,
    badge: "Limited Edition",
    title: "Crystal Gift",
    subtitle: "Hamper",
    description: "Luxury curated gift hamper with premium skincare and fragrance. Perfect for gifting.",
    price: "Rs. 6,999",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
    cta: "ORDER NOW",
  },
];

const stats = [
  { value: "500+", label: "PRODUCTS" },
  { value: "2K+", label: "CUSTOMERS" },
  { value: "4.9", label: "RATING" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  };

  const slide = slides[current];

  return (
    <section className="w-full h-screen flex flex-col overflow-hidden relative">

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 z-10 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-20 flex-1 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-2 mb-4">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                <span className="text-gold text-[10px] tracking-[0.3em] font-semibold">
                  {slide.badge.toUpperCase()}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider leading-none text-white mb-1">
                {slide.title}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider leading-none text-gold mb-4">
                {slide.subtitle}
              </h2>

              <p className="text-gray-300 text-sm md:text-base max-w-md mb-3 leading-relaxed hidden sm:block">
                {slide.description}
              </p>

              <p className="text-gold text-xl sm:text-2xl font-black mb-6">
                {slide.price}
              </p>

<div className="flex flex-col sm:flex-row gap-3">
  <a href="#products" className="bg-gold text-dark px-6 py-3 text-xs tracking-widest font-black hover:bg-yellow-400 transition-all text-center">
    {slide.cta}
  </a>
  <a href="#products" className="border border-gold/40 text-gold px-6 py-3 text-xs tracking-widest font-bold hover:bg-gold hover:text-dark transition-all text-center">
    VIEW ALL
  </a>
</div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-20 border-t border-gold/10 bg-dark/70 backdrop-blur-sm px-6 sm:px-10 md:px-16 lg:px-24 py-4">
        <div className="flex items-center justify-between gap-4">

          <div className="flex gap-6 sm:gap-10 md:gap-14">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-gold text-lg sm:text-xl font-black leading-none">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-[8px] tracking-widest mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="border border-white/10 text-gray-400 hover:text-gold hover:border-gold p-2 transition-all duration-300"
            >
              <FiChevronLeft size={15} />
            </button>

            <div className="flex gap-1.5 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 h-1.5 rounded-full ${
                    i === current ? "w-6 bg-gold" : "w-1.5 bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="border border-white/10 text-gray-400 hover:text-gold hover:border-gold p-2 transition-all duration-300"
            >
              <FiChevronRight size={15} />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
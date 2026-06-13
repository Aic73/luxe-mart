import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiMessageCircle } from "react-icons/fi";

const featured = [
  {
    id: 1,
    name: "Rose Gold Face Serum",
    category: "Skincare",
    price: 2499,
    badge: "Best Seller",
    description: "Luxury 24k rose gold infused anti-aging serum for radiant skin.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
  },
  {
    id: 2,
    name: "Oud Noir Perfume",
    category: "Fragrance",
    price: 4999,
    badge: "New Arrival",
    description: "Deep smoky oud with hints of amber and musk. 100ml EDP.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
  },
  {
    id: 6,
    name: "Crystal Gift Hamper",
    category: "Gift Sets",
    price: 6999,
    badge: "Limited",
    description: "Luxury curated gift hamper with premium skincare and fragrance.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
];

const FeaturedCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? featured.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === featured.length - 1 ? 0 : c + 1));
  };

  const product = featured[current];

  const handleWhatsApp = () => {
    const message = "Hello! I am interested in " + product.name + " priced at Rs. " + product.price + ". Please provide more details.";
    const url = "https://wa.me/923001234567?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0d0d0d] border-y border-gold/10">

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]"
        >
          {/* Image */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d] hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent md:hidden" />
            {product.badge && (
              <div className="absolute top-6 left-6 bg-gold text-dark text-[10px] px-3 py-1 tracking-[0.2em] font-black">
                {product.badge.toUpperCase()}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-12">
            <p className="text-gold text-[10px] tracking-[0.3em] mb-3">
              {product.category.toUpperCase()} FEATURED
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-wide mb-4 leading-tight">
              {product.name}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              {product.description}
            </p>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-gold text-3xl font-black">
                Rs. {product.price.toLocaleString()}
              </span>
              <span className="text-green-500 text-xs tracking-widest">IN STOCK</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 bg-gold text-dark px-8 py-3 text-xs tracking-[0.2em] font-black hover:bg-yellow-400 transition-all duration-300"
              >
                <FiMessageCircle size={15} />
                ORDER NOW
              </button>
              <a
                href="#products"
                className="flex items-center justify-center border border-gold/30 text-gold px-8 py-3 text-xs tracking-[0.2em] font-bold hover:bg-gold hover:text-dark transition-all duration-300"
              >
                VIEW ALL
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-3">
        <button
          onClick={prev}
          className="bg-white/5 border border-white/10 text-gray-400 hover:text-gold hover:border-gold p-2 transition-all duration-300"
        >
          <FiChevronLeft size={18} />
        </button>
        <span className="text-gray-600 text-xs tracking-widest">
          {current + 1} / {featured.length}
        </span>
        <button
          onClick={next}
          className="bg-white/5 border border-white/10 text-gray-400 hover:text-gold hover:border-gold p-2 transition-all duration-300"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`transition-all duration-300 ${i === current ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-gray-600 hover:bg-gray-400"}`}
          />
        ))}
      </div>

    </div>
  );
};

export default FeaturedCarousel;
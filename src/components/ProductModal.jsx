import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiShoppingBag, FiStar, FiTruck, FiRefreshCw, FiShield } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  if (!product) return null;

  const handleWhatsApp = () => {
    const message = `Hello! I am interested in ${product.name} priced at Rs. ${product.price}. Please provide more details.`;
    const url = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleAddToCart = () => {
    addToCart(product);
    addToast(`${product.name} added to cart!`, "cart");
    onClose();
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        size={14}
        style={{
          fill: i < Math.floor(rating) ? "#D4AF37" : "none",
          color: i < Math.floor(rating) ? "#D4AF37" : "#4b5563"
        }}
      />
    ));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      >
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[200] bg-dark border border-gold/30 text-gray-400 hover:text-gold hover:border-gold transition-all duration-300 p-2"
        >
          <FiX size={20} />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card border border-gold/20 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="relative h-72 md:h-full min-h-[350px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gold text-dark text-xs px-3 py-1 tracking-widest font-bold">
                  {product.badge.toUpperCase()}
                </div>
              )}
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <p className="text-gold text-xs tracking-widest mb-2">
                  {product.category.toUpperCase()}
                </p>
                <h2 className="text-white text-2xl font-bold tracking-wide mb-3">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gold text-sm font-bold">{product.rating}</span>
                  <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="border-t border-gold/20 pt-4 mb-4">
                  <p className="text-gray-500 text-xs tracking-widest mb-2">PRODUCT DETAILS</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {product.details}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="flex flex-col items-center gap-1 bg-white/5 p-3 text-center">
                    <FiTruck size={15} className="text-gold" />
                    <span className="text-gray-400 text-[9px] tracking-wider">FREE DELIVERY</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 bg-white/5 p-3 text-center">
                    <FiRefreshCw size={15} className="text-gold" />
                    <span className="text-gray-400 text-[9px] tracking-wider">7-DAY RETURN</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 bg-white/5 p-3 text-center">
                    <FiShield size={15} className="text-gold" />
                    <span className="text-gray-400 text-[9px] tracking-wider">AUTHENTIC</span>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-4 mb-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs tracking-widest">PRICE</span>
                    <span className="text-gold font-bold text-2xl">
                      Rs. {product.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs tracking-widest">AVAILABILITY</span>
                    <span className="text-green-400 text-xs tracking-widest">IN STOCK</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs tracking-widest">DELIVERY</span>
                    <span className="text-gray-400 text-xs tracking-widest">2-3 BUSINESS DAYS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs tracking-widest">RETURNS</span>
                    <span className="text-gray-400 text-xs tracking-widest">7-DAY EASY RETURNS</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 text-sm tracking-widest font-bold hover:bg-green-500 transition-colors"
                >
                  <FaWhatsapp size={18} />
                  INQUIRE ON WHATSAPP
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 bg-gold text-dark py-3 text-xs tracking-widest font-bold hover:bg-yellow-400 transition-colors"
                >
                  <FiShoppingBag size={15} />
                  ADD TO CART
                </button>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 border border-gold/30 text-gray-400 py-3 text-sm tracking-widest hover:border-gold hover:text-gold transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
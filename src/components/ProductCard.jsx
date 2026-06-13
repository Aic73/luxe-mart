import { motion } from "framer-motion";
import { FiMessageCircle, FiHeart, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import { useToast } from "../contexts/ToastContext";

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToast } = useToast();

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const message = `Hello! I am interested in ${product.name} priced at Rs. ${product.price}. Please provide more details.`;
    const url = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    addToast(`${product.name} added to cart!`, "cart");
  };

 const handleWishlist = (e) => {
  e.stopPropagation();
  toggleWishlist(product);
  addToast(
    isWishlisted(product.id) ? `${product.name} removed from wishlist` : `${product.name} added to wishlist!`,
    "wishlist"
  );
 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="bg-card border border-gold/10 hover:border-gold/40 transition-all duration-300 group cursor-pointer"
    >
      {/* Image */}
      <div className="overflow-hidden h-64 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-dark/80 text-gold text-xs px-3 py-1 tracking-widest">
          {product.category.toUpperCase()}
        </div>
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold text-dark text-xs px-3 py-1 tracking-widest font-bold">
            {product.badge.toUpperCase()}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute bottom-3 right-3 p-2 border transition-all duration-300 ${
            isWishlisted(product.id)
              ? "bg-pink-500 border-pink-500 text-white"
              : "bg-dark/80 border-white/10 text-gray-400 hover:text-pink-400 hover:border-pink-400"
          }`}
        >
          <FiHeart size={14} style={{ fill: isWishlisted(product.id) ? "white" : "none" }} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-2 tracking-wide">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-gold font-bold text-xl">
            Rs. {product.price.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-gray-400 hover:text-gold hover:border-gold py-2 text-xs tracking-widest transition-all duration-300"
          >
            <FiShoppingBag size={13} />
            ADD TO CART
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-gold text-dark px-3 py-2 text-xs tracking-widest font-bold hover:bg-yellow-400 transition-colors"
          >
            <FiMessageCircle size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
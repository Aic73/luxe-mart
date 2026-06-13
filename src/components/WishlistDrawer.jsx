import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiHeart, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../contexts/ToastContext";

const WishlistDrawer = ({ isOpen, onClose }) => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = (product) => {
    addToCart(product);
    addToast(`${product.name} added to cart!`, "cart");
  };

  const handleMoveAllToCart = () => {
    wishlist.forEach(product => addToCart(product));
    addToast(`${wishlist.length} items moved to cart!`, "success");
    // Optional: clear wishlist after moving
    // wishlist.forEach(product => removeFromWishlist(product.id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[150]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0f0f0f] border-l border-gold/10 z-[160] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/10">
              <div className="flex items-center gap-3">
                <FiHeart className="text-pink-500" size={18} />
                <span className="text-white text-sm tracking-widest font-bold">YOUR WISHLIST</span>
                {wishlist.length > 0 && (
                  <span className="bg-pink-500 text-white text-[10px] font-black px-2 py-0.5">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gold transition-colors">
                <FiX size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {wishlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <FiHeart size={48} className="text-gray-700" />
                  <p className="text-gray-500 text-sm tracking-widest">YOUR WISHLIST IS EMPTY</p>
                  <p className="text-gray-600 text-xs text-center">
                    Click the heart icon on any product to add it here
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-gold text-dark px-6 py-3 text-xs tracking-widest font-black hover:bg-yellow-400 transition-all"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="flex gap-4 border border-white/5 p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-gold text-[9px] tracking-widest mb-1">
                          {item.category.toUpperCase()}
                        </p>
                        <p className="text-white text-sm font-semibold truncate mb-2">
                          {item.name}
                        </p>
                        <p className="text-gold text-sm font-black mb-3">
                          Rs. {item.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="flex-1 flex items-center justify-center gap-1 bg-gold text-dark px-3 py-1.5 text-[10px] tracking-widest font-bold hover:bg-yellow-400 transition-all"
                          >
                            <FiShoppingBag size={12} />
                            ADD TO CART
                          </button>
                          <button
                            onClick={() => {
                              removeFromWishlist(item.id);
                              addToast(`${item.name} removed from wishlist`, "info");
                            }}
                            className="text-gray-600 hover:text-red-400 transition-colors p-2"
                          >
                            <FiTrash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {wishlist.length > 0 && (
              <div className="border-t border-gold/10 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs tracking-widest">TOTAL ITEMS</span>
                  <span className="text-gold text-xl font-black">
                    {wishlist.length}
                  </span>
                </div>
                <button
                  onClick={handleMoveAllToCart}
                  className="w-full flex items-center justify-center gap-2 bg-gold text-dark py-4 text-xs tracking-widest font-black hover:bg-yellow-400 transition-all"
                >
                  <FiShoppingBag size={18} />
                  MOVE ALL TO CART
                </button>
                <button
                  onClick={() => {
                    wishlist.forEach(item => removeFromWishlist(item.id));
                    addToast("Wishlist cleared", "info");
                  }}
                  className="w-full border border-white/10 text-gray-500 hover:text-red-400 hover:border-red-400 py-3 text-xs tracking-widest transition-all"
                >
                  CLEAR WISHLIST
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WishlistDrawer;
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQty, total, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    const items = cart.map((p) => `${p.name} x${p.qty} = Rs. ${(p.price * p.qty).toLocaleString()}`).join(", ");
    const message = `Hello! I want to order: ${items}. Total: Rs. ${total.toLocaleString()}. Please confirm my order.`;
    const url = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
                <FiShoppingBag className="text-gold" size={18} />
                <span className="text-white text-sm tracking-widest font-bold">YOUR CART</span>
                {cart.length > 0 && (
                  <span className="bg-gold text-dark text-[10px] font-black px-2 py-0.5">
                    {cart.reduce((s, p) => s + p.qty, 0)}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gold transition-colors">
                <FiX size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <FiShoppingBag size={48} className="text-gray-700" />
                  <p className="text-gray-500 text-sm tracking-widest">YOUR CART IS EMPTY</p>
                  <button
                    onClick={onClose}
                    className="bg-gold text-dark px-6 py-3 text-xs tracking-widest font-black hover:bg-yellow-400 transition-all"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item) => (
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
                          Rs. {(item.price * item.qty).toLocaleString()}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-white/10">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="px-2 py-1 text-gray-400 hover:text-gold transition-colors"
                            >
                              <FiMinus size={12} />
                            </button>
                            <span className="px-3 text-white text-xs font-bold">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="px-2 py-1 text-gray-400 hover:text-gold transition-colors"
                            >
                              <FiPlus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-600 hover:text-red-400 transition-colors"
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
            {cart.length > 0 && (
              <div className="border-t border-gold/10 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs tracking-widest">SUBTOTAL</span>
                  <span className="text-gold text-xl font-black">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-4 text-xs tracking-widest font-black transition-all"
                >
                  <FaWhatsapp size={18} />
                  ORDER VIA WHATSAPP
                </button>
                <button
                  onClick={clearCart}
                  className="w-full border border-white/10 text-gray-500 hover:text-red-400 hover:border-red-400 py-3 text-xs tracking-widest transition-all"
                >
                  CLEAR CART
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
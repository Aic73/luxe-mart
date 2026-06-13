import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiX, FiHeart, FiShoppingBag } from "react-icons/fi";

const icons = {
  success: FiCheck,
  error: FiX,
  wishlist: FiHeart,
  cart: FiShoppingBag,
};

const colors = {
  success: "border-green-500 text-green-400",
  error: "border-red-500 text-red-400",
  wishlist: "border-pink-500 text-pink-400",
  cart: "border-gold text-gold",
};

const Toast = ({ toasts }) => {
  return (
    <div className="fixed top-24 right-4 z-[300] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type] || FiCheck;
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={`bg-[#111] border ${colors[toast.type]} px-4 py-3 flex items-center gap-3 min-w-[250px] shadow-xl`}
            >
              <Icon size={16} />
              <p className="text-white text-xs tracking-wide">{toast.message}</p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
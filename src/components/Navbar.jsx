import { useState, useEffect } from "react";
import { FiShoppingBag, FiMenu, FiX, FiSearch, FiUser, FiHeart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false); // ✅ ADD THIS LINE
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();

  // Debug: Log wishlist items
  console.log('Wishlist items:', wishlist);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      if (current < 10) {
        setVisible(true);
      } else if (current > lastScroll) {
        setVisible(false);
        setMenuOpen(false);
      } else {
        setVisible(true);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <motion.div
        animate={{ y: visible ? 0 : -200 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 right-0 z-50"
        style={{ top: 0 }}
      >
        {/* Top Bar */}
        <div className="bg-gold text-dark text-xs font-bold tracking-widest py-2 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 mx-8">
                <span>FREE SHIPPING ON ORDERS ABOVE RS. 2000</span>
                <span>•</span>
                <span>CASH ON DELIVERY AVAILABLE</span>
                <span>•</span>
                <span>7-DAY EASY RETURNS</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <nav className={`transition-all duration-300 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-gold/20"
            : "bg-dark border-b border-gold/10"
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

            <a href="/" className="flex items-center gap-1">
              <span className="text-gold text-2xl font-bold tracking-widest">LUXE</span>
              <span className="text-white text-2xl font-light tracking-widest">MART</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-xs tracking-widest">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">HOME</a>
              <a href="#products" className="text-gray-400 hover:text-gold transition-colors">PRODUCTS</a>
              <a href="#about" className="text-gray-400 hover:text-gold transition-colors">ABOUT</a>
              <a href="#contact" className="text-gray-400 hover:text-gold transition-colors">CONTACT</a>
            </div>

            <div className="flex items-center gap-5">
              <FiSearch
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-400 hover:text-gold transition-colors cursor-pointer"
                size={18}
              />

              {/* Wishlist - Click to open drawer */}
              <div 
                className="relative cursor-pointer hidden md:block"
                onClick={() => setWishlistOpen(true)} // ✅ Add this
              >
                <FiHeart className="text-gray-400 hover:text-pink-500 transition-colors" size={18} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>

              <FiUser className="text-gray-400 hover:text-gold transition-colors cursor-pointer hidden md:block" size={18} />

              {/* Cart */}
              <div
                className="relative cursor-pointer"
                onClick={() => setCartOpen(true)}
              >
                <FiShoppingBag className="text-gray-400 hover:text-gold transition-colors" size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>

              <button
                className="md:hidden text-gray-400 hover:text-gold transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gold/20 px-4 py-4 bg-dark"
              >
                <div className="max-w-2xl mx-auto flex items-center gap-3">
                  <FiSearch className="text-gold" size={18} />
                  <input
                    type="text"
                    placeholder="Search luxury products..."
                    autoFocus
                    className="w-full bg-transparent text-white text-sm tracking-wider focus:outline-none placeholder-gray-600"
                  />
                  <FiX
                    onClick={() => setSearchOpen(false)}
                    className="text-gray-400 hover:text-gold cursor-pointer"
                    size={18}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gold/20 px-4 py-6 flex flex-col gap-5 text-xs tracking-widest bg-dark"
              >
                <a href="#" className="text-gray-400 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>HOME</a>
                <a href="#products" className="text-gray-400 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>PRODUCTS</a>
                <a href="#about" className="text-gray-400 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>ABOUT</a>
                <a href="#contact" className="text-gray-400 hover:text-gold transition-colors" onClick={() => setMenuOpen(false)}>CONTACT</a>
                <div className="flex gap-5 pt-2 border-t border-gold/20">
                  <div className="relative" onClick={() => { setCartOpen(true); setMenuOpen(false); }}>
                    <FiShoppingBag className="text-gray-400 hover:text-gold cursor-pointer" size={18} />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-gold text-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <div onClick={() => { setWishlistOpen(true); setMenuOpen(false); }}>
                    <FiHeart className="text-gray-400 hover:text-pink-500 cursor-pointer" size={18} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.div>

      {/* Drawers */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <WishlistDrawer isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    </>
  );
};

export default Navbar;
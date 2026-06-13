import { motion } from "framer-motion";
import { FiShield, FiTruck, FiRefreshCw, FiStar } from "react-icons/fi";

const features = [
  { icon: FiShield, title: "100% AUTHENTIC", desc: "All products are genuine and sourced directly from premium brands." },
  { icon: FiTruck, title: "FREE DELIVERY", desc: "Free shipping on all orders above Rs. 2000 across Pakistan." },
  { icon: FiRefreshCw, title: "7-DAY RETURNS", desc: "Not satisfied? Return within 7 days for a full refund." },
  { icon: FiStar, title: "PREMIUM QUALITY", desc: "Curated luxury products for the most discerning customers." },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#080808] border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-[10px] tracking-[0.3em] mb-4">WHO WE ARE</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-wider mb-6 leading-tight">
              LUXURY FOR <span className="text-gold">EVERYONE</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              LUXE MART is Islamabad's premier destination for luxury lifestyle products. We believe that premium quality should be accessible to everyone, which is why we bring you the finest skincare, fragrances, home decor, and grooming products at competitive prices.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Founded with a passion for quality and elegance, we carefully curate every product in our collection to ensure it meets our high standards. From rose gold serums to oud perfumes, every item tells a story of luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">


<a 
                href="#products"
                className="bg-gold text-dark px-8 py-3.5 text-xs tracking-[0.2em] font-black hover:bg-yellow-400 transition-all duration-300 text-center"
              >
                SHOP NOW
              </a>


              <a
              
                href="#contact"
                className="border border-gold/30 text-gold px-8 py-3.5 text-xs tracking-[0.2em] font-bold hover:bg-gold hover:text-dark transition-all duration-300 text-center"
              >
                CONTACT US
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <div key={i} className="bg-white/3 border border-white/5 hover:border-gold/30 p-6 transition-all duration-300">
                <f.icon size={22} className="text-gold mb-4" />
                <h4 className="text-white text-xs tracking-widest font-bold mb-2">{f.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gold/10 pt-16">
          {[
            { value: "500+", label: "PRODUCTS" },
            { value: "2,000+", label: "HAPPY CUSTOMERS" },
            { value: "4.9", label: "AVERAGE RATING" },
            { value: "3+", label: "YEARS EXPERIENCE" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center border border-white/5 p-6"
            >
              <p className="text-gold text-3xl md:text-4xl font-black mb-2">{stat.value}</p>
              <p className="text-gray-500 text-[9px] tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
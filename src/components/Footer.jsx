import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#080808] border-t border-gold/10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-5">
              <span className="text-gold text-2xl font-black tracking-widest">LUXE</span>
              <span className="text-white text-2xl font-light tracking-widest">MART</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premium local store offering curated luxury products. Quality and elegance delivered to your doorstep across Pakistan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="border border-white/10 text-gray-500 hover:text-gold hover:border-gold p-2 transition-all duration-300">
                <FiInstagram size={16} />
              </a>
              <a href="#" className="border border-white/10 text-gray-500 hover:text-gold hover:border-gold p-2 transition-all duration-300">
                <FiFacebook size={16} />
              </a>
              <a href="#" className="border border-white/10 text-gray-500 hover:text-gold hover:border-gold p-2 transition-all duration-300">
                <FiTwitter size={16} />
              </a>
              <a href="https://wa.me/923001234567" className="border border-white/10 text-gray-500 hover:text-green-400 hover:border-green-400 p-2 transition-all duration-300">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] font-bold mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {["Home", "Products", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  
               <a href=""                    href="#"
                    className="text-gray-500 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-gold transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] font-bold mb-6">CATEGORIES</h4>
            <ul className="space-y-3">
              {["Skincare", "Fragrance", "Home Decor", "Beauty", "Grooming", "Gift Sets"].map((cat) => (
                <li key={cat}>
                  
                  <a href=""
                    href="#products"
                    className="text-gray-500 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-gold transition-all duration-300" />
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] font-bold mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">F-7 Markaz, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={15} className="text-gold flex-shrink-0" />
                <a href="tel:+923001234567" className="text-gray-500 text-sm hover:text-gold transition-colors">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={15} className="text-gold flex-shrink-0" />
                <a href="mailto:info@luxemart.pk" className="text-gray-500 text-sm hover:text-gold transition-colors">
                  info@luxemart.pk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp size={15} className="text-green-500 flex-shrink-0" />
                <a href="https://wa.me/923001234567" className="text-gray-500 text-sm hover:text-green-400 transition-colors">
                  WhatsApp Order
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 sm:px-10 md:px-16 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs tracking-widest">
            2024 LUXE MART. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 text-xs tracking-widest hover:text-gold transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-gray-600 text-xs tracking-widest hover:text-gold transition-colors">
              TERMS OF USE
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
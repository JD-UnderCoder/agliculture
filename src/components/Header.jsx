import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Sprout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { key: 'home', section: 'home' },
    { key: 'diseaseDetection', section: 'disease' },
    { key: 'weather', section: 'weather' },
    { key: 'chatbot', section: 'chatbot' },
    { key: 'about', section: 'about' },
    { key: 'contact', section: 'contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-primary-600 p-2 rounded-lg">
              <Sprout className="text-white" size={28} />
            </div>
            <span className="text-2xl font-bold text-neutral-800">AgriCare</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => onNavigate(item.section)}
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(item.key)}
              </motion.button>
            ))}
            
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={18} />
              <span className="font-medium">{language === 'en' ? 'HI' : 'EN'}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleLanguage}
              className="p-2 bg-primary-100 text-primary-700 rounded-full"
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={20} />
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-800"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pt-4 border-t border-neutral-200"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => {
                  onNavigate(item.section);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-lg text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                whileTap={{ scale: 0.98 }}
              >
                {t(item.key)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;

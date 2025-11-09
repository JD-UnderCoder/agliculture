import { motion } from 'framer-motion';
import { Sprout, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = ({ onNavigate }) => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'home', section: 'home' },
    { key: 'diseaseDetection', section: 'disease' },
    { key: 'weather', section: 'weather' },
    { key: 'chatbot', section: 'chatbot' },
    { key: 'about', section: 'about' },
    { key: 'contact', section: 'contact' },
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Sprout className="text-white" size={28} />
              </div>
              <span className="text-2xl font-bold">AgriCare</span>
            </div>
            <p className="text-neutral-400 mb-4 text-lg">
              Empowering farmers with AI-powered solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-lg"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3 text-neutral-400">
                <Mail size={20} />
                <span>support@agricare.com</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <MapPin size={20} />
                <span>Farm Tech Hub</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-neutral-400 mb-4 text-lg">
              Subscribe for farming tips and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white text-lg"
              />
              <button className="p-3 bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
                <Send className="text-white" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-md">
              © {new Date().getFullYear()} AgriCare. {t('allRights')}.
            </p>
            <div className="flex gap-6 text-md text-neutral-400">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

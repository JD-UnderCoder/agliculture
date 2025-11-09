import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'support@agricare.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Address', value: 'Farm Tech Hub, Agriculture District' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-700' }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-neutral-600">{t('contactSubtitle')}</p>
        </motion.div>

        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12"
            >
              <h3 className="text-3xl font-semibold text-neutral-800 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-neutral-700 font-medium mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-medium mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-medium mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('submit')}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-primary-600 text-white p-8 md:p-12 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl font-semibold mb-8">Get In Touch</h3>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-white/20 p-3 rounded-lg">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{info.label}</div>
                        <div className="text-primary-100">{info.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{t('followUs')}</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-8 h-64 bg-primary-700 rounded-xl overflow-hidden shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop" 
                  alt="Farm location map"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

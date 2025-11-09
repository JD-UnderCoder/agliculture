import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onNavigate }) => {
  const { t } = useLanguage();

  const stats = [
    { key: 'farmersHelped', value: '10,000+' },
    { key: 'diseasesDetected', value: '500+' },
    { key: 'successRate', value: '95%' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('heroTitle')}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-neutral-600 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('heroSubtitle')}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => onNavigate('disease')}
                className="flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-primary-700 transition-all transform hover:scale-1.05"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('startDetection')}
                <ArrowRight size={22} />
              </motion.button>
              
              <motion.button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white text-neutral-800 rounded-full font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-1.05"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('learnMore')}
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[t('feature1'), t('feature2'), t('feature3')].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <CheckCircle className="text-primary-600" size={22} />
                  <span className="text-neutral-600 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-3">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" 
                alt="Farmer with crops"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-primary-200"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, type: 'spring', stiffness: 100 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <CheckCircle className="text-primary-600" size={32} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-neutral-900">95%</div>
                  <div className="text-sm text-neutral-600 font-medium">{t('successRate')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 pt-12 border-t border-neutral-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600 font-medium text-lg">{t(stat.key)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Lightbulb, title: t('feature1') },
    { icon: Award, title: t('feature2') },
    { icon: Users, title: t('feature3') },
    { icon: Target, title: t('feature4') },
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t('aboutTitle')}
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-neutral-200"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div whileHover={{ scale: 1.02 }}>
                <img 
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop" 
                  alt="Agriculture technology"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
              
              <div>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  {t('aboutText')}
                </p>
                
                <div className="bg-primary-100 p-6 rounded-xl border-l-4 border-primary-500">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3 flex items-center gap-3">
                    <Target className="text-primary-600" />
                    {t('ourMission')}
                  </h3>
                  <p className="text-neutral-700">
                    {t('missionText')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-neutral-900 text-center mb-10">
              {t('features')}
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center border border-neutral-200"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                    <feature.icon className="text-primary-600" size={32} />
                  </div>
                  <h4 className="font-semibold text-lg text-neutral-800">{feature.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl p-12 text-center text-white"
          >
            <h3 className="text-4xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Together, we can revolutionize agriculture and help farmers around the world grow healthier, more productive crops.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

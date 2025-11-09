import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera, Lightbulb, Focus, Eye, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DiseaseDetection = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const tips = [
    { icon: Lightbulb, text: t('tip1') },
    { icon: Focus, text: t('tip2') },
    { icon: Eye, text: t('tip3') },
    { icon: ImageIcon, text: t('tip4') },
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
            {t('diseaseTitle')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col">
              <h3 className="text-3xl font-semibold text-neutral-800 mb-6 flex items-center gap-3">
                <Camera className="text-primary-600" size={32} />
                {t('uploadImage')}
              </h3>

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative flex-grow border-2 border-dashed rounded-xl p-8 text-center transition-all flex flex-col justify-center items-center ${  
                  isDragging
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-neutral-300 hover:border-primary-500 hover:bg-neutral-50'
                }`}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                {selectedImage ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={selectedImage}
                      alt="Uploaded crop"
                      className="max-h-64 mx-auto rounded-lg shadow-md mb-4"
                    />
                    <p className="text-lg font-medium text-neutral-700">Image Ready for Analysis</p>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <Upload className="mx-auto text-neutral-400" size={64} />
                    <p className="text-lg text-neutral-700 font-medium">{t('dragDrop')}</p>
                    <p className="text-sm text-neutral-500">PNG, JPG up to 10MB</p>
                    <span className="mt-2 px-4 py-2 text-sm bg-neutral-200 text-neutral-600 rounded-full">Or browse files</span>
                  </div>
                )}
              </div>

              {selectedImage && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full mt-6 px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Analyze Disease
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Tips & Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Results Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Analysis Result</h3>
              <div className="space-y-3 text-neutral-600">
                <div className="h-4 bg-neutral-200 rounded animate-pulse"></div>
                <div className="h-4 bg-neutral-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-neutral-200 rounded animate-pulse w-1/2"></div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                {t('tipsTitle')}
              </h3>

              <div className="space-y-5">
                {tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors border-l-4 border-primary-500"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="bg-primary-600 p-3 rounded-lg text-white">
                      <tip.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-neutral-700 font-medium">{tip.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;

import { motion } from 'framer-motion';
import { Cloud, Droplets, Wind, Thermometer, CloudRain, Sun, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Weather = () => {
  const { t } = useLanguage();

  const weatherData = [
    { icon: Thermometer, label: t('temperature'), value: '28°C', color: 'text-red-500' },
    { icon: Droplets, label: t('humidity'), value: '65%', color: 'text-blue-500' },
    { icon: CloudRain, label: t('rainfall'), value: '30%', color: 'text-indigo-500' },
    { icon: Wind, label: t('windSpeed'), value: '12 km/h', color: 'text-gray-500' },
  ];

  const forecast = [
    { day: 'Mon', temp: '28°C', icon: Sun, condition: 'Sunny' },
    { day: 'Tue', temp: '26°C', icon: Cloud, condition: 'Cloudy' },
    { day: 'Wed', temp: '24°C', icon: CloudRain, condition: 'Rainy' },
    { day: 'Thu', temp: '27°C', icon: Sun, condition: 'Sunny' },
    { day: 'Fri', temp: '29°C', icon: Sun, condition: 'Sunny' },
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
            {t('weatherTitle')}
          </h2>
          <p className="text-xl text-neutral-600">Real-time weather data for your farm</p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Weather & Forecast */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-50 rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">Current Conditions</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {weatherData.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl shadow-md p-6 border border-neutral-200"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-opacity-10 ${item.color.replace('text', 'bg').replace('-500', '-100')}`}>
                      <item.icon size={28} className={item.color} />
                    </div>
                    <div className="text-sm text-neutral-500 mb-1">{item.label}</div>
                    <div className="text-3xl font-bold text-neutral-800">{item.value}</div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">5-Day Forecast</h3>
              <div className="grid grid-cols-5 gap-4">
                {forecast.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-white rounded-xl border border-neutral-200 shadow-sm"
                  >
                    <div className="font-semibold text-neutral-800 mb-3">{day.day}</div>
                    <day.icon className="mx-auto text-yellow-500 mb-3" size={40} />
                    <div className="text-2xl font-bold text-neutral-800 mb-2">{day.temp}</div>
                    <div className="text-xs text-neutral-500">{day.condition}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Weather Alerts & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-6 shadow-lg">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="text-yellow-500" />
                  Weather Advisory
                </h4>
                <p className="text-yellow-700">
                  Light rain expected tomorrow. Consider postponing pesticide application.
                </p>
              </div>

              <div className="bg-neutral-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop" 
                  alt="Farm location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

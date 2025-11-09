import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Header
    home: 'Home',
    diseaseDetection: 'Disease Detection',
    weather: 'Weather',
    chatbot: 'Chatbot',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Identify Crop Problems with AI',
    heroSubtitle: 'Get instant diagnosis and expert advice for your crops',
    startDetection: 'Start Detection',
    learnMore: 'Learn More',
    
    // Disease Detection
    diseaseTitle: 'Crop Disease Detection',
    uploadImage: 'Upload Crop Image',
    dragDrop: 'Drag and drop or click to upload',
    resultsPlaceholder: 'Results will appear here',
    tipsTitle: 'Tips for Best Results',
    tip1: 'Take photos in good natural light',
    tip2: 'Focus on the affected area',
    tip3: 'Include leaves and stems clearly',
    tip4: 'Avoid blurry or dark images',
    
    // Weather
    weatherTitle: 'Weather Forecast',
    temperature: 'Temperature',
    humidity: 'Humidity',
    rainfall: 'Rainfall Chance',
    windSpeed: 'Wind Speed',
    
    // Chatbot
    chatbotTitle: 'Farm Assistant',
    chatbotWelcome: 'Hi! I\'m your Farm Assistant 🌾',
    chatbotPlaceholder: 'Ask me anything about farming...',
    send: 'Send',
    
    // About
    aboutTitle: 'About AgriCare',
    aboutText: 'AgriCare is an AI-powered platform designed to help farmers identify crop diseases, get expert advice, and make informed decisions to protect their harvests. Our mission is to make agricultural technology accessible to every farmer.',
    ourMission: 'Our Mission',
    missionText: 'To empower farmers with cutting-edge AI technology for better crop health and increased yields.',
    features: 'Features',
    feature1: 'AI-powered disease detection',
    feature2: 'Real-time weather updates',
    feature3: '24/7 expert assistance',
    feature4: 'Multilingual support',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Have questions? We\'re here to help!',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Submit',
    followUs: 'Follow Us',
    
    // Footer
    allRights: 'All rights reserved',
    
    // Stats
    farmersHelped: 'Farmers Helped',
    diseasesDetected: 'Diseases Detected',
    successRate: 'Success Rate',
  },
  hi: {
    // Header
    home: 'मुख्य पृष्ठ',
    diseaseDetection: 'रोग पहचान',
    weather: 'मौसम',
    chatbot: 'सलाहकार',
    about: 'हमारे बारे में',
    contact: 'संपर्क करें',
    
    // Hero Section
    heroTitle: 'AI से पहचानें फसल की समस्या',
    heroSubtitle: 'अपनी फसल के लिए तुरंत निदान और विशेषज्ञ सलाह प्राप्त करें',
    startDetection: 'पहचान शुरू करें',
    learnMore: 'और जानें',
    
    // Disease Detection
    diseaseTitle: 'फसल रोग पहचान',
    uploadImage: 'फसल की तस्वीर अपलोड करें',
    dragDrop: 'खींचें और छोड़ें या अपलोड करने के लिए क्लिक करें',
    resultsPlaceholder: 'परिणाम यहां दिखाई देंगे',
    tipsTitle: 'सर्वोत्तम परिणाम के लिए सुझाव',
    tip1: 'अच्छी प्राकृतिक रोशनी में फोटो लें',
    tip2: 'प्रभावित क्षेत्र पर ध्यान दें',
    tip3: 'पत्तियों और तनों को स्पष्ट रूप से शामिल करें',
    tip4: 'धुंधली या अंधेरी तस्वीरों से बचें',
    
    // Weather
    weatherTitle: 'मौसम पूर्वानुमान',
    temperature: 'तापमान',
    humidity: 'आर्द्रता',
    rainfall: 'वर्षा की संभावना',
    windSpeed: 'हवा की गति',
    
    // Chatbot
    chatbotTitle: 'खेत सहायक',
    chatbotWelcome: 'नमस्ते! मैं आपका खेत सहायक हूँ 🌾',
    chatbotPlaceholder: 'खेती के बारे में कुछ भी पूछें...',
    send: 'भेजें',
    
    // About
    aboutTitle: 'एग्रीकेयर के बारे में',
    aboutText: 'एग्रीकेयर एक AI-संचालित मंच है जो किसानों को फसल रोगों की पहचान करने, विशेषज्ञ सलाह प्राप्त करने और अपनी फसलों की रक्षा के लिए सूचित निर्णय लेने में मदद करने के लिए डिज़ाइन किया गया है। हमारा मिशन हर किसान के लिए कृषि प्रौद्योगिकी को सुलभ बनाना है।',
    ourMission: 'हमारा मिशन',
    missionText: 'बेहतर फसल स्वास्थ्य और बढ़ी हुई उपज के लिए अत्याधुनिक AI तकनीक के साथ किसानों को सशक्त बनाना।',
    features: 'विशेषताएं',
    feature1: 'AI-संचालित रोग पहचान',
    feature2: 'वास्तविक समय मौसम अपडेट',
    feature3: '24/7 विशेषज्ञ सहायता',
    feature4: 'बहुभाषी समर्थन',
    
    // Contact
    contactTitle: 'संपर्क करें',
    contactSubtitle: 'प्रश्न हैं? हम मदद के लिए यहां हैं!',
    name: 'नाम',
    email: 'ईमेल',
    message: 'संदेश',
    submit: 'जमा करें',
    followUs: 'हमें फॉलो करें',
    
    // Footer
    allRights: 'सर्वाधिकार सुरक्षित',
    
    // Stats
    farmersHelped: 'किसानों की मदद की',
    diseasesDetected: 'रोगों का पता लगाया',
    successRate: 'सफलता दर',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };
  
  const t = (key) => translations[language][key] || key;
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

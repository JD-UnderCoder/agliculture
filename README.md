# AgriCare - Agriculture Disease Detection Web App

A modern, bilingual (Hindi + English) agriculture web application built with React, Tailwind CSS, and Framer Motion. Inspired by Plantix, this app helps farmers identify crop diseases, check weather forecasts, and get AI-powered farming advice.

## ✨ Features

- 🌾 **Crop Disease Detection**: Upload crop images for AI-powered disease identification
- 🌤️ **Weather Forecast**: Real-time weather updates and forecasts
- 💬 **AI Chatbot**: 24/7 farming assistant for expert advice
- 🌍 **Bilingual Support**: Seamless switching between English and Hindi
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🎨 **Modern UI/UX**: Clean design with smooth animations using Framer Motion
- 🎯 **Agriculture-Focused**: Natural green and yellow color scheme

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit:
   ```
   http://localhost:5173
   ```

## 🚀 Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
agri-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with language toggle
│   │   ├── Hero.jsx             # Homepage hero section
│   │   ├── DiseaseDetection.jsx # Disease detection interface
│   │   ├── Weather.jsx          # Weather forecast dashboard
│   │   ├── Chatbot.jsx          # AI chatbot interface
│   │   ├── About.jsx            # About page
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer with links
│   ├── context/
│   │   └── LanguageContext.jsx  # Language switching context
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── package.json
```

## 🌐 Available Sections

1. **Home** - Hero section with key features and statistics
2. **Disease Detection** - Upload crop images for disease analysis
3. **Weather** - 5-day forecast and weather alerts
4. **Chatbot** - AI-powered farming assistant
5. **About** - Information about the platform
6. **Contact** - Get in touch via contact form

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- **Primary** (Green): Agriculture and growth
- **Accent** (Yellow): Natural and warm

### Translations

Edit translations in `src/context/LanguageContext.jsx`:
```javascript
export const translations = {
  en: { /* English translations */ },
  hi: { /* Hindi translations */ }
};
```

## 🔮 Future Enhancements

This is a frontend-only version. To make it production-ready:

- [ ] Connect to actual AI disease detection API
- [ ] Integrate real weather API (OpenWeather, WeatherAPI)
- [ ] Implement backend for chatbot (OpenAI, Anthropic)
- [ ] Add user authentication
- [ ] Store user data and crop history
- [ ] Add offline support with PWA
- [ ] Implement push notifications for weather alerts
- [ ] Add multiple language support (Marathi, Tamil, Telugu, etc.)

## 📝 Notes

- All images are placeholder URLs from Unsplash
- Weather data is currently static/dummy data
- Chatbot provides demo responses
- Disease detection shows placeholder results

## 🤝 Contributing

This is a demo project. Feel free to fork and enhance it!

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Farming! 🌾**

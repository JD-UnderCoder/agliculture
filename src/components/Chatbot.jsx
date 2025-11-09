import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Chatbot = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    { type: 'bot', text: t('chatbotWelcome') }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages([...newMessages, { 
        type: 'bot', 
        text: 'Thanks for your question! This is a demo response. In production, this would connect to an AI service for real farming advice.' 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {t('chatbotTitle')}
          </h2>
          <p className="text-xl text-neutral-600">Ask anything about farming and crop care</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200"
        >
          {/* Chat Header */}
          <div className="bg-primary-600 p-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Bot className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl">Farm Assistant</h3>
                <p className="text-primary-200 text-sm">Online • Always here to help</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-8 bg-white">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-4 items-end ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md ${                    message.type === 'bot' 
                      ? 'bg-primary-100' 
                      : 'bg-secondary-100'
                  }`}>
                    {message.type === 'bot' ? (
                      <Bot className="text-primary-600" size={24} />
                    ) : (
                      <User className="text-secondary-600" size={24} />
                    )}
                  </div>
                  
                  <div className={`max-w-md p-4 rounded-2xl shadow-sm ${                    message.type === 'bot'
                      ? 'bg-neutral-100 text-neutral-700 rounded-bl-none'
                      : 'bg-primary-600 text-white rounded-br-none'
                  }`}>
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-neutral-200 p-6 bg-neutral-50">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chatbotPlaceholder')}
                className="flex-1 px-5 py-3 bg-white border-2 border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-800 placeholder-neutral-500 text-lg"
              />
              <motion.button
                onClick={handleSend}
                className="px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg flex items-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={22} />
              </motion.button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[ 'How to prevent leaf blight?', 'Best fertilizer for wheat?', 'When to harvest rice?' ].map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => setInput(q)}
                  className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chatbot;

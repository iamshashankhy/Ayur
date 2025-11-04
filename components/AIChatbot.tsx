"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Namaste! 🙏 I\'m your Ayurvedic AI assistant. I can help you with questions about doshas, wellness tips, diet recommendations, and your health journey. How can I assist you today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Ayurvedic knowledge base responses
    if (message.includes('vata') || message.includes('वात')) {
      return language === 'kannada' ? 
        'ವಾತ ದೋಷವು ಚಲನೆಯನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ ಮತ್ತು ವಾಯು ಮತ್ತು ಆಕಾಶ ಅಂಶಗಳಿಂದ ಕೂಡಿದೆ. ಸಮತೋಲನದಲ್ಲಿದ್ದಾಗ, ಇದು ಸೃಜನಶೀಲತೆ ಮತ್ತು ಚೈತನ್ಯವನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ. ವಾತವನ್ನು ಸಮತೋಲನಗೊಳಿಸಲು: ಬೆಚ್ಚಗಿನ, ಬೇಯಿಸಿದ ಆಹಾರವನ್ನು ತಿನ್ನಿ, ನಿಯಮಿತ ದಿನಚರಿಯನ್ನು ಕಾಪಾಡಿ, ಸೌಮ್ಯ ಯೋಗವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ ಮತ್ತು ಸಾಕಷ್ಟು ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.' :
        'Vata dosha governs movement and is composed of air and space elements. When balanced, it promotes creativity and vitality. To balance Vata: eat warm, cooked foods, maintain regular routines, practice gentle yoga, and get adequate rest. Avoid cold, dry, and raw foods.';
    }
    
    if (message.includes('pitta') || message.includes('पित्त')) {
      return language === 'kannada' ? 
        'ಪಿತ್ತ ದೋಷವು ಜೀರ್ಣಕ್ರಿಯೆ ಮತ್ತು ಚಯಾಪಚಯವನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ, ಅಗ್ನಿ ಮತ್ತು ಜಲ ಅಂಶಗಳಿಂದ ಕೂಡಿದೆ. ಸಮತೋಲನದಲ್ಲಿದ್ದಾಗ, ಇದು ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು ಉತ್ತಮ ಜೀರ್ಣಕ್ರಿಯೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ. ಪಿತ್ತವನ್ನು ಸಮತೋಲನಗೊಳಿಸಲು: ತಂಪಾಗಿಸುವ ಆಹಾರವನ್ನು ತಿನ್ನಿ, ಮಸಾಲೆಯುಕ್ತ ಮತ್ತು ಆಮ್ಲೀಯ ಆಹಾರವನ್ನು ತಪ್ಪಿಸಿ, ಮಧ್ಯಮ ವ್ಯಾಯಾಮವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ ಮತ್ತು ಒತ್ತಡವನ್ನು ನಿರ್ವಹಿಸಿ.' :
        'Pitta dosha controls digestion and metabolism, composed of fire and water elements. When balanced, it promotes intelligence and good digestion. To balance Pitta: eat cooling foods, avoid spicy and acidic foods, practice moderate exercise, and manage stress. Stay cool and calm.';
    }
    
    if (message.includes('kapha') || message.includes('कफ')) {
      return language === 'kannada' ? 
        'ಕಫ ದೋಷವು ರಚನೆ ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ, ಭೂಮಿ ಮತ್ತು ಜಲ ಅಂಶಗಳಿಂದ ಕೂಡಿದೆ. ಸಮತೋಲನದಲ್ಲಿದ್ದಾಗ, ಇದು ಶಕ್ತಿ ಮತ್ತು ಸ್ಥಿರತೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ. ಕಫವನ್ನು ಸಮತೋಲನಗೊಳಿಸಲು: ಹಗುರವಾದ, ಬೆಚ್ಚಗಿನ ಆಹಾರವನ್ನು ತಿನ್ನಿ, ಹುರುಪಿನ ವ್ಯಾಯಾಮದಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳಿ, ಭಾರವಾದ ಮತ್ತು ಎಣ್ಣೆಯುಕ್ತ ಆಹಾರವನ್ನು ತಪ್ಪಿಸಿ ಮತ್ತು ಸಕ್ರಿಯ ಜೀವನಶೈಲಿಯನ್ನು ಕಾಪಾಡಿ.' :
        'Kapha dosha provides structure and immunity, composed of earth and water elements. When balanced, it promotes strength and stability. To balance Kapha: eat light, warm foods, engage in vigorous exercise, avoid heavy and oily foods, and maintain an active lifestyle.';
    }
    
    if (message.includes('diet') || message.includes('food') || message.includes('eat')) {
      return 'Ayurvedic diet principles: Eat according to your dosha, include all 6 tastes (sweet, sour, salty, pungent, bitter, astringent), eat your largest meal at lunch when digestive fire is strongest, avoid cold drinks with meals, and eat in a peaceful environment.';
    }
    
    if (message.includes('stress') || message.includes('anxiety') || message.includes('mental')) {
      return 'For mental wellness in Ayurveda: Practice daily meditation, follow a regular routine, use calming herbs like Brahmi and Ashwagandha, practice pranayama (breathing exercises), get adequate sleep, and maintain work-life balance. Consider abhyanga (oil massage) for relaxation.';
    }
    
    if (message.includes('sleep') || message.includes('insomnia')) {
      return 'Ayurvedic sleep tips: Maintain regular sleep schedule, avoid screens before bed, practice gentle yoga or meditation, drink warm milk with turmeric, massage feet with warm oil, keep bedroom cool and dark, and avoid heavy meals before sleep.';
    }
    
    if (message.includes('digestion') || message.includes('stomach') || message.includes('bloating')) {
      return 'For healthy digestion: Eat at regular times, chew food thoroughly, avoid drinking large amounts of water with meals, use digestive spices like ginger and cumin, practice mindful eating, and take a short walk after meals. Consider triphala for digestive health.';
    }
    
    if (message.includes('yoga') || message.includes('exercise')) {
      return 'Ayurvedic exercise guidelines: Vata types should do gentle, grounding exercises like walking and restorative yoga. Pitta types benefit from moderate, cooling activities like swimming. Kapha types need vigorous, energizing exercises like running and power yoga.';
    }
    
    if (message.includes('season') || message.includes('weather')) {
      return 'Seasonal Ayurvedic living: Spring (Kapha season) - detox and energize. Summer (Pitta season) - stay cool and calm. Fall/Winter (Vata season) - warm, nourishing foods and routines. Adjust your diet, lifestyle, and practices according to the season.';
    }
    
    if (message.includes('herbs') || message.includes('medicine')) {
      return 'Common Ayurvedic herbs: Ashwagandha for stress and energy, Turmeric for inflammation, Triphala for digestion, Brahmi for mental clarity, Neem for skin health, and Tulsi for immunity. Always consult with an Ayurvedic practitioner before starting herbs.';
    }
    
    if (message.includes('constitution') || message.includes('assessment')) {
      return 'Your Ayurvedic constitution (Prakriti) is your natural state determined at birth. Take our comprehensive assessment to discover your unique dosha combination. This helps create personalized recommendations for diet, lifestyle, and wellness practices.';
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('namaste')) {
      return language === 'kannada' ? 
        'ನಮಸ್ತೆ! 🙏 ನಿಮ್ಮ ಆಯುರ್ವೇದಿಕ ಆರೋಗ್ಯ ಪ್ರಯಾಣಕ್ಕೆ ಸ್ವಾಗತ. ಪ್ರಾಚೀನ ಜ್ಞಾನ ಮತ್ತು ಆಧುನಿಕ ಒಳನೋಟಗಳೊಂದಿಗೆ ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ಆಯುರ್ವೇದ, ದೋಷಗಳು ಅಥವಾ ನಿಮ್ಮ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ನೀವು ಏನು ತಿಳಿದುಕೊಳ್ಳಲು ಬಯಸುತ್ತೀರಿ?' :
        'Namaste! 🙏 Welcome to your Ayurvedic wellness journey. I\'m here to guide you with ancient wisdom and modern insights. What would you like to know about Ayurveda, doshas, or your health?';
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return 'You\'re most welcome! 🙏 I\'m here whenever you need guidance on your wellness journey. Remember, small consistent steps lead to lasting health. Take care and stay balanced!';
    }
    
    // Default response
    return language === 'kannada' ? 
      'ಆಯುರ್ವೇದದ ಬಗ್ಗೆ ಆಸಕ್ತಿದಾಯಕ ಪ್ರಶ್ನೆ! ನನಗೆ ದೋಷಗಳು, ಆಹಾರ, ಜೀವನಶೈಲಿ ಮತ್ತು ಆರೋಗ್ಯ ಅಭ್ಯಾಸಗಳ ಬಗ್ಗೆ ಜ್ಞಾನವಿದ್ದರೂ, ವೈಯಕ್ತಿಕ ಸಲಹೆಗಾಗಿ ಅರ್ಹ ಆಯುರ್ವೇದ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಲು ನಾನು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ. ಆಯುರ್ವೇದ, ದೋಷಗಳು ಅಥವಾ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ನೀವು ಹೆಚ್ಚು ತಿಳಿದುಕೊಳ್ಳಲು ಬಯಸುವ ನಿರ್ದಿಷ್ಟ ವಿಷಯವಿದೆಯೇ?' :
      'That\'s an interesting question about Ayurveda! While I have knowledge about doshas, diet, lifestyle, and wellness practices, I\'d recommend consulting with a qualified Ayurvedic practitioner for personalized advice. Is there something specific about Ayurveda, doshas, or wellness you\'d like to know more about?';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
        >
          <div className="relative">
            <div className="w-8 h-8 flex items-center justify-center">
              {/* Robot Symbol */}
              <svg viewBox="0 0 32 32" className="w-8 h-8 text-white" fill="currentColor">
                {/* Robot Head */}
                <rect x="10" y="6" width="12" height="10" rx="2" />
                {/* Robot Eyes */}
                <circle cx="13" cy="10" r="1.5" fill="#00ff88" />
                <circle cx="19" cy="10" r="1.5" fill="#00ff88" />
                {/* Robot Mouth */}
                <rect x="14" y="13" width="4" height="1" rx="0.5" />
                {/* Robot Body */}
                <rect x="12" y="18" width="8" height="8" rx="1" />
                {/* Robot Arms */}
                <rect x="8" y="20" width="3" height="4" rx="1.5" />
                <rect x="21" y="20" width="3" height="4" rx="1.5" />
                {/* Robot Legs */}
                <rect x="13" y="27" width="2" height="3" rx="1" />
                <rect x="17" y="27" width="2" height="3" rx="1" />
                {/* Antenna */}
                <line x1="16" y1="6" x2="16" y2="4" stroke="currentColor" strokeWidth="1" />
                <circle cx="16" cy="3" r="1" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask AI Assistant
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200 transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[500px]'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center p-1">
                {/* Robot Symbol for Header */}
                <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="currentColor">
                  {/* Robot Head */}
                  <rect x="10" y="6" width="12" height="10" rx="2" />
                  {/* Robot Eyes */}
                  <circle cx="13" cy="10" r="1.5" fill="#00ff88" />
                  <circle cx="19" cy="10" r="1.5" fill="#00ff88" />
                  {/* Robot Mouth */}
                  <rect x="14" y="13" width="4" height="1" rx="0.5" />
                  {/* Robot Body */}
                  <rect x="12" y="18" width="8" height="8" rx="1" />
                  {/* Robot Arms */}
                  <rect x="8" y="20" width="3" height="4" rx="1.5" />
                  <rect x="21" y="20" width="3" height="4" rx="1.5" />
                  {/* Robot Legs */}
                  <rect x="13" y="27" width="2" height="3" rx="1" />
                  <rect x="17" y="27" width="2" height="3" rx="1" />
                  {/* Antenna */}
                  <line x1="16" y1="6" x2="16" y2="4" stroke="currentColor" strokeWidth="1" />
                  <circle cx="16" cy="3" r="1" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Ayur AI Assistant</h3>
                <p className="text-xs opacity-90">Your wellness guide</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <svg viewBox="0 0 32 32" className="w-4 h-4 text-white" fill="currentColor">
                            {/* Robot Head */}
                            <rect x="10" y="6" width="12" height="10" rx="2" />
                            {/* Robot Eyes */}
                            <circle cx="13" cy="10" r="1.5" fill="#00ff88" />
                            <circle cx="19" cy="10" r="1.5" fill="#00ff88" />
                            {/* Robot Mouth */}
                            <rect x="14" y="13" width="4" height="1" rx="0.5" />
                            {/* Robot Body */}
                            <rect x="12" y="18" width="8" height="8" rx="1" />
                            {/* Robot Arms */}
                            <rect x="8" y="20" width="3" height="4" rx="1.5" />
                            <rect x="21" y="20" width="3" height="4" rx="1.5" />
                            {/* Robot Legs */}
                            <rect x="13" y="27" width="2" height="3" rx="1" />
                            <rect x="17" y="27" width="2" height="3" rx="1" />
                            {/* Antenna */}
                            <line x1="16" y1="6" x2="16" y2="4" stroke="currentColor" strokeWidth="1" />
                            <circle cx="16" cy="3" r="1" />
                          </svg>
                        )}
                      </div>
                      <div className={`p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white rounded-br-md'
                          : 'bg-gray-100 text-gray-800 rounded-bl-md'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center p-1">
                        <svg viewBox="0 0 32 32" className="w-4 h-4 text-white" fill="currentColor">
                          {/* Robot Head */}
                          <rect x="10" y="6" width="12" height="10" rx="2" />
                          {/* Robot Eyes */}
                          <circle cx="13" cy="10" r="1.5" fill="#00ff88" />
                          <circle cx="19" cy="10" r="1.5" fill="#00ff88" />
                          {/* Robot Mouth */}
                          <rect x="14" y="13" width="4" height="1" rx="0.5" />
                          {/* Robot Body */}
                          <rect x="12" y="18" width="8" height="8" rx="1" />
                          {/* Robot Arms */}
                          <rect x="8" y="20" width="3" height="4" rx="1.5" />
                          <rect x="21" y="20" width="3" height="4" rx="1.5" />
                          {/* Robot Legs */}
                          <rect x="13" y="27" width="2" height="3" rx="1" />
                          <rect x="17" y="27" width="2" height="3" rx="1" />
                          {/* Antenna */}
                          <line x1="16" y1="6" x2="16" y2="4" stroke="currentColor" strokeWidth="1" />
                          <circle cx="16" cy="3" r="1" />
                        </svg>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about doshas, diet, wellness..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="w-10 h-10 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  AI responses are for educational purposes only. Consult healthcare professionals for medical advice.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
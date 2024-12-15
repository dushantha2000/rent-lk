import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const ChatBox = ({ rentals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm your real estate assistant. I can help you find the perfect property. What are you looking for today?", 
      sender: 'bot' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getPropertyDetails = (category) => {
    const matchedProperties = rentals.filter(rental => 
      rental.category.toLowerCase() === category.toLowerCase()
    );

    if (matchedProperties.length === 0) {
      return "I'm sorry, but we don't have any properties in that category right now.";
    }

    return matchedProperties.map(property => 
      `${property.title} in ${property.location}. Price: ${property.price} ${property.period}. Specs: ${property.specs.join(', ')}.`
    ).join('\n\n');
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Generate bot response
    const botResponse = {
      id: messages.length + 2,
      text: getSimulatedResponse(inputMessage),
      sender: 'bot'
    };

    // Add bot response after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    // Clear input
    setInputMessage('');
  };

  const getSimulatedResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for property category queries
    if (lowerMessage.includes('apartment')) {
      return "Here are our available apartments:\n\n" + getPropertyDetails('apartment');
    }

    if (lowerMessage.includes('house')) {
      return "Here are our available houses:\n\n" + getPropertyDetails('house');
    }

    // Price-related queries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      const priceRange = rentals.map(r => r.price).join(', ');
      return `Our current rental prices range from ${priceRange} per month.`;
    }

    // Location queries
    if (lowerMessage.includes('location')) {
      const locations = rentals.map(r => r.location).join(', ');
      return `We have properties in the following locations: ${locations}`;
    }

    // Amenities queries
    if (lowerMessage.includes('amenity') || lowerMessage.includes('amenities')) {
      const allAmenities = [...new Set(rentals.flatMap(r => r.amenities))];
      return `Available amenities across our properties include: ${allAmenities.join(', ')}`;
    }
    

    // Default responses
    const responses = [
      "I can help you find the perfect rental. Are you looking for an apartment or a house?",
      "Would you like to know more about our available properties?",
      "I have details about apartments and houses. What are you interested in?",
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white shadow-xl rounded-xl border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-semibold">Real Estate Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-600 p-1 rounded-full"
            >
              ×
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[70%] px-3 py-2 rounded-lg ${
                    msg.sender === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t flex">
            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Chat Bubble */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-xl hover:bg-blue-600 transition-all"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatBox;
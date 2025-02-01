'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, AlertCircle } from 'lucide-react';

interface Message {
  content: string;
  isBot: boolean;
}

const LegalChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Prevent scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        content: generateWelcomeMessage(),
        isBot: true
      }]);
    }
  }, [isOpen]);

  const generateWelcomeMessage = () => `
    <div class="space-y-2">
      <div class="flex items-center gap-2 text-blue-600">
        <span class="text-xl">⚖️</span>
        <span class="font-semibold">Virtual Assistant</span>
      </div>
      <p class="text-gray-600">
        Welcome to our legal consultation service. I'm here to help answer your questions about business law, contracts, company formation, and more.
      </p>
      <div class="flex items-center gap-2 mt-4 text-xs text-gray-500 bg-blue-50 p-2 rounded-lg">
        <AlertCircle className="w-4 h-4" />
        <span>This is an AI assistant for general guidance only. For specific legal advice, please contact our legal team directly.</span>
      </div>
    </div>`;

  const formatResponse = (response: string) => {
    return `<div class="space-y-2">
      <p class="text-gray-700">${response}</p>
      <div class="text-xs text-gray-500 mt-2">
        Need more specific advice? 
        <a href="/contact" class="text-blue-600 hover:underline">Contact our legal team</a>
      </div>
    </div>`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userQuery = input.trim();
    setMessages(prev => [...prev, { content: userQuery, isBot: false }]);
    setIsLoading(true);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userQuery }),
      });

      if (!response.ok) throw new Error('Failed to get response');
      
      const data = await response.json();
      setMessages(prev => [...prev, { 
        content: formatResponse(data.response), 
        isBot: true 
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        content: `
          <div class="space-y-2">
            <p class="font-medium text-gray-700">I apologize, but I encountered an error. Please contact us directly:</p>
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+971544778569" class="text-blue-600 hover:underline">+971 544778569</a>
              </div>
              <div class="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:contact@chanakyatse.com" class="text-blue-600 hover:underline">contact@chanakyatse.com</a>
              </div>
            </div>
          </div>
        `, 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        >
          <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}

      {isOpen && (
        <div 
          className="fixed bottom-8 right-8 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 z-[100] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              <h3 className="font-semibold">Virtual Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1.5 transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent isolate"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                    msg.isBot 
                      ? 'bg-white text-gray-800 rounded-tl-none' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-none'
                  } [&_a]:text-blue-600 [&_a]:hover:underline`}
                  dangerouslySetInnerHTML={{ __html: msg.content }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a legal question..."
                className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl hover:shadow-lg disabled:opacity-50 transition-all duration-300 flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              AI guidance only. For legal advice, please consult our lawyers.
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LegalChatPopup;
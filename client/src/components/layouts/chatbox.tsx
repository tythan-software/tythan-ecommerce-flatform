"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Hello! How can I assist you today?",
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b bg-blue-600 text-white rounded-t-2xl">
            <span className="font-semibold">Support Agent</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {
                messages.map((msg, idx) => {
                    const isSupport = idx === 0; // first message = support
                    return (
                        <div
                            key={idx}
                            className={`flex ${isSupport ? "justify-start" : "justify-end"}`}
                        >
                            {isSupport && (
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                                <Image 
                                    src="/images/logo.png" 
                                    alt="EasyBuy Icon"
                                    className="object-cover bg-white rounded-full"
                                    width={32} 
                                    height={32} />
                            </div>
                            )}
                            <div
                            className={`px-3 py-2 rounded-lg max-w-[70%] ${
                                isSupport
                                ? "bg-gray-200 text-gray-800"
                                : "bg-blue-100 text-gray-900"
                            }`}
                            >
                            {msg}
                            </div>
                        </div>
                    );
                })
            }
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask me anything..."
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

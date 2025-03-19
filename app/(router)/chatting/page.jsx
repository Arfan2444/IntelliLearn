"use client";

import { useState, useEffect, useRef } from "react";

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there!", sender: "Alice" },
    { id: 2, text: "Hello! How's it going?", sender: "You" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending message
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { id: messages.length + 1, text: newMessage, sender: "You" },
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[80vh] w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-gray-300">
      {/* Chat Header */}
      <div className="bg-purple-600 text-white text-lg font-semibold p-4 rounded-t-lg">
        Chat Room
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-100">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs shadow-md ${
                msg.sender === "You"
                  ? "bg-purple-500 text-white rounded-br-none"
                  : "bg-gray-300 text-gray-900 rounded-bl-none"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t flex items-center bg-white">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

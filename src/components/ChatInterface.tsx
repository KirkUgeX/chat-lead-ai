
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Brain, MessageSquare, Users } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "client" | "manager";
  message: string;
  avatar?: string;
  name: string;
  timestamp?: string;
}

interface AISuggestion {
  type: "analysis" | "responses" | "coaching";
  icon: React.ReactNode;
  title: string;
  content: string;
  suggestions?: string[];
}

interface ChatInterfaceProps {
  messages: ChatMessage[];
  aiSuggestion: AISuggestion;
  inputPlaceholder?: string;
  showTyping?: boolean;
}

const ChatInterface = ({ messages, aiSuggestion, inputPlaceholder = "Type a message...", showTyping = false }: ChatInterfaceProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-white/20 text-white text-xs">
              {messages[0]?.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm">{messages[0]?.name}</h3>
            <p className="text-xs opacity-80">online</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-3 bg-gray-50 min-h-[200px]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${
              message.sender === "manager" ? "flex-row-reverse space-x-reverse" : ""
            }`}
          >
            <Avatar className="w-7 h-7 flex-shrink-0">
              <AvatarImage src={message.avatar} />
              <AvatarFallback className={`text-xs ${
                message.sender === "client" ? "bg-gray-300" : "bg-blue-500 text-white"
              }`}>
                {message.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div
              className={`max-w-[70%] px-3 py-2 rounded-2xl text-sm ${
                message.sender === "client"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "bg-blue-500 text-white"
              }`}
            >
              {message.message}
            </div>
          </div>
        ))}
        
        {showTyping && (
          <div className="flex items-center space-x-2">
            <Avatar className="w-7 h-7">
              <AvatarFallback className="bg-gray-300 text-xs">C</AvatarFallback>
            </Avatar>
            <div className="bg-white px-3 py-2 rounded-2xl shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI Suggestion Panel */}
      <div className="relative">
        <div className="absolute -top-2 right-4 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[8px] border-l-transparent border-r-transparent border-b-blue-600"></div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 text-white">
          <div className="flex items-center mb-3">
            {aiSuggestion.icon}
            <span className="text-xs font-medium ml-2">{aiSuggestion.title}</span>
          </div>
          <p className="text-sm mb-3 opacity-90">{aiSuggestion.content}</p>
          
          {aiSuggestion.suggestions && (
            <div className="space-y-2">
              {aiSuggestion.suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <p className="text-sm">{suggestion}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder={inputPlaceholder}
              className="w-full bg-transparent text-sm outline-none"
              readOnly
            />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

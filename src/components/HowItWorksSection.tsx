
import { Brain, MessageSquare, Users } from "lucide-react";
import ChatInterface from "./ChatInterface";

const HowItWorksSection = () => {
  const moment1Messages = [
    {
      id: "1",
      sender: "client" as const,
      message: "We're still comparing options. We'll get back to you if needed.",
      name: "Client",
    }
  ];

  const moment1Suggestion = {
    type: "analysis" as const,
    icon: <Brain className="w-4 h-4" />,
    title: "AI-T9 suggests:",
    content: "🧠 Looks like the client is stalling. This is typical delaying behavior.",
    suggestions: [
      "✔️ \"Great, I'll reserve these terms until tomorrow. Sound good?\"",
      "✔️ \"Want me to send a quick feature comparison? Takes just 1 minute\""
    ]
  };

  const moment2Messages = [
    {
      id: "1",
      sender: "client" as const,
      message: "How do you differ from your competitors?",
      name: "Client",
    }
  ];

  const moment2Suggestion = {
    type: "responses" as const,
    icon: <MessageSquare className="w-4 h-4" />,
    title: "AI suggests options:",
    content: "Choose the appropriate tone for your response:",
    suggestions: [
      "😄 \"We can show you a demo — I think you'll see the difference yourself\"",
      "📄 \"We excel in implementation speed. I can send you a comparison\"",
      "💪 \"500+ companies trust us. Here's what makes us stronger...\""
    ]
  };

  const moment3Messages = [
    {
      id: "1",
      sender: "manager" as const,
      message: "They're not responding. What should I do?",
      name: "Junior",
    }
  ];

  const moment3Suggestion = {
    type: "coaching" as const,
    icon: <Users className="w-4 h-4" />,
    title: "AI coach explains:",
    content: "🎯 Possible ghosting. Try this:",
    suggestions: [
      "\"Just bumping this so it doesn't get lost\"",
      "\"If this isn't relevant anymore, just let me know\"",
      "\"We have a new update I could show you?\""
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-T9</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built right into your chats. Suggests, teaches, and writes for you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Moment 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <ChatInterface
                messages={moment1Messages}
                aiSuggestion={moment1Suggestion}
                inputPlaceholder="Type your response..."
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Moment 1: AI suggests from the side</h3>
            <p className="text-gray-600">Client writes — AI analyzes and suggests the best response options</p>
          </div>
          
          {/* Moment 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <ChatInterface
                messages={moment2Messages}
                aiSuggestion={moment2Suggestion}
                inputPlaceholder="Choose a ready response..."
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Moment 2: Like T9, but for sales</h3>
            <p className="text-gray-600">AI offers ready responses in different tones: friendly, formal, confident</p>
          </div>
          
          {/* Moment 3 */}
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <ChatInterface
                messages={moment3Messages}
                aiSuggestion={moment3Suggestion}
                inputPlaceholder="Ask the AI coach..."
                showTyping={false}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Moment 3: AI as a coach</h3>
            <p className="text-gray-600">Explains client behavior and teaches how to react in difficult situations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

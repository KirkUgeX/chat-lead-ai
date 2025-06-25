
import { Brain, MessageSquare, Users } from "lucide-react";
import ChatInterface from "./ChatInterface";

const HowItWorksSection = () => {
  const moment1Messages = [
    {
      id: "1",
      sender: "client" as const,
      message: "Мы пока сравниваем. Если что — напишем.",
      name: "Клиент",
    }
  ];

  const moment1Suggestion = {
    type: "analysis" as const,
    icon: <Brain className="w-4 h-4" />,
    title: "AI-T9 подсказывает:",
    content: "🧠 Похоже, клиент уходит \"подумать\". Это типичное затягивание.",
    suggestions: [
      "✔️ \"Хорошо, зарезервирую условия до завтра. Подойдёт?\"",
      "✔️ \"Хочешь, пришлю сравнение по фичам — займёт 1 минуту\""
    ]
  };

  const moment2Messages = [
    {
      id: "1",
      sender: "client" as const,
      message: "Чем вы отличаетесь от конкурентов?",
      name: "Клиент",
    }
  ];

  const moment2Suggestion = {
    type: "responses" as const,
    icon: <MessageSquare className="w-4 h-4" />,
    title: "AI предлагает варианты:",
    content: "Выберите подходящий тон ответа:",
    suggestions: [
      "😄 \"Можем показать демку — думаю, сами увидите разницу\"",
      "📄 \"Отличаемся скоростью внедрения. Могу отправить сравнение\"",
      "💪 \"Нам доверяют 500+ компаний. Вот в чём мы сильнее...\""
    ]
  };

  const moment3Messages = [
    {
      id: "1",
      sender: "manager" as const,
      message: "Он не отвечает. Что делать?",
      name: "Джун",
    }
  ];

  const moment3Suggestion = {
    type: "coaching" as const,
    icon: <Users className="w-4 h-4" />,
    title: "AI-тренер объясняет:",
    content: "🎯 Возможно ghosting. Попробуй:",
    suggestions: [
      "\"Просто апну, чтобы не потерялось\"",
      "\"Если неактуально — дай знать\"",
      "\"У нас появился апдейт, могу показать?\""
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Как работает <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-T9</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Встроен прямо в чат. Подсказывает, учит, пишет за тебя.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Moment 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <ChatInterface
                messages={moment1Messages}
                aiSuggestion={moment1Suggestion}
                inputPlaceholder="Введите ответ..."
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Момент 1: AI подсказывает сбоку</h3>
            <p className="text-gray-600">Клиент пишет — AI анализирует и предлагает лучшие варианты ответа</p>
          </div>
          
          {/* Moment 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <ChatInterface
                messages={moment2Messages}
                aiSuggestion={moment2Suggestion}
                inputPlaceholder="Выберите готовый ответ..."
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Момент 2: Как T9, только для продаж</h3>
            <p className="text-gray-600">AI предлагает готовые ответы в разных тонах: дружелюбный, формальный, уверенный</p>
          </div>
          
          {/* Moment 3 */}
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <ChatInterface
                messages={moment3Messages}
                aiSuggestion={moment3Suggestion}
                inputPlaceholder="Спросите AI-тренера..."
                showTyping={false}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Момент 3: AI как тренер</h3>
            <p className="text-gray-600">Объясняет поведение клиента и учит, как реагировать в сложных ситуациях</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

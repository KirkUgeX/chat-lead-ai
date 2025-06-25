
import { Brain, MessageSquare, Users } from "lucide-react";

const HowItWorksSection = () => {
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
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                <span className="text-sm text-gray-500">Клиент</span>
              </div>
              <p className="text-gray-800 mb-4">"Мы пока сравниваем. Если что — напишем."</p>
              
              {/* AI Suggestion */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white animate-pulse-glow">
                <div className="flex items-center mb-2">
                  <Brain className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">AI-T9 подсказывает:</span>
                </div>
                <p className="text-sm mb-3">🧠 Похоже, клиент уходит "подумать". Это типичное затягивание.</p>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-xs mb-2">✔️ "Хорошо, зарезервирую условия до завтра. Подойдёт?"</p>
                  <p className="text-xs">✔️ "Хочешь, пришлю сравнение по фичам — займёт 1 минуту"</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Момент 1: AI подсказывает сбоку</h3>
            <p className="text-gray-600">Клиент пишет — AI анализирует и предлагает лучшие варианты ответа</p>
          </div>
          
          {/* Moment 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                <span className="text-sm text-gray-500">Клиент</span>
              </div>
              <p className="text-gray-800 mb-4">"Чем вы отличаетесь от конкурентов?"</p>
              
              {/* AI Responses */}
              <div className="space-y-2">
                <div className="bg-blue-100 rounded-lg p-3 cursor-pointer hover:bg-blue-200 transition-colors">
                  <p className="text-sm text-blue-800">😄 "Можем показать демку — думаю, сами увидите разницу"</p>
                </div>
                <div className="bg-purple-100 rounded-lg p-3 cursor-pointer hover:bg-purple-200 transition-colors">
                  <p className="text-sm text-purple-800">📄 "Отличаемся скоростью внедрения. Могу отправить сравнение"</p>
                </div>
                <div className="bg-pink-100 rounded-lg p-3 cursor-pointer hover:bg-pink-200 transition-colors">
                  <p className="text-sm text-pink-800">💪 "Нам доверяют 500+ компаний. Вот в чём мы сильнее..."</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Момент 2: Как T9, только для продаж</h3>
            <p className="text-gray-600">AI предлагает готовые ответы в разных тонах: дружелюбный, формальный, уверенный</p>
          </div>
          
          {/* Moment 3 */}
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Я</span>
                </div>
                <span className="text-sm text-gray-500">Джун</span>
              </div>
              <p className="text-gray-800 mb-4">"Он не отвечает. Что делать?"</p>
              
              {/* AI Teaching */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 text-white">
                <div className="flex items-center mb-2">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">AI-тренер объясняет:</span>
                </div>
                <p className="text-sm mb-3">🎯 Возможно ghosting. Попробуй:</p>
                <div className="bg-white/20 rounded-lg p-3 space-y-2">
                  <p className="text-xs">"Просто апну, чтобы не потерялось"</p>
                  <p className="text-xs">"Если неактуально — дай знать"</p>
                  <p className="text-xs">"У нас появился апдейт, могу показать?"</p>
                </div>
              </div>
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

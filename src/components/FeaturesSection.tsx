
import { Brain, MessageCircle, Target, TrendingUp, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Понимает эмоции и контекст",
      description: "Анализирует настроение клиента и предлагает подходящий тон ответа"
    },
    {
      icon: Target,
      title: "Знает стадии сделки",
      description: "Определяет этап воронки продаж и подсказывает следующий шаг"
    },
    {
      icon: MessageCircle,
      title: "Предлагает ответы в нужном стиле",
      description: "Дружелюбный, формальный или уверенный — выбирай подходящий тон"
    },
    {
      icon: Users,
      title: "Обучает прямо в моменте",
      description: "Джуны учатся продавать без наставника, прямо в процессе работы"
    },
    {
      icon: TrendingUp,
      title: "Помогает не терять лидов",
      description: "Предотвращает потерю клиентов из-за неправильных фраз"
    },
    {
      icon: Zap,
      title: "Работает везде",
      description: "Telegram, WhatsApp, Email, iMessage — встраивается в любой мессенджер"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Что делает <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-T9</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный набор инструментов для эффективных продаж в мессенджерах
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Live Dialog Example */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            💡 Пример живого диалога
          </h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
            <div className="space-y-4">
              {/* Client message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm flex-1">
                  <p className="text-gray-800">Hey! Can you help with the project report? I need to update the data urgently.</p>
                </div>
              </div>
              
              {/* AI Response */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rounded-tr-none p-4 text-white shadow-lg flex-1 max-w-md">
                  <p>Of course! I'll update the data and have the report ready in 30 minutes. Do you need any specific sections prioritized?</p>
                  <div className="mt-2 text-xs bg-white/20 rounded-lg p-2">
                    🧠 AI понял срочность, роль и стиль — и ответил идеально
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

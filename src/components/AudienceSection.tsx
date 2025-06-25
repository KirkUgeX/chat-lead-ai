
import { Briefcase, Rocket, TrendingUp } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: TrendingUp,
      title: "Джунам",
      subtitle: "Учишься в процессе переписки",
      description: "Получай подсказки и обучение прямо во время работы с клиентами. Становись опытным продажником быстрее.",
      benefits: [
        "Мгновенные подсказки по ответам",
        "Объяснение психологии клиента",
        "Обучение лучшим практикам продаж"
      ],
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Briefcase,
      title: "Тимлидам",
      subtitle: "Масштабируешь без потери качества",
      description: "Обучай новых сотрудников автоматически и поддерживай высокий уровень продаж в команде.",
      benefits: [
        "Стандартизация процесса продаж",
        "Быстрое обучение новичков",
        "Контроль качества переписки"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Фаундерам",
      subtitle: "Продаёшь быстрее, не отвлекаясь на найм",
      description: "Сфокусируйся на развитии продукта, пока AI помогает команде закрывать сделки эффективнее.",
      benefits: [
        "Увеличение конверсии продаж",
        "Экономия на найме опытных менеджеров",
        "Больше времени на развитие бизнеса"
      ],
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎯 Кому подходит <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-T9</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Помогаем расти всем участникам процесса продаж
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${audience.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-lg text-gray-600 mb-4 font-medium">{audience.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>
                
                <div className="space-y-3">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${audience.gradient}`}></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Supported Platforms */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            ⚙️ Работает везде, где вы пишете
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-gray-600">
            <div className="bg-blue-100 px-6 py-3 rounded-full font-medium">Telegram</div>
            <div className="bg-green-100 px-6 py-3 rounded-full font-medium">WhatsApp</div>
            <div className="bg-red-100 px-6 py-3 rounded-full font-medium">Email</div>
            <div className="bg-purple-100 px-6 py-3 rounded-full font-medium">iMessage</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full font-medium">и другие</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

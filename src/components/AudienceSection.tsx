
import { Briefcase, Rocket, TrendingUp } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: TrendingUp,
      title: "For Juniors",
      subtitle: "Learn while you chat",
      description: "Get real-time coaching and suggestions directly while working with clients. Become an experienced salesperson faster.",
      benefits: [
        "Instant response suggestions",
        "Client psychology explanations",
        "Best sales practices training"
      ],
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Briefcase,
      title: "For Team Leaders",
      subtitle: "Scale without losing quality",
      description: "Train new employees automatically and maintain high sales standards across your team.",
      benefits: [
        "Standardized sales process",
        "Fast onboarding for new hires",
        "Conversation quality control"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "For Founders",
      subtitle: "Sell faster without hiring headaches",
      description: "Focus on product development while AI helps your team close deals more effectively.",
      benefits: [
        "Increased sales conversion",
        "Save on hiring experienced managers",
        "More time for business development"
      ],
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎯 Who <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-T9</span> is For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Helping everyone in the sales process grow
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
            ⚙️ Works everywhere you chat
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-gray-600">
            <div className="bg-blue-100 px-6 py-3 rounded-full font-medium">Telegram</div>
            <div className="bg-green-100 px-6 py-3 rounded-full font-medium">WhatsApp</div>
            <div className="bg-red-100 px-6 py-3 rounded-full font-medium">Email</div>
            <div className="bg-purple-100 px-6 py-3 rounded-full font-medium">iMessage</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full font-medium">and more</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

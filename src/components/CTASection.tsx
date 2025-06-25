
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Присоединяйся к waitlist
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            AI-T9 — не просто AI. Это AI, который помогает продавать.
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Будь среди первых, кто получит доступ к революционному инструменту для продаж
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 group"
            >
              <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              Посмотреть демо
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 group"
            >
              Записаться в waitlist
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10x</div>
              <div className="text-white/80">Быстрее обучение джунов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+40%</div>
              <div className="text-white/80">Рост конверсии продаж</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Поддержка в любое время</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

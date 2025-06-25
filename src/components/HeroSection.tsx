
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-float"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400 to-pink-600 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg animate-fade-in">
            <Zap className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Next-generation AI assistant</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-T9
            </span>
            <br />
            <span className="text-gray-900">Smart AI Assistant</span>
            <br />
            <span className="text-gray-700 text-3xl md:text-5xl">for Sales in Messengers</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Helps close even the most complex leads in Telegram, WhatsApp, Email and other messengers
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              Watch Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <WaitlistForm
    trigger={
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300"
      >
        Join Waitlist
      </Button>
    }
  />
          </div>
          
          {/* Features preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <MessageCircle className="w-8 h-8 text-blue-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Built into Chat</h3>
              <p className="text-gray-600 text-sm">Suggests responses directly in the conversation</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Zap className="w-8 h-8 text-purple-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Understands Context</h3>
              <p className="text-gray-600 text-sm">Analyzes emotions and deal stages</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <ArrowRight className="w-8 h-8 text-pink-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Teaches on the Go</h3>
              <p className="text-gray-600 text-sm">Turns juniors into experienced salespeople</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

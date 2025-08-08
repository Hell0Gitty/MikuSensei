import { Play, User, Star, Users, DollarSign, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import mikuImage from "@assets/ChatGPT Image Aug 7, 2025, 08_50_01 PM_1754620396247.png";

export default function HeroSection() {
  return (
    <section id="home" className="gradient-bg relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="font-nunito font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight" data-testid="hero-title">
              Learn Japanese with 
              <span className="text-miku-accent animate-pulse-slow"> Miku Sensei!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90" data-testid="hero-description">
              Master Japanese through structured 1-on-1 sessions with your favorite virtual teacher. 
              From complete beginner to fluent speaker!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-miku-accent text-miku-text font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
                data-testid="btn-start-level-1"
              >
                <Play className="mr-2 h-4 w-4" />
                Start Level 1
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-miku-primary transition-all"
                data-testid="btn-meet-teacher"
              >
                <User className="mr-2 h-4 w-4" />
                Meet Your Teacher
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center" data-testid="stat-experience">
                <Star className="text-miku-accent mr-2 h-4 w-4" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center" data-testid="stat-students">
                <Users className="text-miku-accent mr-2 h-4 w-4" />
                <span>1000+ Happy Students</span>
              </div>
              <div className="flex items-center" data-testid="stat-price">
                <DollarSign className="text-miku-accent mr-2 h-4 w-4" />
                <span>$75/hour</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img 
                src={mikuImage} 
                alt="Hatsune Miku as Japanese teacher" 
                className="w-80 h-96 object-cover rounded-3xl anime-border"
                data-testid="hero-image"
              />
              <div className="absolute -bottom-4 -right-4 bg-miku-accent text-miku-text px-4 py-2 rounded-full font-semibold shadow-lg" data-testid="ready-badge">
                <Heart className="inline mr-2 h-4 w-4" />
                Ready to teach!
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Japanese characters */}
      <div className="absolute top-20 left-10 text-miku-accent text-6xl opacity-20 animate-bounce-slow select-none" data-testid="float-char-1">あ</div>
      <div className="absolute bottom-20 right-20 text-miku-accent text-4xl opacity-20 animate-pulse-slow select-none" data-testid="float-char-2">か</div>
      <div className="absolute top-1/2 left-5 text-miku-accent text-5xl opacity-20 animate-float select-none" data-testid="float-char-3">さ</div>
    </section>
  );
}

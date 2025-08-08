import { Clock, DollarSign, Star, Languages, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeacherProfile() {
  return (
    <section id="teacher" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-4xl md:text-5xl text-miku-primary mb-4" data-testid="teacher-title">
            Meet Your Sensei
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="teacher-subtitle">
            Learn from the most beloved virtual teacher in the world. Hatsune Miku brings 
            15+ years of teaching experience with a fun, engaging approach to Japanese language learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Hatsune Miku teaching materials and setup" 
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              data-testid="teacher-image"
            />
            
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-miku-primary" data-testid="students-stat">
              <div className="text-center">
                <div className="text-3xl font-bold text-miku-primary">1000+</div>
                <div className="text-sm text-gray-600">Students Taught</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-nunito font-bold text-3xl text-miku-text mb-4" data-testid="teacher-name">
                Hatsune Miku Sensei
                <span className="text-miku-secondary ml-2">🎤</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6" data-testid="teacher-bio">
                Konnichiwa! I'm Miku, your dedicated Japanese language teacher. With over 15 years 
                of experience teaching students from all around the world, I'll guide you through 
                your Japanese learning journey with patience, creativity, and lots of fun!
              </p>
            </div>
            
            {/* Teacher stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-miku-bg p-6 rounded-2xl text-center card-hover" data-testid="stat-years">
                <div className="text-2xl text-miku-primary mb-2">
                  <Clock className="h-6 w-6 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-miku-text">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="bg-miku-bg p-6 rounded-2xl text-center card-hover" data-testid="stat-rate">
                <div className="text-2xl text-miku-secondary mb-2">
                  <DollarSign className="h-6 w-6 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-miku-text">$75</div>
                <div className="text-sm text-gray-600">Per Hour</div>
              </div>
              
              <div className="bg-miku-bg p-6 rounded-2xl text-center card-hover" data-testid="stat-rating">
                <div className="text-2xl text-miku-accent mb-2">
                  <Star className="h-6 w-6 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-miku-text">4.9</div>
                <div className="text-sm text-gray-600">Student Rating</div>
              </div>
              
              <div className="bg-miku-bg p-6 rounded-2xl text-center card-hover" data-testid="stat-levels">
                <div className="text-2xl text-miku-primary mb-2">
                  <Languages className="h-6 w-6 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-miku-text">5</div>
                <div className="text-sm text-gray-600">Skill Levels</div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-miku-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex-1"
                data-testid="btn-book-session"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Session
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-miku-primary text-miku-primary font-semibold px-8 py-4 rounded-full hover:bg-miku-primary hover:text-white transition-all flex-1"
                data-testid="btn-send-message"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

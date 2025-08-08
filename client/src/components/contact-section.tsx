import { Calendar, Clock, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-miku-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-4xl md:text-5xl text-miku-primary mb-4" data-testid="contact-title">
            Schedule Your Session
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Ready to start your Japanese learning journey? Book a 15-minute consultation 
            with Helen to discuss your goals and find the perfect learning plan for you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl text-center shadow-lg card-hover" data-testid="contact-feature-1">
            <div className="w-16 h-16 bg-miku-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white text-xl" />
            </div>
            <h3 className="font-nunito font-bold text-xl mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">Pick a time that works for you from available slots</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl text-center shadow-lg card-hover" data-testid="contact-feature-2">
            <div className="w-16 h-16 bg-miku-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white text-xl" />
            </div>
            <h3 className="font-nunito font-bold text-xl mb-2">15-Minute Consultation</h3>
            <p className="text-gray-600">Quick chat to understand your learning needs</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl text-center shadow-lg card-hover" data-testid="contact-feature-3">
            <div className="w-16 h-16 bg-miku-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-miku-text text-xl" />
            </div>
            <h3 className="font-nunito font-bold text-xl mb-2">Personal Guidance</h3>
            <p className="text-gray-600">Get personalized recommendations for your Japanese journey</p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-nunito font-bold text-2xl text-miku-text mb-2" data-testid="calendly-title">
              Schedule a 15-Minute Meeting with Helen
            </h3>
            <p className="text-gray-600">Choose your preferred time slot below</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <iframe 
              src="https://calendly.com/helenwchou/15min" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              scrolling="auto"
              className="rounded-xl"
              title="Schedule a meeting with Helen"
              data-testid="calendly-iframe"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
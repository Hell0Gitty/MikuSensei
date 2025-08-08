import { Music, Twitter, Youtube, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-miku-text text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-miku-primary to-miku-secondary rounded-full flex items-center justify-center">
                <Music className="text-white text-xl" />
              </div>
              <span className="font-nunito font-bold text-2xl" data-testid="footer-logo">Miku Sensei</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md" data-testid="footer-description">
              Learn Japanese with the world's favorite virtual teacher. Structured lessons, 
              personalized feedback, and cultural insights in every session.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="icon"
                className="w-10 h-10 bg-miku-primary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
                data-testid="social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                size="icon"
                className="w-10 h-10 bg-miku-secondary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
                data-testid="social-youtube"
              >
                <Youtube className="h-4 w-4" />
              </Button>
              <Button 
                size="icon"
                className="w-10 h-10 bg-miku-accent rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
                data-testid="social-discord"
              >
                <MessageSquare className="h-4 w-4 text-miku-text" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4" data-testid="footer-learning-title">Learning</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-all-levels">All Levels</a></li>
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-beginner-course">Beginner Course</a></li>
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-practice">Practice Exercises</a></li>
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-cultural">Cultural Lessons</a></li>
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-progress">Progress Tracking</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4" data-testid="footer-support-title">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-help">Help Center</a></li>
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-book">Book a Session</a></li>
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-contact">Contact Miku</a></li>
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-tech-support">Technical Support</a></li>
              <li><a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-community">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm" data-testid="footer-copyright">
            © 2024 Miku Sensei. All rights reserved. Made with 💙 for Japanese learners worldwide.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-terms">Terms of Service</a>
            <a href="#" className="hover:text-miku-primary transition-colors" data-testid="footer-cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Music, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-miku-primary to-miku-secondary rounded-full flex items-center justify-center">
              <Music className="text-white text-lg" />
            </div>
            <span className="font-nunito font-bold text-xl text-miku-primary" data-testid="logo">
              Miku Sensei
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-miku-text hover:text-miku-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('teacher')}
              className="text-miku-text hover:text-miku-primary transition-colors"
              data-testid="nav-teacher"
            >
              Teacher
            </button>
            <button 
              onClick={() => scrollToSection('levels')}
              className="text-miku-text hover:text-miku-primary transition-colors"
              data-testid="nav-levels"
            >
              Levels
            </button>
            <button 
              onClick={() => scrollToSection('lessons')}
              className="text-miku-text hover:text-miku-primary transition-colors"
              data-testid="nav-lessons"
            >
              Lessons
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-miku-text hover:text-miku-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button 
              className="bg-miku-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
              data-testid="btn-start-learning"
            >
              Start Learning
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-miku-text hover:text-miku-primary"
              data-testid="btn-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2" data-testid="mobile-menu">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-miku-text hover:text-miku-primary transition-colors"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('teacher')}
              className="block w-full text-left px-4 py-2 text-miku-text hover:text-miku-primary transition-colors"
              data-testid="mobile-nav-teacher"
            >
              Teacher
            </button>
            <button 
              onClick={() => scrollToSection('levels')}
              className="block w-full text-left px-4 py-2 text-miku-text hover:text-miku-primary transition-colors"
              data-testid="mobile-nav-levels"
            >
              Levels
            </button>
            <button 
              onClick={() => scrollToSection('lessons')}
              className="block w-full text-left px-4 py-2 text-miku-text hover:text-miku-primary transition-colors"
              data-testid="mobile-nav-lessons"
            >
              Lessons
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-miku-text hover:text-miku-primary transition-colors"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
            <div className="px-4 py-2">
              <Button 
                className="w-full bg-miku-primary text-white rounded-full hover:bg-opacity-90 transition-all"
                data-testid="mobile-btn-start-learning"
              >
                Start Learning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

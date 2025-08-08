import { useQuery } from "@tanstack/react-query";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Level } from "@shared/schema";

export default function DifficultyLevels() {
  const { data: levels, isLoading } = useQuery<Level[]>({
    queryKey: ['/api/levels'],
  });

  if (isLoading) {
    return (
      <section id="levels" className="py-20 bg-miku-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading levels...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="levels" className="py-20 bg-miku-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-4xl md:text-5xl text-miku-primary mb-4" data-testid="levels-title">
            Choose Your Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="levels-subtitle">
            Our structured learning path takes you from complete beginner to fluent speaker. 
            Each level is carefully designed to build upon previous knowledge.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {levels?.map((level, index) => (
            <div 
              key={level.id} 
              className={`bg-white p-6 rounded-2xl shadow-lg card-hover border-l-4 ${
                index === 0 ? 'border-miku-accent' : 
                index === 1 ? 'border-miku-primary' : 
                index === 2 ? 'border-miku-secondary' : 
                index === 3 ? 'border-purple-500' : 
                'border-amber-500'
              }`}
              data-testid={`level-card-${level.id}`}
            >
              <div className="text-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  index === 0 ? 'bg-miku-accent' : 
                  index === 1 ? 'bg-miku-primary' : 
                  index === 2 ? 'bg-miku-secondary' : 
                  index === 3 ? 'bg-purple-500' : 
                  'bg-amber-500'
                }`}>
                  <span className={`text-2xl font-bold ${
                    index === 0 ? 'text-miku-text' : 'text-white'
                  }`}>
                    {level.id}
                  </span>
                </div>
                <h3 className="font-nunito font-bold text-xl text-miku-text" data-testid={`level-name-${level.id}`}>
                  {level.name}
                </h3>
                <p className="text-sm text-gray-500" data-testid={`level-description-${level.id}`}>
                  {level.description}
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                {level.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm" data-testid={`level-feature-${level.id}-${featureIndex}`}>
                    <Check className={`mr-2 h-4 w-4 ${
                      index === 0 ? 'text-miku-accent' : 
                      index === 1 ? 'text-miku-primary' : 
                      index === 2 ? 'text-miku-secondary' : 
                      index === 3 ? 'text-purple-500' : 
                      'text-amber-500'
                    }`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              {level.isUnlocked ? (
                <Button 
                  className={`w-full font-semibold py-3 rounded-full hover:bg-opacity-90 transition-all ${
                    index === 0 ? 'bg-miku-accent text-miku-text' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={index !== 0}
                  data-testid={`btn-level-${level.id}`}
                >
                  {index === 0 ? 'Start Here' : `Complete Level ${index}`}
                </Button>
              ) : (
                <Button 
                  disabled
                  className="w-full bg-gray-200 text-gray-500 font-semibold py-3 rounded-full cursor-not-allowed"
                  data-testid={`btn-level-locked-${level.id}`}
                >
                  Complete Level {index}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

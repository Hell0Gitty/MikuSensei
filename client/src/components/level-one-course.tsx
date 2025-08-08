import { useQuery } from "@tanstack/react-query";
import { Clock, Book, Award, Check, Play, RotateCcw, Lock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lesson, User } from "@shared/schema";

export default function LevelOneCourse() {
  const { data: lessons, isLoading: lessonsLoading } = useQuery<Lesson[]>({
    queryKey: ['/api/lessons'],
    queryFn: () => fetch('/api/lessons?level=1').then(res => res.json()),
  });

  // Mock user progress for demo
  const userProgress = {
    completed: 2,
    total: 24,
    characters: 10,
    vocabulary: 8,
    quizScore: 91,
  };

  const progressPercentage = Math.round((userProgress.completed / userProgress.total) * 100);

  if (lessonsLoading) {
    return (
      <section id="lessons" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading lessons...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="lessons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-miku-accent text-miku-text px-4 py-2 rounded-full font-semibold mb-4" data-testid="course-badge">
            <Award className="mr-2 h-4 w-4" />
            Level 1: Newcomers Course
          </div>
          <h2 className="font-nunito font-bold text-4xl md:text-5xl text-miku-primary mb-4" data-testid="course-title">
            Your Japanese Journey Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="course-description">
            Master the fundamentals with our comprehensive Level 1 course. Perfect for complete beginners 
            with zero Japanese knowledge.
          </p>
        </div>
        
        {/* Course Overview */}
        <div className="bg-miku-bg p-8 rounded-3xl mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="course-stat-duration">
              <div className="w-16 h-16 bg-miku-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white text-xl" />
              </div>
              <h3 className="font-nunito font-bold text-xl mb-2">12 Weeks</h3>
              <p className="text-gray-600">Complete duration</p>
            </div>
            
            <div className="text-center" data-testid="course-stat-lessons">
              <div className="w-16 h-16 bg-miku-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-white text-xl" />
              </div>
              <h3 className="font-nunito font-bold text-xl mb-2">24 Lessons</h3>
              <p className="text-gray-600">Structured learning</p>
            </div>
            
            <div className="text-center" data-testid="course-stat-certificate">
              <div className="w-16 h-16 bg-miku-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-miku-text text-xl" />
              </div>
              <h3 className="font-nunito font-bold text-xl mb-2">Certificate</h3>
              <p className="text-gray-600">Upon completion</p>
            </div>
          </div>
        </div>
        
        {/* Progress Tracker */}
        <div className="bg-white border-2 border-miku-primary rounded-2xl p-6 mb-12" data-testid="progress-tracker">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-nunito font-bold text-xl text-miku-text">Your Progress</h3>
            <span className="text-miku-primary font-semibold" data-testid="progress-percentage">
              {progressPercentage}%
            </span>
          </div>
          
          <div className="bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-miku-primary to-miku-secondary h-4 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
              data-testid="progress-bar"
            ></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div data-testid="progress-completed">
              <span className="text-gray-600">Lessons Completed:</span>
              <span className="font-semibold ml-2">{userProgress.completed}/{userProgress.total}</span>
            </div>
            <div data-testid="progress-characters">
              <span className="text-gray-600">Characters Learned:</span>
              <span className="font-semibold ml-2">{userProgress.characters}/92</span>
            </div>
            <div data-testid="progress-vocabulary">
              <span className="text-gray-600">Vocabulary:</span>
              <span className="font-semibold ml-2">{userProgress.vocabulary}/200</span>
            </div>
            <div data-testid="progress-quiz">
              <span className="text-gray-600">Quiz Score:</span>
              <span className="font-semibold ml-2">{userProgress.quizScore}%</span>
            </div>
          </div>
        </div>
        
        {/* Lesson Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons?.map((lesson, index) => (
            <div 
              key={lesson.id} 
              className={`bg-white rounded-2xl p-6 card-hover shadow-lg ${
                lesson.isCompleted ? 'border-2 border-green-200' : 
                index === 2 ? 'border-2 border-miku-primary' : 
                'border-2 border-gray-200'
              }`}
              data-testid={`lesson-card-${lesson.id}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    lesson.isCompleted ? 'bg-green-500' : 
                    index === 2 ? 'bg-miku-primary animate-pulse-slow' : 
                    'bg-gray-300'
                  }`}>
                    {lesson.isCompleted ? (
                      <Check className="text-white h-5 w-5" />
                    ) : index === 2 ? (
                      <Play className="text-white h-5 w-5" />
                    ) : (
                      <Lock className="text-gray-500 h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-lg" data-testid={`lesson-title-${lesson.id}`}>
                      Lesson {lesson.id}
                    </h3>
                    <p className="text-sm text-gray-600" data-testid={`lesson-description-${lesson.id}`}>
                      {lesson.description}
                    </p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  lesson.isCompleted ? 'bg-green-100 text-green-800' : 
                  index === 2 ? 'bg-miku-primary text-white' : 
                  'bg-gray-200 text-gray-600'
                }`} data-testid={`lesson-status-${lesson.id}`}>
                  {lesson.isCompleted ? 'Completed' : index === 2 ? 'Current' : 'Locked'}
                </span>
              </div>
              
              {index < 3 ? (
                <img 
                  src={`https://images.unsplash.com/photo-${
                    index === 0 ? '1434030216411-0b793f4b4173' : 
                    index === 1 ? '1456513080510-7bf3a84b82f8' : 
                    '1517486808906-6ca8b3f04846'
                  }?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200`}
                  alt={`Lesson ${lesson.id} materials`}
                  className="w-full h-32 object-cover rounded-xl mb-4"
                  data-testid={`lesson-image-${lesson.id}`}
                />
              ) : (
                <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 flex items-center justify-center" data-testid={`lesson-locked-${lesson.id}`}>
                  <Lock className="text-gray-400 text-2xl" />
                </div>
              )}
              
              <div className="space-y-2 mb-4">
                {lesson.content.concepts.map((concept, conceptIndex) => (
                  <div key={conceptIndex} className="flex items-center text-sm" data-testid={`lesson-concept-${lesson.id}-${conceptIndex}`}>
                    <Check className={`mr-2 h-4 w-4 ${
                      lesson.isCompleted ? 'text-green-500' : 
                      index === 2 ? 'text-miku-primary' : 
                      'text-gray-400'
                    }`} />
                    <span className={index > 2 ? 'text-gray-500' : ''}>{concept}</span>
                  </div>
                ))}
              </div>
              
              {lesson.isCompleted ? (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600" data-testid={`lesson-score-${lesson.id}`}>
                    Score: {lesson.score}%
                  </span>
                  <button className="text-miku-primary hover:text-miku-secondary transition-colors" data-testid={`btn-review-${lesson.id}`}>
                    <RotateCcw className="inline mr-1 h-4 w-4" />
                    Review
                  </button>
                </div>
              ) : index === 2 ? (
                <Button 
                  className="w-full bg-miku-primary text-white font-semibold py-3 rounded-full hover:bg-opacity-90 transition-all"
                  data-testid={`btn-continue-${lesson.id}`}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Continue Lesson
                </Button>
              ) : (
                <div className="text-center text-sm text-gray-500" data-testid={`lesson-unlock-requirement-${lesson.id}`}>
                  Complete Lesson {index + 1} to unlock
                </div>
              )}
            </div>
          ))}
          
          {/* More lessons placeholder */}
          <div className="bg-gradient-to-br from-miku-primary to-miku-secondary p-6 rounded-2xl text-white text-center" data-testid="more-lessons-card">
            <div className="mb-4">
              <Plus className="h-16 w-16 mx-auto opacity-75" />
            </div>
            <h3 className="font-nunito font-bold text-xl mb-2">19 More Lessons</h3>
            <p className="text-sm opacity-90 mb-4">
              Continue your journey through hiragana, basic vocabulary, and essential Japanese concepts
            </p>
            <div className="text-xs opacity-75">
              Unlock as you progress
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              className="bg-miku-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex-1"
              data-testid="btn-continue-learning"
            >
              <Play className="mr-2 h-4 w-4" />
              Continue Learning
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-miku-primary text-miku-primary font-semibold px-8 py-4 rounded-full hover:bg-miku-primary hover:text-white transition-all flex-1"
              data-testid="btn-schedule-session"
            >
              <Clock className="mr-2 h-4 w-4" />
              Schedule Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

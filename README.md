# Miku Sensei - Japanese Learning Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A Japanese language learning website featuring Hatsune Miku as a virtual teacher, offering structured private 1-on-1 sessions and interactive quizzes across five difficulty levels.

![Miku Sensei Screenshot](miku.png)

## 🎌 Features

### 📚 Learning Experience
- **5 Structured Difficulty Levels**: From complete newcomer to fluent speaker
- **Interactive Quiz System**: Hiragana characters, vocabulary, and numbers
- **Real-time Scoring**: Instant feedback with performance tracking
- **Randomized Questions**: Fresh experience on every quiz attempt
- **Anime-Inspired Design**: Authentic Miku-themed turquoise color palette

### 👩‍🏫 Teacher Profile
- **Award-Winning Instructor**: 2025 ACTFL National Language Teacher of the Year
- **15+ Years Experience**: Proven track record with 1000+ students taught
- **Professional Credentials**: Master's in Applied Linguistics from University of Tokyo
- **Competitive Pricing**: $75/hour for personalized sessions
- **4.9-Star Rating**: Highly rated by students worldwide

### 🎮 Interactive Elements
- **Multiple Quiz Types**: 
  - Hiragana character recognition
  - Japanese vocabulary with English translations
  - Numbers practice (1-10)
- **Progress Tracking**: Visual progress bars and score display
- **Animated Feedback**: Color-coded answer validation
- **Performance-Based Results**: Different achievement levels and motivational messages

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for fonts and icons

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/miku-sensei.git
   cd miku-sensei
   ```

2. **Open the application**
   ```bash
   # Option 1: Open directly in browser
   open index.html
   
   # Option 2: Use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Start learning!**
   - Navigate through different sections using the top menu
   - Try the interactive quizzes
   - Contact via email for private sessions

## 📱 Usage

### Navigation
- **Home**: Hero section with teacher introduction
- **Teacher**: Detailed profile and credentials
- **Levels**: Overview of 5 difficulty levels (Newcomer to Fluent)
- **Quiz**: Interactive learning exercises
- **Contact**: Direct email contact (aerisch@proton.me)

### Quiz System
1. **Select Quiz Type**: Choose from Hiragana, Vocabulary, or Numbers
2. **Start Quiz**: Begin with randomized questions
3. **Answer Questions**: Click on your chosen answer
4. **View Results**: See your score and performance analysis
5. **Retry or Switch**: Continue learning with different quiz types

### Difficulty Levels
- **Level 1 - Newcomer**: Basic introduction and hiragana
- **Level 2 - Beginner**: Katakana and simple phrases
- **Level 3 - Elementary**: Basic grammar and conversation
- **Level 4 - Intermediate**: Complex sentences and kanji
- **Level 5 - Fluent**: Advanced conversation and cultural nuances

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with CSS variables
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Interactive functionality and quiz logic

### External Libraries
- **Tailwind CSS CDN**: Responsive design framework
- **Lucide Icons**: Modern icon library
- **Google Fonts**: Nunito and Open Sans typography

### Design System
- **Color Palette**: 
  - Primary: `#39C5BB` (Miku Turquoise)
  - Secondary: `#FF6B9D` (Miku Pink)  
  - Accent: `#FFE66D` (Miku Yellow)
  - Background: `#F8F9FA` (Light Gray)
  - Text: `#2D3436` (Dark Gray)

## 📁 Project Structure

```
miku-sensei/
├── index.html              # Main HTML file with all content
├── miku.png                # Miku character image
├── README.md               # This file
├── replit.md               # Development documentation
├── package.json            # Project dependencies (Node.js setup)
├── client/                 # React components (legacy)
│   └── src/
├── server/                 # Express server files (legacy)
├── shared/                 # Shared TypeScript schemas (legacy)
└── attached_assets/        # Additional project assets
```

## 🎯 Key Features Deep Dive

### Interactive Quiz System
The quiz system includes three different types of exercises:

**Hiragana Recognition**
- Practice reading basic hiragana characters
- Multiple choice format with 4 options
- Covers essential characters: あ, か, さ, た, な, は, ま, や

**Vocabulary Practice**  
- Japanese words with English translations
- Common greetings and expressions
- Includes: こんにちは, ありがとう, すみません, おはよう

**Number Learning**
- Japanese numbers from 1-10
- Practice numerical recognition
- Characters: いち, に, さん, よん, ご, ろく, なな, はち

### Scoring System
- **90%+**: Perfect! 🎉 - Japanese master level
- **70-89%**: Great Job! ⭐ - Excellent performance  
- **50-69%**: Good Effort! 👍 - Keep practicing
- **<50%**: Keep Learning! 📚 - Don't give up

## 🎨 Customization

### Color Scheme
To modify the Miku color theme, update the CSS variables in `index.html`:

```css
:root {
    --miku-primary: #39C5BB;    /* Turquoise */
    --miku-secondary: #FF6B9D;  /* Pink */
    --miku-accent: #FFE66D;     /* Yellow */
    --miku-bg: #F8F9FA;         /* Light background */
    --miku-text: #2D3436;       /* Text color */
}
```

### Adding New Quiz Questions
Extend the quiz data in the JavaScript section:

```javascript
const quizData = {
    hiragana: {
        questions: [
            { character: "new_char", options: ["option1", "option2", "option3", "option4"], correct: 0, type: "character" }
            // Add more questions here
        ]
    }
};
```

## 📞 Contact & Booking

For private Japanese lessons with Miku Sensei:
- **Email**: aerisch@proton.me
- **Rate**: $75/hour
- **Experience**: 15+ years, 1000+ students taught
- **Specialization**: Immersive learning with anime and cultural integration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hatsune Miku**: The inspiration and virtual teacher character
- **ACTFL**: American Council on the Teaching of Foreign Languages
- **University of Tokyo**: Educational foundation
- **Tailwind CSS**: For the beautiful responsive design
- **Lucide**: For the clean, modern icons

## 📈 Roadmap

- [ ] Audio pronunciation for quiz questions
- [ ] More quiz categories (Grammar, Kanji)
- [ ] Progress tracking across sessions
- [ ] Certificate system for completed levels
- [ ] Mobile app version
- [ ] Integration with scheduling system

---

**Ready to start your Japanese learning journey? Visit the app and begin with Miku Sensei today!** 🎌

*Built with ❤️ for Japanese language learners worldwide*
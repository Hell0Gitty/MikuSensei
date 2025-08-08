# Overview

This is a Japanese language learning application called "Miku Sensei" that features Hatsune Miku as the virtual teacher. Originally built as a React application, it has been converted to a static HTML5 site. The app provides structured Japanese lessons through different difficulty levels, starting from complete beginners to advanced learners. Users can track their progress, complete lessons, and learn through a combination of characters (Hiragana/Katakana), vocabulary, and interactive content. The site includes Calendly scheduling integration for booking consultations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Radix UI components with shadcn/ui component system for consistent, accessible UI elements
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Fonts**: Custom font stack including Nunito and Open Sans for typography
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing

## Backend Architecture
- **Runtime**: Node.js with Express.js REST API server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Shared TypeScript schema definitions between client and server
- **Storage**: In-memory storage implementation with interface for easy database switching
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect for database operations
- **Schema Design**: Three main entities:
  - Users: Profile, progress tracking, completed lessons
  - Lessons: Structured content with characters, vocabulary, and concepts
  - Levels: Difficulty progression with features and unlock status
- **Data Types**: JSON fields for complex data structures (progress, content, features)
- **Validation**: Zod schema validation for runtime type checking

## Development Environment
- **Dev Server**: Vite development server with HMR (Hot Module Replacement)
- **Build Process**: Vite for frontend bundling, esbuild for backend bundling
- **Type Checking**: TypeScript with strict mode enabled
- **Path Aliases**: Configured for clean imports (@/ for client, @shared/ for shared code)

## External Dependencies

- **Database**: Neon Database (serverless PostgreSQL) via @neondatabase/serverless
- **UI Components**: Comprehensive Radix UI component library for accessible primitives
- **Form Handling**: React Hook Form with Hookform resolvers for form validation
- **Date Processing**: date-fns for date manipulation and formatting
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - class-variance-authority for component variant management
  - clsx for conditional class names
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel React for interactive content sliders
- **Development Tools**: 
  - Replit-specific plugins for development environment integration
  - Runtime error overlay for better debugging experience
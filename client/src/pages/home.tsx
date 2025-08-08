import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TeacherProfile from "@/components/teacher-profile";
import DifficultyLevels from "@/components/difficulty-levels";
import LevelOneCourse from "@/components/level-one-course";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-miku-bg font-opensans text-miku-text">
      <Navigation />
      <HeroSection />
      <TeacherProfile />
      <DifficultyLevels />
      <LevelOneCourse />
      <Footer />
    </div>
  );
}

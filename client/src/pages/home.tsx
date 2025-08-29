import Header from "@/components/header";
import SkillsSelector from "@/components/skills-selector";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <SkillsSelector />
          </div>
          <div className="lg:col-span-2">
            <MainContent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

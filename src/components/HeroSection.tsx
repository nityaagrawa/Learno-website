import { Button } from "@/components/ui/button";
import { Search, Play, BookOpen, Target, Users } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-learning.jpg";

export const HeroSection = () => {
  const [searchTopic, setSearchTopic] = useState("");

  const handleSearch = () => {
    if (searchTopic.trim()) {
      // Mock search functionality - will be implemented with actual API
      console.log("Searching for:", searchTopic);
    }
  };

  return (
    <section className="relative min-h-[600px] hero-gradient flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-white/15 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 rounded-full bg-white/10 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Any Topic with
                <span className="block bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                  Smart Learning
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Discover curated learning paths with YouTube videos, interactive quizzes, 
                and personalized activities designed for your learning style.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTopic}
                  onChange={(e) => setSearchTopic(e.target.value)}
                  placeholder="What do you want to learn today?"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                onClick={handleSearch}
                variant="secondary" 
                size="lg" 
                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white border-white/20"
              >
                <Search className="h-5 w-5 mr-2" />
                Explore
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Play className="h-4 w-4" />
                <span className="text-sm font-medium">Curated Videos</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">Interactive Quizzes</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">Smart Notes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Learning Free
              </Button>
              <Button size="xl" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Students learning together with technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 p-4 bg-white/90 backdrop-blur rounded-xl shadow-medium animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Active Learners</p>
                  <p className="text-lg font-bold text-success">50K+</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-4 bg-white/90 backdrop-blur rounded-xl shadow-medium animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Completion Rate</p>
                  <p className="text-lg font-bold text-accent">94%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
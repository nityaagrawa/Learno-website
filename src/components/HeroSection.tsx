import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [searchTopic, setSearchTopic] = useState("");
  const [learnerType, setLearnerType] = useState("");

  const handleStart = () => {
    if (searchTopic.trim() && learnerType) {
      console.log("Starting learning:", { topic: searchTopic, learnerType });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              What would you like to learn today?
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter a topic and tell us your learning style to get started
            </p>
          </div>

          <div className="space-y-6">
            {/* Topic Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchTopic}
                onChange={(e) => setSearchTopic(e.target.value)}
                placeholder="e.g., Machine Learning, Spanish, Guitar, Cooking..."
                className="w-full pl-12 pr-4 py-4 text-lg rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all"
              />
            </div>

            {/* Learner Type Select */}
            <Select value={learnerType} onValueChange={setLearnerType}>
              <SelectTrigger className="w-full py-4 text-lg">
                <SelectValue placeholder="What type of learner are you?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visual">Visual Learner - I learn best with images, diagrams, and videos</SelectItem>
                <SelectItem value="auditory">Auditory Learner - I learn best by listening and discussing</SelectItem>
                <SelectItem value="reading">Reading/Writing Learner - I learn best through text and notes</SelectItem>
                <SelectItem value="kinesthetic">Kinesthetic Learner - I learn best through hands-on practice</SelectItem>
              </SelectContent>
            </Select>

            {/* Start Button */}
            <Button 
              onClick={handleStart}
              disabled={!searchTopic.trim() || !learnerType}
              size="lg" 
              className="w-full py-4 text-lg"
            >
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
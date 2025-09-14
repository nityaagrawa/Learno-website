import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Play,
  PuzzleIcon,
  FileText,
  Target,
  Users,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Curated Video Learning",
    description: "Access the best YouTube videos for each concept, expertly selected and organized into digestible modules.",
    color: "text-learning-primary",
    bgColor: "bg-learning-primary/10",
    details: [
      "Top 3 video options per concept",
      "Smart video trimming for focused learning",
      "Multiple learning style adaptations"
    ]
  },
  {
    icon: Target,
    title: "Interactive Quizzes",
    description: "Test your understanding with personalized quizzes that adapt to your learning progress and style.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    details: [
      "Module-end assessments",
      "Real-time feedback",
      "Progress tracking"
    ]
  },
  {
    icon: PuzzleIcon,
    title: "Surprise Activities",
    description: "Engaging crosswords and interactive exercises that make learning fun and memorable.",
    color: "text-learning-tertiary",
    bgColor: "bg-learning-tertiary/10",
    details: [
      "Crossword puzzles",
      "Interactive games",
      "Hands-on challenges"
    ]
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description: "AI-powered note-taking that helps you capture and organize key concepts effectively.",
    color: "text-warning",
    bgColor: "bg-warning/10",
    details: [
      "Auto-generated summaries",
      "Personal note organization",
      "Concept linking"
    ]
  },
  {
    icon: CheckCircle,
    title: "Understanding Checks",
    description: "Write your understanding and get AI feedback to identify and fill knowledge gaps.",
    color: "text-success",
    bgColor: "bg-success/10",
    details: [
      "AI-powered feedback",
      "Gap identification",
      "Personalized explanations"
    ]
  },
  {
    icon: Users,
    title: "Learning Styles",
    description: "Personalized experience for visual, auditory, reading/writing, and kinesthetic learners.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    details: [
      "Visual learner support",
      "Auditory adaptations",
      "Hands-on activities"
    ]
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Powered by AI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learning Features That Actually Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform adapts to how you learn best, with interactive elements 
            and AI-powered feedback to accelerate your progress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group glass border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Demo Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              See LearnFlow in Action
            </h3>
            <p className="text-lg text-white/90">
              Experience how our AI-powered learning platform adapts to your style 
              and helps you master any topic faster than traditional methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
                Try Free Sample
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
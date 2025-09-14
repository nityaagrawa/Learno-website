import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Globe, 
  Music, 
  Camera,
  Calculator,
  Heart,
  Lightbulb,
  ChevronRight,
  Clock,
  Users,
  Star
} from "lucide-react";

const topicCategories = [
  {
    title: "Technology",
    icon: Code,
    color: "text-learning-primary",
    topics: [
      { name: "Web Development", duration: "12 hours", learners: "15.2K", rating: 4.8 },
      { name: "Data Science", duration: "18 hours", learners: "8.5K", rating: 4.9 },
      { name: "Machine Learning", duration: "22 hours", learners: "12.1K", rating: 4.7 },
      { name: "Mobile Development", duration: "16 hours", learners: "6.8K", rating: 4.6 }
    ]
  },
  {
    title: "Creative Arts",
    icon: Palette,
    color: "text-accent",
    topics: [
      { name: "Digital Design", duration: "10 hours", learners: "9.3K", rating: 4.8 },
      { name: "Photography", duration: "8 hours", learners: "11.7K", rating: 4.7 },
      { name: "Video Editing", duration: "14 hours", learners: "7.2K", rating: 4.9 },
      { name: "3D Modeling", duration: "20 hours", learners: "4.5K", rating: 4.6 }
    ]
  },
  {
    title: "Business",
    icon: TrendingUp,
    color: "text-learning-tertiary",
    topics: [
      { name: "Digital Marketing", duration: "12 hours", learners: "13.4K", rating: 4.7 },
      { name: "Project Management", duration: "15 hours", learners: "9.8K", rating: 4.8 },
      { name: "Financial Analysis", duration: "18 hours", learners: "6.2K", rating: 4.9 },
      { name: "Leadership Skills", duration: "10 hours", learners: "11.1K", rating: 4.6 }
    ]
  }
];

const popularTopics = [
  "JavaScript Fundamentals",
  "Python for Beginners",
  "Digital Marketing Strategy",
  "UI/UX Design Principles",
  "Data Analysis with Excel",
  "Content Creation"
];

export const TopicsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Learning Paths
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover structured learning paths across hundreds of topics, 
            each crafted with expert-curated content and interactive elements.
          </p>
        </div>

        {/* Popular Topics Pills */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-lg font-semibold mb-4 text-center">Trending Now</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTopics.map((topic) => (
              <Button
                key={topic}
                variant="outline"
                className="rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                {topic}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            ))}
          </div>
        </div>

        {/* Topic Categories */}
        <div className="space-y-12">
          {topicCategories.map((category, index) => (
            <div key={category.title} className="animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-primary mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-muted-foreground">Master essential skills in {category.title.toLowerCase()}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.topics.map((topic) => (
                  <Card 
                    key={topic.name} 
                    className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer group glass border-border/50"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {topic.name}
                        </h4>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{topic.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{topic.learners} learners</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-2 fill-warning text-warning" />
                          <span>{topic.rating}</span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full progress-bar" 
                          style={{ width: `${Math.random() * 40 + 60}%` }}
                        ></div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" variant="hero" className="px-8">
            Browse All Topics
          </Button>
        </div>
      </div>
    </section>
  );
};
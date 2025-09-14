import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Mail, 
  Twitter, 
  Github, 
  Linkedin,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  LearnFlow
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Revolutionizing online learning with AI-powered, personalized education 
                that adapts to your unique learning style.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Platform Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Platform</h3>
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Topics
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Learning Paths
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interactive Quizzes
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Progress Tracking
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </a>
              </nav>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Support</h3>
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Getting Started
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Feature Requests
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bug Reports
                </a>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Stay Updated</h3>
              <p className="text-muted-foreground text-sm">
                Get the latest learning tips, new features, and curated content 
                delivered to your inbox.
              </p>
              <div className="space-y-3">
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <Button variant="learning" size="sm" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2024 LearnFlow. All rights reserved.
              </p>
              <nav className="flex space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accessibility
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>for learners worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
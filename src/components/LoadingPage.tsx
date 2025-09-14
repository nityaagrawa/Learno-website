import { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

interface LoadingPageProps {
  topic: string;
  learnerType: string;
}

export const LoadingPage = ({ topic, learnerType }: LoadingPageProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 0, text: "Searching web", description: `Finding the best resources for ${topic}` },
    { id: 1, text: "Curating course content", description: "Organizing content for your learning style" },
    { id: 2, text: "Finding YouTube videos", description: "Selecting the most relevant video content" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Preparing your learning journey
            </h1>
            <p className="text-lg text-muted-foreground">
              We're customizing content for your {learnerType.replace(/([A-Z])/g, ' $1').toLowerCase()} learning style
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-500 ${
                  currentStep > step.id
                    ? "bg-primary/10 border-primary/20"
                    : currentStep === step.id
                    ? "bg-primary/5 border-primary/10"
                    : "bg-muted/30 border-border/30"
                }`}
              >
                <div className="flex-shrink-0">
                  {currentStep > step.id ? (
                    <CheckCircle className="h-6 w-6 text-primary" />
                  ) : currentStep === step.id ? (
                    <Loader2 className="h-6 w-6 text-primary animate-spin" />
                  ) : (
                    <div className="h-6 w-6 rounded-full border-2 border-muted-foreground/20" />
                  )}
                </div>
                <div className="text-left">
                  <div className={`font-medium ${
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.text}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <div className="text-sm text-muted-foreground">
              This usually takes 10-15 seconds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
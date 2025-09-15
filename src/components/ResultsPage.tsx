import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";

interface ResultsPageProps {
  results: any;
  topic: string;
  learnerType: string;
  onBack: () => void;
}

export const ResultsPage = ({ results, topic, learnerType, onBack }: ResultsPageProps) => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const rank1Video = results?.videos?.[0];
  const suggestedVideos = results?.videos?.slice(1, 3) || [];

  return (
    <section className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Learning Path: {topic}
              </h1>
              <p className="text-muted-foreground">
                Customized for {learnerType.replace(/([A-Z])/g, ' $1').toLowerCase()} learning style
              </p>
            </div>
          </div>

          {/* Main Video */}
          {rank1Video && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="default">Rank #1</Badge>
                  <CardTitle className="text-xl">{rank1Video.title}</CardTitle>
                </div>
                <CardDescription>Primary learning resource</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {getYouTubeEmbedUrl(rank1Video.url) ? (
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={getYouTubeEmbedUrl(rank1Video.url)}
                      title={rank1Video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Play className="h-12 w-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Video preview not available</p>
                      <Button variant="outline" asChild>
                        <a href={rank1Video.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch on YouTube
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
                {rank1Video.description && (
                  <p className="text-sm text-muted-foreground">{rank1Video.description}</p>
                )}
              </CardContent>
            </Card>
          )}

          {/* Suggested Videos */}
          {suggestedVideos.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Suggested Videos</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {suggestedVideos.map((video, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Rank #{index + 2}</Badge>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {getYouTubeEmbedUrl(video.url) ? (
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <iframe
                            src={getYouTubeEmbedUrl(video.url)}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <Button variant="outline" size="sm" asChild>
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Watch Video
                            </a>
                          </Button>
                        </div>
                      )}
                      {video.description && (
                        <p className="text-sm text-muted-foreground line-clamp-3">{video.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Additional Content */}
          {results?.content && (
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>Key topics and concepts to focus on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-foreground">
                  {results.content}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
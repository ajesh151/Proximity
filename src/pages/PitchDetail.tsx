
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { PitchComments } from "@/components/pitch/PitchComments";
import { Heart, Share, MessageSquare, BookmarkPlus, Calendar, Video, Download, Eye, ChevronLeft, Building, MapPin } from "lucide-react";

const PitchDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isInterested, setIsInterested] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { toast } = useToast();
  
  // Mock pitch data - in a real app, you'd fetch this from an API
  const pitch = {
    id: id || "1",
    title: "EcoTrack: Sustainable Supply Chain Analytics",
    summary: "Helping businesses track and optimize their environmental impact through advanced supply chain analytics and reporting",
    description: "EcoTrack is a comprehensive SaaS platform designed to help businesses monitor, analyze, and optimize their environmental impact throughout the entire supply chain. Our solution integrates with existing ERP systems to provide real-time insights into carbon emissions, waste management, and resource utilization.\n\nOur proprietary algorithms can identify inefficiencies and suggest improvements that not only reduce environmental impact but also cut costs and improve operational efficiency. With increasing regulatory pressure and consumer demand for sustainable practices, EcoTrack helps businesses stay ahead of compliance requirements while building a more sustainable future.",
    videoUrl: "https://example.com/video1",
    deckUrl: "https://example.com/deck1.pdf",
    fundingAmount: 500000,
    stage: "seed",
    industry: ["SaaS", "Sustainability", "Supply Chain"],
    region: "North America",
    createdAt: new Date("2023-12-15"),
    organization: {
      id: "org1",
      name: "GreenPath Solutions",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250&h=250&fit=crop",
      description: "Building technology solutions for a sustainable future",
      location: "San Francisco, CA",
      foundedYear: 2021,
      teamSize: "11-50 employees",
      website: "https://example.com/greenpath"
    },
    team: [
      { 
        name: "Sarah Johnson", 
        role: "CEO & Founder",
        bio: "Former sustainability consultant with 10+ years of experience working with Fortune 500 companies",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      { 
        name: "David Chen", 
        role: "CTO",
        bio: "Ex-Google engineer with expertise in data analytics and machine learning",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      { 
        name: "Maria Rodriguez", 
        role: "Head of Product",
        bio: "Product leader with experience at leading sustainability startups",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      }
    ],
    traction: {
      customers: 15,
      revenue: "$120,000 ARR",
      growth: "32% MoM",
      keyMetrics: ["95% customer retention", "4.8/5 customer satisfaction"]
    },
    financials: {
      burnRate: "$40,000/month",
      runway: "8 months",
      previousRound: "$250,000 pre-seed",
      valuation: "$5M cap on SAFE"
    }
  };
  
  // Format stage
  const formatStage = (stage: string) => {
    switch (stage) {
      case "seed": return "Seed";
      case "seriesA": return "Series A";
      case "seriesB": return "Series B";
      case "seriesC": return "Series C";
      case "growth": return "Growth";
      case "partnership": return "Partnership";
      default: return stage;
    }
  };

  const handleInterest = () => {
    setIsInterested(!isInterested);
    toast({
      title: !isInterested ? "Interest registered!" : "Interest removed",
      description: !isInterested ? "You'll be notified of updates to this pitch" : "You'll no longer receive updates about this pitch"
    });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      description: !isBookmarked ? "Pitch saved to your bookmarks" : "Pitch removed from your bookmarks"
    });
  };

  const handleScheduleMeeting = () => {
    toast({
      title: "Meeting request sent!",
      description: "The team will contact you to schedule a meeting"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="container py-6">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/pitches" className="flex items-center">
              <ChevronLeft className="mr-1 h-4 w-4" /> Back to Pitch Hub
            </Link>
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{pitch.title}</h1>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <Badge variant="outline">{formatStage(pitch.stage)}</Badge>
                {pitch.industry.map(ind => (
                  <Badge key={ind} variant="secondary">{ind}</Badge>
                ))}
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {pitch.region}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant={isInterested ? "default" : "outline"}
                onClick={handleInterest}
                className="flex items-center gap-1"
              >
                <Heart className="h-4 w-4" fill={isInterested ? "currentColor" : "none"} />
                {isInterested ? "Interested" : "Show Interest"}
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleBookmark}
                className={isBookmarked ? "text-primary" : ""}
              >
                <BookmarkPlus className="h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="icon">
                <Share className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main pitch content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="aspect-w-16 aspect-h-9 bg-slate-100 dark:bg-slate-800 rounded-t-lg">
                <div className="flex items-center justify-center h-full">
                  <Video className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground font-medium">Watch the pitch video</span>
                </div>
              </div>
              
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="text-lg font-medium">{pitch.summary}</p>
                <p className="whitespace-pre-line">{pitch.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button className="flex items-center gap-2">
                    <Video className="h-4 w-4" /> Watch Full Pitch
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Pitch Deck
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="team">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="traction">Traction</TabsTrigger>
                <TabsTrigger value="financials">Financials</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="team" className="mt-4">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Leadership Team</h3>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {pitch.team.map((member, index) => (
                      <div key={index} className="flex gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                          <p className="text-sm mt-1">{member.bio}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="traction" className="mt-4">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Traction & Metrics</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-2xl font-bold">{pitch.traction.customers}</div>
                        <div className="text-sm text-muted-foreground">Customers</div>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-2xl font-bold">{pitch.traction.revenue}</div>
                        <div className="text-sm text-muted-foreground">Annual Revenue</div>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-2xl font-bold">{pitch.traction.growth}</div>
                        <div className="text-sm text-muted-foreground">Growth Rate</div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Key Performance Indicators</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {pitch.traction.keyMetrics.map((metric, index) => (
                          <li key={index}>{metric}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="financials" className="mt-4">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Financial Information</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="text-sm text-muted-foreground">Monthly Burn Rate</h4>
                        <div className="text-xl font-bold">{pitch.financials.burnRate}</div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="text-sm text-muted-foreground">Current Runway</h4>
                        <div className="text-xl font-bold">{pitch.financials.runway}</div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="text-sm text-muted-foreground">Previous Funding</h4>
                        <div className="text-xl font-bold">{pitch.financials.previousRound}</div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="text-sm text-muted-foreground">Valuation</h4>
                        <div className="text-xl font-bold">{pitch.financials.valuation}</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-medium mb-2">Funding Request</h4>
                      <div className="text-2xl font-bold">${pitch.fundingAmount.toLocaleString()}</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Seeking {formatStage(pitch.stage)} funding to accelerate product development and market expansion
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="discussion" className="mt-4">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Discussion</h3>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Textarea placeholder="Ask a question or provide feedback about this pitch..." className="min-h-24" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" id="private-comment" className="mr-2" />
                        <label htmlFor="private-comment" className="text-sm">Make comment private (only visible to pitch creator)</label>
                      </div>
                      <Button className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" /> Submit Comment
                      </Button>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <PitchComments pitchId={id || "1"} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Organization Card */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">About the Organization</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={pitch.organization.logo} alt={pitch.organization.name} />
                    <AvatarFallback>{pitch.organization.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{pitch.organization.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-3 w-3 mr-1" /> {pitch.organization.location}
                    </p>
                  </div>
                </div>
                
                <div className="text-sm">
                  <p>{pitch.organization.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Founded:</span>{" "}
                    <span className="font-medium">{pitch.organization.foundedYear}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Team size:</span>{" "}
                    <span className="font-medium">{pitch.organization.teamSize}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/profile/${pitch.organization.id}`} className="flex items-center justify-center gap-2">
                    <Building className="h-4 w-4" /> View Organization Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Funding Card */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Funding Request</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold">${pitch.fundingAmount.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground mt-1">{formatStage(pitch.stage)} Funding</div>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full" onClick={handleScheduleMeeting}>
                    Schedule a Meeting
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Additional Info
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Stats Card */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Pitch Stats</h3>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    <span>182 views</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    <span>24 interested</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    <span>12 comments</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-4">
                  Posted on {pitch.createdAt.toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
            
            {/* Similar Pitches */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Similar Pitches</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium">SupplyChain.ai: Digital Twin for Supply Networks</h4>
                  <p className="text-sm text-muted-foreground mt-1">AI-powered supply chain optimization platform</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="outline" className="text-xs">Supply Chain</Badge>
                    <Badge variant="outline" className="text-xs">AI</Badge>
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium">GreenMetrics: ESG Reporting Platform</h4>
                  <p className="text-sm text-muted-foreground mt-1">Automated ESG data collection and reporting</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="outline" className="text-xs">Sustainability</Badge>
                    <Badge variant="outline" className="text-xs">SaaS</Badge>
                  </div>
                </div>
                <Button variant="link" className="w-full">View More Similar Pitches</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDetail;

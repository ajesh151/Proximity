
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pitch } from "@/types/user";
import { Search, Filter, Calendar, TrendingUp, Clock, Video, FileText, Users } from "lucide-react";

const PitchHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState("");
  const [region, setRegion] = useState("");
  
  // Mock pitch data
  const pitches: Pitch[] = [
    {
      id: "1",
      organizationId: "org1",
      title: "EcoTrack: Sustainable Supply Chain Analytics",
      summary: "Helping businesses track and optimize their environmental impact through advanced supply chain analytics and reporting",
      videoUrl: "https://example.com/video1",
      deckUrl: "https://example.com/deck1.pdf",
      fundingAmount: 500000,
      stage: "seed",
      industry: ["SaaS", "Sustainability", "Supply Chain"],
      region: "North America",
      createdAt: new Date("2023-12-15"),
      views: 324,
      interests: 18,
      comments: 7,
      isFeatured: true
    },
    {
      id: "2",
      organizationId: "org2",
      title: "MedSecure: Blockchain for Healthcare Data",
      summary: "Decentralized platform for secure sharing and management of healthcare records between providers and patients",
      videoUrl: "https://example.com/video2",
      deckUrl: "https://example.com/deck2.pdf",
      fundingAmount: 1500000,
      stage: "seriesA",
      industry: ["Healthcare", "Blockchain", "Data Security"],
      region: "Europe",
      createdAt: new Date("2023-12-01"),
      views: 512,
      interests: 27,
      comments: 12,
      isFeatured: false
    },
    {
      id: "3",
      organizationId: "org3",
      title: "AgriTech Solutions: AI-powered Farming",
      summary: "Using machine learning and IoT to optimize crop yields and reduce resource usage for sustainable agriculture",
      videoUrl: "https://example.com/video3",
      deckUrl: "https://example.com/deck3.pdf",
      fundingAmount: 2000000,
      stage: "seriesA",
      industry: ["Agriculture", "AI", "IoT"],
      region: "Asia",
      createdAt: new Date("2023-11-20"),
      views: 245,
      interests: 14,
      comments: 5,
      isFeatured: true
    }
  ];
  
  // Mock events
  const events = [
    {
      id: "event1",
      title: "Tech Innovators Pitch Day",
      date: new Date("2025-05-25T13:00:00"),
      organizerName: "TechVentures Inc.",
      attendees: 120,
      maxAttendees: 150
    },
    {
      id: "event2",
      title: "Sustainable Startups Showcase",
      date: new Date("2025-06-10T15:00:00"),
      organizerName: "GreenFuture Capital",
      attendees: 84,
      maxAttendees: 100
    }
  ];
  
  // Filter pitches based on search and filters
  const filteredPitches = pitches.filter(pitch => {
    const matchesSearch = pitch.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pitch.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = !industry || pitch.industry.some(ind => ind.toLowerCase() === industry.toLowerCase());
    const matchesStage = !stage || pitch.stage === stage;
    const matchesRegion = !region || pitch.region.toLowerCase() === region.toLowerCase();
    
    return matchesSearch && matchesIndustry && matchesStage && matchesRegion;
  });

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <main className="container py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Pitch Hub</h1>
            <p className="text-muted-foreground">Discover promising businesses and investment opportunities</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild>
              <Link to="/pitches/create">
                Submit Your Pitch
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar filters */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Filter className="mr-2 h-5 w-5" /> Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Industry</label>
                  <Select onValueChange={setIndustry} value={industry}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Industries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all_industries">All Industries</SelectItem>
                      <SelectItem value="SaaS">SaaS</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Fintech">Fintech</SelectItem>
                      <SelectItem value="AI">AI & Machine Learning</SelectItem>
                      <SelectItem value="Blockchain">Blockchain</SelectItem>
                      <SelectItem value="Agriculture">Agriculture</SelectItem>
                      <SelectItem value="Sustainability">Sustainability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Funding Stage</label>
                  <Select onValueChange={setStage} value={stage}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Stages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all_stages">All Stages</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="seriesA">Series A</SelectItem>
                      <SelectItem value="seriesB">Series B</SelectItem>
                      <SelectItem value="seriesC">Series C</SelectItem>
                      <SelectItem value="growth">Growth</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <Select onValueChange={setRegion} value={region}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all_regions">All Regions</SelectItem>
                      <SelectItem value="North America">North America</SelectItem>
                      <SelectItem value="Europe">Europe</SelectItem>
                      <SelectItem value="Asia">Asia</SelectItem>
                      <SelectItem value="South America">South America</SelectItem>
                      <SelectItem value="Africa">Africa</SelectItem>
                      <SelectItem value="Oceania">Australia & Oceania</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Funding Amount</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any_amount">Any Amount</SelectItem>
                      <SelectItem value="under500k">Under $500K</SelectItem>
                      <SelectItem value="500kTo1m">$500K - $1M</SelectItem>
                      <SelectItem value="1mTo5m">$1M - $5M</SelectItem>
                      <SelectItem value="5mTo10m">$5M - $10M</SelectItem>
                      <SelectItem value="over10m">Over $10M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="w-full" onClick={() => {
                  setIndustry("");
                  setStage("");
                  setRegion("");
                }}>
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
            
            {/* Upcoming Events Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="mr-2 h-5 w-5" /> Upcoming Pitch Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map(event => (
                  <div key={event.id} className="border rounded-lg p-3">
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <Clock className="h-4 w-4 mr-1" /> 
                      {event.date.toLocaleDateString()} at {event.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                    <div className="text-sm flex justify-between items-center mt-2">
                      <span className="text-muted-foreground">By {event.organizerName}</span>
                      <span className="text-xs">{event.attendees}/{event.maxAttendees}</span>
                    </div>
                    <Button variant="link" className="p-0 h-auto mt-2" asChild>
                      <Link to={`/pitches/event/${event.id}`}>View Details</Link>
                    </Button>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/events">View All Events</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex gap-3 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search pitches by name or description" 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All Pitches</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="recent">Recently Added</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {filteredPitches.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No pitches found</h3>
                <p className="mt-1 text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPitches.map(pitch => (
                  <Card key={pitch.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">
                            <Link to={`/pitches/${pitch.id}`} className="hover:underline">
                              {pitch.title}
                            </Link>
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <Badge variant="outline">{formatStage(pitch.stage)}</Badge>
                            {pitch.industry.map(ind => (
                              <Badge key={ind} variant="secondary">{ind}</Badge>
                            ))}
                            <Badge variant="outline" className="bg-primary/10">{pitch.region}</Badge>
                            {pitch.isFeatured && <Badge variant="default">Featured</Badge>}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${(pitch.fundingAmount || 0).toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Funding Requested</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{pitch.summary}</p>
                      
                      <div className="flex flex-wrap gap-3 mt-4">
                        {pitch.videoUrl && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Video className="h-4 w-4 mr-1" /> Pitch Video
                          </div>
                        )}
                        {pitch.deckUrl && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="h-4 w-4 mr-1" /> Pitch Deck
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="flex space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" /> 
                          {pitch.views} views
                        </span>
                        <span className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" /> 
                          {pitch.interests} interested
                        </span>
                      </div>
                      <Button size="sm" asChild>
                        <Link to={`/pitches/${pitch.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PitchHub;

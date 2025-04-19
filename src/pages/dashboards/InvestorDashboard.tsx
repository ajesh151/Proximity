import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Inbox, Clock, BookmarkPlus, ArrowRight, TrendingUp, Filter, Calendar } from "lucide-react";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from "recharts";

const InvestorDashboard = () => {
  // Mock data for charts and stats
  const dealflowData = [
    { name: "Jan", count: 12 },
    { name: "Feb", count: 18 },
    { name: "Mar", count: 24 },
    { name: "Apr", count: 32 },
    { name: "May", count: 45 },
  ];
  
  const pitchInterests = [
    {
      id: "1",
      name: "EcoTrack: Sustainable Supply Chain Analytics",
      company: "GreenPath Solutions",
      stage: "Seed",
      amount: "$500,000",
      status: "Review",
      lastActivity: "2 days ago",
      progress: 75
    },
    {
      id: "2",
      name: "MedSecure: Blockchain for Healthcare Data",
      company: "HealthBlock Systems",
      stage: "Series A",
      amount: "$1,500,000",
      status: "Due Diligence",
      lastActivity: "5 days ago",
      progress: 50
    },
    {
      id: "3",
      name: "AgriTech Solutions: AI-powered Farming",
      company: "FarmAI Technologies",
      stage: "Seed",
      amount: "$750,000",
      status: "Initial Review",
      lastActivity: "1 week ago",
      progress: 25
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Investor Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, TechVentures Capital
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button asChild>
              <Link to="/pitches">Browse Pitch Hub</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stats cards */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Dealflow</p>
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-green-600 text-xs">+12 this month</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Inbox className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Due Diligence</p>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-green-600 text-xs">+3 this week</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Term Sheets</p>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-amber-600 text-xs">Same as last month</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Meetings This Week</p>
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-green-600 text-xs">Next: Tomorrow 2PM</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Dealflow Pipeline */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dealflow Pipeline</CardTitle>
                <CardDescription>
                  Track your active investment opportunities
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="active">
                  <TabsList className="mb-4">
                    <TabsTrigger value="active">Active (12)</TabsTrigger>
                    <TabsTrigger value="interested">Interested (8)</TabsTrigger>
                    <TabsTrigger value="watchlist">Watchlist (22)</TabsTrigger>
                    <TabsTrigger value="passed">Passed (16)</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="active" className="space-y-4">
                    {pitchInterests.map((pitch) => (
                      <div key={pitch.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{pitch.name}</h3>
                            <p className="text-sm text-muted-foreground">{pitch.company}</p>
                          </div>
                          <Button variant="ghost" size="icon">
                            <BookmarkPlus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                          <div>
                            <p className="text-muted-foreground">Stage</p>
                            <p className="font-medium">{pitch.stage}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Raise</p>
                            <p className="font-medium">{pitch.amount}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Status</p>
                            <p className="font-medium">{pitch.status}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{pitch.progress}%</span>
                          </div>
                          <Progress value={pitch.progress} />
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-xs text-muted-foreground">Last activity: {pitch.lastActivity}</span>
                          <Button size="sm" asChild variant="outline">
                            <Link to={`/pitches/${pitch.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="w-full">Load More</Button>
                  </TabsContent>
                  
                  <TabsContent value="interested">
                    <div className="py-8 text-center text-muted-foreground">
                      <p>Select pitches you're interested in to see them here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="watchlist">
                    <div className="py-8 text-center text-muted-foreground">
                      <p>Add pitches to your watchlist to track them over time</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="passed">
                    <div className="py-8 text-center text-muted-foreground">
                      <p>Pitches you've passed on will appear here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Dealflow Trends</CardTitle>
                <CardDescription>Pitches reviewed over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ChartContainer
                    className="h-64"
                    config={{
                      count: { color: "hsl(215 100% 50%)" }
                    }}
                  >
                    {(props) => (
                      <BarChart data={dealflowData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Bar dataKey="count" fill="var(--color-count)" />
                      </BarChart>
                    )}
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Meetings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">GreenPath Solutions</h4>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2.5 py-0.5 rounded-full">Tomorrow</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> 
                    2:00 PM - 3:00 PM
                  </p>
                  <p className="text-sm mt-2">Initial pitch discussion for EcoTrack Analytics</p>
                  <Button variant="outline" size="sm" className="mt-3 w-full">View Details</Button>
                </div>
                
                <div className="border rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">HealthBlock Systems</h4>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2.5 py-0.5 rounded-full">Friday</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> 
                    11:00 AM - 12:00 PM
                  </p>
                  <p className="text-sm mt-2">Follow-up on blockchain healthcare solution</p>
                  <Button variant="outline" size="sm" className="mt-3 w-full">View Details</Button>
                </div>
                
                <Button variant="outline" className="w-full">View All Meetings</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Recommendations</CardTitle>
                <CardDescription>Pitches that match your investment thesis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium">QuantumAI: Edge Computing Platform</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">AI</span>
                    <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Edge Computing</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">$2.5M • Series A</span>
                    <Button variant="link" size="sm" className="flex items-center p-0">
                      View <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium">SafeGuard: Cybersecurity for SMBs</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Security</span>
                    <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">B2B</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">$1.2M • Seed</span>
                    <Button variant="link" size="sm" className="flex items-center p-0">
                      View <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/pitches">Browse More Pitches</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Investment Thesis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium">Focus Industries</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">SaaS</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">AI/ML</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Cybersecurity</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">FinTech</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Sustainability</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium">Investment Range</h4>
                    <p className="text-sm mt-1">$250K - $2M</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium">Preferred Stages</h4>
                    <p className="text-sm mt-1">Seed, Series A</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="mt-2">Edit Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;

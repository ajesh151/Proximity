import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";
import { 
  TrendingUp, 
  Users, 
  BarChart3, 
  Lightbulb, 
  Flag,
  Bell,
  MessageSquare, 
  PlusCircle,
  Eye
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const StartupDashboard = () => {
  // Mock data for charts
  const profileViewsData = [
    { name: "Mar 1", views: 10 },
    { name: "Mar 5", views: 25 },
    { name: "Mar 10", views: 15 },
    { name: "Mar 15", views: 30 },
    { name: "Mar 20", views: 22 },
    { name: "Mar 25", views: 45 },
    { name: "Mar 30", views: 52 },
  ];

  const pitchPerformanceData = [
    { name: "EcoTrack Analytics", views: 182, interests: 24 },
    { name: "Supply Chain Solution", views: 94, interests: 12 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Startup Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, GreenPath Solutions
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
            <Button className="flex items-center gap-1" asChild>
              <Link to="/pitches/create">
                <PlusCircle className="h-4 w-4" /> Create New Pitch
              </Link>
            </Button>
            <Button variant="outline" className="flex items-center gap-1" asChild>
              <Link to="/profile/org1">
                <Eye className="h-4 w-4" /> View Public Profile
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Key metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Profile Views</p>
                  <p className="text-2xl font-bold">327</p>
                  <p className="text-green-600 text-xs">+15% this week</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Pitch Views</p>
                  <p className="text-2xl font-bold">276</p>
                  <p className="text-green-600 text-xs">+24% this week</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Interests</p>
                  <p className="text-2xl font-bold">36</p>
                  <p className="text-green-600 text-xs">+8% this week</p>
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
                  <p className="text-muted-foreground text-sm">Meeting Requests</p>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-green-600 text-xs">+3 new</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Performance</CardTitle>
                <CardDescription>Profile and pitch views over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ChartContainer
                    className="h-64"
                    config={{
                      views: { color: "hsl(215 100% 50%)" }
                    }}
                  >
                    {(props) => (
                      <ResponsiveContainer>
                        <LineChart data={profileViewsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="views" stroke="var(--color-views)" />
                        </LineChart>
                      </ResponsiveContainer>
                    )}
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Pitch Performance</CardTitle>
                <CardDescription>How your pitches are performing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pitchPerformanceData.map((pitch, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{pitch.name}</h3>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/pitches/${index + 1}`}>View Details</Link>
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 text-muted-foreground mr-2" />
                          <div>
                            <span className="font-medium">{pitch.views}</span>{" "}
                            <span className="text-sm text-muted-foreground">views</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 text-muted-foreground mr-2" />
                          <div>
                            <span className="font-medium">{pitch.interests}</span>{" "}
                            <span className="text-sm text-muted-foreground">interests</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button asChild>
                    <Link to="/pitches/create">Create Another Pitch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5" /> Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-3 py-2">
                  <p className="font-medium">BlueOcean Capital viewed your pitch</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
                <div className="border-l-4 border-primary pl-3 py-2">
                  <p className="font-medium">New comment on EcoTrack Analytics</p>
                  <p className="text-sm text-muted-foreground">Yesterday</p>
                </div>
                <div className="border-l-4 border-primary pl-3 py-2">
                  <p className="font-medium">Meeting request from Tech Ventures</p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
                <Button variant="outline" className="w-full">View All Notifications</Button>
              </CardContent>
            </Card>
            
            {/* Pitch Assistant */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" /> Pitch Assistant
                </CardTitle>
                <CardDescription>AI-powered pitch improvement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg">
                  <h4 className="font-medium mb-2">Suggestions for "EcoTrack Analytics"</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Flag className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                      <span>Add more specific metrics about environmental impact</span>
                    </li>
                    <li className="flex items-start">
                      <Flag className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                      <span>Include customer testimonials to strengthen credibility</span>
                    </li>
                    <li className="flex items-start">
                      <Flag className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                      <span>Clarify your competitive advantage section</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full">Get Full Pitch Analysis</Button>
              </CardContent>
            </Card>
            
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Pitch Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium">Tech Innovators Pitch Day</h4>
                  <p className="text-sm text-muted-foreground mt-1">May 25, 2025 • 1:00 PM</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs">120/150 spots filled</span>
                    <Button size="sm" variant="outline">RSVP</Button>
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium">Sustainable Startups Showcase</h4>
                  <p className="text-sm text-muted-foreground mt-1">June 10, 2025 • 3:00 PM</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs">84/100 spots filled</span>
                    <Button size="sm" variant="outline">RSVP</Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/events">View All Events</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDashboard;

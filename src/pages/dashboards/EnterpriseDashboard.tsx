
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, MessageSquare, Users, Clock, BookmarkPlus } from "lucide-react";

const EnterpriseDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Enterprise Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Enterprise Solutions Inc.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left sidebar - Filters */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Discovery Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  className="w-full pl-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                  placeholder="Search pitches and businesses" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Industry Focus</label>
                <select className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="">All Industries</option>
                  <option value="tech">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="fintech">Fintech</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Pitch Stage</label>
                <select className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="">All Stages</option>
                  <option value="seed">Seed</option>
                  <option value="seriesA">Series A</option>
                  <option value="seriesB">Series B</option>
                  <option value="growth">Growth</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Partnership Type</label>
                <select className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="">All Types</option>
                  <option value="investment">Investment</option>
                  <option value="strategic">Strategic Partnership</option>
                  <option value="client">Client/Vendor</option>
                  <option value="acquisition">Acquisition Target</option>
                </select>
              </div>
              
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
          
          {/* Main content - Recommended Pitches */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Based on your industry and interests, here are some pitches you might find interesting.
                </p>
                
                <div className="space-y-4 mt-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-lg">EcoTrack: Sustainable Supply Chain Analytics</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Supply chain analytics platform with sustainability tracking
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <BookmarkPlus className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">SaaS</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Sustainability</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Supply Chain</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm">$500,000 • Seed Round</div>
                      <Button asChild size="sm">
                        <Link to="/pitches/1">View Pitch</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-lg">MedSecure: Blockchain for Healthcare Data</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Secure healthcare data management with blockchain technology
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <BookmarkPlus className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Healthcare</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Blockchain</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full">Data Security</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm">$1,500,000 • Series A</div>
                      <Button asChild size="sm">
                        <Link to="/pitches/2">View Pitch</Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/pitches">Browse All Pitches</Link>
                </Button>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                        <div>
                          <p className="font-medium">GreenPath Solutions</p>
                          <p className="text-sm text-muted-foreground">Sustainability</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" /> Message
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                        <div>
                          <p className="font-medium">DataFlow Systems</p>
                          <p className="text-sm text-muted-foreground">Data Analytics</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" /> Message
                      </Button>
                    </div>
                  </div>
                  
                  <Button variant="link" className="mt-4 w-full" asChild>
                    <Link to="/connections">View All Connections</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">Tech Innovators Pitch Day</h4>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-1" /> 
                        May 25, 2025 • 1:00 PM
                      </p>
                      <div className="flex text-sm items-center justify-between mt-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>120/150</span>
                        </div>
                        <Button size="sm">RSVP</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium">Enterprise Partner Meetup</h4>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-1" /> 
                        June 15, 2025 • 2:30 PM
                      </p>
                      <div className="flex text-sm items-center justify-between mt-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>45/75</span>
                        </div>
                        <Button size="sm">RSVP</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;

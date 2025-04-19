import { useState } from "react";
import { Link } from "react-router-dom";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Users, Clock, PlusCircle } from "lucide-react";

const StartupDashboard = () => {
  const [events, setEvents] = useState([
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
  ]);

  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Startup Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, EcoTrack Solutions
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left sidebar - Quick Actions */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" asChild>
                <Link to="/pitches/create">
                  <PlusCircle className="h-4 w-4 mr-2" /> Create New Pitch
                </Link>
              </Button>
              <Button className="w-full" variant="outline">
                Update Profile
              </Button>
              <Button className="w-full" variant="outline">
                View Analytics
              </Button>
            </CardContent>
          </Card>
          
          {/* Main content - Performance Overview */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
                </ResponsiveContainer>
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
                    {events.map(event => (
                      <div key={event.id} className="border rounded-lg p-3">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="h-4 w-4 mr-1" /> 
                          {event.date.toLocaleDateString()} • {event.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                        <div className="flex text-sm items-center justify-between mt-2">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{event.attendees}/{event.maxAttendees}</span>
                          </div>
                          <Button size="sm">RSVP</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="link" className="mt-4 w-full" asChild>
                    <Link to="/events">View All Events</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDashboard;

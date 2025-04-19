
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, Users, Video } from "lucide-react";

const PitchEvent = () => {
  const { id } = useParams<{ id: string }>();
  const [isRSVPed, setIsRSVPed] = useState(false);
  
  // Mock event data - in a real app, you'd fetch this based on the ID
  const event = {
    id: id || "1",
    title: "Tech Innovators Pitch Day",
    description: "Join us for an exciting pitch event featuring the most promising startups in the tech sector. Investors and enterprises will have the opportunity to hear innovative ideas and connect with founders.",
    organizerId: "org5",
    organizer: {
      name: "TechVentures Capital",
      logo: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    date: new Date("2025-05-25T13:00:00"),
    duration: 120, // minutes
    maxAttendees: 150,
    currentAttendees: 120,
    location: "Virtual Event",
    videoUrl: "https://example.com/live-event",
    status: "upcoming",
    industries: ["SaaS", "AI/ML", "FinTech", "Cybersecurity"],
    pitches: [
      {
        id: "p1",
        title: "EcoTrack: Sustainable Supply Chain Analytics",
        company: "GreenPath Solutions",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250&h=250&fit=crop",
        presenter: "Sarah Johnson",
        time: "1:15 PM - 1:30 PM"
      },
      {
        id: "p2",
        title: "MedSecure: Blockchain for Healthcare Data",
        company: "HealthBlock Systems",
        logo: "https://randomuser.me/api/portraits/men/22.jpg",
        presenter: "David Chen",
        time: "1:30 PM - 1:45 PM"
      },
      {
        id: "p3",
        title: "QuantumAI: Edge Computing Platform",
        company: "Quantum Systems",
        logo: "https://randomuser.me/api/portraits/women/28.jpg",
        presenter: "Maria Rodriguez",
        time: "1:45 PM - 2:00 PM"
      }
    ]
  };
  
  const handleRSVP = () => {
    setIsRSVPed(!isRSVPed);
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="p-6 bg-primary/5 rounded-t-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{event.title}</h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{formatDate(event.date)}, {formatTime(event.date)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant={isRSVPed ? "secondary" : "default"} 
                    size="lg" 
                    onClick={handleRSVP}
                  >
                    {isRSVPed ? "Cancel RSVP" : "RSVP Now"}
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="px-2 py-1">
                    <Video className="h-3 w-3 mr-1" /> {event.status === "upcoming" ? "Virtual Event" : event.status === "live" ? "Live Now" : "Ended"}
                  </Badge>
                  {event.industries.map((industry, i) => (
                    <Badge variant="outline" key={i}>{industry}</Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">About This Event</h2>
                  <p className="whitespace-pre-line">{event.description}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Featured Pitches</h2>
                  <div className="space-y-4">
                    {event.pitches.map((pitch) => (
                      <div key={pitch.id} className="flex gap-4 p-4 border rounded-lg">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={pitch.logo} alt={pitch.company} />
                          <AvatarFallback>{pitch.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{pitch.title}</h3>
                              <p className="text-sm text-muted-foreground">{pitch.company}</p>
                            </div>
                            <span className="text-xs text-muted-foreground">{pitch.time}</span>
                          </div>
                          <p className="text-sm mt-1">Presenter: {pitch.presenter}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {event.status === "upcoming" && (
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">How to Join</h3>
                    <p className="text-sm">A link to join this virtual event will be shared with registered participants 30 minutes before the event starts.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Event Details</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Date and Time</p>
                    <p className="text-sm text-muted-foreground">{formatDate(event.date)}</p>
                    <p className="text-sm text-muted-foreground">{formatTime(event.date)} - {formatTime(new Date(event.date.getTime() + event.duration * 60000))}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{event.duration} minutes</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Attendees</p>
                    <p className="text-sm text-muted-foreground">{event.currentAttendees} / {event.maxAttendees} spots filled</p>
                    <div className="w-full bg-secondary h-2 rounded-full mt-1">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Hosted By</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={event.organizer.logo} alt={event.organizer.name} />
                    <AvatarFallback>{event.organizer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{event.organizer.name}</h4>
                    <p className="text-sm text-muted-foreground">Event Organizer</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  View Organizer Profile
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Share This Event</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">Email</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchEvent;

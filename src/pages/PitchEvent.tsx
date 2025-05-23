import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PitchItem } from "@/components/pitch/PitchItem";
import { EventHeader } from "@/components/pitch/EventHeader";
import { EventSidebar } from "@/components/pitch/EventSidebar";

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
                <EventHeader 
                  title={event.title}
                  date={event.date}
                  isRSVPed={isRSVPed}
                  onRSVP={handleRSVP}
                  status={event.status}
                  industries={event.industries}
                  formatDate={formatDate}
                  formatTime={formatTime}
                />
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
                      <PitchItem key={pitch.id} pitch={pitch} />
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
          <EventSidebar 
            event={event}
            formatDate={formatDate}
            formatTime={formatTime}
          />
        </div>
      </div>
    </div>
  );
};

export default PitchEvent;

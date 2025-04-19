
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface EventSidebarProps {
  event: {
    date: Date;
    duration: number;
    location: string;
    maxAttendees: number;
    currentAttendees: number;
    organizer: {
      name: string;
      logo: string;
    };
  };
  formatDate: (date: Date) => string;
  formatTime: (date: Date) => string;
}

export const EventSidebar = ({ event, formatDate, formatTime }: EventSidebarProps) => {
  return (
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
  );
};

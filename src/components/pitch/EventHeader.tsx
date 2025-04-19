
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Video } from "lucide-react";

interface EventHeaderProps {
  title: string;
  date: Date;
  isRSVPed: boolean;
  onRSVP: () => void;
  status: string;
  industries: string[];
  formatDate: (date: Date) => string;
  formatTime: (date: Date) => string;
}

export const EventHeader = ({ 
  title, 
  date, 
  isRSVPed, 
  onRSVP, 
  status, 
  industries,
  formatDate,
  formatTime 
}: EventHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex items-center gap-2 mt-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDate(date)}, {formatTime(date)}</span>
        </div>
      </div>
      
      <Button 
        variant={isRSVPed ? "secondary" : "default"} 
        size="lg" 
        onClick={onRSVP}
      >
        {isRSVPed ? "Cancel RSVP" : "RSVP Now"}
      </Button>
      
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge variant="secondary" className="px-2 py-1">
          <Video className="h-3 w-3 mr-1" /> 
          {status === "upcoming" ? "Virtual Event" : status === "live" ? "Live Now" : "Ended"}
        </Badge>
        {industries.map((industry, i) => (
          <Badge variant="outline" key={i}>{industry}</Badge>
        ))}
      </div>
    </div>
  );
};

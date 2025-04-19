
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PitchItemProps {
  pitch: {
    id: string;
    title: string;
    company: string;
    logo: string;
    presenter: string;
    time: string;
  };
}

export const PitchItem = ({ pitch }: PitchItemProps) => {
  return (
    <div className="flex gap-4 p-4 border rounded-lg">
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
  );
};

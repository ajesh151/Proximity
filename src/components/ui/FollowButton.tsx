
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FollowButtonProps {
  organizationId: string;
  initialFollowed?: boolean;
}

export const FollowButton = ({ organizationId, initialFollowed = false }: FollowButtonProps) => {
  const [isFollowed, setIsFollowed] = useState(initialFollowed);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsFollowed(!isFollowed);
      toast({
        title: isFollowed ? "Unfollowed" : "Followed",
        description: isFollowed 
          ? "You have unfollowed this organization" 
          : "You are now following this organization"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update follow status",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleFollow}
      variant={isFollowed ? "outline" : "default"}
      disabled={isLoading}
      className={isFollowed ? "border-proximity-500 text-proximity-500" : ""}
    >
      {isFollowed ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Following
        </>
      ) : (
        <>
          <UserPlus className="mr-2 h-4 w-4" />
          Follow
        </>
      )}
    </Button>
  );
};
